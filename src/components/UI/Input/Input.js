import React from 'react';

import styles from './Input.css';

const Input = (props) => {
  return (
    <div className={styles.Input}>
      <input
        placeholder={props.placeholderInput}
        className={styles.InputElement}
        value={props.value}
        onChange={props.changed}
      />
    </div>
  );
};

export default Input;
