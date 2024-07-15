import { useDispatch, useSelector } from "react-redux"
import { States } from "../../../store"
import cooks from "../../../basefunction";

export default function ButtonAuth(){   

    const JWT = useSelector( (state:States) => state.JWT);
    const dispatch = useDispatch();

    function LogOut(){
        cooks.LogOut()
        dispatch({
            type: 'DelJwt',
        })
    }

    function refreshStateLog(){
        setLog(()=>cooks.getCookie('JWT_token'))
    }
    
    return (
        <>
        </>
    )
}
