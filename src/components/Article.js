import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ text }) => (
  <div>
    <h1>{text.title}</h1>
    <span>{text.date}</span>
    <p>{text.text}</p>
  </div>
);

Article.propTypes = {
  text: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
