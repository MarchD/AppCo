import React from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";

export const Button = ({text, className}) => (
  <button className={classNames(styles.button, {[className]: className})}>
    {text}
  </button>
);
