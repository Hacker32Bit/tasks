import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import NewsCard from "../NewsCard";
import Footer from "../Footer";

import "./app.css"


export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <Footer />
    </>
  );
}
