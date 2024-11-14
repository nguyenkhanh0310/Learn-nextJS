import React from "react";
import envConfig from "@/config";
import { cookies } from "next/headers";
import Profile from "@/app/me/profile";
import accountApiRequest from "@/apiRequests/account";

export default async function MeProfile() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('sessionToken');

  if(!sessionToken) {
    return <div>You need to be logged in to access your profile</div>
  }

  const result = await accountApiRequest.me(sessionToken?.value ?? '');

  return(
    <>
      <h1>Profile</h1>
      <div>
        Hello {result.payload.data.name}
      </div>
      <Profile/>
    </>
  );
}
