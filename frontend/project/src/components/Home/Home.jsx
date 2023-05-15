import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import styles from "./Home.module.css";
import Featured from "./Featured/Featured";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className={styles.mainContainer} id={styles.mainContainer}>
      <Navbar />
      <Header />
      <Featured />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}
