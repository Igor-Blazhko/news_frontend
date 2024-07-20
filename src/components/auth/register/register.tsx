
import { Link, redirect, useNavigate } from "react-router-dom";
import Button from "../../simplyComponents/button/button";
import styles from '../logIn/login.module.css'
import { useRef, useState } from "react";
import SERVER from "../../../dataServer";
import { User } from "../../pageOnePost/types/types";
import { useDispatch, useSelector } from "react-redux";
import { States } from "../../../store";
import { HTTPExeption, ObjectToken, Page } from "../../../types";
import cooks from "../../../basefunction";

export default function SignIn(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        login: '',
        password: '',
        name: '',
        sername: '',
    })
    const [valid , setValid] = useState(true)
    const inpLogin = useRef()
    const inpPass = useRef()
    const inpPassAccept = useRef()
    const inpName = useRef()
    const inpSername = useRef()
    const [error, setError] = useState({
        response:'',
        status:200,
        message:'',
        name:''
    })

    const JWTToken = useSelector((state:States) => state.JWT)
    const dispatch = useDispatch()

    function createRequest(event){ 
        event.preventDefault()
        if ((inpLogin.current) && (inpPass.current) && 
                (inpName.current) && (inpSername.current) && 
                (inpPassAccept.current) && 
                (inpPass.current.value === inpPassAccept.current.value) && valid )
            {
                setUser(() => {
                    return {
                        login: inpLogin.current.value,
                        password: inpPass.current.value,
                        name: inpName.current.value,
                        sername: inpSername.current.value,
                    }
                });
            sendUser({
                login: inpLogin.current.value,
                password: inpPass.current.value,
                name: inpName.current.value,
                sername: inpSername.current.value,
            }); 
        }
        
    }

    function validation(){
        if (inpPass.current.value !== inpPassAccept.current.value) setValid(false)
            else setValid(true)
    }

    async function sendUser(body:Omit<User, 'id'>){
        const response = await fetch(SERVER.POST.register,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        if (!(response.ok)) setError(await response.json());

        const objectTokens = await response.json()
        cooks.LogIn(objectTokens['access_token'], objectTokens['refresh_token']);
        navigate('/'+Page.AllPost);
    }
    return (
        <main>
            <Link to="/">
                <Button>Назад</Button>
            </Link>
        <form className={styles.auth_form}>
            <h2>Регистрация</h2>
            <input type="email" placeholder="Логин" ref={inpLogin} required maxLength={20}/>
            <input type="password" placeholder="Пароль" onChange={validation} className= {valid?  '':styles.red} ref={inpPass} required maxLength={20}/>
            <input type="password" placeholder="Повторите пароль" onChange={validation} ref={inpPassAccept} className= {valid?  '':styles.red} required maxLength={20}/>
            <input type="text" placeholder="Имя" ref={inpName} required maxLength={20}/>
            <input type="text" placeholder="Фамилия" ref={inpSername} required maxLength={20}/>
            <button onKeyDown={createRequest} onClick={createRequest} className={styles.button}>Зарегистрироваться</button>
        </form>
        <div>
            {(error.status >=300)? <div>{error.message}</div>: null}
        </div>
        </main>

    )
}