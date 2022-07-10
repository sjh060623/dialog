import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => {
  return null;
  /*
    <nav>
      <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <li style={{ overflow: "hidden" }}>
          <Link to="/chat" style={{ marginRight: 50 }}>
            <FontAwesomeIcon icon={faMessage} color={"#281461"} size="2x" />
          </Link>
        </li>

        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faAward} color={"#281461"} size="2x" />
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 12,
              marginLeft: 20,
            }}
          >
            <FontAwesomeIcon icon={faUser} color={"#281461"} size="2x" />
            <span style={{ marginTop: 10 }}>
              {userObj.displayName
                ? `${userObj.displayName}의 Profile`
                : "Profile"}
            </span>
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
  */
};

export default Navigation;
