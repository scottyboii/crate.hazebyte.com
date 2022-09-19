import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import image from '@site/static/img/crate.png';

import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className='title'>
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
        </div>
        <div className={clsx(styles.imageContainer)}>
          <img className={clsx(styles.heroImage)} src={image}></img>
        </div>
        <div className='content'>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
        </div>
        <div className={styles.buttons}>
          <Link className='button button--primary button--lg' to='/docs/introduction'>Get Started</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Home for the bukkit plugin, CrateReloaded.">
      <HomepageHeader />
    </Layout>
  );
}
