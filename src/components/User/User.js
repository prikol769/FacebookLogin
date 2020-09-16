import React from 'react';

import styles from './User.css';

const User = (props) => (
  <div className={styles.User}>
    <img src={props.image} alt={props.nameUser} />
    <h1>{props.nameUser}</h1>
  </div>
);

export default User;
