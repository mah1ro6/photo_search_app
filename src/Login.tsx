import React, { useState } from "react";
import { auth } from "./firebase";
import styles from "./Login.module.css";
import { RouteComponentProps } from "react-router-dom";

const Login = ({ history }: RouteComponentProps<{}>) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const style = {
    backGroundColor: "aquamarine",
    color: "white",
  };

  const isLoginHandler = isLogin
    ? async () => {
        try {
          await auth.signInWithEmailAndPassword(email, password);
          history.push("/");
        } catch (error) {
          alert(error.message);
        }
      }
    : async () => {
        try {
          await auth.createUserWithEmailAndPassword(email, password);
          history.push("/");
        } catch (error) {
          alert(error.message);
        }
      };

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>
        {isLogin ? "Login" : "Account Registration"}
      </h1>
      <div className={styles.input}>
        <div className="ui input">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <br />
      <div className={styles.input}>
        <div className="ui input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <br />
      <button className="ui teal button" style={style} onClick={isLoginHandler}>
        {isLogin ? "Login" : "Sign Up"}
      </button>
      <br />
      <span
        onClick={() => {
          setIsLogin(!isLogin);
        }}
        className={styles.span}
      >
        {isLogin ? "create new account ?" : "Let's Login ?"}
      </span>
    </div>
  );
};

export default Login;
