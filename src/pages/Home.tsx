import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="container flex flex-col justify-center items-center min-h-screen">
      <article className="bg-white text-center px-10 py-10 rounded-md shadow-md">
        <h1 className="text-3xl mb-6">Gestion des naissances</h1>
        <Link
          to={"/private/declarations"}
          className="border border-blue-600 text-blue-600 px-6 py-4 rounded-md hover:bg-blue-600 hover:text-white"
        >
          Déclarations
        </Link>
      </article>
    </section>
  );
}

export default Home;
