import Item from "../Item/Item.js";

const ItemList = ({ products }) => {
    return (
        <div
            className='ListGrup'
            style={{
                display: "flex",
                justifyContent: "space-around",
            }}
        >
            {products.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};
export default ItemList;
