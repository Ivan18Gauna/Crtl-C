import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products } from "./components/Products";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    
  <React.StrictMode>
      {/* <RouterProvider router={router} store={store} /> */}
      <Provider router={router} store={store}>
        <App/>
      </Provider>

      
  </React.StrictMode>
    
);
