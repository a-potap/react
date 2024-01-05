import React from "react";
import {Link} from "react-router-dom";

const PostsList = ({ loading, error, dataList}) => {
  return (
    <>
      { loading ? ( <p>Loading...</p> ) : ''}

      { error ? (<p>Error : {error.message}</p>) : ''}

      { dataList.length ? (
        <>
          { dataList.map(({ id, title, date}) => (
            <div key={id}>
              <p>
                <i className="text-secondary">{date}</i><br/>
                {title} <Link to={id}>Read</Link>
              </p>
            </div>
          ))}
        </>
      ) : (
        <p>
          <i>No posts</i>
        </p>
      )}
    </>
  );
};

export default PostsList;