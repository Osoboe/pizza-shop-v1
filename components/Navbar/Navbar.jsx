import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link'

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
                    <Link href='/'>
                        <li className={styles.root__links__list__item}>Homepage</li>
                    </Link>
                    <Link href='#products' scroll={false}>
                        <li className={styles.root__links__list__item}>Products</li>
                    </Link>
                    <Link href='#contact' scroll={false}>
                        <li className={styles.root__links__list__item}>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.root__cartwrapper}>
                <Link href="/cart" passHref>
                    <div className={styles.root__cartwrapper__cart}>
                        <Image src="/image/cart.png" alt="" width="30px" height="30px" />
                        <div className={styles.root__cartwrapper__cart__counter}>3</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar