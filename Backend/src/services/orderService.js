const order = require('../models/order');

// Función para crear una nueva orden
async function createOrder(orderData) {
    try {
        const newOrder = await order.create(orderData);
        return newOrder;
    } catch (error) {
        throw new Error('Error al crear la orden');
    }
}

// Función para obtener todas las órdenes
async function getAllOrders() {
    try {
        const orders = await order.find();
        return orders;
    } catch (error) {
        throw new Error('Error al obtener las órdenes');
    }
}

// Función para obtener una orden por su ID
async function getOrderById(orderId) {
    try {
        const order = await order.findById(orderId);
        return order;
    } catch (error) {
        throw new Error('Error al obtener la orden');
    }
}

// Función para actualizar una orden
async function updateOrder(orderId, updateData) {
    try {
        const updatedOrder = await order.findByIdAndUpdate(orderId, updateData, { new: true });
        return updatedOrder;
    } catch (error) {
        throw new Error('Error al actualizar la orden');
    }
}

// Función para eliminar una orden
async function deleteOrder(orderId) {
    try {
        await order.findByIdAndDelete(orderId);
        return 'Orden eliminada correctamente';
    } catch (error) {
        throw new Error('Error al eliminar la orden');
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
