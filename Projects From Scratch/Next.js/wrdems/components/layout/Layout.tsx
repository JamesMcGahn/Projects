import React, { ReactNode } from 'react';
import Nav from './Nav';
import Head from 'next/head';
import classes from '../../styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = '' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />
    </header>
    <div className={classes.main}>{children}</div>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
);

export default Layout;
