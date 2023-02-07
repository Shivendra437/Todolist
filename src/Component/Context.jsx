import React, { createContext } from 'react';


const contextapi=createContext();
 export default function Context({children,data}){

   return(
     <contextapi.Provider value={data}>
             {children}
       </contextapi.Provider>
    
   )
 }
 export {contextapi};