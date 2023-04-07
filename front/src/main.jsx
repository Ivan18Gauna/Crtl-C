import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products } from "./components/Products";
import  Dashboard  from "./components/Admin/Dashboard";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://localhost:3001";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/products/:category",
    element: (
      <div>
        <Products />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard/>
      </div>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
    
);
