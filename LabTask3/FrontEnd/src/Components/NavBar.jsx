import React from "react";

import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand" style={{fontWeight: 'bolder'}} to="/">
            Furnitia.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="items nav-item active text-white" to="/">Home</Link>
              <Link className="items nav-item active text-white" to="/items">Products</Link>
              <Link className="items nav-item active text-white" to="/add">Add Products</Link>
              <Link className="items nav-item active text-white" to="/underConstruction">Switch to Buyer Mode</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
