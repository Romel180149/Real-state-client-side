import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/layout.jsx';
import Home from './layout/Pages/Home/Home.jsx';
import AllProperties from './layout/Pages/AllProperties/AllProperties.jsx';
import Details from './layout/Pages/Details/Details.jsx';
import Provider from './Provider/Provider.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import DashboardLayout from './DashboardLayout/DashboardLayout.jsx';
// import tanstack 
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from '@tanstack/react-query'
import Wishlist from './DashboardLayout/Dash_Pages/UserDashboard/Wishlist/Wishlist.jsx';
import MakeAnOffer from './DashboardLayout/Dash_Pages/MakeAnOffer/MakeAnOffer.jsx';
import Property_bought from './DashboardLayout/Dash_Pages/UserDashboard/Property_bought/Property_bought.jsx';
import UserProfile from './DashboardLayout/Dash_Pages/UserDashboard/userProfile/userProfile.jsx';
import ManageUsers from './DashboardLayout/Dash_Pages/AdminDashboard/ManageUsers/ManageUsers.jsx';
// import AddFood from './DashboardLayout/Dash_Pages/AgentDashboard/AddProperty/AddProperty.jsx';
import AddProperty from './DashboardLayout/Dash_Pages/AgentDashboard/AddProperty/AddProperty.jsx';
import AdminRoute from './PrivateRoutes/AdminRoute.jsx';
import MyAddedProperties from './DashboardLayout/Dash_Pages/AgentDashboard/MyAddedProperties/MyAddedProperties.jsx';
import UpdateProperty from './DashboardLayout/Dash_Pages/AgentDashboard/MyAddedProperties/UpdateProperty.jsx';
import RequestedProperties from './DashboardLayout/Dash_Pages/AgentDashboard/RequestedProperties/RequestedProperties.jsx';
import Payment from './DashboardLayout/Dash_Pages/Pyment/Payment.jsx';
import ManageProperties from './DashboardLayout/Dash_Pages/AdminDashboard/ManageProperties/ManageProperties.jsx';
import MyReviews from './DashboardLayout/Dash_Pages/UserDashboard/MyReviews/MyReviews.jsx';
import ManageReviews from './DashboardLayout/Dash_Pages/AgentDashboard/ManageReviews/ManageReviews.jsx';
import Error from './Error/Error.jsx';
import MySoldProperties from './DashboardLayout/Dash_Pages/AgentDashboard/MySoldProperties/MySoldProperties.jsx';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx';
import AgentRoute from './PrivateRoutes/AgentRoute.jsx';
import CheckoutForm from './DashboardLayout/Dash_Pages/Pyment/CheckoutForm.jsx';
import Advertisement from './layout/Pages/Home/HomeComponents/Adevertisement/Advertisement.jsx';
import Contact from './layout/Shared/Navbar/Contact.jsx';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'contact',
        element:<PrivateRoutes><Contact></Contact></PrivateRoutes>
      },
      {
        path: "all_properties",
        element: <PrivateRoutes><AllProperties></AllProperties></PrivateRoutes>
      },
      {
        path: "all_properties/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://reak-state-server.vercel.app/property/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:'/addproperty',
        element:<AddProperty></AddProperty>
      },
      {
        path:'/myaddedproperties',
        element:<MyAddedProperties></MyAddedProperties>
      },
      {
        path:'/requestedproperties',
        element:<RequestedProperties></RequestedProperties>
      },
      {
        path:'/mysoldproperties',
        element:<MySoldProperties></MySoldProperties>
      },
      {
        path:'/manageproperties',
        element:<ManageProperties></ManageProperties>
      },
      {
        path:'/adminprofile',
        element:<UserProfile></UserProfile>
      },
      {
        path:'/manageusers',
        element:<ManageUsers></ManageUsers>
      },
      {
        path:'/managereview',
        element:<ManageReviews></ManageReviews>
      },
      {
        path:'/propertybought',
        element:<Property_bought></Property_bought>
      },
      {
        path:'/soldproperties',
        element:<MySoldProperties></MySoldProperties>
      },
      {
        path:'/myreview',
        element:<MyReviews></MyReviews>
      },
      {
        path:'/payments',
        element:<Payment></Payment>

      },
      {
      path:'/update',
      element:<UpdateProperty></UpdateProperty>},
      {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>
      }
    
    
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path: 'wishlist',
        element: <Wishlist></Wishlist>
      },
      {
        path: 'wishlist/makeOffer/:id',
        element: <MakeAnOffer></MakeAnOffer>
      },
      {
        path: 'property_bought',
        element: <Property_bought></Property_bought>
      },
      {
        path: 'user_profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: 'property_bought/payment/:id',
        element: <Payment></Payment>
      },
      {
        path: 'myReviews',
        element: <MyReviews></MyReviews>
      },
     


      // Agent routes starts here
      {
        path: 'agent_profile',
        element: <AgentRoute><UserProfile></UserProfile></AgentRoute>
      },
      {
        path: 'add_property',
        element: <AgentRoute><AddProperty></AddProperty></AgentRoute>
        // loader: ({ params }) => fetch('property.json')
      },
      {
        path: 'myAddedProperties',
        element: <AgentRoute><MyAddedProperties></MyAddedProperties></AgentRoute>
      },
      {
        path: 'myAddedProperties/updateProperty/:id',
        element: <AgentRoute><UpdateProperty></UpdateProperty></AgentRoute>
      },
      {
        path: 'requestedProperties',
        element: <AgentRoute><RequestedProperties></RequestedProperties></AgentRoute>
      },
      {
        path: 'mySoldProperties',
        element: <AgentRoute><MySoldProperties></MySoldProperties></AgentRoute>
      },


      // Admin routes starts here
      {
        path: 'admin_profile',
        element: <AdminRoute><UserProfile></UserProfile></AdminRoute>
      },
      {
        path: 'manage_users',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        // element: <ManageUsers></ManageUsers>
      },
      {
        path: 'manageProperties',
        element: <AdminRoute><ManageProperties></ManageProperties></AdminRoute>
      },
      {
        path: 'manageReviews',
        element: <AdminRoute><ManageReviews></ManageReviews></AdminRoute>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
