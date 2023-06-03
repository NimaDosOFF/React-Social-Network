import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";




const MyPosts = (props) => {

    let postsElement = props.postsData.map((element) => <Post message={element.message}
                                                              likesCount={element.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
}
    return (
        <div className={classes.posts}>
            <h2>My Posts</h2>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} placeholder={'Enter text'} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>


            <div>
                {postsElement}

            </div>


        </div>

    )
}
export default MyPosts;