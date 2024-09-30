import { Outlet } from "react-router-dom";
import Nav from "@/components/nav/Nav";

function PrivateLayout() {
  return (
    <section className="min-h-screen">
      <Nav />
      <main className="wrapper pl-64 pr-10">
        <header className="flex justify-between my-3 text-2xl font-bold">
          <h3>Déclarations</h3>
          <span>Achille</span>
        </header>
        <Outlet />
      </main>
    </section>
  );
}

export default PrivateLayout;
