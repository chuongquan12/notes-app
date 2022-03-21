import { Avatar, Grid } from '@mui/material'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../../recoil/userState'
import styles from '../../styles/header.module.scss'

type IProps = {}
const User = (props: IProps) => {
    const user = useRecoilValue(userState)

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={styles.headerUser}
        >
            {user.displayName && (
                <>
                    <span>{user.displayName || ''}</span>
                    <Avatar>{user.displayName.slice(0, 1) || ''}</Avatar>
                </>
            )}
        </Grid>
    )
}

export default User
