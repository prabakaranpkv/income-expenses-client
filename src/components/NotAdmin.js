import React from "react";
const NotAdmin = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <h1 className="text-danger">You are not an admin</h1>
      <img
        alt="NotAdmin"
        className=" img-fluid m-3"
        src="https://www.404.ie/assets/img/logo_blue.png"
      />
    </div>
  );
};

export default NotAdmin;
