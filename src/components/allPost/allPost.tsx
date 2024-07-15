import OnePost from "./onePost/onePost";
import styles from './allPost.module.css'
import { useEffect, useState } from "react";
import { Posts } from "../pageOnePost/types/types";
import { useSelector } from "react-redux";
import { States } from "../../store";
import SERVER from "../../dataServer";


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
        getAllNews()
    },[])

    async function getAllNews(){
        const response = await fetch(SERVER.GET.allNews);
        const posts = await response.json();
        setPosts(posts);
        return posts
    }
    return(
        <main className={styles.main}>
            { 
                posts
                    .filter( (item) => filter[0]? item.tags
                                                            .some( (tag) => new Set(filter).has(tag.nametag)): true) 
                                                        
                    .filter( (item) => userfilter? item.author.id === userfilter : true)
                    .map( (post:Posts) => 
                    <OnePost id = {post.id} title={post.article} text = {post.text} key={post.id} tags={post.tags} author = {post.author}></OnePost>
                )
            }
        </main>
    )
}