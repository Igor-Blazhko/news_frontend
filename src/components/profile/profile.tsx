import { useMutation, useQuery, useQueryClient } from "react-query"
import SERVER from "../../dataServer"
import { useDispatch, useSelector } from "react-redux"
import { States } from "../../store"
import styles from './profile.module.css'
import Button from "../simplyComponents/button/button"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Filter, Page } from "../../types"

const ALTIMG = "https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?w=826&t=st=1721203707~exp=1721204307~hmac=9c4b8ecb7cf0b8644e344d5dbdffd283908c1689e303073a5941890e5103fe7a"

export default function Profile( ){
    const queryClient = useQueryClient()
    const {data, isError, isLoading} = useQuery('user', getUser)
    const mutation = useMutation( (data:FormData) => patchUser(data), {
        onSuccess: () => queryClient.invalidateQueries(['user'])
    })
    const JWT = useSelector( (state:States) => state.JWT)

    const inpName = useRef(null)
    const inpSerName = useRef(null)
    const [file, setFile] = useState()
    const [editStatus, setEditStatus] = useState(false)

    const navitage = useNavigate()
    const disaptch = useDispatch()

    const initial = getId(location.pathname)
    function getId(path: string ): number {
        const id = +path.slice(path.lastIndexOf('/')+1 )
        return id
    }
    
    async function getUser(){
        let url = SERVER.GET.myProfile;
        if (initial) url = SERVER.GET.user(initial)
        const response = await fetch(url ,{
            headers:{
                'Authorization': `Bearer ${JWT}`
            }
        })
        let user = await response.json()
        const response2 = await fetch(SERVER.GET.img(user.avatarId) ,{
            headers:{
                'Authorization': `Bearer ${JWT}`
            }
        })
        const img = await response2.json()
        user = {
            ...user,
            imgPath: img.path
        }
        return user
    }

    function showNewsPage(){
        disaptch({
            type:'Filter',
            buffer:data.login,
            typeFilter: Filter.User,
        })
        navitage('/'+Page.AllPost);
    }

    function saveUser() {
        if (!(inpName.current && inpSerName.current)) return
        const formData = new FormData();
        formData.append('img', file);
        formData.append('name', inpName.current.value);
        formData.append('sername', inpSerName.current.value);
        mutation.mutate(formData)
        setEditStatus( (prev) => !prev)
    }

    async function patchUser(body:FormData) {
        fetch(SERVER.PATCH.user, {
            method: 'PATCH',
            headers:{
                'Authorization': `Bearer ${JWT}`
            },
            body,
        })
    }

    function openEdit() {
        setEditStatus( (prev) => !prev)
    }

    function changeFile(event){
        setFile(event.target.files[0])
    }

    if (isLoading) return (<main> Загрузка ...</main>)
    if (isError) return( <main> {data.message} </main>)
    if(!data) return (<main> Нет пользователя -_- </main>)
    return (
        <main>
            <div className={styles.profile}>
            {editStatus && <section className={styles.profile}>
                <div className={file? styles.input_img_active:styles.input_img}>
                    {file && <img src={file}></img>}
                    <input type="file" name="img"  onDrop={changeFile} onChange={changeFile}/>
                </div>
                <div>{file && `Загружен: ${file.name}`}</div>
                <div className={styles.info}>
                    <div className={styles.login}><span>Логин:</span> {data.login}</div>
                    <div className={styles.login}><span>Имя:</span> 
                        <input type="text" ref={inpName} defaultValue={data.name}/>
                    </div>
                    <div className={styles.login}><span>Фамилия:</span> 
                        <input type="text" ref={inpSerName} defaultValue={data.sername}/>
                    </div>
                </div>
                
            </section>}
            {!editStatus && <section className={styles.profile}>
                <img src={data.imgPath? SERVER.base+data.imgPath:ALTIMG} 
                    alt="Not img" className={styles.image}/>
                <div className={styles.info}>
                    <div className={styles.login}>Логин: {data.login}</div>
                    <div className={styles.login}>Имя: {data.name}</div>
                    <div className={styles.login}>Фамилия: {data.sername}</div>
                </div>
                
            </section>}
            <nav className={styles.profile}>
                <ul className={styles.profile}>
                    <li className={styles.profile}>
                        {editStatus? 
                        <div className={styles.btn_editprofile}>
                            <Button onClick={saveUser}> Сохранить </Button>
                            <Button onClick={() => setEditStatus( (prev) => !prev) }> Отмена </Button>
                        </div>
                        :
                        <div className={styles.btn_editprofile}>
                            {!initial && <Button onClick={openEdit}> Редактировать Профиль </Button>}
                        </div>
                        }
                    </li>
                    <li className={styles.profile}>
                        <Button onClick={showNewsPage}> Показать новости пользователя </Button>
                    </li>
                </ul>
            </nav>
            </div>
        </main>
    )
}