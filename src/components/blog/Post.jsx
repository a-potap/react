import React from "react";
import Comments from "./Comments"
const Post = ({postData}) => {
  const comments = postData?.comments || [];

  return (
    <>
      <h2>{postData?.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: postData?.text }}></div>

      <Comments dataList={comments}></Comments>

    </>
  );
};

export default Post;