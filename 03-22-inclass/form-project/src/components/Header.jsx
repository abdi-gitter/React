import React from "react";

const Header = ({handleOpen}) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#">
        Houses App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <button className="btn btn-warning ms-auto" onClick={handleOpen}>ADD</button>
      </div>

        </div>
    </nav>
  );
};

export default Header;