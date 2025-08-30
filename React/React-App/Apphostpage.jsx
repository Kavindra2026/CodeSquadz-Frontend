import React from "react";
import appicon from "./src/Application/appshare/icons/user.jpg";
import { Link } from "react-router-dom";
import { Appmenu } from "./src/Application/Controls/Appmentcontrol";

function Apphostpage() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 text-center p-5">
          <h1>App List</h1>
        </div>
        {Appmenu.map((app) => {
          return (
            <div className="col-md-3 mb-5">
              <Link
                to={app.applink}
                className="card cus-flex"
                style={{
                  backgroundImage: `url(${app.backimg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src={appicon}
                  className="card-img-top"
                  alt="apiname"
                  style={{ width: 100 }}
                />
                <h5 className="card-title">{app.appname}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Apphostpage;
