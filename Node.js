const express = require('express');
const app = express();
const port = 3000;

// Serve les fichiers statiques (HTML, CSS, JS)
app.use(express.static('public'));

// Simuler un panier
let cart = [];

app.get('/api/cart', (req, res) => {
    res.json(cart);
});

app.post('/api/cart', (req, res) => {
    const product = req.body; // En pratique, il faudrait valider et analyser le produit
    cart.push(product);
    res.status(201).json({ message: 'Produit ajouté au panier', cart });
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
