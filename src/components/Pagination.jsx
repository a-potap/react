import Pagination from 'react-bootstrap/Pagination';
import React from "react";
import {useNavigate} from "react-router-dom";

function RootPagination({lastPage, urlPage, activePage, setActivePage}) {
  let navigate = useNavigate();

  const pages = [];
  for (let number = 1; number <= lastPage; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => pagination(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  function pagination(number) {
    setActivePage(number);
    navigate(`${urlPage}?page=${number}`);
  }

  return (
    <div className="container d-flex justify-content-center">
      <Pagination size="sm">
        <Pagination.Prev
          onClick={() => {
            if (activePage > 1) {
              pagination(activePage - 1);
            }
          }}
        />
        {pages}
        <Pagination.Next
          onClick={() => {
            if (activePage < lastPage) {
              pagination(activePage + 1);
            }
          }}
        />
      </Pagination>
    </div>
  );
}

export default RootPagination;