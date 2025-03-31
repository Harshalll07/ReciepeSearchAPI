// import React, { useState } from 'react';
// import './recipe.module.css';

// const ReceipeSearch = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);

//   const YOUR_APP_ID = 'd40c2f29'; // Replace with your Edamam app ID
//   const YOUR_APP_KEY = '1fcda9c8cf9b47c9abd92dd9e19aba49'; // Replace with your Edamam app key

//   const getRecipes = async () => {
//     try {
//       let res=fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`,{
       
//       })
//       console.log(res)
//       // const response = await axios.get(
//       //   `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
//       // );
//     //   setRecipes(response.data.hits);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getRecipes();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search for recipes"
//           value={query}
//           onChange={handleChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div className="recipes">
//         {recipes.map((recipe, index) => (
//           <div key={index} className="recipe">
//             <h3>{recipe.recipe.label}</h3>
//             <img src={recipe.recipe.image} alt={recipe.recipe.label} />
//             <ul>
//               {recipe.recipe.ingredientLines.map((ingredient, idx) => (
//                 <li key={idx}>{ingredient}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReceipeSearch;
