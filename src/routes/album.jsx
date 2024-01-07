import Album from "../components/photo/Album";
import {gql, useQuery} from "@apollo/client";
import React from "react";
import {useLoaderData} from "react-router-dom";

export async function loader({ params }) {
  const albumId = params.albumId || null;
  return { albumId };
}

const PhotoAlbum = () => {
  const { albumId } = useLoaderData();

  const GET_ALBUM = gql`
    query GetPosts($id: ID!) {
      photo(id: $id){
        id
        name
        name_en
        description
        description_en
        date_create
        cover
        files {
          file
          path
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ALBUM, { variables: {id : albumId}});
  const photoAlbum = data?.photo || [];

  return (
    <>
      <h1>Photos</h1>
      <Album loading={loading} error={error} album={photoAlbum}/>
    </>
  );
};

export default PhotoAlbum;

