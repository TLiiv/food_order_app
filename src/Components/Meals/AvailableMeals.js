import { useEffect,useState } from 'react';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

import styles from './AvailableMeals.module.css';



function AvailableMeals() {

const [meals,setMeals] = useState([]);

const url = 'https://food-app-5b53c-default-rtdb.europe-west1.firebasedatabase.app/meals.json';

const fetchMeals = async() => {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData)
  const loadedMeals = [];
  for(const key in jsonData){
    loadedMeals.push({
      id:key,
      name:jsonData[key].name, //jsonData[key]<--- võtab siis data kaustast key ja siis sealt .name-ga saad nime
      description:jsonData[key].description,
      price:jsonData[key].price,
      key:key
    })
  };
  setMeals(loadedMeals);
};


useEffect(()=> {
   fetchMeals()
},[])

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )


}

export default AvailableMeals;