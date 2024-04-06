import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import HomeScreen from './Components/HomeScreen';
import Nepal from './Components/Nepal';
import EarthquakeForm from "./Components/EarthquakeForm";
import Australia from "./Components/Australia";
import Afghanistan from "./Components/Afghanistan";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />  ,
    },
    {
      path: "/nepal",
      element: <Nepal />,
    },
    {
      path: "/australia",
      element: <Australia />,
    },
    {
      path: "/afghanistan",
      element: <Afghanistan />,
    },
    {
      path: "/earth",
      element: <EarthquakeForm />,
    },
  ]);
  return (
    <div className="App">
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  );
}

export default App;
