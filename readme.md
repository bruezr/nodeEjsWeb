# Books Info App 📚 EJS + MongoDB + MVC  

Sirve información de libros utilizando templates EJS desde una Mongo DB

*App de practica* 🤓 

## Características Principales

- Utiliza el patrón de diseño **MVC**:
  > En la carpeta modelos se encuentra el modelo de los libros, utilizo **mongoose** para este fin
  
  > La carpeta views contiene los **.ejs** que luego serán redenrizados
  
  > Por ultimo la carpeta controllers se encarga de renderizar el contenido que le llega por medio de la db y por medio de un try/catch llama a un middleware para errores 500

- Dentro de app.js debajo del endpoint declarado agrego un handler para los errores 404, de manera que "decanten" allí los request a una URL incorrecta

- Declaro el path de la carpeta public como publico para servir CSS o imágenes en el futuro

- Por motivos de seguridad todas los datos sensibles se almacenan en variables de entorno