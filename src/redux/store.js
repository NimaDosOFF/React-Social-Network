import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage : {
            posts:  [
                {id: 1, message: 'Hi! How are you?', likesCount:12 },
                {id: 2, message: 'It is my first post!', likesCount:100},
                {id: 3, message: 'Niggwes!!!', likesCount:1020},
                {id: 4, message: 'Nkygfljkygljhgvljwes!!!', likesCount:120},
                {id: 5, message: 'Hello everybody!!!', likesCount:9990},

            ],
            newPostText: ""
        },
    sideBar : {}},
    _callSubscriber () {
        console.log('State changed')
    },
    getState () {
        return this._state;
    },
    subscribe  (observer)  {
        this._callSubscriber=observer;

    },



    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._state.sideBar=sidebarReducer(this._state.sideBar, action)

       this._callSubscriber(this._state)
    }



}



export default store;