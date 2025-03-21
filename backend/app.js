import express from "express";
import promotionsRoutes from "./src/routes/promotions.js";
import salesRoutes from "./src/routes/sales.js";
import wishListRoutes from "./src/routes/wishList.js";

import assessments from './src/routes/assessments.js'
import products from './src/routes/products.js'
import orders from './src/routes/orders.js'

import customers from './src/routes/costumers.js'
import employees from './src/routes/employees.js'
import category from './src/routes/category.js'

const app = express();

app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/promotions", promotionsRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/wishList", wishListRoutes);

app.use("/api/assessments", assessments);
app.use("/api/products", products);
app.use("/api/orders", orders);

app.use("/api/costumers", customers);
app.use("/api/employees", employees);
app.use("/api/category", category);

export default app;
