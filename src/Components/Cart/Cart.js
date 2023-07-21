import { useContext, useState } from 'react';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

import styles from './Cart.module.css';

function Cart(props) {
    const [isCheckout, setIsCheckout] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveiHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const cartItems = <ul className={styles['cart-items']}>{cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveiHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}

        />))}</ul>;

    const modalActions = <div className={styles.actions}>
        <button onClick={props.onClose} className={styles['button-alt']}>Close</button>
        {hasItems && !isCheckout && <button className={styles.button} onClick={orderHandler}>Order</button>}
    </div>

    return (

        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Modal>
    )
}

export default Cart;