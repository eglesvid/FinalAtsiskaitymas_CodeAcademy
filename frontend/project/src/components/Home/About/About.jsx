import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <SectionHeader title="about" />
      <p id={styles.headline}>
        Indulge in the ethereal allure of our enchanting beauty sanctuary. Immerse yourself in a
        realm where artistry and elegance intertwine. Unveil your inner radiance with our masterful
        touch, as we curate exquisite make-up looks, fashion captivating hairstyles, and orchestrate
        seamless photoshoot experiences. Elevate your beauty journey to celestial heights with us.
      </p>
    </section>
  );
}
