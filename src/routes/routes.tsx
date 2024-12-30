import React, { Suspense } from "react";
import { RouteObject, createBrowserRouter } from "react-router";
import PageLoading from "../components/ui/PageLoading";
import NotFound from "../pages/NotFound";



const MainLayout = React.lazy(() => import("../layout/MainLayout"));
const Home = React.lazy(() => import("../pages/Home"));



const routes: RouteObject[] = [
    {
        path: "/",
        element: <Suspense fallback={<PageLoading />}><MainLayout /></Suspense>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
];


export default createBrowserRouter(routes);