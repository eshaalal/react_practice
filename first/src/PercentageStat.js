import React from 'react';
import PropTypes from 'prop-types';

function PercentageStat({ label, score = 199, total = Math.max(1, score) }) {
  return (
    <div>
      <h6>{label}</h6>
      <span>{Math.round((score / total) * 100)}%</span>
    </div>
  );
}

PercentageStat.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number,
  total: PropTypes.number,
};

export default PercentageStat;
