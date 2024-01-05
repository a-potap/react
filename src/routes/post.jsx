import PostComponent from '../components/blog/Post'
import {gql, useQuery} from "@apollo/client";
import React from "react";
import {useLoaderData} from "react-router-dom";

export async function loader({ params }) {
  const postId = params.postId || null;
  return { postId };
}

const Post = () => {
  const { postId } = useLoaderData();
  const GET_POST = gql`
    query GetPost($id: ID!) {
      blog(id: $id) {
        id
        date
        title
        text
        comments{
          id
          user
          date
          text
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POST, { variables: {id : postId}});
  const postData =data?.blog;

  return (
    <>
      <h1>Blog</h1>
      <PostComponent postData={postData}></PostComponent>
    </>
  );
};

export default Post;

