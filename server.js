const express = require('express');  
const bodyParser = require('body-parser');  
const path = require('path');  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Configuración de EJS  
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));  

// Middleware  
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(express.static('public'));  

// Rutas  
app.get('/', (req, res) => {  
    res.render('index'); // Vista principal  
});  

app.get('/cursos', (req, res) => {  
    res.render('cursos'); // Vista para cursos  
});  

// Iniciar el servidor  
app.listen(PORT, () => {  
    console.log(`Servidor corriendo en http://localhost:${PORT}`);  
});  
