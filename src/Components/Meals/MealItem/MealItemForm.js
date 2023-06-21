import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';
import { useRef, useState } from 'react';

function MealItemForm(props) {
    const [amountIsvalid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    
    const submitHandler= (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value; //always a string 
        const enteredAmountNumber= +enteredAmount; //conversion to num
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input label="Amount" 
            ref = {amountInputRef}
            input={{
                id:'amount_' + props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }}/>
            <button>+ Add</button>
            {!amountIsvalid && <p>Please enter a valid amount (1 - 5).</p>}
        </form>
    )
}

export default MealItemForm;