import React from "react";
import {useSelector} from "react-redux";
import {Grid, CircularProgress} from "@material-ui/core";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({setCurrentId}) =>  {
    const posts = useSelector((state)=>state.posts);
    const classes = useStyles();

    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {/* //create the braces to indicate we are using javascript logic */}
                {posts.map((posts) => (
                    <Grid key={posts._id} item xs={12} sm={6}>
                        <Post post={posts}  setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )  
    )
}

export default Posts;