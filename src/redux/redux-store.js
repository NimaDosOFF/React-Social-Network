import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sidebarReducer
})



let store = createStore(reducers);
window.store = store;
export default store;