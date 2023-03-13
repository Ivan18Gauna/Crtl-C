// const axios = require('axios')
// const e = require('express')
// const {Pokemon, Type} = require('../db')

// const getApiInfo= async() =>{
//     const apiUrl= await axios.get(`https://pokeapi.co/api/v2/pokemon`)
//     const apiInfo = await apiUrl.data.results.map(e=>{
//         return {
//             id:e.id,
//             url:e.url, 
//             //  hp:,
//             //  attack:r,
//             //  defense:,
//             //  speed:
//             //  heigth: e.heigth,  
             
//             //  weigth:
              
//         }

//     })
//     return apiInfo
// }
// const getAllRecipes = async () => {
//     const apiInfo = await getApiInfo();
//     //const dbInfo = await getDbInfo();
//     const infoTotal = apiInfo
//     //.concat(dbInfo);
//     return infoTotal
// }
// router.get('/pokemons', async (req, res, next) => {
//     let pokemonTotal = await getAllRecipes();
//     res.status(200).send(pokemonTotal)
    
// })