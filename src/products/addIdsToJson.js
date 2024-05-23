const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/products/products.json');
const products = require(filePath);

const productsWithIds = products.map((product, index) => ({
    id: index + 1,
    ...product
}));

fs.writeFile(filePath, JSON.stringify(productsWithIds, null, 2), (err) => {
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('Successfully added IDs to products');
    }
});
