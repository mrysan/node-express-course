const express = require("express");
const app = express();
const { products } = require("./data");

app.listen(3000, (req, res) => {
  console.log("Server Started on port 3000");
});

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "That product was not found." });
  }
  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit, maxPrice, minPrice } = req.query;
  let filteredProducts = products;
  if (search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit));
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price >= Number(minPrice);
    });
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price <= Number(maxPrice);
    });
  }

  if (filteredProducts.length < 1) {
    res.send("No products found matching this search!");
  }
  res.status(200).json(filteredProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("Error 404: Page Not Found");
});
