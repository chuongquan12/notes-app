import * as React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { userState } from '../recoil/userState'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    const user = useRecoilValue(userState)

    const router = useRouter()

    React.useEffect(() => {
        if (!user) {
            router.push('/auth')
        } else {
            router.push('/notes')
        }
    }, [])

    return <div className={styles.container}></div>
}

export default Home
