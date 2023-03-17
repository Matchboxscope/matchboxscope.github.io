import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';



type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};




const FeatureList = [
  {
    title: 'Anglerfish',
    imageUrl: 'img/Anglerfish_lunchbox_m12large_flipped_v0.png',
    description: (
      <>
        Underwater Microscopy.
      </>
    ),
  },
  {
    title: 'Matchboxscope',
    imageUrl: 'img/Matchboxscope_VCM_v1.png',
    description: (
      <>
        One-the-go microscope for 5€.
      </>
    ),
  },
  {
    title: 'ESPpectrometer',
    imageUrl: 'img/Spectroscope_v0.png',
    description: (
      <>
        Browser-based 10€ Spectrometer.
      </>
    ),
  },
  {
  title: 'Fluidicscope',
    imageUrl: 'img/Planktoscope_Mini_v0.png',
    description: (
      <>
        Compact High-throughput µFluidics-Microscope.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} height="200" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
