import React from "react";
import styles from "./Featured.module.css";
import image1 from "../../../images/image1.jpeg";
import image2 from "../../../images/image2.jpeg";

export default function Featured() {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.featuredRowLayout}>
        <h6>services</h6>
        <img src={image1} alt="backwash units" />
      </div>
      <div className={styles.featuredColumnLayout}>
        <h6>services</h6>
        <img src={image2} alt="photoshoot hairstyle" />
      </div>
    </section>
  );
}
