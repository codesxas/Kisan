import React from "react";
import { Link } from "react-router-dom";

import PageNotFound from "../../assets/images/page-not-found.svg";

function NotFound() {
  return (
    <div className="not-found">
      <div className="img-wrap">
        <img src={PageNotFound} className="img-fluid" alt="" />
      </div>
      <div className="info-wrap">
        <p>Page Not Found</p>
        <p>
          Go to <Link to="/">Contact Page</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
