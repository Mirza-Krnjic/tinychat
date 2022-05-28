import React from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";

function Navbar() {
  const navigate = useNavigate();

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav>
      <h3>
        <Link to="/">Tinychat</Link>
      </h3>
      <div>
        {auth.currentUser ? (
          <>
            <Link to="/profile">Profile</Link>
            <button className="btn" onClick={handleSignout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
