import "./scss/index.scss";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import routes from './routes/routes';
import Providers from './components/providers/Providers';


createRoot(document.getElementById('root')!).render(
    <Providers>
        <RouterProvider router={routes} />
    </Providers>
)
