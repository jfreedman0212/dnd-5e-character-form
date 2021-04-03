import axios from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: async ({ queryKey }) => {
                if (queryKey[0] === "api") {
                    const uri = queryKey.join("/");
                    const { data } = await axios.get(
                        `https://www.dnd5eapi.co/${uri}`
                    );
                    return data;
                }
                // TODO: once I implement my own API, add a conditional here
                // to call it instead of the 5e API
                throw new Error("Only support the D&D 5e API for now!");
            }
        }
    }
});
