import React from "react";
import Logo from "~/components/Logo/Logo";

import styles from "./Header.module.less";

const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
);

export default Header;
