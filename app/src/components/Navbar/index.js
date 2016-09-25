import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Search from 'grommet/components/Search';
import LogoImage from './logo.png';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { IndexLink } from 'react-router';

const Navbar = () => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <img className={styles.logo} src={LogoImage} alt="logo"/>
      </Title>
      <Menu direction="row" align="center" responsive={false}>
        <Search dropAlign={{ right: 'right' }} />
        <IndexLink to="/" activeClassname="active">
          Home
        </IndexLink>
      </Menu>
    </Header>
  </div>
);

export default cssModules(Navbar, styles);
