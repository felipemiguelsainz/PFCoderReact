import useCartContext from '../CartContext/CartContext.js';
import ItemCart from '../ItemCart/ItemCart.js';
import { useState } from 'react';
import './ItemCartContainer.css';
import { db } from '../../Service/Firebase/Firebase.js';
import {
    addDoc,
    collection,
    doc,
    getDoc,
    Timestamp,
    writeBatch,
} from 'firebase/firestore';

function ItemCartContainer() {
    const { itemsCart, cleanCart } = useCartContext();
    const [form, setForm] = useState({
        phone: "",
        adress: "",
        name: "",
        email: "",
    });
    function confirmarOrden() {
        const objOrder = {
            buyer: form.name,
            items: itemsCart,
            phone: form.phone,
            adress: form.adress,
            date: Timestamp.fromDate(new Date()),
        };

        const batch = writeBatch(db);
        const outOfStock = [];

        console.log(objOrder);

        objOrder.items.forEach((prod) => {
            getDoc(doc(db, "products", prod.id)).then((documentSnapshot) => {
                if (documentSnapshot.data().stock >= prod.qty) {
                    batch.update(doc(db, "products", documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.qty,
                    });
                } else {
                    outOfStock.push({
                        id: documentSnapshot.id,
                        ...documentSnapshot.data(),
                    });
                }
            });
        });

        if (outOfStock.length === 0) {
            addDoc(collection(db, "orders"), objOrder).then(({ id }) => {
                batch
                    .commit()
                    .then(() => {
                        alert("Succes");
                    })
                    .catch(() => {
                        console.error("Error");
                    });
            });
        }
    }

    const handlePhone = (event) => {
        setForm({ ...form, phone: event.target.value });
    };
    const handleAdress = (event) => {
        setForm({ ...form, adress: event.target.value });
    };
    const handleName = (event) => {
        setForm({ ...form, name: event.target.value });
    };
    const handleEmail = (event) => {
        setForm({ ...form, email: event.target.value });
    };

    if (itemsCart.length === 0) {
        return (
            <div className='containerCart'>
                <div className='cartVacio'>Carrito Vacio</div>
            </div>
        );
    } else {
        return (
            <>
                <div className='cartEliminar'>
                    <span
                        onClick={() => {
                            cleanCart();
                        }}
                        className='elimina'
                    >
                        Eliminar Carrito
                    </span>
                </div>
                <div className='containerCart'>
                    {itemsCart.map((item) => {
                        return (
                            <ItemCart
                                precio={item.precio}
                                id={item.id}
                                imagen={item.imagen}
                                titulo={item.titulo}
                                cantidad={item.qty}
                            />
                        );
                    })}
                </div>
                {form ? (
                    <form className='formCompra'>
                        <h3 className='tituloForm'>Formulario a completar</h3>
                        <label className='labelForm'>Telefono</label>
                        <input
                            type='text'
                            onChange={handlePhone}
                            value={form.phone}
                            className='imputFormCompra'
                            id='name'
                            size='10'
                        />
                        <label className='labelForm'>Localidad y Direccion</label>
                        <input
                            type='text'
                            onChange={handleAdress}
                            value={form.adress}
                            className='imputFormCompra'
                            id='city'
                            size='10'
                        />
                        <label className='labelForm'>Nombre</label>
                        <input
                            type='text'
                            onChange={handleName}
                            value={form.name}
                            className='imputFormCompra'
                            id='adress'
                            size='10'
                        />
                        <label className='labelForm'>E-Mail</label>
                        <input
                            type='text'
                            onChange={handleEmail}
                            value={form.email}
                            className='imputFormCompra'
                            id='email'
                            size='10'
                        />
                        <button
                            id='terminarCompra'
                            type='submit'
                            onClick={() => confirmarOrden()}
                        >
                            Terminar Comprar
                        </button>
                        <button
                            onClick={() => {
                                setForm(!form);
                            }}
                        >
                            Cerrar formulario
                        </button>
                    </form>
                ) : (
                    <div className='finalizarCompra'>
                        <button
                            onClick={() => {
                                setForm(!form);
                            }}
                        >
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </>
        );
    }
}

export default ItemCartContainer;
