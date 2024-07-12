
import { Link } from "react-router-dom";
import Button from "../../simplyComponents/button/button";
import styles from '../logIn/login.module.css'

export default function SignIn(){
    return (
        <main>
            <Link to="/">
                <Button>Назад</Button>
            </Link>
        <form className={styles.auth_form}>
            <h2>Регистрация</h2>
            <input type="text" placeholder="Логин" required/>
            <input type="password" placeholder="Пароль" required/>
            <input type="password" placeholder="Повторите пароль" required/>
            <button type="submit">
                <Button>Зарегистрироваться</Button>
            </button>
        </form>
        </main>

    )
}