import React, { useState } from 'react'

const ProductForm = () => {

    const [newProduct, setNewProduct] = useState({
        nombre: "",
        imagen: "",
        precio: 0.00,
        categoria: ""
    })

    function onChangeInput(e) {
        e.preventDefault()
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
        console.log(newProduct)
    }

let arr = ["1", "2", "3", "4"]

  return (
    <>
        <div>
            <input
                type="text"
                name="nombre"
                id=""
                value={newProduct.nombre}
                placeholder='Nombre'
                onChange={(e) => onChangeInput(e)}
            />
        </div>
        <div>
            <button>Imagen</button>
        </div>
        <div>
            <input type="number" name="precio" id="" placeholder='Precio' onChange={(e) => onChangeInput(e)}/>
        </div>
        <div>
            <select name="categoria" id="" onChange={(e) => onChangeInput(e)}>
                <option value="" hidden>Categoria</option>
                {
                    arr.map((e, i) => {
                        return <option key={i} value={e}>{e}</option>
                    })
                }
            </select>
        </div>
        <div>
            -------------------------------
        </div>
        <div>
            <p>{newProduct.nombre}</p>
        </div>
        <div>
            <p>{newProduct.categoria}</p>
        </div>
    </>
  )
}

export default ProductForm
