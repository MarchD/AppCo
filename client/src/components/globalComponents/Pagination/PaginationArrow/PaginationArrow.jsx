import React from 'react';
import styles from './PaginationArrow.module.scss';
import classNames from "classnames";
import {arrow} from "../../../../assets";

export const PaginationArrow = ({right, onClick}) => (
  <img
    src={arrow}
    className={classNames(styles.arrow, {[styles.right]: right})}
    alt="arrow"
    onClick={onClick}
  />
);
