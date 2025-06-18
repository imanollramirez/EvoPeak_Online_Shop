import express from "express";
import promotionsRoutes from "./src/routes/promotions.js";
import salesRoutes from "./src/routes/sales.js";
import wishListRoutes from "./src/routes/wishList.js";

import assessments from './src/routes/assessments.js'
import products from './src/routes/products.js'
import orders from './src/routes/orders.js'

import customers from './src/routes/costumers.js'
import employees from './src/routes/employees.js'
import categories from './src/routes/categories.js'

import login from "./src/routes/login.js"
import logout from "./src/routes/logout.js"

import registerCostumer from "./src/routes/registerCostumer.js"

import multer  from "multer";

import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true //Allows the cookies and credential
    })
)

app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/login", login)
app.use("/api/logout", logout)

app.use("/api/registerCostumer", registerCostumer)

app.use("/api/promotions", promotionsRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/wishList", wishListRoutes);

app.use("/api/assessments", assessments);
app.use("/api/products", products);
app.use("/api/orders", orders);

app.use("/api/costumers", customers);
app.use("/api/employees", employees);
app.use("/api/categories", categories);

export default app;
