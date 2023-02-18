import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const ContactFilter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      className={styles.ContactFilterInput}
      placeholder="..to find"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
    ></input>
  );
};

export default ContactFilter;

ContactFilter.propeTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
