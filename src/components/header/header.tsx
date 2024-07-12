
import { Page } from '../../types';
import Button from '../simplyComponents/button/button';
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                News
            </div>
            <nav>
                <a href="/"><Button>Main</Button></a>
            </nav>
            <div className={styles.filter}>
                <input type="text" placeholder="Поиск по тегам"/>
                <select>
                    <option value="" disabled>Выберите пользователя</option>
                    <option value="1">Igor Blazhko</option><option value="2">Igor Lankin</option><option value="3">Igor Tokin</option>
                </select>
                </div>
            <div className="auth">
                <a href={Page.LogIn}><Button>LogIn</Button></a>
                <a href={Page.SignIn}><Button>SignIn</Button></a>
            </div>
        </header>
    )
} 