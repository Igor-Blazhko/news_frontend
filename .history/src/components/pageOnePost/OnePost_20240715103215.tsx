import { Link, useLocation } from "react-router-dom";
import Button from "../simplyComponents/button/button";
import styles from './OnePost.module.css'
import { lazy, useEffect, useState } from "react";
import Comment from "./comments/comments";
import { Posts } from "./types/types";
import SERVER from "../../dataServer";



export default function Post(){
    const BASE_post:Posts = {
        id: 0,
        article: 'string',
        text: 'string',
        tags: [{nametag:''}],
        author: {
            id: 0,
            login: '',
            name: '',
        },
        image: {
            path: ''
        }
    }
    const location = useLocation()
    const [id , setId] = useState(0)
    const [showingComment , setshowingComment] = useState(false)
    const [post, setPost] = useState( {...BASE_post} )

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
        const url = SERVER.GET.oneNews+id;
        console.log(url)
        const response = await fetch(url);
        const post:Posts = await response.json()
        console.log(post)
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
                <img src={post.image?.path} alt="https://via.placeholder.com/150" className={styles.post_image}/>
                <h2 className={styles.post_title_full}> {post.article}</h2>
                <p className={styles.post_text_full}>
                    {post.text}
                </p>
            </div>

            {showingComment && <Comment id = {id}/>}
            

        </main>
    )
}