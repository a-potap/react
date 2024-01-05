import React from "react";
import Comments from "./Comments"
const Post = ({postData}) => {
  const comments = postData?.comments || [];

  return (
    <>
      <h2>{postData?.title}</h2>
      <p>
        {postData?.text}
      </p>


      <Comments dataList={comments}></Comments>

    </>
  );
};

export default Post;