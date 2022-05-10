import styles from './Navbar.module.scss';
import Image from 'next/image';
import { Link }  from 'react-scroll'

const Navbar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.root__phone}>
                <div className={styles.root__phone__callButton}>
                    <Image src="/image/telephone.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.root__phone__texts}>
                    <div className={styles.root__phone__texts__item}>ORDER NOW!</div>
                    <div className={styles.root__phone__texts__item}>8 800 555 35 35</div>
                </div>
            </div>
            <div className={styles.root__links}>
                <ul className={styles.root__links__list}>
                    <a className={styles.root__links__list__item} href="/" passHref>
                        <li>Homepage</li>
                    </a>
                   <Link to="products" spy={true} smooth={true} offset={-100} duration={500} className={styles.root__links__list__item}>Products</Link>
                   <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className={styles.root__links__list__item}>Contact</Link>
                </ul>
            </div>
            <div className={styles.root__cartwrapper}>
                <a href="/cart" passHref>
                    <div className={styles.root__cartwrapper__cart}>
                        <Image src="/image/cart.png" alt="" width="30px" height="30px" />
                        <div className={styles.root__cartwrapper__cart__counter}>3</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Navbar