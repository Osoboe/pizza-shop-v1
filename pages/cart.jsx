import styles from "./cart/Cart.module.scss";
import Image from "next/image";
import { useState } from "react";

const cart = () => {
    return (
        <div className={styles.root}>
            <div className={styles.root__left}>
                <table className={styles.root__left__table}>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.root__left__table__imgContainer}>
                                <Image
                                src="/image/pizza.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.root__left__table__name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.root__left__table__extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.root__left__table__price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.root__left__table__quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.root__left__table__total}>$39.80</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.root__left__table__imgContainer}>
                                <Image
                                src="/image/pizza.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.root__left__table__name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.root__left__table__extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.root__left__table__price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.root__left__table__quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.root__left__table__total}>$39.80</span>
                        </td>
                    </tr>
                </table>
            </div>
                <div className={styles.root__right}>
                    <div className={styles.root__right__wrapper}>
                        <h2 >CART TOTAL</h2>
                        <div>
                            <b className={styles.root__right__wrapper__totalTextTitle}>Subtotal:</b>$79.60
                        </div>
                        <div>
                            <b className={styles.root__right__wrapper__totalTextTitle}>Discount:</b>$0.00
                        </div>
                        <div>
                            <b className={styles.root__right__wrapper__totalTextTitle}>Total:</b>$79.60
                        </div>
                        <button className={styles.root__right__wrapper__button}>CHECKOUT NOW!</button>
                    </div>
                </div>
        </div>      
    );
};

export default cart;