const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT= "UPDATE-NEW-POST-TEXT";


let initialState={
    posts:  [
        {id: 1, message: 'Hi! How are you?', likesCount:12 },
        {id: 2, message: 'It is my first post!', likesCount:100},
        {id: 3, message: 'Niggwes!!!', likesCount:1020},
        {id: 4, message: 'Nkygfljkygljhgvljwes!!!', likesCount:120},
        {id: 5, message: 'Hello everybody!!!', likesCount:9990},

    ],
    newPostText: ""
}
 const profileReducer = (state=initialState, action) => {

switch(action.type) {
    case ADD_POST: {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,

        };
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:{
        let stateCopy = {...state}
        stateCopy.newPostText = action.text;
        return stateCopy;
    }


    default:
        return state;
}

}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer;