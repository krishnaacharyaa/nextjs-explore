"use server";

import action_constants from "@/constants/action-constants";
import axios from "axios";
export async function getUserUniverseData(userid: number) {
  try {
    const response = await axios.get(
      `http://${action_constants.URL}:${action_constants.PORT}/api/usersuniverse/user/${userid}`
    );
    const result = response.data;
    return result;
  } catch (error: any) {
    console.log("Axios Get Error :(", error);
  }
}
