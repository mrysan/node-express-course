const express = require("express");
const app = express();
const { products, people } = require("./data");
const peopleRouter = require("./routes/people");

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date();
  // month/day/year time
  const time = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} `;
  console.log(method, url, time);
  next();
};

app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/people", peopleRouter);
// app.get("/api/v1/people", (req, res) => {
//   res.json(people);
// });

// app.post("/api/v1/people", (req, res) => {
//   const name = req.body.name;
//   if (!name) {
//     res.status(400).json({ success: false, message: "Please provide a name" });
//   } else {
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
//   }
// });

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

app.listen(3000, (req, res) => {
  console.log("Server Started on port 3000");
});
