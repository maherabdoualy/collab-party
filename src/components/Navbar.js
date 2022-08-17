import "./Navbar.css";
import Party from "../assets/party.svg";
import { Link } from "react-router-dom";
import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Party} alt="collab party logo" />
          <span>Collab Party</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Log out
              </button>
            )}
            {isPending && (
              <button className="btn" aria-disabled>
                Loging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
