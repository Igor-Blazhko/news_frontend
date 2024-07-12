import OnePost from "./onePost/onePost";
import styles from './allPost.module.css'
import { useEffect, useState } from "react";
import { Posts } from "../pageOnePost/types/types";
import { useSelector } from "react-redux";
import { States } from "../../store";


export default function AllPost(){
    const [posts, setPosts] = useState([{
        id: 0,
        article: '0 1',
        text: '0 0 1',
        tags: [
            {
                nametag: '0',
            },
        ],
        author: {
            id: 0,
            name: '0',
            sername: '0',
            login: '0',
        }
    }]);
    const filter = useSelector( (state:States) => state.tagfilter)
    const userfilter = useSelector( (state:States) => state.userfilter)
    useEffect(()=>{
        const posts:Posts[] = [
            {
                id: 1,
                article: 'Пост 1',
                text: 'текст поста 1',
                tags: [
                    {
                        nametag: 'tag1',
                    },
                ],
                author: {
                    id: 1,
                    name: 'igor',
                    sername: 'Blazhko',
                    login: 'user1',
                }
            },
            {
                id: 2,
                article: 'Пост 2',
                text: 'текст поста 2',
                tags: [
                    {
                        nametag: 'tag1',
                    },
                    {
                        nametag: 'tag2',
                    },
                ],
                author:{
                    id: 1,
                    name: 'igor',
                    sername: 'Blazhko',
                    login: 'user1',
                }
            },
            {
                id: 3,
                article: 'Пост 3',
                text: 'текст поста 3',
                tags: [
                    {
                        nametag: 'tag3',
                    },
                ],
                author:{
                    id: 1,
                    name: 'igor',
                    sername: 'Blazhko',
                    login: 'user1',
                }
            },
        ]
        setPosts(posts);
    },[])

    return(
        <main className={styles.main}>
            { 
                posts
                    .filter( (item) => item.tags
                                                .find( (tag) => tag.nametag.includes (filter) ))
                    .filter( (item) => userfilter? item.author.id === userfilter : true)
                    .map( (post:Posts) => 
                    <OnePost id = {post.id} title={post.article} text = {post.text} key={post.id} tags={post.tags} author = {post.author}></OnePost>
                )
            }
        </main>
    )
}