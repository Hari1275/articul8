import React from 'react';
import Layout from '../app/layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
