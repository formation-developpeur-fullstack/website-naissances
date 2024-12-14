import { Navigate, Outlet } from "react-router-dom";
import Nav from "@/components/nav/Nav";
import { useContext } from "react";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import Header from "@/components/shared/Header";

function PrivateLayout() {
  const {
    state: { token },
  } = useContext(GlobalApplicationContext);
  return (
    <>
      {token ? (
        <section className="min-h-screen">
          <Nav />
          <main className="wrapper pl-64 pr-10">
            <Header />
            <Outlet />
          </main>
        </section>
      ) : (
        <Navigate to={"/connexion"} />
      )}
    </>
  );
}

export default PrivateLayout;
