import React from "react";
import styles from "src/components/layout.module.css";

export const siteTitle = "Next.js Sample Website";

const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
