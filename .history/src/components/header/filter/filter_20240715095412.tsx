
import { useState } from 'react'
import { User } from '../../pageOnePost/types/types'
import styles from './header.module.css'
import { useDispatch } from 'react-redux'

export default function Filter(){
    const [users, setUsers] = useState([ {
        id: 1,
        name: 'igor',
        sername: 'Blazhko',
        login: 'user1',
    }])
    const [change, setChange] = useState(false)
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
        // setLog(JWT)
    },[])
    
    function changeUser(event) {
        dispatch({
            type:'setUserFilter',
            userId: +event.target.value,
        })
        if ( +event.target.value ) setChange(true)
        else setChange(false)
    }

    return (
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
    )
}