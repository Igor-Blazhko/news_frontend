import Button from "../simplyComponents/button/button";
import styles from './OnePost.module.css'

interface props {
    id:number,
}
export default function Post({ id }:props){
    
    return (
        <main>
            <a href="/">
                <Button>Назад</Button>
            </a>
            <a href="#comments">
                <Button>Показать комментарий</Button>
            </a>

            <div className={styles.post_content_full}>
            <img src="https://via.placeholder.com/150" alt="Post Image" className={styles.post_image}/>
            <h2 className={styles.post_title_full}>Заголовок поста {id}</h2>
            <p className={styles.post_text_full}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo et maximus tristique. Integer id ligula quis tortor maximus viverra. Maecenas luctus, purus eget tempus tincidunt, augue libero mollis eros, ut varius eros sem at mauris.
            </p>
            </div>

            <section className={styles.comments} id="comments">
            <h3>Комментарии</h3>
            <div className={styles.comment}>
                <p>Комментарий 1</p>
            </div>
            <div className={styles.comment}>
                <p>Комментарий 2</p>
            </div>
            <form action="" className={styles.comment_form}>
                <textarea name="comment" id="comment" placeholder="Оставьте ваш комментарий" required></textarea>
                <button type="submit">Отправить</button>
            </form>
            </section>
        </main>
    )
}