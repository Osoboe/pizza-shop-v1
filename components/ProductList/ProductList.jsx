import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import products from '/mocks/products.json'

const ProductList = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.root__title}>THE BEST PIZZA IN TOWN</h1>
             <p className={styles.root__desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.root__wrapper}>
                {products.map((pizza) => {
                    return <ProductCard pizza={pizza} key={0}/>
                })}
    
            </div>
        </div>
    )
}

export default ProductList