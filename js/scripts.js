const basePrice = 1299;

function omni(x) {
    const a = document.getElementById(x);
    const aT = a.innerText;
    const aV = parseInt(aT);
    return aV;
}
function emni(a, b, c) {
    document.getElementById(a).addEventListener('click', function () {
        const extraMemoryCost = document.getElementById(b);
        extraMemoryCost.innerText = c;

        const memoryCost = omni('memory-cost');
        const storageCost = omni('storage-cost');
        const deliveryCost = omni('delivery-charge');

        // const memoryCostId = document.getElementById('memory-cost');
        // const memoryCostText = memoryCostId.innerText;
        // const memoryCost = parseInt(memoryCostText);

        // const storageCostId = document.getElementById('storage-cost');
        // const storageCostText = storageCostId.innerText;
        // const storageCost = parseInt(storageCostText);

        // const deliveryCostId = document.getElementById('delivery-charge');
        // const deliveryCostText = deliveryCostId.innerText;
        // const deliveryCost = parseInt(deliveryCostText);

        const totalCost = document.getElementById('sub-total-price')
        totalCost.innerText = memoryCost + storageCost + deliveryCost + basePrice;

    });
}

emni('8gb-memory', 'memory-cost', 0);
emni('16gb-memory', 'memory-cost', 180);
emni('256gb-storage', 'storage-cost', 0);
emni('512gb-storage', 'storage-cost', 100);
emni('1tb-storage', 'storage-cost', 180);
emni('free-delivery', 'delivery-charge', 0);
emni('charged-delivery', 'delivery-charge', 20);


// const memoryCostId = document.getElementById('memory-cost');
// const memoryCostText = memoryCostId.innerText;
// const memoryCost = parseInt(memoryCostText);

// const storageCostId = document.getElementById('storage-cost');
// const storageCostText = storageCostId.innerText;
// const storageCost = parseInt(storageCostText);

// const deliveryCostId = document.getElementById('delivery-charge');
// const deliveryCostText = deliveryCostId.innerText;
// const deliveryCost = parseInt(deliveryCostText);

// const totalCost = document.getElementById('sub-total-price')
// totalCost.innerText = memoryCost + storageCost + deliveryCost;

// console.log(totalCost.innerText);