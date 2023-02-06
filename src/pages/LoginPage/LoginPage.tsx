import React, { useEffect } from "react";
import "./LoginPage.scss";
import { Button } from "@material-ui/core";
import WhatsappLogo from "./whatsapp_logo.png";
import { auth, provider } from "../../firebase";
import { useAppContext } from "../../contexts/AppContext";

const LoginPage: React.FC = () => {
  const [, dispatch] = useAppContext();

  const signInAsGuest = async () => {
    const randomSeed = Math.floor(Math.random() * 10000) + 10000;

    const user = {
      uid: `${randomSeed}`,
      displayName: `Guest #${randomSeed}`,
      photoURL: `https://avatars.dicebear.com/api/human/${randomSeed}.svg`,
      email: null,
      phoneNumber: null,
      providerId: "client",
    };

    dispatch({ type: "SET_USER", payload: user });
  };

  const signInWithGoogle = async () => {
    try {
      const response = await auth.signInWithPopup(provider);
      dispatch({ type: "SET_USER", payload: response.user });
    } catch (error) {
      console.error(error?.message);
    }
  };

  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.pathname = "/";
    }
  }, []);

  return (
    <div className="loginPage">
      <img src={WhatsappLogo} alt="" />

      <div className="loginPage__text">
        <h1>Whatsapp Clone</h1>
      </div>

      <div className="loginPage__wrapper">
        <Button type="submit" onClick={signInAsGuest}>
          Sign In As Guest
        </Button>

        <Button type="submit" onClick={signInWithGoogle}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
