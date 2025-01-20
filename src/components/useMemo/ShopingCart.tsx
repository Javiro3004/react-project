// memorizar una funcion  (cache ) el resultado de una funcion costosa para que no se tena que llamr a la componente de nuevo
// controla si elbeneficio de memorizar es superior al de recalcuar 

import { useMemo, useState } from "react";

// ejemplo :

// tenemos un alista de compras y ya se calculo el costo total de toda la compra 
// si no camia nada cual es el costo total 

interface Item{
    id:number;
    name: string;
    price: number;

}

export const ShopingCart = () => { // creacion de componente 
    const [items, setItems] = useState<Item[]>([ // estado de los items 
        {
        id: 1, name: "primer item ",price : 10
        }, 
        {
        id: 2, name: "segundo  item ", price : 11 // creacion de la lista de productos con forma de la interfaz Item
        },
        {
        id: 3, name: "tercer item ", price : 12
        } 
    ]);

    const [discount, setDiscount ] = useState<number>(0) 

    const  totalCost = useMemo (() => items.reduce((total, item ) => total+ item.price, 0) , [items])  

    const finalCost = useMemo (() => totalCost - discount, [totalCost, discount]) 

    const addItem = ( ) => {
        const newItem = {
            id: items.length +1 ,// añadir un id unico a cada item aumentando uno en uno desde el id 1
            name: `item numero : ${items.length +1}`,// el nombre va a ser item numero+ el id
            price : Math.random() * 20 // precio aleatorio entre 0 y 20
        }
        setItems([...items, newItem]) // ...items: es un spread operator que crea una copia de la lista de items y le agrega el nuevo (en este caso el creado con newItem)
    }

    return(
        <div>
        <h1>Shopping Cart</h1>
        <ul>
            {items.map(item => 
                <li key={item.id}>
                    {item.name}: ${item.price.toFixed(2)}
                </li>
            )}
        </ul>
        <p>Costo total : ${ totalCost.toFixed(2 )}</p>

        <p>Descuento:  
            : $ <input type="number" //dentro de <p> habra un <input > de tipo number
            value={discount} // Vincula el valor del input a una variable de estado llamada discount. Esto significa que cada vez que el usuario cambia el valor en el input, se actualizará el valor de discount en el estado del componente.
            onChange= //  El evento onChange se utiliza para detectar cambios en el valor del input y actualizar el estado.
                {(e => setDiscount(parseFloat(e.target.value) // Se utiliza parseFloat para convertir el valor del input a un número.
                || 0 ))}  /> {/*si falla el parsefloat , se pone a 0 por defecto */}
        </p>

        <p>costo final : ${finalCost.toFixed(2)}</p>

        <button onClick={addItem}>add prduct </button>
        </div>
    )
}


