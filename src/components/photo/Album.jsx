import React from "react";

const Album = ({album}) => {

  return (
    <>
      <h2>{album?.name}</h2>

      <div className="row">
        <div className="col-12">
          <p>
            <i>{album?.date_create}</i>
          </p>

          <p>
            {album?.description}
          </p>
        </div>
      </div>

      <div className="row">
        { album?.files?.length ? (
          <>
            { album?.files.map(({ name, path}) => (
              <div className="col-sm-3 mb-2">
                <a href={path}>
                  <img src={path} className="img-fluid photo" alt=""/>
                </a>
              </div>
            ))}
          </>
        ) : (
          <div className="col-12">
            <p>
              <i>No photos</i>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Album;