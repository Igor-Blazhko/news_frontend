
import { Link } from 'react-router-dom';
import Button from '../simplyComponents/button/button';
import styles from './header.module.css'
import ButtonAuth  from './buttonAuth/buttonAuth';
import Filter from './filter/filter';
import { Page } from '../../types';
import { useDispatch } from 'react-redux';


export default function Header() {
    const dispatch = useDispatch()
        return (
        <header className={styles.header}>
            <div className={styles.logo}>
                News
            </div>
            <nav>
                <Link to="">
                    <Button onClick={ () => dispatch({type:'dropFilter'})}>Главная</Button>
                </Link>
                <Link to={Page.FindUser}>
                    <Button>Поиск пользователей</Button>
                </Link>
            </nav>                
            <Filter/>
            <ButtonAuth/>
        </header>
    )
} 