import styles from './login.module.css'
import Button from '../../simplyComponents/button/button'
import { Link } from 'react-router-dom'

export default function LogIn(){
    return (
        <main>
                <Link to="/">
                    <Button>Назад</Button>
                </Link>
        
            <form className={styles.auth_form}>
                <h2>Авторизация</h2>
                <input type="text" placeholder="Логин"/>
                <input type="password" placeholder="Пароль"/>
                <Button>Войти</Button>
            </form>
        </main>
    )
}
