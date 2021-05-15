import { Theme } from "../components/ui/Theme";
import GlobalStyle from "../components/ui/GlobalStyle";
import { QueryClientProvider, QueryClient } from "react-query";
import { AppProps } from "next/app";
import axios from "axios";
import { QuerySource, QueryKey } from "../lib/frontend/query_keys";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: async ({ queryKey }) => {
                const [{ source }, ...rest]: QueryKey = queryKey;
                const uri = rest.join("/");
                switch (source) {
                    case QuerySource.DND_5E_SRD:
                        const { data: dndApiData } = await axios.get(
                            `https://www.dnd5eapi.co/api/${uri}`
                        );
                        return dndApiData;
                    case QuerySource.BACKEND:
                        const { data: backendData } = await axios.get(
                            `/${uri}`
                        );
                        return backendData;
                    default:
                        throw new Error(`Unexpected source: ${source}`);
                }
            }
        }
    }
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Theme>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </Theme>
    );
}
