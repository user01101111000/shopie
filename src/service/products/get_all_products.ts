import { AxiosResponse } from "axios";
import { IProductsResponse } from "../../ts/interfaces/products";
import axios_instance from "../axios_instance";

const get_all_products: () => Promise<IProductsResponse> = async (): Promise<IProductsResponse> => {

    const response: AxiosResponse<IProductsResponse> = await axios_instance().get("/products", {
        params: {
            limit: 150
        }
    });


    return response.data;
}

export default get_all_products;