import { useState } from "react"

const products = [
    {id:1, name:"Traktorek", proce:15},
    {id:2, name:"LMotorek", proce:25},
    {id:3, name:"Rowerek", proce:35.50},
]


const ProductForm = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    function submitHandler(e){

        e.preventDefault()
        
        const product = {
            id: Math.random(),
            name: name,
            price: price,
        }

        products.push(product);
        console.log(products);
        setName("");
        setPrice("");
    }

        return(
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Nazwa produktu" value={name} 
                onChange={e=> setName(e.target.value)}/>

                <input type="number" placeholder="Cena produktu" value={price} 
                onChange={e=> setPrice(e.target.value)}/>

                <button type="submit" >Dodaj produkt</button>
            </form>
        )
    }

export default ProductForm;