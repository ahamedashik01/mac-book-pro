// function for getting value form id 
function getValue(input) {
    const inputId = document.getElementById(input);
    const inputText = inputId.innerText;
    const inputValue = parseInt(inputText);
    return inputValue;
}

// set eventlistener and value 
function setEventListenerAndValue(buttonId, targetId, cost) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const targetField = document.getElementById(targetId);
        targetField.innerText = cost;
        // calling getValue function from (line - 2) 
        const baseCost = getValue('base-cost');
        const memoryCost = getValue('memory-cost');
        const storageCost = getValue('storage-cost');
        const deliveryCost = getValue('delivery-charge');
        // set subtotal and grandtotal 
        const subTotalCost = document.getElementById('sub-total-price')
        const grandTotalCost = document.getElementById('total-price')
        subTotalCost.innerText = baseCost + memoryCost + storageCost + deliveryCost;
        grandTotalCost.innerText = subTotalCost.innerText;
    });
}

// default product values
const memory8gbCost = 0;
const memory16gbCost = 180;
const storage256gbCost = 0;
const storage512gbCost = 100;
const storage1tbCost = 180;
const freeDeliveryCost = 0;
const urgentDeliveryCost = 20;

// calling setEventListenerAndValue function from (line - 10) 
setEventListenerAndValue('8gb-memory', 'memory-cost', memory8gbCost);
setEventListenerAndValue('16gb-memory', 'memory-cost', memory16gbCost);
setEventListenerAndValue('256gb-storage', 'storage-cost', storage256gbCost);
setEventListenerAndValue('512gb-storage', 'storage-cost', storage512gbCost);
setEventListenerAndValue('1tb-storage', 'storage-cost', storage1tbCost);
setEventListenerAndValue('free-delivery', 'delivery-charge', freeDeliveryCost);
setEventListenerAndValue('charged-delivery', 'delivery-charge', urgentDeliveryCost);

// pomo code / cupon code interactions
document.getElementById('pomo-apply-btn').addEventListener('click', function () {
    const pomoCode = 'stevekaku';
    let grandTotalCost = parseInt(document.getElementById('total-price').innerText);
    const discount = grandTotalCost * 0.2;
    const pomoInput = document.getElementById('pomo-input').value;
    if (pomoInput == pomoCode && grandTotalCost > 1039.2) {
        grandTotalCost = grandTotalCost - discount;
        document.getElementById('total-price').innerText = grandTotalCost;
    }
    document.getElementById('pomo-input').value = '';
})