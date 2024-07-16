import { Filter } from "./types";


const SERVER = {
    base: 'http://127.0.0.1:5000/',
    POST: {
        register: 'http://127.0.0.1:5000/auth/registration',
        login: 'http://127.0.0.1:5000/auth/login',
        comments: {
            createCom: 'http://127.0.0.1:5000/comments',
        },
        News: {
            create: 'http://127.0.0.1:5000/news',
        }
    },
    GET: {
        allNews: 'http://127.0.0.1:5000/news',
        allNewsByPage: 'http://127.0.0.1:5000/news?page=',
        allNewsByFiler: (page:number, filter:string, typeFilter:Filter) => `http://127.0.0.1:5000/news?page=${page}&typeFilter=${typeFilter}&filter=${filter}`,
        countPageNews: 'http://127.0.0.1:5000/news/count',
        oneNews: 'http://127.0.0.1:5000/news?id=',
        getAllCommentByPostId: 'http://127.0.0.1:5000/comments?id=',
    }
}
export default SERVER; 