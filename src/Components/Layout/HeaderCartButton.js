import { useContext,useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

function HeaderCartButton (props) {
    const [btnIsHighlighted,setBtnIsHighlighted]= useState(false);
   const cartCtx = useContext(CartContext);
   const numberOfCartItems = cartCtx.items.reduce((currentNum,item)=>{
    return currentNum + item.amount
   },0) 
   
   const {items } = cartCtx;
   const btnStyles=`${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

   useEffect(()=>{
    if(items.length === 0){
        return;
    }
    const timer = setTimeout(()=>{
        setBtnIsHighlighted(false)
    },300);
   
    setBtnIsHighlighted(true);
    return() => {
        clearTimeout(timer)
    }
   },[items])

    return (
        <button className={btnStyles} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;