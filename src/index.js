import axios from "axios";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const uri = queryKey.join("/");
        const { data } = await axios.get(`https://www.dnd5eapi.co/api/${uri}`);
        return data;
      }
    }
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  rootElement
);
