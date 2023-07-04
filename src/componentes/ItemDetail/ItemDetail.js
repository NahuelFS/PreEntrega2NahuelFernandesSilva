import ItemCount from "../navbar/ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className='CardItem'>
            <header className='Heard '>
                <h2 className='ItemHeard'></h2>
            </header>
            <picture>
                <img
                    src={img}
                    alt={name}
                    width={250}
                    height={250}
                    className='ItemImg'
                ></img>
            </picture>
            <section>
                <p className='info'> Categoria:{category}</p>
                <p className='info'>Descripcion {description}</p>
                <p className='info'>precio: {price}</p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount
                    initial={0}
                    stock={stock}
                    onAdd={(quantity) => console.log("Cantidad agregada")}
                />
            </footer>
        </article>
    );
};
export default ItemDetail;
