"use server";

import action_constants from "@/constants/action-constants";
import { revalidateTag } from "next/cache";
export async function getUserUniverseData(userid: number) {
  try {
    const response = await fetch(
      `http://${action_constants.URL}:${action_constants.PORT}/api/usersuniverse/user/${userid}`,
      { next: { tags: ["userData"] } }
    );
    console.log("I am fetching userUninverseData");
    const result = response;
    return result;
  } catch (error: any) {
    console.log("Axios Get Error :(", error);
  }
}

export async function mutateUserUniverserData() {
  try {
    console.log("Hello I am here");
    revalidateTag("userData");
    getUserUniverseData(1);
  } catch {
    console.log(
      "Tag revalidate not  working properly. Please check your NextJS version and if you have the correct middleware installed."
    );
  }
}
