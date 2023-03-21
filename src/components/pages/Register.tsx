import React, { useState } from "react";
import { TextInput, Button, Label } from "flowbite-react";
import firebase from "../../utils/firebaseConfig";
import "firebase/compat/auth";
import Link from "next/link";
import Router from "next/router";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("Alok");
  const [lastName, setLastName] = useState("Kumar");
  const [email, setEmail] = useState("se.aloksingh@gmail.com");
  const [password, setPassword] = useState("1234567890");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    Router.push("/");

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-100">
      <form
        className="bg-white rounded-lg shadow-md p-8 grid gap-4 w-max-full sm:w-max-auto sm:min-w-[500px]"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-4xl font-bold mb-4 text-center">
            Create a new Account
          </h1>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <div className="pb-2">
              <Label htmlFor="firstName" className="pb-8">
                First Name
              </Label>
            </div>
            <TextInput
              type="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <div className="pb-2">
              <Label htmlFor="lastName" className="pb-8">
                Last Name
              </Label>
            </div>
            <TextInput
              type="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <div className="pb-2">
            <Label htmlFor="email" className="pb-8">
              Email
            </Label>
          </div>
          <TextInput
            type="email"
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
          Create Account
        </Button>
        <hr />
        <Link href="/login" color="green" className="text-center">
          Already have an Account! Login Here
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
