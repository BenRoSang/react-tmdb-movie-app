import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Movies from '../pages/Movies'
import Series from '../pages/Series'
import ContactUs from '../pages/ContactUs'
import Home from "../pages/Home";
import get_home_page_data from "../services/MovieServices";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                // loader: get_popular_movie()
                loader: async () => {
                    // return data from here
                    return { homePageData: await get_home_page_data() };
                },
              
                
            },
            {
                path: 'movies',
                element: <Movies />
            },
            {
                path: 'series',
                element: <Series />
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            }

        ]
    }
])