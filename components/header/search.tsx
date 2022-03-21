import { Grid } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import React, { useRef, useState } from 'react'
import styles from '../../styles/header.module.scss'

type IProps = {
    onSearch: Function
}
const Search = (props: IProps) => {
    const [searchValue, setSearchValue] = useState('')
    const tyingTimeOutRef = useRef(null)

    function handleSearch(e: any) {
        const value = e.target.value
        setSearchValue(value)
        if (tyingTimeOutRef.current) {
            clearTimeout(tyingTimeOutRef.current)
        }

        tyingTimeOutRef.current = setTimeout(() => {
            props.onSearch(value)
        }, 300)
    }
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={styles.headerSearch}
        >
            <input type="text" placeholder="Tìm kiếm" onChange={handleSearch} value={searchValue} />
            <span>
                <SearchOutlinedIcon />
            </span>
        </Grid>
    )
}

export default Search
