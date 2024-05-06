import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.value}>Good: {good}</p>
      <p className={css.value}>Neutral: {neutral}</p>
      <p className={css.value}>Bad: {bad}</p>
      <p className={css.value}>Total: {total}</p>
      <p className={css.value}>Positive Feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
