import { useState, useEffect } from "react";
import { getProductsByid } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer =() => {
    const [product, setProduct] = useState(null)
    const {ItemId} = useParams()

    useEffect(() => {
        getProductsByid(ItemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])
    return(
        <div clasName="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer