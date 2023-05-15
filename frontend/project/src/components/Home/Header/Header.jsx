import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <section className={styles.headerContainer}>
      <h1 id={styles.headerText}>Beauty Concepts</h1>
    </section>
  );
}
