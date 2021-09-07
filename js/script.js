// Common cost function
function extraCost(inputId) {
    const extraCostText = document.getElementById(inputId);
    let extraCost = parseFloat(extraCostText.innerText);
    extraCost = 0;
    return extraCost;
};

// function for adding total
function totalPrice(inputId, cost) {
    const totalPriceText = document.getElementById(inputId);
    let totalPrice = parseFloat(totalPriceText.innerText);
    totalPrice = 1299;
    return totalPrice + cost;
};

function updatedTotal() {
    const balanceTotal = document.getElementById('total');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceTotalText);
    return currentBalance;
};

// Select memory options
document.getElementById('memory-event').addEventListener('click', function (e) {
    const memory = e.target.innerText;
    const lowGb = '8GB unified memory';
    const highGb = '16GB unified memory';
    const memoryCost = extraCost('memory-cost');
    const highGbCost = memoryCost + 180;
    if (memory == lowGb) {
        document.getElementById('memory-cost').innerText = 0;
        document.getElementById('total').innerText = totalPrice('total', 0);
        document.getElementById('grand-total').innerText = totalPrice('grand-total', 0);
    } else if (memory == highGb) {
        document.getElementById('memory-cost').innerText = highGbCost;
        document.getElementById('total').innerText = totalPrice('total', highGbCost);
        document.getElementById('grand-total').innerText = totalPrice('grand-total', highGbCost);
    }
});

// Select storage options
document.getElementById('storage-event').addEventListener('click', function (e) {
    const storage = e.target.innerText;
    const lowStorage = '256GB SSD storage';
    const mediumStorage = '512GB SSD storage';
    const highStorage = '1TB SSD storage';
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = extraCost('storage-cost');
    if (storage == lowStorage) {
        storageCostText.innerText = 0;
        document.getElementById('total').innerText = totalPrice('total', 0);
        document.getElementById('grand-total').innerText = totalPrice('grand-total', 0);
    } else if (storage == mediumStorage) {
        storageCostText.innerText = storageCost + 100;
        document.getElementById('total').innerText = totalPrice('total', storageCost + 100);
        document.getElementById('grand-total').innerText = totalPrice('grand-total', storageCost + 100);
    } else if (storage == highStorage) {
        storageCostText.innerText = storageCost + 180;
        document.getElementById('total').innerText = totalPrice('total', storageCost + 180);
        document.getElementById('grand-total').innerText = totalPrice('grand-total', storageCost + 180);
    }
});

// Select delivery options
document.getElementById('delivery-event').addEventListener('click', function (e) {
    const delivery = e.target.innerText;
    const lateDelivery = 'Sunday, 12th Sep free prim delivery';
    const urgentDelivery = 'Friday, 10th Sep delivery charge $20';
    const deliveryCost = extraCost('delivery-cost');
    if (delivery == lateDelivery) {
        document.getElementById('delivery-cost').innerText = 0;
        document.getElementById('total').innerText = totalPrice('total', 0);
        document.getElementById('grand-total').innerText = totalPrice('grand-total', 0);
    } else if (delivery == urgentDelivery) {
        document.getElementById('delivery-cost').innerText = deliveryCost + 20;
        document.getElementById('total').innerText = totalPrice('total', deliveryCost + 20);
        document.getElementById('grand-total').innerText = totalPrice('grand-total', deliveryCost + 20);
    }
});

// Execution of promo code
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('code-input');
    let promoCode = promoInput.value;
    const grandTotal = document.getElementById('grand-total').innerText;
    const discount = grandTotal / 20;
    if (promoCode == 'stevekaku') {
        document.getElementById('grand-total').innerText = grandTotal - discount;
        promoInput.value = '';
    } else {
        let warning = document.getElementById('message');
        warning.style.display = 'block';
        promoInput.value = '';
    }
});