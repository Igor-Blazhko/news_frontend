import { Link } from "react-router-dom";
import { Page } from "../../types";
import Button from "../simplyComponents/button/button";

export default function CreatePost(){
    return (
        <main>
            <Link to={'/'}> 
                <Button>На главную</Button>
            </Link>
            <div>
                1234
            </div>
        </main>

    )
}