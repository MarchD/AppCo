import React from 'react';
import styles from './MainIntro.module.scss';
import {mobile} from "../../../assets";
import {LinkButton} from "../../globalComponents/LinkButton";
import {TextBold} from "../../globalComponents/TextBold";

export const MainIntro = () => (
  <section className={styles.intro}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <TextBold>Brainstorming</TextBold> for desired perfect Usability
          </h1>
          <p className={styles.description}>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </p>
          <LinkButton text={'Views Stats'}/>
        </div>

        <img src={mobile} alt="mobile" className={styles.image}/>

      </div>
  </section>
);
