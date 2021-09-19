import React from 'react';
import styles from './MainBenefits.module.scss';
import {TextBold} from "../../globalComponents/TextBold";
import {benefits} from "../../../api/apiStatic";
import {MainBenefitsItem} from "./MainBenefitsItem";

export const MainBenefits = () => (
  <section className={styles.benefits}>
    <h2 className={styles.title}>
      Why <TextBold>small business owners love</TextBold> AppCo?
    </h2>
    <p className={styles.description}>
      Our design projects are fresh and simple and will benefit your business
      greatly. Learn more about our work!
    </p>
    <div className={styles.items}>
      {
        benefits.map(benefit => (
          <MainBenefitsItem {...benefit} key={benefit.id}/>
        ))
      }
    </div>
  </section>
);
