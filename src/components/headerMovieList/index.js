import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div className="col-md-5 offset-5">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;