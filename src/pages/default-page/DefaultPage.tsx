import React, { useEffect } from "react";
import { redirect } from "react-router-dom";

function DefaultPage() {
  const goto = () => {
    console.log("====================================");
    console.log();
    console.log("====================================");
    return redirect("/private/declarations");
  };
  useEffect(() => {
    goto();
  }, []);
  return null;
}

export default DefaultPage;
