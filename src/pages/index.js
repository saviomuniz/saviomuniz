import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.containerHero}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="introduction">
          I'm a Software Engineer from Campina Grande, PB, Brazil, passionate about technology, video-games and cooking.
          I'm also a father of 3, one of each is a human ( 🐶  🐈  👦🏼 ). I've been studying Computer Science ever since 2015
          and from that moment forward I've worked with different spectrums and technologies, currently I'm very eager to
          deep diving and expertising at Kubernetes and CNCF space.
        </p>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

const Section = ({img, title, link}) => (
  <div className={styles.section}>
    <img className={styles.sectionImg} src={`./img/home/${img}.svg`}/>
    <Link className={clsx("button button--primary", styles.ctaButton)} to={link}>{title}</Link>
  </div>
)

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Software Engineer from Campina Grande">
      <div className={styles.homeContainer}>
        <HomepageHeader />
        <div>
          <div className={styles.ctas}>
            <Section img={"undraw_online_cv_qy9w"} title="RESUME" link="/resume"/>
            <Section img={"undraw_typewriter_i8xd"} title="ARTICLES" link="/docs/health-improvement"/>
            <Section img={"undraw_Notebook_re_id0r"} title="JOURNAL" link="/blog"/>
          </div>
        </div>  
      </div>
    </Layout>
  );
}

