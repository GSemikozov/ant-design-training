import React from "react";

import HeroImg from "./hero-banner.jpg";
import styles from "./Hero.module.less";

const Hero = () => (
  <img src={HeroImg} className={styles.heroBanner} alt="hero-banner" />
);

export default Hero;
