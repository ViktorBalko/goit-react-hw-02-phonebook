import React from 'react';
import PropTypes from 'prop-types';

const ContactFilter = ({ value, onChange }) => {
  return (
    <label>
      <input
        type="text"
        value={value}
        placeholder={'..to Find'}
        onChange={onChange}
      />
    </label>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
