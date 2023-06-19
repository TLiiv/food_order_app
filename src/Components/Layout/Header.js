import React from 'react';

import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';



function Header(props){
    return(
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton
                    onClick={props.onShowCart}
                >
                    Cart</HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of food!" />
            </div>
        </>
    )
}

export default Header;