import React from "react";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({ title }) {
  return <h6 className={styles.sectionHeader}>{title}</h6>;
}
