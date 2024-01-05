import PostsList from '../components/blog/PostsList'
import {gql, useQuery} from "@apollo/client";
import React, {useState} from "react";
import BasePagination from "../components/Pagination";

const Blog = () => {
  const [activePage, setActivePage] = useState(1);

  const GET_POSTS = gql`
    query GetPosts($page: Int!) {
      blogs(page: $page, first:10) {
        data{
          id
          date
          title
        }
        paginatorInfo{
          currentPage
          lastPage
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS, { variables: {page : activePage}});
  const postsList = data?.blogs.data || [];
  const lastPage =data?.blogs.paginatorInfo.lastPage;

  return (
    <>
      <h1>Blog</h1>
      <PostsList loading={loading} error={error} dataList={postsList}/>
      <BasePagination
        lastPage={lastPage}
        urlPage={'/blog'}
        activePage={activePage}
        setActivePage={setActivePage}>

      </BasePagination>
    </>
  );
};

export default Blog;

