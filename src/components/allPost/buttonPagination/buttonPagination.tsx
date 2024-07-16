import styles from './button.module.css'
import { useDispatch } from "react-redux"

export default function ButtonsPagination({count}:{count:number}){
    const dispatch = useDispatch()
    const array = new Array(count).fill(0)

    function setPage(event){
        dispatch({
            type:'setPage',
            setPage: event.target.textContent
        })
    }
    return (
    <nav className={styles.pagi}>
        {
            array.map( (_, index) => {
                //if ((index<1)||(index>array.length-2))
                return <button className={styles.Btn_pagi} key={index+_} onClick={setPage}>{index+1}</button>
                //else return <>.</>
            })
        }
    </nav>
    )
}
