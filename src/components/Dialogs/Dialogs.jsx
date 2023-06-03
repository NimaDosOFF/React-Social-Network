import classes from "./Dialogs.module.css"
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
let dialogsPage=props.dialogsPage;
   let dialogsElements = dialogsPage.dialogsData.map (d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = dialogsPage.messagesData.map (m => <Message message={m.message} />)
let newMessageBody=dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    let onNewMessageChange = (e) => {
let body = e.target.value;
props.onNewMessageChange(body);
    }
return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>
                {messageElements}
            <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter text'></textarea></div>
            <div> <button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    </div>
)




}


export default Dialogs;