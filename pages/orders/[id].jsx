import styles from "../orders/Order.module.scss";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.root}>
        <div className={styles.root__left}>
            <div className={styles.root__left__row}>
                <table className={styles.root__left__row__table}>
                    <tr className={styles.root__left__row__table__trTitle}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                    </tr>
                    <tr className={styles.root__left__row__table__tr}>
                    <td>
                        <span className={styles.root__left__row__table__tr__id}>129837819237</span>
                    </td>
                    <td>
                        <span className={styles.root__left__row__table__tr__name}>John Doe</span>
                    </td>
                    <td>
                        <span className={styles.root__left__row__table__tr__address}>Elton st. 212-33 LA</span>
                    </td>
                    <td>
                        <span className={styles.root__left__row__table__tr__total}>$79.80</span>
                    </td>
                    </tr>
                </table>
            </div>
            <div className={styles.root__left__row}>
                    <div className={statusClass(0)}>
                        <Image src="/image/paid.png" width={30} height={30} alt="" />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                        <Image
                            className={styles.checkedIcon}
                            src="/image/checked.png"
                            width={20}
                            height={20}
                            alt=""
                        />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/image/bake.png" width={30} height={30} alt="" />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                        <Image
                            className={styles.checkedIcon}
                            src="/image/checked.png"
                            width={20}
                            height={20}
                            alt=""
                        />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/image/bike.png" width={30} height={30} alt="" />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                    <Image
                        className={styles.checkedIcon}
                        src="/image/checked.png"
                        width={20}
                        height={20}
                        alt=""
                    />
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/image/delivered.png" width={30} height={30} alt="" />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                    <Image
                        className={styles.checkedIcon}
                        src="/image/checked.png"
                        width={20}
                        height={20}
                        alt=""
                    />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.root__right}>
            <div className={styles.root__right__wrapper}>
                <h2 className={styles.root__right__wrapper__title}>CART TOTAL</h2>
                <div className={styles.root__right__wrapper__totalText}>
                    <b className={styles.root__right__wrapper__totalText__totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.root__right__wrapper__totalText}>
                    <b className={styles.root__right__wrapper__totalText__totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.root__right__wrapper__totalText}>
                    <b className={styles.root__right__wrapper__totalText__totalTextTitle}>Total:</b>$79.60
                </div>
                <button disabled className={styles.root__right__wrapper__button}>
                    PAID
                </button>
            </div>
        </div>
    </div>
  );
};

export default Order;