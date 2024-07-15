
import styles from './header.module.css'

export default function Filter(){

    const dispatch = useDispatch()

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