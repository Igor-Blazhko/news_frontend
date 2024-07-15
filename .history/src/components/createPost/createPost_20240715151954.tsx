import { Link } from "react-router-dom";
import { Page } from "../../types";
import Button from "../simplyComponents/button/button";

export default function CreatePost(){
    return (
        <main>
            <Link to={Page.AllPost}> 
                <Button>На главную</Button>
            </Link>
        </main>

    )
}