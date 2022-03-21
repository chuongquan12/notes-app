import { Grid } from '@mui/material'
import { db } from '../../firebase'
import { ref, get, set, onValue, remove } from 'firebase/database'

import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import AddNotes from '../../components/notes/addNotes'
import { note } from '../../types/global'
import ListNote from '../../components/notes/listNote'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { noteListState } from '../../recoil/noteState'
import { userState } from '../../recoil/userState'
import { useRouter } from 'next/router'

export default function Notes() {
    const [notes, setNotes] = useRecoilState(noteListState)
    const user = useRecoilValue(userState)

    const [searchNote, setSearchNote] = useState([])

    const router = useRouter()

    const handleNote = (value: note, type: string) => {
        switch (type) {
            case 'add':
                const id = Date.now()
                if (value.desc !== '') {
                    const data = {
                        id: id,
                        title: value.title,
                        desc: value.desc,
                        pin: false,
                    }
                    set(ref(db, `/notes/${id}`), data)
                }
                break
            case 'edit':
                if (value.desc !== '') {
                    set(ref(db, `/notes/${value.id}`), value)
                }
                break
            case 'delete':
                let newArr = notes.filter((val) => val.id !== value.id)
                setNotes(newArr)
                remove(ref(db, `/notes/${value.id}`))
                break
            default:
                break
        }
    }

    const onSearch = (value: any) => {
        let arrSearch = []

        if (value === '') {
            setSearchNote([])
        } else {
            notes.map((val) => {
                if (val.desc.indexOf(value) !== -1) return arrSearch.push(val)
            })

            setSearchNote(arrSearch)
        }
    }

    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            let arr = []
            const data = snapshot.val()

            if (data !== null) {
                Object.values(data.notes).map((item) => {
                    arr.push(item)
                })

                setNotes(arr)
                arr = []
            }
        })

        if (user.length === 0) {
            router.push('/auth')
        }
    }, [])

    return (
        <div>
            <Header onSearch={onSearch} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                className={`notes`}
                alignItems="center"
            >
                <AddNotes className={`notes`} handleNote={handleNote} />
                <ListNote
                    notes={searchNote.length === 0 ? notes : searchNote}
                    className={`notes`}
                    handleNote={handleNote}
                />
            </Grid>
        </div>
    )
}
