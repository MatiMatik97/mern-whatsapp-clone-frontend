import React from "react";
import "./LoginPage.scss";
import { Button } from "@material-ui/core";
import WhatsappLogo from "./whatsapp_logo.png";
import { auth, provider } from "../../firebase";
import { useUserContext } from "../../contexts/UserContext";

const LoginPage: React.FC = () => {
  const [, dispatch] = useUserContext();

  const signInWithGoogle = async () => {
    try {
      const response = await auth.signInWithPopup(provider);
      dispatch({ type: "SET_USER", payload: response.user });
    } catch (error) {
      console.error(error?.message);
    }
  };

  return (
    <div className="loginPage">
      <img src={WhatsappLogo} alt="" />

      <div className="loginPage__text">
        <h1>Whatsapp Clone</h1>
      </div>

      <Button type="submit" onClick={signInWithGoogle}>
        Sign In With Google
      </Button>
    </div>
  );
};

export default LoginPage;
