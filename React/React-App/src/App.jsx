import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Application/customsource/Global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apploginpage from "./Application/appauth/Apploginpage";
import Apphostpage from "../Apphostpage";
import Userloginpage from "./Application/users/userauth/Userloginpage";
import Userregistorpage from "./Application/users/userauth/Userregistorpage";
import AppRegpage from "./Application/appauth/AppRegpage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
 
          <Route path="apploginpage" element={<Apploginpage />}></Route>
           <Route path="" element={<AppRegpage />}></Route>
          <Route path="apppage" element={<Apphostpage />}></Route>
          <Route path="user-management" element={<Userloginpage />}></Route>
          <Route
            path="user-management/registor"
            element={<Userregistorpage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
