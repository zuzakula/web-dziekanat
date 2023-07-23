import * as React from "react";
import { navData } from "../navigationData";
import styles from "../sidenav.module.css";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <div className={styles.menu}>
      {navData.map((item) => {
        return (
          <a href={item.link} key={item.text} className={styles.sideitem}>
            <Button>{item.icon}</Button>
            <span className={styles.linkText}>{item.text}</span>
          </a>
        );
      })}
    </div>
  );
}

export default Navbar;
