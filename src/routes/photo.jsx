import PhotosList from '../components/photo/AlbumsList'
import {gql, useQuery} from "@apollo/client";
import React from "react";

const Blog = () => {
  const GET_PHOTOS = gql`
    query GetPosts {
      photos{
        id
        name
        name_en
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PHOTOS);
  const photosList = data?.photos || [];

  return (
    <>
      <h1>Photos</h1>
      <PhotosList loading={loading} error={error} dataList={photosList}/>
    </>
  );
};

export default Blog;

