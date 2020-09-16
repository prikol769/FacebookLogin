import React from 'react'

import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './Layout.css';


const Layout = (props) => (
    <Aux>
    <main className={styles.Content}>{props.children}</main>
    </Aux>
  );

export default Layout;
