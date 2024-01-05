import React from "react";
const Album = ({postData}) => {

  return (
    <>
      <h2>{postData?.title}</h2>
      <p>
        {postData?.text}
      </p>
    </>
  );
};

export default Album;