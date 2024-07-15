
import { Link } from 'react-router-dom';
import Button from '../simplyComponents/button/button';
import styles from './header.module.css'
import ButtonAuth  from './buttonAuth/buttonAuth';
import Filter from './filter/filter';


export default function Header() {
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
            <Filter/>
            <ButtonAuth/>
        </header>
    )
} 