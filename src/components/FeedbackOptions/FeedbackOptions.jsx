import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            className={
              option === 'good'
                ? 'btn btn-success'
                : option === 'neutral'
                ? 'btn btn-warning'
                : option === 'bad'
                ? 'btn btn-danger'
                : 'btn btn-secondary'
            }
            onClick={() => onLeaveFeedback(option)}
          >
            {option === 'good' ? (
              <i className="bi bi-hand-thumbs-up"></i>
            ) : option === 'neutral' ? (
              <i className="bi bi-emoji-neutral"></i>
            ) : option === 'bad' ? (
              <i className="bi bi-hand-thumbs-down"></i>
            ) : (
              option
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
