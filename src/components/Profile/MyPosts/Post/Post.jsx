import classes from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return(


                <div className={classes.item}>
                    <img src='https://dota-blog.ru/wp-content/uploads/2020/01/132712.jpg'/>
                     {props.message}
                    <div>
                    <span>Like {props.likesCount}</span>
                </div>
               </div>




)
}
export default Post;