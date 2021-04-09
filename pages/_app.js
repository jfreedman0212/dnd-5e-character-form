import { Theme } from "../components/ui/Theme";
import GlobalStyle from "../components/ui/GlobalStyle";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/queryClient";

export default function App({ Component, pageProps }) {
    return (
        <Theme>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </Theme>
    );
}
