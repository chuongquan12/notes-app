import { Grid } from '@mui/material'
import React from 'react'
import styles from '../../styles/header.module.scss'

const urlImage = 'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'
type IProps = {}

const Logo = (props: IProps) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={styles.headerLogo}
        >
            <img src={urlImage} alt="Logo" />
            <span>Keep</span>
        </Grid>
    )
}

export default Logo
