import React from 'react';
import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} ${styles.flexRow}`}>
    <div
      className={`${styles.flexCenter} w-70 h-70 rounded-24 bg-#323F5D`}
    >
      <p className="font-bold text-20 text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-30 font-normal text-18 text-#B0B0B0 leading-32.4">
      {text}
    </p>
  </div>
);

export default StartSteps;
