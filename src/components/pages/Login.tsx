import React, { useState } from "react";
import { TextInput, Button, Label } from "flowbite-react";
import Link from "next/link";
import firebase from "../../utils/firebaseConfig";
// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/auth";
import Router from "next/router";

// import firebase from "./index";

const auth = firebase.auth();

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://www.example.com/finishSignUp?cartId=1234",
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "example.page.link",
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // handle login logic here
    try {
      console.log("clicked");
      // @ts-ignore
      //   await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("User logged in");

      Router.push("/");

      // const auth = getAuth();
      // createUserWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      //     // Signed in
      //     const user = userCredential.user;
      //     console.log(user);

      //     Router.push("/");
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     // ..
      //   });

      //   const auth = getAuth();
      //   sendSignInLinkToEmail(auth, email, actionCodeSettings)
      //     .then(() => {
      //       // The link was successfully sent. Inform the user.
      //       // Save the email locally so you don't need to ask the user for it again
      //       // if they open the link on the same device.
      //       window.localStorage.setItem("emailForSignIn", email);
      //       // ...
      //     })
      //     .catch((error) => {
      //       const errorCode = error.code;
      //       const errorMessage = error.message;
      //       // ...
      //     });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero-bg-animation flex flex-col items-center justify-center py-28 bg-gray-100">
      <form
        className="bg-white rounded-lg shadow-md p-8 grid gap-4 w-max-full sm:w-max-auto sm:min-w-[500px]"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-4xl font-bold mb-4 text-center ">Login</h1>
        </div>
        <div>
          <div className="pb-2">
            <Label htmlFor="email" className="pb-8">
              Email
            </Label>
          </div>
          <TextInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="pb-4">
          <div className="pb-2">
            <Label htmlFor="password">Password</Label>
          </div>
          <TextInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" color="success" onClick={(e) => handleSubmit(e)}>
          Login
        </Button>
        <hr />
        <Button href="/register" color="green" className="text-center">
          Create a new Account
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
