import { Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'

type TProps = {
    className: string
    handleNote: Function
}

export default function AddNotes(props: TProps) {
    const [visible, setVisible] = useState<boolean>(false)
    const [valueNote, setValueNote] = useState<{ title: string; desc: string }>({
        title: '',
        desc: '',
    })

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            {visible ? (
                <Grid className={`${props.className}-add-note`} item xs={4}>
                    <Stack>
                        <input
                            type="text"
                            placeholder="Tiêu đề"
                            onChange={(e) => setValueNote({ ...valueNote, title: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Nội dung ghi chú"
                            onChange={(e) => setValueNote({ ...valueNote, desc: e.target.value })}
                            onBlur={() => {
                                props.handleNote(valueNote, 'add')
                                setVisible(!visible)
                            }}
                        />
                        <div className="row">
                            <button onClick={() => setVisible(!visible)}>Đóng</button>
                        </div>
                    </Stack>
                </Grid>
            ) : (
                <Grid
                    className={`${props.className}-add-note-d`}
                    item
                    xs={4}
                    onClick={() => setVisible(!visible)}
                    alignItems="center"
                >
                    Tạo ghi chú
                    <div>
                        <span>
                            <CheckBoxOutlinedIcon />
                        </span>
                        <span>
                            <InsertPhotoOutlinedIcon />
                        </span>
                    </div>
                </Grid>
            )}
        </Grid>
    )
}
