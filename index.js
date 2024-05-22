const express = require("express");
const uuid = require("uuid");
const app = express();
const port = 3000;
app.use(express.json());

const orders = [];

const checkOrderId = (request, response, next) => {
    const { id } = request.params;

    const index = orders.findIndex((order) => order.id === id);

    if (index < 0) {
        return response.status(404).json({ error: "User not found" });
    }

    request.orderIndex = index;
    request.orderId = id;

    next();
};

const checkMethodUrl = (request, response, next) => {
    console.log(`Tipo da requisição: ${request.method}`);
    console.log(`URL: ${request.originalUrl}`);
    next();
};

app.post("/orders", checkMethodUrl, (request, response) => {
    const { product, clientName, price, status } = request.body;
    const order = { id: uuid.v4(), product, clientName, price, status };

    orders.push(order);

    return response.status(201).json(order);
});

app.get("/orders", checkMethodUrl, (request, response) => {
    return response.json(orders);
});

app.get("/order/:id", checkOrderId, checkMethodUrl, (request, response) => {
    const index = request.orderIndex;

    const showOrderId = orders[index];

    return response.json(showOrderId);
});

app.put("/orders/:id", checkOrderId, checkMethodUrl, (request, response) => {
    const { product, clientName, price } = request.body;
    const index = request.orderIndex;
    const id = request.orderId;

    const updateOrder = { id, product, clientName, price };

    orders[index] = updateOrder;

    return response.json(updateOrder);
});

app.delete("/orders/:id", checkOrderId, checkMethodUrl, (request, response) => {
    const index = request.orderIndex;

    orders.splice(index, 1);

    return response.status(204).json(orders);
});

app.patch("/orders/:id", checkOrderId, checkMethodUrl, (request, response) => {
    const index = request.orderIndex;

    orders[index].status = "Pronto";

    return response.status(204).json(orders[index]);
});

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
});
