import beeffried from './assets/Beef-fried-potato.jpg'
import Pancake from './assets/panwithhony.jpg'
import JapaneseRamen from './assets/ramen.jpg'
import MixedSalad from './assets/MixedSalad.jpeg'
import Meatball from './assets/beefmeatball.jpeg'
import Quinoa from './assets/GrilledChickenQuinoa.jpg'
import Spaghetti from './assets/Spaghetti-Bolognese.jpg'
import Avocado from './assets/avocado-toast.jpg'
import FruitSalad from './assets/fruit-salad.jpg'
import Asparagus from './assets/Salmon-Asparagus.jpeg'


 
 
 let fooddata = [
        {
          foodimage: beeffried,
          type: "Lunch",
          name: "Beef Steak with Fried Potato",
          rating: 4.9,
          totalOrder: 1456,
          interest: "26%",
          progress: "50%",
          description: "Juicy beef steak paired with crispy fried potatoes, perfect for lunch.",
          ingredients: [
            "2 tablespoons butter, softened, divided",
            "1 teaspoon minced fresh parsley",
            "1/2 teaspoon minced garlic",
            "1/4 teaspoon reduced-sodium soy sauce",
            "1 beef flat iron steak or boneless top sirloin steak (3/4 pound)",
            "1/8 teaspoon salt",
            "1/8 teaspoon pepper"
          ],
          nutrition: {
            calories: 217,
            water: "61%",
            protein: "26.1 grams",
            carbs: "0 grams",
            sugar: "0 grams",
            fiber: "0 grams",
            fat: "11.8 grams"
          }
        },
        {
          foodimage: Pancake,
          type: "Breakfast",
          name: "Pancake with Honey",
          rating: 4.7,
          totalOrder: 1320,
          interest: "30%",
          progress: "45%",
          description: "Fluffy pancakes drizzled with natural honey, a perfect morning treat.",
          ingredients: [
            "1 cup flour",
            "1 tablespoon sugar",
            "1/2 teaspoon baking powder",
            "1/4 teaspoon salt",
            "1 egg",
            "3/4 cup milk",
            "2 tablespoons honey"
          ],
          nutrition: {
            calories: 290,
            water: "50%",
            protein: "6 grams",
            carbs: "60 grams",
            sugar: "15 grams",
            fiber: "2 grams",
            fat: "8 grams"
          }
        },
        {
          foodimage: JapaneseRamen,
          type: "Lunch",
          name: "Japanese Beef Ramen",
          rating: 4.8,
          totalOrder: 1480,
          interest: "28%",
          progress: "52%",
          description: "Savory beef ramen with rich broth and tender noodles.",
          ingredients: [
            "200g ramen noodles",
            "100g beef slices",
            "1 boiled egg",
            "2 cups beef broth",
            "1 tablespoon soy sauce",
            "1 tablespoon miso paste",
            "1/2 teaspoon sesame oil"
          ],
          nutrition: {
            calories: 450,
            water: "60%",
            protein: "18 grams",
            carbs: "70 grams",
            sugar: "5 grams",
            fiber: "3 grams",
            fat: "15 grams"
          }
        },
        {
          foodimage: MixedSalad,
          type: "Lunch",
          name: "Mixed Salad",
          rating: 4.2,
          totalOrder: 980,
          interest: "20%",
          progress: "60%",
          description: "A healthy mix of fresh vegetables, perfect for a light lunch.",
          ingredients: [
            "2 cups mixed greens",
            "1/2 cup cherry tomatoes",
            "1/4 cup sliced cucumbers",
            "1/4 cup grated carrots",
            "2 tablespoons olive oil",
            "1 tablespoon balsamic vinegar",
            "Salt and pepper to taste"
          ],
          nutrition: {
            calories: 150,
            water: "85%",
            protein: "3 grams",
            carbs: "10 grams",
            sugar: "5 grams",
            fiber: "4 grams",
            fat: "10 grams"
          }
        },
        {
          foodimage: Meatball,
          type: "Snack",
          name: "Beef Meatball with Vegetable",
          rating: 4.5,
          totalOrder: 1120,
          interest: "26%",
          progress: "50%",
          description: "Savory beef meatballs served with a side of fresh vegetables.",
          ingredients: [
            "200g ground beef",
            "1/4 cup breadcrumbs",
            "1 egg",
            "1/4 cup grated parmesan",
            "1/2 teaspoon garlic powder",
            "1/4 teaspoon salt",
            "1/4 teaspoon pepper"
          ],
          nutrition: {
            calories: 320,
            water: "50%",
            protein: "25 grams",
            carbs: "20 grams",
            sugar: "2 grams",
            fiber: "3 grams",
            fat: "18 grams"
          }
        },
        {
          foodimage: Quinoa,
          type: "Lunch",
          name: "Grilled Chicken with Quinoa",
          rating: 4.6,
          totalOrder: 1280,
          interest: "24%",
          progress: "55%",
          description: "Grilled chicken breast served with a side of quinoa and vegetables.",
          ingredients: [
            "1 chicken breast",
            "1/2 cup quinoa",
            "1/4 cup diced bell peppers",
            "1/4 cup sliced onions",
            "1 tablespoon olive oil",
            "Salt and pepper to taste",
            "1/2 teaspoon paprika"
          ],
          nutrition: {
            calories: 350,
            water: "60%",
            protein: "30 grams",
            carbs: "40 grams",
            sugar: "3 grams",
            fiber: "5 grams",
            fat: "12 grams"
          }
        },
        {
          foodimage: Spaghetti,
          type: "Lunch",
          name: "Spaghetti Bolognese",
          rating: 4.8,
          totalOrder: 1400,
          interest: "32%",
          progress: "58%",
          description: "Classic spaghetti with a rich and hearty bolognese sauce.",
          ingredients: [
            "200g spaghetti",
            "150g ground beef",
            "1/2 cup tomato sauce",
            "1/4 cup diced onions",
            "2 cloves garlic, minced",
            "1/4 teaspoon salt",
            "1/4 teaspoon pepper"
          ],
          nutrition: {
            calories: 480,
            water: "55%",
            protein: "20 grams",
            carbs: "70 grams",
            sugar: "8 grams",
            fiber: "6 grams",
            fat: "18 grams"
          }
        },
        {
          foodimage: Avocado,
          type: "Breakfast",
          name: "Avocado Toast",
          rating: 4.3,
          totalOrder: 1040,
          interest: "22%",
          progress: "47%",
          description: "Creamy avocado spread on whole grain toast, topped with eggs.",
          ingredients: [
            "1 avocado",
            "2 slices whole grain bread",
            "1 boiled egg, sliced",
            "1/4 teaspoon salt",
            "1/4 teaspoon pepper",
            "1/2 teaspoon lemon juice",
            "1/4 teaspoon chili flakes"
          ],
          nutrition: {
            calories: 280,
            water: "70%",
            protein: "8 grams",
            carbs: "30 grams",
            sugar: "2 grams",
            fiber: "6 grams",
            fat: "18 grams"
          }
        },
        {
          foodimage: FruitSalad,
          type: "Snack",
          name: "Fruit Salad",
          rating: 4.4,
          totalOrder: 950,
          interest: "25%",
          progress: "50%",
          description: "A refreshing mix of seasonal fruits.",
          ingredients: [
            "1/2 cup diced watermelon",
            "1/2 cup diced pineapple",
            "1/2 cup sliced strawberries",
            "1/2 cup blueberries",
            "1 tablespoon honey",
            "1 tablespoon lemon juice",
            "1/4 teaspoon mint leaves"
          ],
          nutrition: {
            calories: 180,
            water: "90%",
            protein: "3 grams",
            carbs: "40 grams",
            sugar: "30 grams",
            fiber: "6 grams",
            fat: "2 grams"
          }
        },
        {
          foodimage: Asparagus,
          type: "Lunch",
          name: "Salmon with Asparagus",
          rating: 4.9,
          totalOrder: 1500,
          interest: "35%",
          progress: "65%",
          description: "Grilled salmon served with roasted asparagus and a lemon butter sauce.",
          ingredients: [
            "1 salmon fillet",
            "1/2 bunch asparagus",
            "1 tablespoon butter",
            "1/2 teaspoon lemon juice",
            "1/4 teaspoon salt",
            "1/4 teaspoon pepper",
            "1/4 teaspoon garlic powder"
          ],
          nutrition: {
            calories: 400,
            water: "55%",
            protein: "35 grams",
            carbs: "10 grams",
            sugar: "2 grams",
            fiber: "4 grams",
            fat: "25 grams"
          }
        },
        {
          foodimage: Avocado,
          type: "Breakfast",
          name: "Avocado Toast",
          rating: 4.3,
          totalOrder: 1040,
          interest: "22%",
          progress: "47%",
          description: "Creamy avocado spread on whole grain toast, topped with eggs.",
          ingredients: [
            "1 avocado",
            "2 slices whole grain bread",
            "1 boiled egg, sliced",
            "1/4 teaspoon salt",
            "1/4 teaspoon pepper",
            "1/2 teaspoon lemon juice",
            "1/4 teaspoon chili flakes"
          ],
          nutrition: {
            calories: 280,
            water: "70%",
            protein: "8 grams",
            carbs: "30 grams",
            sugar: "2 grams",
            fiber: "6 grams",
            fat: "18 grams"
          }
        },
        {
          foodimage: FruitSalad,
          type: "Snack",
          name: "Fruit Salad",
          rating: 4.4,
          totalOrder: 950,
          interest: "25%",
          progress: "50%",
          description: "A refreshing mix of seasonal fruits.",
          ingredients: [
            "1/2 cup diced watermelon",
            "1/2 cup diced pineapple",
            "1/2 cup sliced strawberries",
            "1/2 cup blueberries",
            "1 tablespoon honey",
            "1 tablespoon lemon juice",
            "1/4 teaspoon mint leaves"
          ],
          nutrition: {
            calories: 180,
            water: "90%",
            protein: "3 grams",
            carbs: "40 grams",
            sugar: "30 grams",
            fiber: "6 grams",
            fat: "2 grams"
          }
        },
        {
          foodimage: Asparagus,
          type: "Lunch",
          name: "Salmon with Asparagus",
          rating: 4.9,
          totalOrder: 1500,
          interest: "35%",
          progress: "65%",
          description: "Grilled salmon served with roasted asparagus and a lemon butter sauce.",
          ingredients: [
            "1 salmon fillet",
            "1/2 bunch asparagus",
            "1 tablespoon butter",
            "1/2 teaspoon lemon juice",
            "1/4 teaspoon salt",
            "1/4 teaspoon pepper",
            "1/4 teaspoon garlic powder"
          ],
          nutrition: {
            calories: 400,
            water: "55%",
            protein: "35 grams",
            carbs: "10 grams",
            sugar: "2 grams",
            fiber: "4 grams",
            fat: "25 grams"
          }
        }
    
      
 ]

 export default fooddata;