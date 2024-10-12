import { redirect } from "react-router-dom";

export async function action({ params }: any) {
  console.log("eddde");

  return redirect("/private/declarations");
}
