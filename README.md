# **Bienvenida/o al repositorio Birrap!**
Birrap es un proyecto desarrollado en torno al curso de **React**, tercera parte de la carrera **Desarrollo Front End** de [CoderHouse](https://www.coderhouse.com/?utm_term=coderhouse&utm_campaign=12058006243&utm_source=google_search_brand&utm_medium=cpc&gclid=CjwKCAiAprGRBhBgEiwANJEY7OSoAIO6kwiyur3M8TENPxJUkbMA99h_HDMJY40zMcYz98WSPNWo4xoCwWcQAvD_BwE).
El proyecto fue desarrollado durante los meses enero, febrero y marzo de 2022, y entregado el día 12/03/2022.

## Desarrolladora
Mi nombre es Camila Arroyo, soy estudiante avanzada de Ingeniería en Sistemas de Información y estudiante de programación.

## Objetivo del proyecto
Brindar información para realizar la compra de cervezas en unidades individuales de las marcas Andes Origen, Brahma, Budweiser, Corona, Quilmes, Patagonia, Stella Artois y Temple, en latas y botellas.
Además, permitir al administrador de la aplicación cargar nuevos productos y modificar los existentes.

## Secciones de la aplicación
- Página de inicio: deberás ingresar con una cuenta de Google para luego redirigirte a la página principal donde podrás comenzar a comprar.
- Lista de ítems: se muestran todos los productos disponibles.
- Información detallada de cada ítem: se muestra la descripción del producto y se permite agregarlo al carro de compras.
- Carro de compras: se muestran todos los productos agregados y se permite finalizar la compra, devolviendo el número de order para futuro seguimiento.

## Estructura de la carpeta src
La carpeta src contiene los archivos **.jsx** desarrollados para este ecommerce. Es importante comprender la subdivisión de código, para tener una navegabilidad óptima en el repositorio.
- **components**
	- **authentication:** contienen los archivos que se encargarán del manejo de usuarios, inicio de sesión y cierre de sesión.
		- *SignIn.jsx*
		- *SignOut.jsx*
		- *UserLoggedIn.jsx*
	- **containers:** incluye los archivos contenedores de otros, de ItemDetail y de ItemList respectivamente. Permite tener componentes con objetivos puntuales.
		- *ItemDetailContainer.jsx*
		- *ItemListContainer.jsx*
	- **elements:** cada archivo se corresponde a un elemento individual de la aplicación, incluyendo la barra de navegación.
		- *CartWidget.jsx*
		- *Item.jsx*
		- *ItemCount.jsx*
		- *ItemDetail.jsx*
		- *ItemList.jsx*
		- *Loading.jsx*
		- *NavBar.jsx*
	- **layouts:** contiene el layout de la aplicación, que nos permite ememeber el loading para que podamos usarlo en cualquier parte de la misma.
		- *Layout.jsx*
- **contexts:** incluye el contexto principal de nuestro proyecto, que proporciona sus funciones a toda la aplicación.
	- *CartContext.jsx*
- **pages:** incluye cada una de las secciones a las cuales podemos navegar en la página web.
	- *AddItem.jsx*
	- *Cart.jsx*
	- *Category.jsx*
	- *EditItem.jsx*
	- *Home.jsx*
	- *NoPage.jsx*

## Tecnologías utilizadas
- HTTP
- CSS
- Bootstrap
- Javascript
- React
- Firebase / Firestore

## Manejo de usuarios y permisos
Como ya fue dicho, en primera instancia debemos ingresar con nuestro correo de Gmail. Entonces, en caso de que el correo sea el correspondiente al administrador del proyecto (a fines de desarrollo, es mi correo personal), se muestran dos pestañas más que al resto de los usuarios:
- Agregar ítems: permitiendo agregar un nuevo producto, el cual automáticamente es mostrado en la lista de ítems.
- Editar ítem: permitiendo modificar los datos del producto en cuestión.

## Futuras mejoras
### Imágenes de los productos
#### Situación actual:
En primera instancia, a fín de simplificar el desarrollo, las imágenes de cada producto fueron agregadas a una carpeta **img** (que se encuentra en el repositorio actual) y luego accedidas desde el código mediante las rutas correspondientes.
#### Solución:
Posteriormente, estás imágenes deberán ser agregadas a Firebase y accedidas desde allí, como cualquier otro dato de cada producto.
### Recargo de la página
#### Situación actual:
Con el desarrollo actual, cada vez que se carga la página se vacía el carrito.
#### Solución:
Almacenar en Firebase el carrito del usuario actualmente loggueado (con los ítems que contiene), y actualizar esos datos cada vez que se carga la página. Además, una vez que la compra se confirma, se debería borrar dicho carrito de Firebase, para evitar almacenar información redundante.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
