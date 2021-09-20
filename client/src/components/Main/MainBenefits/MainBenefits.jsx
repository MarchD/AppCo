import React from 'react';
import styles from './MainBenefits.module.scss';
import {TextBold} from "../../globalComponents/TextBold";
import {benefits} from "../../../api/apiStatic";
import {MainBenefitsItem} from "./MainBenefitsItem";
import {InView} from "react-intersection-observer";
import classNames from "classnames";

export const MainBenefits = () => (
    <section className={styles.benefits}>
        <h2 className={styles.title}>
            Why <TextBold>small business owners love</TextBold> AppCo?
        </h2>
        <p className={styles.description}>
            Our design projects are fresh and simple and will benefit your business
            greatly. Learn more about our work!
        </p>
        <InView>
            {({inView, ref}) => (
                <div className={classNames(styles.items, {[styles.appear]: inView})} ref={ref}>
                    {
                        benefits.map(benefit => (
                            <MainBenefitsItem {...benefit} key={benefit.id}/>
                        ))
                    }
                </div>
            )}
        </InView>
    </section>
);
