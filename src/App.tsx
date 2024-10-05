import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./context/ApplicationContextProvider";

function App() {
  return (
    <ApplicationContextProvider>
      <main className="bg-gray-200 min-h-screen">
        <Outlet />
      </main>
    </ApplicationContextProvider>
  );
}

export default App;
