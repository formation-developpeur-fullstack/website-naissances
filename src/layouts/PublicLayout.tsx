import Banner from "@/components/shared/Banner";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicLayout() {
  const {
    state: { token },
  } = useContext(GlobalApplicationContext);

  return (
    <>
      {token ? (
        <Navigate to={"/private/declarations"} />
      ) : (
        <section className="min-h-screen grid md:grid-cols-2">
          <Banner />
          <Outlet />
        </section>
      )}
    </>
  );
}

export default PublicLayout;
