import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router'
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { authentication } from '../../firebase'
import { userState } from '../../recoil/userState'

export default function Login() {
    const setUser = useSetRecoilState(userState)
    const router = useRouter()

    const loginWithFirebase = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(authentication, provider)
            .then((re: any) => {
                router.push('/notes')
                setUser(re._tokenResponse)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="auth">
            <button className="auth__btn" onClick={loginWithFirebase}>
                <img
                    className="auth__btn--icon"
                    src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                    alt="google icon"
                />
                <span className="auth__btn--text"> Continue with Google</span>
            </button>
        </div>
    )
}
