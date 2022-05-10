import Image from "next/image";
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.root} id='contact'>
      <div className={styles.root__img}>
        <Image src="/image/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.root__contacts}>
        <div className={styles.root__contacts__card}>
          <h2 className={styles.root__contacts__card__motto}>
            Ho-ho-ho, Yes
          </h2>
        </div>
        <div className={styles.root__contacts__card}>
          <h1 className={styles.root__contacts__card__title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.root__contacts__card__text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.root__contacts__card__text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
        </div>
        <div className={styles.root__contacts__card}>
          <h1 className={styles.root__contacts__card__title}>WORKING HOURS</h1>
          <p className={styles.root__contacts__card__text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.root__contacts__card__text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;