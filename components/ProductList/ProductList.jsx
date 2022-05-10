import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import products from '/mocks/products.json'

const ProductList = () => {
    return (
        <div className={styles.root} id="products">
            <h1 className={styles.root__title}>THE BEST PIZZA IN TOWN</h1>
            <div className={styles.root__wrapper}>
                {products.map((pizza) => {
                    return <ProductCard pizza={pizza} key={pizza.id}/>
                })}
    
            </div>
        </div>
    )
}

export default ProductList