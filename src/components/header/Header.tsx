import React from 'react';

import {NavLink} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {PATH} from '../../utils/constants/routeConstants';

import styles from './header.module.scss';

export const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
        <NavLink to={PATH.home}>
            <Logo/>
        </NavLink>
    </div>
  );
};

export default Header;
