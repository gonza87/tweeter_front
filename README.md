# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


/////////////////////////////////////COMENTARIOS SOBRE LO QUE HAY HECHO///////////////////////

///////////////////////////////////////////Componente de Login////////////////////////////////////////
El componente Login es una interfaz de usuario diseñada para facilitar el proceso de inicio de sesión en la aplicación. Aquí hay una descripción detallada de sus funcionalidades y estructura:

Funcionalidades:
Estado Local:

Utiliza el hook useState de React para gestionar el estado local del componente. Almacena la información del usuario durante el inicio de sesión.
Manejo de Cambios de Entrada:

Implementa la función handleInputChange para actualizar dinámicamente el estado en respuesta a los cambios en los campos de entrada (username/email y contraseña).
Envío de Formulario:

Proporciona un formulario que, al ser enviado, ejecuta la función handleSubmit. Esta función actualmente imprime en la consola la información de inicio de sesión, pero puede ser modificada para realizar la lógica de inicio de sesión real.
Interfaz Gráfica Atractiva:

Incorpora elementos visuales atractivos, como un logotipo y mensajes amigables, para mejorar la experiencia del usuario.
Estructura:
Contenedor Principal (div.container):

Agrupa todos los elementos del componente para un diseño organizado.
Columnas (div.column5 y div.column7):

Divide la interfaz en dos columnas para un diseño más equilibrado.
Logotipo (svg y h2.textCol5):

Muestra un logotipo y un mensaje de bienvenida en la columna izquierda.
Formulario de Inicio de Sesión:

Presenta un formulario en la columna derecha con campos para el nombre de usuario o correo electrónico y la contraseña.
Enlaces de Registro:

Proporciona un enlace para dirigir a los usuarios a la página de registro en caso de que no tengan una cuenta.



/////////////////////////////////////////////////////////////////Componente TweetList////////////////////////////////////

El componente TweetList es responsable de mostrar una lista de tweets en la interfaz de usuario. A continuación, se detallan sus funcionalidades y estructura:

Funcionalidades:
Lista de Tweets:

Contiene un arreglo de tweets hardcodeados para demostración.
Interfaz Gráfica:

Utiliza el componente ListGroup de React Bootstrap para mostrar una lista de tweets.
Información del Tweet:

Muestra la información de cada tweet, incluyendo el nombre de usuario, el contenido del tweet y acciones como el botón de "Me gusta".
Estructura:
Contenedor Principal (div.container-tw):

Agrupa todos los elementos del componente para un diseño organizado.
Columnas (div.col-2, div.col-6, y div.col-4):

Divide la interfaz en tres columnas para organizar diferentes elementos.
Logotipo (svg):

Muestra un logotipo en la columna izquierda.
Lista de Tweets (ListGroup):

Utiliza ListGroup para mostrar la lista de tweets en la columna central.
Tweet Individual (ListGroup.Item):

Para cada tweet, utiliza un ListGroup.Item que contiene la información del usuario, el contenido del tweet y acciones.
Imagen del Usuario (img.user-avatar):

Muestra la imagen del usuario, que actualmente es harcodeada.
Información del Tweet (div.tweet-info):

Agrupa la información del tweet, incluyendo el nombre de usuario, el contenido del tweet y acciones.
Acciones del Tweet (FontAwesomeIcon):

Incluye iconos para acciones como "Me gusta" dentro de la sección de acciones del tweet.
Columna de Tendencias (div.col-4):

Muestra una columna de tendencias a la derecha de la lista de tweets.
Uso:
Datos de Tendencias:

Muestra datos de tendencias como programación, entretenimiento y noticias.
Datos de Tweets:

Utiliza tweets hardcodeados para demostración. En una aplicación real, estos datos serían dinámicos y provendrían de una fuente externa.
Estilo Visual Atractivo:

Incorpora estilos visuales atractivos utilizando clases CSS para mejorar la experiencia del usuario.
Acciones del Tweet:

Permite al usuario interactuar con los tweets, por ejemplo, dar "Me gusta".
Nota: La imagen del usuario está harcodeada y se mostrará para todos los tweets. En una aplicación real, esta información debería provenir de los datos del usuario.

Este componente sirve como una parte central para mostrar la actividad de tweets y tendencias en la interfaz de usuario. Asegúrate de ajustar y personalizar según las necesidades específicas de tu aplicación.




/////////////////////////////////////////////////////////////////////Componente Profile//////////////////////////////////////////////


El componente Profile es responsable de mostrar el perfil de un usuario, incluyendo sus tweets, información de tendencias y otros detalles. A continuación, se detallan sus funcionalidades y estructura:

Funcionalidades:
Lista de Tweets:

