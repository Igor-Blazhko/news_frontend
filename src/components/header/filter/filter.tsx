
import { useRef } from 'react'
import styles from './filter.module.css'
import { useDispatch } from 'react-redux'
import { Filter as filteres } from '../../../types';

export default function Filter(){
    const selector = useRef(null)

    const dispatch = useDispatch()

    function changeFilter(event:React.ChangeEvent<HTMLInputElement>){
        if (selector.current)
        dispatch({
            type:'Filter',
            buffer: event.target.value,
            typeFilter: selector.current.value,
        })
    }


    return (
            <div className={styles.filter}>
                <input type="text" placeholder="Поиск по тегам" onChange={changeFilter}/>
                <select name="typeFilter" defaultValue="option0" className={styles.filter_select} ref={selector}>
                    <option value={filteres.All} > {filteres.All} </option>
                    <option value={filteres.Title} > {filteres.Title} </option>
                    <option value={filteres.Tags} > {filteres.Tags} </option>
                    <option value={filteres.User} > {filteres.User} </option>
                </select>
            </div>
    )
}