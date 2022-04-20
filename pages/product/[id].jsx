import styles from "./Product.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import products from '/mocks/products.json'

const Product = () => {
  const {query} = useRouter()

  return (
      <div className={styles.root}>
        <div className={styles.root__left}>
          <div className={styles.root__left__imgContainer}>
            <Image src={products[query.id - 1].src} objectFit="contain" layout="fill" alt="" />
          </div>
        </div>
        <div className={styles.root__right}>
          <h1 className={styles.root__right__title}>{products[query.id - 1].title}</h1>
          <span className={styles.root__right__price}>{products[query.id - 1].price}</span>
          <p className={styles.root__right__desc}>{products[query.id - 1].desc}</p>
          <h3 className={styles.root__right__choose}>Choose the size</h3>
          <div className={styles.root__right__sizes}>
            <div className={styles.root__right__sizes__size} onClick={() => handleSize(0)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.root__right__sizes__number}>Small</span>
            </div>
            <div className={styles.root__right__sizes__size} onClick={() => handleSize(1)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.root__right__sizes__number}>Medium</span>
            </div>
            <div className={styles.root__right__sizes__size} onClick={() => handleSize(2)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.root__right__sizes__number}>Large</span>
            </div>
          </div>
          <h3 className={styles.root__right__choose}>Choose additional ingredients</h3>
          <div className={styles.root__right__ingredients}>
          <div className={styles.root__right__option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.root__right__option__checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.root__right__option}>
            <input
              className={styles.root__right__checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.root__right__option}>
            <input
              className={styles.root__right__checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.root__right__option}>
            <input
              className={styles.root__right__checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.root__right__sizes__add}>
            <input type="number" defaultValue={1} className={styles.root__right__sizes__add__quantity}/>
            <button className={styles.root__right__sizes__add__button}>Add to Cart</button>
        </div>
        </div>
      </div>
    );
  };
export default Product;