Contiene un arreglo de tweets harcodeados para demostración.
Interfaz Gráfica:

Utiliza el componente ListGroup de React Bootstrap para mostrar la lista de tweets.
Acciones en Tweets:

Permite al usuario interactuar con los tweets, como dar "Me gusta" o eliminar un tweet.
Información de Tendencias:

Muestra información de tendencias en programación, entretenimiento y noticias.
Estructura:
Contenedor Principal (div.container-tw):

Agrupa todos los elementos del componente para un diseño organizado.
Columnas (div.col-2, div.col-6, y div.col-4):

Divide la interfaz en tres columnas para organizar diferentes elementos.
Logotipo (svg):

Muestra un logotipo en la columna izquierda, similar al componente anterior.
Lista de Tweets (ListGroup):

Utiliza ListGroup para mostrar la lista de tweets en la columna central.
Tweet Individual (ListGroup.Item):

Para cada tweet, utiliza un ListGroup.Item que contiene la información del usuario, el contenido del tweet y acciones.
Imagen del Usuario (img.user-avatar):

Muestra la imagen del usuario, que actualmente es harcodeada.
Información del Tweet (div.tweet-info):

Agrupa la información del tweet, incluyendo el nombre de usuario, el contenido del tweet y acciones.
Acciones del Tweet (FontAwesomeIcon):

Incluye iconos para acciones como "Me gusta" y "Eliminar" dentro de la sección de acciones del tweet.
Columna de Tendencias (div.col-4):

Muestra una columna de tendencias a la derecha de la lista de tweets, similar al componente anterior.
Uso:
Datos de Tendencias:

Muestra datos de tendencias como programación, entretenimiento y noticias.
Datos de Tweets:

Utiliza tweets harcodeados para demostración. En una aplicación real, estos datos serían dinámicos y provendrían de una fuente externa.
Estilo Visual Atractivo:

Incorpora estilos visuales atractivos utilizando clases CSS para mejorar la experiencia del usuario.
Acciones del Tweet:

Permite al usuario interactuar con los tweets, por ejemplo, dar "Me gusta" o eliminar un tweet.
Este componente es similar al anterior (TweetList), pero se enfoca en mostrar la información específica del perfil del usuario. Asegúrate de ajustar y personalizar según las necesidades específicas de tu aplicación.


////////////////////////////////////////////////////////////////Componente Register////////////////////////////////////////////////

El componente Register se encarga de gestionar el registro de nuevos usuarios. A continuación, se describen las principales funcionalidades y la estructura del código:

Funcionalidades:
Estado Local:

Utiliza el estado local de React (useState) para gestionar los datos del formulario.
Manejo de Cambios:

Implementa la función handleChange para actualizar el estado en respuesta a cambios en los campos del formulario.
Envío del Formulario:

Implementa la función handleSubmit que se activa al enviar el formulario. Envía los datos del usuario al servidor utilizando Axios.
Interfaz Gráfica:

Utiliza el componente Form de React Bootstrap para construir el formulario de registro.
Icono y Texto de Bienvenida:

Muestra un icono y un mensaje de bienvenida en la columna izquierda.
Campo de Selección de Archivo:

Permite a los usuarios seleccionar un archivo (por ejemplo, una foto de perfil).
Estilo Visual Atractivo:

Utiliza clases CSS para aplicar estilos visuales atractivos.
Estructura:
Contenedor Principal (div.container):

Agrupa todos los elementos del componente para un diseño organizado.
Columnas (div.col-5 y div.col-7):

Divide la interfaz en dos columnas, una para el icono de bienvenida y otra para el formulario de registro.
Icono de Bienvenida (svg y h3.textCol5):

Muestra un icono y un mensaje de bienvenida en la columna izquierda.
Formulario de Registro (form):

Contiene campos para el primer nombre, apellido, correo electrónico, nombre de usuario, selección de archivo y contraseña.
Campos del Formulario (Form.Control):

Utiliza el componente Form.Control para los campos de texto y contraseña.
Campo de Selección de Archivo (Form.Control de tipo file):

Permite a los usuarios seleccionar un archivo (por ejemplo, una foto de perfil).
Botón de Registro (button.buttonLogin):

Activa la función handleSubmit al hacer clic.
Enlace para Iniciar Sesión (p y a):

Proporciona un enlace para iniciar sesión si el usuario ya tiene una cuenta.
Uso de Axios:
Utiliza Axios para realizar una solicitud POST al servidor con los datos del nuevo usuario.

Este componente está diseñado para manejar el proceso de registro de nuevos usuarios. Asegúrate de ajustar y personalizar según las necesidades específicas de tu aplicación, especialmente en relación con la gestión de usuarios en el servidor y la respuesta exitosa o errores en el registro.