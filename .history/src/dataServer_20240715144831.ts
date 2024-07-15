

const SERVER = {
    base: 'http://192.168.3.37:5000/',
    POST: {
        register: 'http://127.0.0.1:5000/auth/registration',
        login: 'http://127.0.0.1:5000/auth/login',
        comments: {
            createCom: 'http://127.0.0.1:5000/comments',
        }
    },
    GET: {
        allNews: 'http://127.0.0.1:5000/news',
        oneNews: 'http://127.0.0.1:5000/news?id=',
        getAllCommentByPostId: 'http://127.0.0.1:5000/comments?id=',
    }
}
export default SERVER; 