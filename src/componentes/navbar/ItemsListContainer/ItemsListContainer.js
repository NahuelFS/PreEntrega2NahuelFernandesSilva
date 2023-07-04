import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import { getProductsByCategory } from "../../asyncMock";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemsListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    //recupara el parametro
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [categoryId]);

    return (
        <div style={{ paddingTop: "60px" }}>
            <h1 style={{ padding: "50px" }}> {greeting} </h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemsListContainer;
