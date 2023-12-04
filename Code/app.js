const express = require("express");
const app = express();
const path = require("path");
// const expressLayouts = require('express-ejs-layouts');

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine","ejs");
app.set('views','./src/views');
// //configurando layout 2°. la ruta especidifcada la toma a aprtir de la ruta view.
// //si no configuro ninguna ruta asume que esta suelto dentro de views
// app.use(expressLayouts);
// app.set('layout', 'layouts/layout');

// app.set("models", path.join(__dirname,"./src/models"));


const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes//shop/shopRoutes');
const adminRoutes = require('./src/routes/admin/adminRoutes');
const authRoutes = require('./src/routes/auth/authRoutes');

app.use('/',mainRoutes);
app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use('/auth',authRoutes);

const PORT = 4000;

app.listen(PORT,() => console.log(`servidor corriendo en http://localhost:${PORT}`));
