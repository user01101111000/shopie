import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeContextProvider } from "../../context/ThemeContext";
import { ProvidersProps } from "../../ts/types/Provider";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});


const Providers: React.FC<ProvidersProps> = (props: ProvidersProps) => {
    return <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    </ThemeContextProvider>


}

export default Providers;