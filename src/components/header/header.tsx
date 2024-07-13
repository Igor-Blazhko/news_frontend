
import { Link } from 'react-router-dom';
import { Page } from '../../types';
import Button from '../simplyComponents/button/button';
import styles from './header.module.css'
import { ChangeEventHandler, ReactEventHandler, useEffect, useState } from 'react';
import { User } from '../pageOnePost/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { States } from '../../store';
import cooks from '../../basefunction';


export default function Header() {
    const [users, setUsers] = useState([ {
        id: 1,
        name: 'igor',
        sername: 'Blazhko',
        login: 'user1',
    }])
    const [change, setChange] = useState(false)
    const [log, setLog] = useState(cooks.getCookie('JWT_token'))

    const filter = useSelector( (state:States) => state.tagfilter)
    const userfilter = useSelector( (state:States) => state.userfilter)
    const JWT = useSelector( (state:States) => state.JWT)
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
    
    function changeUser(event) {
        dispatch({
            type:'setUserFilter',
            userId: +event.target.value,
        })
        if ( +event.target.value ) setChange(true)
        else setChange(false)
    }

    function LogOut(){
        cooks.LogOut()
        setLog(()=>cooks.getCookie('JWT_token'))
    }

    function refreshStateLog(){
        setLog(()=>cooks.getCookie('JWT_token'))
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
                <select onChange={changeUser} defaultValue="option0">
                    <option value="0">
                        { change? 'Cбросить фильтрацию': 'Выберите пользователя'}
                    </option>
                    { 
                        users.map((user:User)=> <option key = {user.id} value={user.id}>{user.name} {user.sername}</option>)
                    }
                </select>
                </div>
                
                { 
                log?  
                <div className="auth">
                    <Button onClick={LogOut}>LogOut</Button>
                </div>:
                <div className="auth">
                    <Link to={Page.LogIn}>
                        <Button onClick={refreshStateLog}>LogIn</Button>
                    </Link>
                    <Link to={Page.SignIn}>
                        <Button onClick={refreshStateLog}>SignIn</Button>
                    </Link>
                </div>
                }
            
        </header>
    )
} 