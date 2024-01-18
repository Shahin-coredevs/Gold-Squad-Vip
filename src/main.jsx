import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'e
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layouts/Layout.jsx';
import SignIn from './Components/Authentication/SignIn.jsx';
import Dashboard from './Pages/Dashboard/Dashboard';
import ExchangesListing from './Pages/Exchanges-listing/ExchangesListing';
import MarketingMovingNews from './Pages/Marketing-Moving-News/MarketingMovingNews';
import CoinNews from './Pages/CoinNews/CoinNews';
import NFTAlpha from './Pages/NFTAlpha/NFTAlpha';
import AirdropsAlerts from './Pages/AirdropsAlerts/AirdropsAlerts';
import ResourceHub from './Pages/Resource-hub/ResourceHub';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
          path:"/dashboard",
          element: <Dashboard/>
        
      },
      {
        path:"/exchanges-listing",
        element:<ExchangesListing/>
      },
      {
       
        path:"/marketing-moving-news",
        element: <MarketingMovingNews/>
      },
      {
        path: '/coin-news',
        element: <CoinNews/>
      },
      {
        path: '/nftalpha',
        element : <NFTAlpha/>
      },
      {
        path: '/airdrop-alerts',
        element: <AirdropsAlerts/>
      },
      {
        path: '/resource-hub',
        element: <ResourceHub/>
      }
    ]
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
