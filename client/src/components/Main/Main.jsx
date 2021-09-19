import React from 'react';
import styles from './Main.module.scss';
import {Logo} from "../globalComponents/Logo";
import {MainIntro} from "./MainIntro";
import {MainBenefits} from "./MainBenefits";
import {MainContact} from "./MainContact";

export const Main = () => (
  <section className={styles.main}>
    <div className="container">
      <Logo />
      <MainIntro />
      <MainBenefits />
      <MainContact />
    </div>
  </section>
);
