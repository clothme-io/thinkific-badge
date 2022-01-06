import "./Root.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppRoutes } from "../route/AppRoutes";

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default Root;
