import React from "react";

const NewsList = ({ loading, error, dataList}) => {
  return (
    <>
      { loading ? ( <p>Loading...</p> ) : ''}

      { error ? (<p>Error : {error.message}</p>) : ''}

      { dataList.length ? (
        <>
        { dataList.map(({ id, text, date}) => (
            <div key={id}>
              <i>{date}</i>
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
          ))}


        </>
      ) : (
        <p>
          <i>No news</i>
        </p>
      )}
    </>
  );
};

export default NewsList;