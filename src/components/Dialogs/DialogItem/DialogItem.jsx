import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className='dialogNames'>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>

    );
}
export default DialogItem;