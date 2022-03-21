import { Grid } from '@mui/material'
import React from 'react'
import Logo from './logo'
import Search from './search'
import User from './user'

import styles from '../../styles/header.module.scss'

export default function Header({ onSearch }) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={styles.header}
        >
            <Grid item xs={4}>
                <Logo />
            </Grid>
            <Grid item xs={4}>
                <Search onSearch={onSearch} />
            </Grid>
            <Grid item xs={4}>
                <User />
            </Grid>
        </Grid>
    )
}
