/**
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 * Protected Route Component
 */
 import React from "react";
 import { Redirect, Route } from "react-router-dom";
 
 interface IProtectedRoute {
   render: any;
   path: String;
   exact: boolean;
 }
 
 /**
  * Funtion to check if the user is logged in and allow the restricted routes accordingly
  * @function ProtectedRoute
  * @param param0
  * @returns
  */
 const ProtectedRoute = ({
   render: Component,
   path,
   ...rest
 }: IProtectedRoute): React.ReactElement => {
   return (
     <Route
       {...rest}
       render={(props: any) =>
         localStorage.getItem("token") ? (
           <Component />
         ) : (
           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
         )
       }
     />
   );
 };
 
 export default ProtectedRoute;