import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    //Googleでログイン //公式ドキュメント読んでみて
    signInWithPopup(auth, provider).then((result) => {
      //console.log(result);
      //localStorageにログインしているかどうかを保存する
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);

      //ホーム画面に行く
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
