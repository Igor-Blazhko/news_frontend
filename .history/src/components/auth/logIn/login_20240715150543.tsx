import styles from './login.module.css'
import Button from '../../simplyComponents/button/button'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { User } from '../../pageOnePost/types/types'
import SERVER from '../../../dataServer'
import { useDispatch, useSelector } from 'react-redux'
import { States } from '../../../store'
import { Page } from '../../../types'

export default function LogIn(){
    const navigate = useNavigate();
    const [error, setError] = useState({
        status: 200,
        message: '',
        name: '',
    })
    const inpLogin = useRef()
    const inpPass = useRef()
    const JWT = useSelector( (state:States) => state.JWT)
    const dispatch = useDispatch()
    const locationPath = useSelector( (state:States) => state.location)


    function Log(event){
        event.preventDefault()
        if (!(inpPass.current && inpLogin.current)){
            return
        }
        const body = {
                login: inpLogin.current.value,
                password: inpPass.current.value
        }
       sendUser(body)

    }

    async function sendUser(body) {
        const response = await fetch(SERVER.POST.login, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        const token = await response.json()
        if( 'access_token' in token){
            dispatch({
                type: 'SetJWT',
                JWT: token['access_token'],
            })            
            navigate(locationPath)
        }
        else if ( 'status' in token) 
            setError(token)
    }
    return (
        <main>
                <Link to="/">
                    <Button>Назад</Button>
                </Link>
        
            <form className={styles.auth_form}>
                <h2>Авторизация</h2>
                <input type="text" placeholder="Логин" ref={inpLogin} />
                <input type="password" placeholder="Пароль" ref={inpPass}/>
                <Button onClick={Log}>Войти</Button>
            </form>
            { (error.status>=300)? <div> {error.message} </div>: null }
        </main>
    )
}
