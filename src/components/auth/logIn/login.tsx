import styles from './login.module.css'
import Button from '../../simplyComponents/button/button'

export default function LogIn(){
    return (
        <main>
            <a href="/">
                <Button>Назад</Button>
            </a>
        
            <form className={styles.auth_form}>
                <h2>Авторизация</h2>
                <input type="text" placeholder="Логин"/>
                <input type="password" placeholder="Пароль"/>
                <Button>Войти</Button>
            </form>
        </main>
    )
}
