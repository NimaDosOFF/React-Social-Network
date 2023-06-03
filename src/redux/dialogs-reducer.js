
const UPDATE_NEW_MESSAGE_BODY="UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE='SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Lesha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Timofei'},
        {id: 5, name: 'Karolina'},
        {id: 6, name: 'Lenka'}
    ],
    messagesData : [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Whats up'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Very good'},
        {id: 5, message: 'OMG'},
        {id: 6, message: 'No way!'}

    ],
    newMessageBody: '',
}
 const dialogsReducer = (state=initialState, action) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody=action.body;
             return state;
         case SEND_MESSAGE:
             let body = state.newMessageBody;

             state.messagesData.push( {id: 7, message: body})
             state.newMessageBody='';
             return state;
         default:
             return state;
     }


}
export const sendMessageCreator = () => ({type: SEND_MESSAGE })
export const updateNewMessageBody = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;