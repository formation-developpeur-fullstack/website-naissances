import React, { useEffect } from "react";
import { Navigate, redirect } from "react-router-dom";

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
  return <Navigate to="/private/declarations" />;
}

export default DefaultPage;
