
import { Link } from 'react-router-dom';
import { Page } from '../../types';
import Button from '../simplyComponents/button/button';
import styles from './header.module.css'
import { useEffect, useState } from 'react';
import { User } from '../pageOnePost/types/types';

export default function Header() {
    const [users, setUsers] = useState([ {
        id: 1,
        name: 'igor',
        sername: 'Blazhko',
        login: 'user1',
    }])

    useEffect(() => {
        const users = [
            {
                id: 1,
                name: 'igor',
                sername: 'Blazhko',
                login: 'user1',
            },
            {
                id: 2,
                name: 'igor',
                sername: 'Tokin',
                login: 'user2',
            },
            {
                id: 3,
                name: 'igor',
                sername: 'Lankin',
                login: 'user3',
            },
        ];
        setUsers(users)
    },[])

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                News
            </div>
            <nav>
                <Link to="">
                    <Button>Main</Button>
                </Link>
            </nav>
            <div className={styles.filter}>
                <input type="text" placeholder="Поиск по тегам"/>
                <select>
                    <option value="" disabled>Выберите пользователя</option>
                    { 
                        users.map((user:User)=> <option key = {user.id} value={user.id}>{user.name} {user.sername}</option>)
                    }
                </select>
                </div>
            <div className="auth">
                <Link to={Page.LogIn}>
                    <Button>LogIn</Button>
                </Link>
                <Link to={Page.SignIn}>
                    <Button>SignIn</Button>
                </Link>
            </div>
        </header>
    )
} 