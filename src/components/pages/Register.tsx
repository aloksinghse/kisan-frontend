import React, { useState } from "react";
import { TextInput, Button, Label } from "flowbite-react";
import firebase from "../../utils/firebaseConfig";
import "firebase/compat/auth";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log("clicked");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-100">
      <form
        className="bg-white rounded-lg shadow-md p-8 grid gap-4 min-w-[500px]"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-4xl font-bold mb-4 text-center ">Login</h1>
        </div>
        <div>
          <Label htmlFor="email" className="pb-8">
            Email
          </Label>
          <TextInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <TextInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </Button>
        <hr />
        <Button href="/register" color="gray" className="text-center">
          Create a new Account
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
