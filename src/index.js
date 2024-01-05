import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/error-page";
import Bar from "./components/bar/Bar";
import News from "./routes/news";
import Blog from "./routes/blog";
import Post, { loader as postLoader } from "./routes/post";
import Root, { loader as rootLoader } from "./routes/root";
import { ApolloProvider} from '@apollo/client';
import { client } from './lib/appolo'
import Home from './components/Home'
import Photo from "./routes/photo";
import Album, { loader as albumLoader }from "./routes/album";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:postId",
        loader: postLoader,
        element: <Post />,
      },
      {
        path: "bar",
        element: <Bar />,
      },
      {
        path: "photo",
        element: <Photo />,
      },
      {
        path: "photo/:albumId",
        loader: albumLoader,
        element: <Album />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
