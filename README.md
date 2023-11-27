Challenge Integrador

#Mission#4 🚀

Antes de empezar puedes aprovechar los siguientes videos del canal de
youtube. Revisa el canal con frecuencia para no perderte los materiales
complementarios.
¡Manos a la obra con nuestro servidor!
Llegó el momento de migrar nuestro proyecto Frontend a un esquema
Fullstack, preparando todo lo necesario para crear nuestro backend e
integrar ambos desarrollos.

Por eso para este mission necesitaremos:
1. Migrar nuestro código a un proyecto de NodeJS + Express.
2. Crear un servidor que devuelva archivos estáticos declarando una
carpeta 'public'.
3. Crear la capa de rutas para los siguientes paths:
Main Routes:
- GET -> /home
- GET -> /contact
- GET -> /about
- GET -> /faqs
Shop Routes:
- GET -> /shop
- GET -> /shop/item/:id
- POST -> /shop/item/:id/add
- GET -> /shop/cart
- POST -> /shop/cart
Admin Routes:
- GET -> /admin
- GET -> /admin/create
- POST -> /admin/create
- GET -> /admin/edit/:id
- PUT -> /admin/edit/:id
- DELETE -> /admin/delete/:id
Auth Routes:
- GET -> /auth/login
- POST -> /auth/login
- GET -> /auth/register
- POST -> /auth/register
- GET -> /auth/logout
4. Crear los controladores para responder a cada una de esas rutas al
cliente enviando JSON o Texto plano, como por ejemplo:
(req, res) => res.send('Esta ruta devuelve la vista de
productos.')

https://www.youtube.com/watch?v=U0HfMPfS5cI