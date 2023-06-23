import { useContext } from 'react';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

import styles from './Cart.module.css';

function Cart(props) {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveiHandler = (id) => { };

    const cartItemAddHandler = (item) => { }

    const cartItems = <ul className={styles['cart-items']}>{cartCtx.items.map((item) => (
        <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={cartItemRemoveiHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
        
        />))}</ul>;

    return (

        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onClose} className={styles['button-alt']}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}

            </div>
        </Modal>
    )
}

export default Cart;