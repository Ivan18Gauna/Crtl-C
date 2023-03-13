const { Router } = require('express');
require('dotenv').config();
const {API_KEY} = process.env
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const {Pokemon, Type} = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



const getApiInfo= async() =>{
    const apiUrl= await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=60`)
    const pokeUrls = apiUrl.data.results.map((e) => axios.get(e.url));
    const allPokemons = await axios.all(pokeUrls)
    const apiInfo = allPokemons.map((e)=>{
        return {
            id:e.data.id,
            name:e.data.name,
            heigth:e.data.height, 
            weigth:e.data.weight,
            hp:e.data.stats[0].base_stat,
            attack:e.data.stats[1].base_stat,
            defense:e.data.stats[2].base_stat,
            speed:e.data.stats[5].base_stat,
              
        }

    })
    return apiInfo
}

const getDbInfo = async () => {
    return await Pokemon.findAll({
        includes: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}



const getAllPokemons = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo
    .concat(dbInfo);
    return infoTotal
}
router.get('/pokemons', async (req, res, next) => {
    const name = req.query.name
    try {
    let pokemonTotal = await getAllPokemons();
    if (name) {
        let pokemonName = pokemonTotal.filter( el => el.name.toLowerCase().includes(name.toLowerCase()))
        pokemonName.length ?
        res.status(200).json(pokemonName) :
        res.status(404).send('No esta el pokemon');
    }else{ 
        res.status(200).send(pokemonTotal)
    }
   
    } catch (error) {
        next(error)
    }
    
})

router.get('/types', async (req, res, next) => {
const response = await axios('https://pokeapi.co/api/v2/type')

const type = response.data.results.map((e) => {
    return { name: e.name };
  });
const tiposFinal = type.map((e) => e.name);
tiposFinal.forEach(e => {
     Type.findOrCreate({
            where: {name: e}
     })
 });
    const allType = await Type.findAll();
    res.send(allType)
})






router.get('/pokemons/:id',async (req, res) => {
    const id = req.params.id;
    const pokemonsTotal = await getAllPokemons()
    if (id){
        let pokemonsId = pokemonsTotal.filter( el => el.id == id)
        pokemonsId.length ?
        res.status(200).json(pokemonsId) :
        res.status(400).send('No encontre esa receta')
    }
})
router.post('/pokemons', async (req, res) => {
    let{
        id,
        name,
        heigth, 
        weigth,
        hp,
        attack,
        defense,
        speed,
        type
    } = req.body

    let pokemonsCreate = await Pokemon.create({
        id,
        name,
        heigth, 
        weigth,
        hp,
        attack,
        defense,
        speed

    })
    let typeDb = await Type.findAll({
        where: { name : type}
    })
    pokemonsCreate.addType(typeDb) // metodo de SQL que lo que hace es traerme de la tabla lo que le pido por parametro
    res.send('pokemon creado correctamente')

})


module.exports = router;
