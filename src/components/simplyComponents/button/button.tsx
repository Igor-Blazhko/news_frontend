import { ReactNode } from 'react'
import styles from './button.module.css'
type Button = {
    text?:string,
    children?:ReactNode
}

export default function Button(props:Button){

    return(
        <button className={styles.button}>{props.children}</button>
    )
}