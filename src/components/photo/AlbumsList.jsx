import React from "react";
import {Link} from "react-router-dom";

const AlbumsList = ({ loading, error, dataList}) => {
  return (
    <>
      { loading ? ( <p>Loading...</p> ) : ''}

      { error ? (<p>Error : {error.message}</p>) : ''}

      { dataList.length ? (
        <>
          { dataList.map(({ id, name}) => (
            <div className="card mb-4" key={id}>
              <div className="card-body">
                <Link to={id}>
                  {name}
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>
          <i>No albums</i>
        </p>
      )}
    </>
  );
};

export default AlbumsList;