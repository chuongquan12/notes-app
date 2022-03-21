import { Grid } from '@mui/material'
import React, { useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded'

import { note } from '../../types/global'

type TProps = {
    value: note
    className: string
    handleNote: Function
}

export default function Note(props: TProps) {
    const [value, setValue] = useState<note>(props.value)
    const [onHover, setOnHover] = useState<boolean>(false)

    const onMouseLeave = () => {
        setOnHover(false)
        if (value.title === '' && value.desc === '') setValue(props.value)

        if (value.title === '') setValue({ ...value, title: props.value.title })
        if (value.desc === '') setValue({ ...value, desc: props.value.desc })
    }

    const handleNote = (value: note, type: string) => {
        onMouseLeave()
        props.handleNote(value, type)
    }

    return (
        <Grid
            className={`${props.className}`}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => onMouseLeave()}
            onBlur={() => handleNote(value, 'edit')}
        >
            <Grid item className={`${props.className}--title`}>
                <input
                    value={value.title}
                    type="text"
                    placeholder="Tiêu đề"
                    onChange={(e) => setValue({ ...value, title: e.target.value })}
                />
                {value.pin && (
                    <span
                        className={`${props.className}--btn`}
                        onClick={() => {
                            setValue({ ...value, pin: !value.pin })
                            handleNote({ ...value, pin: !value.pin }, 'edit')
                        }}
                    >
                        <PushPinRoundedIcon />
                    </span>
                )}
                {onHover && !value.pin && (
                    <span
                        className={`${props.className}--btn`}
                        onClick={() => {
                            setValue({ ...value, pin: !value.pin })
                            handleNote({ ...value, pin: !value.pin }, 'edit')
                        }}
                    >
                        <PushPinOutlinedIcon />
                    </span>
                )}
            </Grid>
            <Grid item className={`${props.className}--desc`}>
                <input
                    type="text"
                    value={value.desc}
                    placeholder="Text"
                    onChange={(e) => setValue({ ...value, desc: e.target.value })}
                />
                {onHover && (
                    <span
                        className={`${props.className}--btn`}
                        onClick={() => handleNote(value, 'delete')}
                    >
                        <DeleteOutlineOutlinedIcon />
                    </span>
                )}
            </Grid>
        </Grid>
    )
}
