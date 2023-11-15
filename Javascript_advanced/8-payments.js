function processPayment(amount) {
    console.log(`Processing payment of ${amount}`);
}

function processOrder(orderId, amount) {
    processPayment(amount);
    console.log(`Order ${orderId} has been fully processed`);
}

console.log('Processing orders');
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log('All orders have been processed');
