import React from "react";

const TopNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Competitive Typing
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="col-sm-8">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Progress
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Admin
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="/">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-4">
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-label">
                {" "}
                <a class="nav-link" href="/">
                  LoggedInName:
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="/">
                  Logout
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="/">
                  Login
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="/">
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
