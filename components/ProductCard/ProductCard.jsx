import Image from "next/image";
import styles from './ProductCard.module.scss';
import Link from "next/link";

const ProductCard = ({ pizza }) => {
  return (
    <div className={styles.root}>
      <Link href={'/product/'+ pizza.id} key={pizza.id} passHref>
        <Image className={styles.root__img} src={pizza.src} alt="" width="290" height="290" />
      </Link>
      <h1 className={styles.root__title}>{pizza.title}</h1>
      <span className={styles.root__price}>{pizza.price}</span>
      <p className={styles.root__desc}>
        {pizza.desc}
      </p>
    </div>
  );
};

export default ProductCard;