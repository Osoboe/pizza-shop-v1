import styles from "./Product.module.scss";
import Image from "next/image";
import products from '/mocks/products.json'

export const getStaticPaths = async () => {
  const paths = products.map(pizza => {
    return {
      params: { id: pizza.id}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id-1;
  const data = products[id];

  return {
    props: { pizza: data}
  }
}

const Product = ({pizza}) => {

  return (
      <div className={styles.root}>
        <div className={styles.root__left}>
          <div className={styles.root__left__imgContainer}>
            <Image src={pizza.src} objectFit="contain" layout="fill" alt="" />
          </div>
        </div>
        <div className={styles.root__right}>
          <h1 className={styles.root__right__title}>{pizza.title}</h1>
          <span className={styles.root__right__price}>{pizza.price}</span>
          <p className={styles.root__right__desc}>{pizza.desc}</p>
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