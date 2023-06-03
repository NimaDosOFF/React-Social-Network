import classes from "../Dialogs.module.css";

const Message = (props) => {
    return (<div>
        <div className={classes.messageStyle}>
            {props.message}
        </div>

</div>
    );
}
export default Message;