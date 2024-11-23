import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./context/ApplicationContextProvider";
import GlobalApplicationContextProvider from "./context/global/GlobalApplicationContextProvider";

function App() {
  return (
    <GlobalApplicationContextProvider>
      <ApplicationContextProvider>
        <main className="bg-gray-200 min-h-screen">
          <Outlet />
        </main>
      </ApplicationContextProvider>
    </GlobalApplicationContextProvider>
  );
}

export default App;
