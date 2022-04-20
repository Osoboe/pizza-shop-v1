import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.root__item}>
                <div className={styles.root__item__callButton}>
                    <Image src="/image/telephone.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.root__texts}>
                    <div className={styles.root__texts__item}>ORDER NOW!</div>
                    <div className={styles.root__texts__item}>8 800 555 35 35</div>
                </div>
            </div>
            <div className={styles.root__item}>
                <ul className={styles.root__item__list}>
                    <Link className={styles.root__item__list__btn} href="/" passHref>
                        <li className={styles.root__item__list__elem}>Homepage</li>
                    </Link>
                   <li className={styles.root__item__list__elem}>Products</li>
                   <li className={styles.root__item__list__elem}>Contact</li>
                </ul>
            </div>
            <div className={styles.root__item}>
            <Link className={styles.root__item__list__btn} href="/cart" passHref>
                <div className={styles.root__item__cart}>
                    <Image src="/image/cart.png" alt="" width="30px" height="30px" />
                    <div className={styles.root__item__cart__counter}>3</div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Navbar