import React from "react";
import {Link} from "react-router-dom";

const Comments = ({dataList}) => {
  return (
    <div>
      <h3>Comments:</h3>
      { dataList.length ? (
        <div>
          { dataList.map(({ id, date, text}) => (
            <div key={id} className="mb-4">
              <p>
                <i className="text-secondary">{date}</i><br/> {text}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>
          <i>No comments yet</i>
        </p>
      )}
    </div>
  );
};

export default Comments;