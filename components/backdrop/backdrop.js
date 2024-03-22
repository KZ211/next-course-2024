import Link from "next/link";
import classes from "./backdrop.module.css";

export default function({closeBackdrop}){
    return <div className={classes.backdropT}>
        <div className={classes.modal} onClick={closeBackdrop}/>
    <ul className={classes.backdrop}>
        <li>
            <Link className={classes.link} onClick={closeBackdrop} href='/'>Home</Link>
        </li>
        <li>
            <Link className={classes.link} onClick={closeBackdrop} href='/meals'>Share Meal</Link>
        </li>
        <li>
            <Link className={classes.link} onClick={closeBackdrop} href='/community'>Community</Link>
        </li>
    </ul>
    </div>
}