import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Footer.module.css";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <SectionHeader title="Made in" />
      <h1 className={styles.location} id={styles.locationText}>
        Vilnius
      </h1>
      <div className={styles.icons}>
        <IoLogoFacebook />
        <IoLogoInstagram />
        <IoLogoTwitter />
      </div>
      <p>@ Copyright Your Beauty Salon 2023</p>
    </section>
  );
}
