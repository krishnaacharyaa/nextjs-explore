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

export async function getSummaryByDocumentId(documentId: number) {
  try {
    console.log("Get summary By document is called")
    const response = await axios.get(
      `http://localhost:3000/api/summary/${documentId}`
    );
    const result = response.data;
    console.log("The result is ", result)
    return result;
  } catch (error: any) {
    console.log("Axios Get Error :(", error);
  }
}


