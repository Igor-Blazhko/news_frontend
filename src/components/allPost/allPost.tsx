import OnePost from "./onePost/onePost";
import styles from './allPost.module.css'
import { Posts } from "../pageOnePost/types/types";
import { useDispatch, useSelector } from "react-redux";
import { States } from "../../store";
import SERVER from "../../dataServer";
import { useQuery } from "react-query";
import ButtonsPagination from "./buttonPagination/buttonPagination";
import { useEffect, useState } from "react";
import { Filter } from "../../types";


export default function AllPost(){
    const filter = useSelector( (state:States) => state.filter)
    const typeFilter = useSelector( (state:States) => state.typeFilter)
    const selPage = useSelector( (state:States) => state.selectedPage)
    const dispatch = useDispatch()
    const {data, isError, isLoading} = useQuery(['posts', selPage, filter], ()=> {
        if (filter) return getAllNewsByFilter(selPage,filter, typeFilter)
        return getAllNews(selPage)
    } ,{
        
    })

    async function getAllNewsByFilter(page:number, filter:string, typeFilter:Filter){
        const response = await fetch(SERVER.GET.allNewsByFiler(page, filter, typeFilter));
        const posts = await response.json();
        return posts
    }

    async function getAllNews(page:number){
        const response = await fetch(SERVER.GET.allNewsByPage+page);
        const posts = await response.json();
        return posts
    }
    
    if (isError) return (<main> Ошибка сервера </main>)
    if (isLoading) return (<main> Загрузка.. </main>)
    if (!data.posts) return (<main> Постов нет </main>)
    if (!data.posts.length) {
        dispatch({
            type:'setPage',
            setPage: 1,
        })
        return (<main> По фильтру нет данных </main>)
    }
    return(
        <main className={styles.main}>
            <section className={styles.allPost}>
                <div>
                    { data && 
                        data.posts
                            .map( (post:Posts) => <OnePost 
                                key={post.author.login + post.id}
                                id={post.id}
                                article={post.article}
                                text={post.text}
                                tags={post.tags} 
                                author={post.author}
                                createdAt ={post.createdAt.substring(0,10)} 
                                /> )
                    }
                </div>
                    {data.countPage && <ButtonsPagination count={data.countPage}/>}
            </section>
        </main>
    )
}