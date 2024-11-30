import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./context/ApplicationContextProvider";
import GlobalApplicationContextProvider from "./context/global/GlobalApplicationContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {},
});
function App() {
  return (
    <GlobalApplicationContextProvider>
      <ApplicationContextProvider>
        <QueryClientProvider client={queryClient}>
          <main className="bg-gray-200 min-h-screen">
            <Outlet />
          </main>
        </QueryClientProvider>
      </ApplicationContextProvider>
    </GlobalApplicationContextProvider>
  );
}

export default App;
