import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center" }}
      className="jumbotron"
    >
    <h1 className="display mb-4" >Simply Shelf-ish</h1>
      <img src="./book-icon.png" alt="book-icon" style={{ height: "250px" }} />
    </div>
  );
}

export default Jumbotron;