// Pedido de clientes
// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:
let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};
/*
function customerInfo(order) {
    // Adicione abaixo as informações necessárias.

    let deliveryPerson = order.order.delivery.deliveryPerson;
    let name = order.name;
    let phoneNumber = order.phoneNumber;
    let street = order.address.street;
    let number = order.address.number;
    let apartment = order.address.apartment;

    console.log('Olá, ' + deliveryPerson + ', entrega para: ' + name + ', Telefone: ' + phoneNumber + ' R: ' + street + ', Nº: ' + number + ', ' + ' AP: ' + apartment);
};

customerInfo(order);
*/
function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    let newBuyer = order.name = 'Luiz Silva';
    let sabor = Object.keys(order.order.pizza);
    let sabor2 = Object.keys(order.order.pizza);
    let drinks = order.order.drinks.coke.type;
    let valor = (order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price);

    console.log(`Olá ${newBuyer}, o valor total do seu pedido de ${sabor} e ${drinks} é ${valor}`);
}

orderModifier(order);


  // 1 - Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.


  // 2 - Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.
