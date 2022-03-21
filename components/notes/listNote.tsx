import { Grid } from '@mui/material'
import React from 'react'

import { note } from '../../types/global'
import Note from './note'

type TProps = {
    className: string
    handleNote: Function
    notes: Array<note>
}

export default function ListNote(props: TProps) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className={`${props.className}-list`}
            spacing={0.5}
            xs={8}
        >
            {props.notes.length > 0 &&
                props.notes.map((value, index) => {
                    return (
                        <Note
                            handleNote={props.handleNote}
                            key={`note-${index}`}
                            value={value}
                            className={`${props.className}-list__item`}
                        />
                    )
                })}
        </Grid>
    )
}
