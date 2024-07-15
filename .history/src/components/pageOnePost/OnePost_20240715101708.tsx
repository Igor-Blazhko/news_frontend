import { Link, useLocation } from "react-router-dom";
import Button from "../simplyComponents/button/button";
import styles from './OnePost.module.css'
import { lazy, useEffect, useState } from "react";
import Comment from "./comments/comments";
import { Posts } from "./types/types";
import SERVER from "../../dataServer";



export default function Post(){
    const location = useLocation()
    const [id , setId] = useState(0)
    const [showingComment , setshowingComment] = useState(false)
    const [post, setPost] = useState( { } )

    useEffect(() => {
        const id = getId( location.pathname )
        setId( id )
        getPost( id )
    },[location])

    function getId(path: string ): number {
        const id = +path.slice(path.lastIndexOf('/')+1 )
        return id
    }

    async function getPost(id: number): Promise<void>{
        const response = await fetch(SERVER.GET.oneNews+id);
        const post:Posts = await response.json()
        setPost(post)
    }

    function showComment () {
        setshowingComment(( value ) => !value )
    }
    return (
        <main className={styles.main}>
            <Link to="/">
                <Button>Назад</Button>
            </Link>

            <Button onClick = {showComment}>Показать комментарий</Button>


            <div className={styles.post_content_full}>
            <img src="https://via.placeholder.com/150" alt="Post Image" className={styles.post_image}/>
            <h2 className={styles.post_title_full}>Заголовок поста {id}</h2>
            <p className={styles.post_text_full}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo et maximus tristique. Integer id ligula quis tortor maximus viverra. Maecenas luctus, purus eget tempus tincidunt, augue libero mollis eros, ut varius eros sem at mauris.
            </p>
            </div>

            {showingComment && <Comment id = {id}/>}
            

        </main>
    )
}