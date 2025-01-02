import { useQuery, UseQueryResult } from "@tanstack/react-query"
import get_all_products from "../../service/products/get_all_products"
import { IProductsResponse } from "../../ts/interfaces/products";

const useGetAllProductsQuery: (term: string) => UseQueryResult<IProductsResponse> = (term: string): UseQueryResult<IProductsResponse> => {
    return useQuery({
        queryKey: ["all_products"],
        queryFn: get_all_products,
        staleTime: 5 * 60 * 1000,
        retry: 1,
        enabled: Boolean(term)
    })
}

export default useGetAllProductsQuery;