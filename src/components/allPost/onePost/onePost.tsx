import { Link } from 'react-router-dom'
import { Page } from '../../../types'
import styles from './onePost.module.css'
import Button from '../../simplyComponents/button/button'
import { Posts} from '../../pageOnePost/types/types'

export default function OnePost({tags, author, article, text, id, createdAt}:Posts){
    return (
            <div className={styles.post}>
                <div className={styles.tag}>
                    <div className={styles.tag_tag}>
                        <div className={styles.tag_title}>Теги:</div>
                        <div className={styles.tag_name}>
                            { tags.map( (item) => <span key={item.id+item.nametag}>{item.nametag} </span> ) }
                        </div>
                    </div>
                    
                    <div className={styles.tag_name}>
                        Создан: {author.login} {createdAt} 
                    </div>
                </div>
                <div className={styles.post_content}>
                        <h2 className={styles.post_title}>
                            {article}
                        </h2>
                        <p className={styles.post_text}>
                            {text}
                        </p>
                </div>
                <Link to = {Page.OnePost + '/' + id}>
                    <Button>Читать далее</Button>
                </Link>
            </div>
    )
}