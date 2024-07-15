import { useDispatch, useSelector } from "react-redux"
import { States } from "../../../store"

export default function ButtonAuth(){   

    const JWT = useSelector( (state:States) => state.JWT);
    const dispatch = useDispatch()

    return (
        <>
        </>
    )
}
