import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineHistory } from "react-icons/ai";

function Sidebar() {
  return (
    <React.Fragment>
      <Link to="/" className="link-item">
        <AiOutlineUser />
      </Link>

      <Link to="/history" className="link-item">
        <AiOutlineHistory />
      </Link>
    </React.Fragment>
  );
}

export default Sidebar;
