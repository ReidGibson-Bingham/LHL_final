import React from "react";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Competitive Typing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="col-sm-8">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Progress
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Admin
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-label">
                {" "}
                <a className="nav-link" href="/">
                  LoggedInName:
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/">
                  Logout
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/">
                  Login
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="navbar">
        <hr className="navbar__separator navbar--centered" />
        <nav className="navbar__menu"></nav>
      </section>
    </nav>
  );
};
export default TopNavbar;
