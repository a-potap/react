import  NewsList  from '../components/news/NewsList'
import  BasePagination  from '../components/Pagination'
import React, {useState} from "react";
import {gql, useQuery} from "@apollo/client";

const News = () => {
  const [activePage, setActivePage] = useState(1);

  const GET_NEWS = gql`
    query GetNews($page: Int!) {
      news(page: $page, first:10) {
        data{
          id
          date
          text
        }
        paginatorInfo{
          currentPage
          lastPage
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_NEWS, { variables: {page : activePage}});
  const newsList = data?.news.data || [];
  const lastPage =data?.news.paginatorInfo.lastPage;

  return (
    <>
      <h1>News</h1>
      <NewsList loading={loading} error={error} dataList={newsList}></NewsList>
      <BasePagination
        lastPage={lastPage}
        urlPage={'/news'}
        activePage={activePage}
        setActivePage={setActivePage}>

      </BasePagination>
    </>
  );
};

export default News;

