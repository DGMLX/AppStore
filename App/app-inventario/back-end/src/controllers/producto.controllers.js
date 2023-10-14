import Product from "../models/producto.models.js"

export const getProductos = async (req,res) =>{
    const productos = await Product.find();
    console.log(productos)
}

export const getProducto = async (req,res) =>{

}

export const addProducto = async (req,res) =>{
    const {nombre,precio,categoria,stock,descripcion} = req.body
    const newProducto = new Product({
        nombre:nombre,
        precio:precio,
        categoria:categoria,
        stock:stock,
        descripcion:descripcion
    })
    const productoSaved = await newProducto.save()
    console.log(productoSaved)
    res.json(req.body)
}

export const deleteProducto = async (req,res) =>{

}

export const updateProducto = async (req,res) =>{

}