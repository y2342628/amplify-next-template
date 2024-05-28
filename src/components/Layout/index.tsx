"use client";

import Nav from "@/components/Nav";
import { ToastContainer } from "react-toastify";
import { Authenticator } from "@aws-amplify/ui-react";
import { getCurrentUser } from "aws-amplify/auth";

import { Amplify } from "aws-amplify";
import outputs from "@root/amplify_outputs.json";

import { Button } from "react-bootstrap";

Amplify.configure(outputs);

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function currentUser() {
    const { username, userId, signInDetails } = await getCurrentUser();

    console.log(11111111111, username, userId, signInDetails);
  }

  return (
      <Authenticator socialProviders={["google"]}>
        {({ signOut, user }) => (
          <>
            <Nav />
            <main>{children}</main>
            <ToastContainer />
            <div>
              <Button onClick={currentUser}>currentUser</Button>
            </div>
            <Button onClick={signOut}>Sign out</Button>
          </>
        )}
      </Authenticator>
  );
}
