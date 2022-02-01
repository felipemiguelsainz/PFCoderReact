# La Distribuidora

La aplicacion se centra en un eCommence de quesos importados y fabricados en Argentina

## Tecnologia utilizada

+CSS +JS +HTML +REACT

## Framework adicionales

Bootstrap

## Instalar dependencias

+npm install

## Ejecutar proyecto

+npm start

## BackEnd

El backend esta desarrollado en firestore, en la misma se alojan 3 tipos de archivos:
- /Items: Productos en stock

		1. category: String
		2. conservado: String1
		3. imagen: String(URL)
		4. origen: String
		5. precio: Int
		6. stock: Int
		7. titutlo: String

- /Orders: Ordenes generadas por los clientes

		1. adress: String
		2. city: String
		3. email: String
		4. name: String


## Componentes
Los componentes se encuentran en la carpeta SRC y aqui explicare de que se encarga cada uno:
* CarritoNavBar: Widget del Cart en la NavBar
* CartContext: Generar funciones/variables para que se puedan utilizar desde cualquier componente, mientras este envuelto en el context
* Footer: Detalla informacion de la empresa La Distribuidora
* Item: Genera un recuadro por cada producto recibido del Catalogo por Props
* ItemCart: Genera un item por cada producto añadido al Carrito/Cart que recibe por Props de ItemCartContainer 
* ItemCartContainer: Envia los Item/Productos a generar mediante props
* ItemCatalogo: Renderiza ItemList con un borde negro
* ItemCounter: Un contador que permite elegir la cantidad de productos que el usuario quiere y enviarlo al Cart
* ItemDetail: Muestra de manera detallada un Item clickeado por el usuario
* ItemDetailContainer: Identifica el Item clickeado por el usuario y se lo envia a ItemDetail mediante Props
* ItemList: Utiliza Firebase para extraer el stock de items y enviarlo por Props al Item
* LandingHeader: Renderiza la NavBar con estilos añadidos
* NavBar: Es una cabezera para navegar por la aplicacion y aplicar filtros de categorias

## Context
 CartContext: En este contexto guardamos los datos necesarios de los productos para realizar la orden del cliente, detallaremos a continuacion las funciones:
		1. getQtyCart: Se encarga de calcular la cantidad de Items en Cart
		2. addItem: Esta funcion nos permite agregar un item al contexto
		3. isInCart: Chequea si el item ya esta en la Cart asi generar un acceso directo en el counter a esta
		4. clearCart: Elimina por completo todos los items en la Cart
		5. removeFromCart: Elimina un producto de la Cart
		
		
		
# Servicios
Solo tenemos un servicio ubicado en src/service/firebase.
