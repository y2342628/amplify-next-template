"use client";

import { useState, useEffect } from "react";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import { Authenticator } from '@aws-amplify/ui-react'
import { getCurrentUser} from "aws-amplify/auth"


Amplify.configure(outputs);


export default function App() {






 async function currentUser(){
    const { username, userId, signInDetails } = await getCurrentUser();

    console.log(11111111111,username, userId, signInDetails)
  }


  return (
        
    <Authenticator  socialProviders={['google']}>
      {({ signOut, user }) => (
    <main>
      <div>

        <button onClick={currentUser}>currentUser</button>

      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
      )}
    </Authenticator>
  );
  
}
