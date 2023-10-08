import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLoginbtn = () => {
  const [user, setUser] = useState({});
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(true);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setloading(true);
        setUser(user);
        // console.log(user);
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <div>
        <div className="">
          <img
            onClick={handleGoogleLogin}
            className=" social-button h-[50px]"
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLoginbtn;
