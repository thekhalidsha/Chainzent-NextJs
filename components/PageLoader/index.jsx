import React from 'react';
import style from'./PageLoader.module.css';
import Head from 'next/head';
const PageLoader = () => {
  return (
    <div className={style.loader}>
      <Head>
        <title>Chainzent</title>
      </Head>
      <img src="/chainzent_logo_banner.png" alt="Chainzent_Loader" className={style.loader_image} />
    </div>
  );
};

export default PageLoader;
