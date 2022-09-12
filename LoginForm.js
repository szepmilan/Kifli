import { performLogin } from "./util";
import { useState, useRef } from "react";
import styles from "./LoginForm.module.css";

// ================ LOGIN FORM ====================
//
// You are provided with an incomplete login form.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.
//
// Tasks:
//  * Login button should trigger the performLogin() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the performLogin() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the performLogin function to find out how to log in successfully.

//console.log(performLogin);

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const button = useRef();

  const updatePassword = (e) => {
    setPassword(e.target.value);
    button.current.disabled = (e.target.value.length >=6 && email.length!=0)? false : true;
  }

  //button.disabled = true;

  const updateEmail = (e) => {
    setEmail(e.target.value);
    button.current.disabled = (e.target.value.length >=1 && password.length>=6)? false : true;
  }

  const buttonClick= () => {
    console.log("alma");
    performLogin({email,password});
    //alert("Success login");
  }

  /*
  performLogin({email,password}).then((message)=>{
    console.log(`Success: ${message}`)
  }).catch((error)=>{
    console.log(`${error.name} ${error.message}`)
  })
  */

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <label htmlFor={"email"}>Email</label>
        <input id={"email"} type={"email"} value={email} onChange={(e) => updateEmail(e)}/>
      </div>
      <div className={styles.row}>
        <label htmlFor={"password"}>Password</label>
        <input id={"password"} type={"password"} value={password} onChange={updatePassword}/>
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className={styles.errorMessage} />

      <div className={styles.row}>
        <button ref={button} onClick={buttonClick} disabled>Login</button>
      </div>
    </div>
  );
}


