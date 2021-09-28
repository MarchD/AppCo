import React from 'react';
import styles from './PageNotFound.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/404.json';

export const PageNotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'canvas',
        renderedSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={styles.page}>
            <Lottie
                options={defaultOptions}
                height={500}
                width={1000}
            />
        </div>
    )
};
