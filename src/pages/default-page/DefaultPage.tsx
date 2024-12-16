import { useEffect } from "react";
import { Navigate, redirect } from "react-router-dom";

function DefaultPage() {
  const goto = () => {
    return redirect("/private/declarations");
  };
  useEffect(() => {
    goto();
  }, []);
  return <Navigate to="/private/declarations" />;
}

export default DefaultPage;
