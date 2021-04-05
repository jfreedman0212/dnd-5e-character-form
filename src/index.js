import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import { Theme } from "./ui/Theme";
import { queryClient } from "./api";
import App from "./App";
import GlobalStyle from "./ui/GlobalStyle";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <Theme>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Theme>
    </StrictMode>,
    rootElement
);
