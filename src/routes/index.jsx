import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Movies from '../pages/Movies'
import Series from '../pages/Series'
import ContactUs from '../pages/ContactUs'
import Home from "../pages/Home";
import {home_page_loader ,movie_loader, serie_loader } from "./loader";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                // loader: get_popular_movie()
                loader: home_page_loader,
              
                
            },
            {
                path: 'movies',
                element: <Movies />,
                loader: movie_loader,
            },
            {
                path: 'series',
                element: <Series />,
                loader: serie_loader
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            }

        ]
    }
])