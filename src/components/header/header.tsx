
import { Link } from 'react-router-dom';
import { Page } from '../../types';
import Button from '../simplyComponents/button/button';
import styles from './header.module.css'
import { ReactEventHandler, useEffect, useState } from 'react';
import { User } from '../pageOnePost/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { States } from '../../store';


export default function Header() {
    const [users, setUsers] = useState([ {
        id: 1,
        name: 'igor',
        sername: 'Blazhko',
        login: 'user1',
    }])

    const filter = useSelector( (state:States) => state.tagfilter)
    const dispatch = useDispatch()
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
        setUsers(users);
    },[])

    function changeFilter(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({
            type:'Filter',
            buffer: event.target.value,
        })
    }

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
                <input type="text" placeholder="Поиск по тегам" onChange={changeFilter}/>
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