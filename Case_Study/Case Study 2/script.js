document.getElementById('calcBtn').addEventListener('click', function() {
    // Fetch input values
    const name = document.getElementById('custName').value;
    const mob = document.getElementById('mobNo').value;
    const inv = document.getElementById('invNo').value;
    const prod = document.getElementById('prodName').value;
    const qty = parseFloat(document.getElementById('qtyKg').value) || 0;
    const rate = parseFloat(document.getElementById('rateKg').value) || 0;
    const discPct = parseFloat(document.getElementById('discountPct').value) || 0;
    const gstPct = parseFloat(document.getElementById('gstPct').value) || 0;
    const pack = parseFloat(document.getElementById('packingCharges').value) || 0;
    const membership = document.getElementById('membership').value;
    const payment = document.getElementById('paymentMode').value;

    // Check basic structural validity
    if (!name || !mob || !prod || qty <= 0 || rate <= 0) {
        alert('Please fill out all fields with valid positive amounts.');
        return;
    }

    // Calculations
    const grossPrice = qty * rate;
    
    // Evaluate extra membership discount tier
    let memberDiscPct = 0;
    if (membership === 'silver') memberDiscPct = 2;
    if (membership === 'gold') memberDiscPct = 5;

    const totalDiscPct = discPct + memberDiscPct;
    const discountAmount = (grossPrice * totalDiscPct) / 100;
    const priceAfterDiscount = grossPrice - discountAmount;
    const gstAmount = (priceAfterDiscount * gstPct) / 100;
    const finalTotal = priceAfterDiscount + gstAmount + pack;

    // Populate presentation window
    document.getElementById('outName').innerText = name;
    document.getElementById('outMob').innerText = mob;
    document.getElementById('outInv').innerText = inv;
    document.getElementById('outProd').innerText = `${prod} (${qty} kg @ ₹${rate}/kg)`;
    document.getElementById('outGross').innerText = `₹${grossPrice.toFixed(2)}`;
    document.getElementById('outDisc').innerText = `-₹${discountAmount.toFixed(2)} (${totalDiscPct}%)`;
    document.getElementById('outPack').innerText = `₹${pack.toFixed(2)}`;
    document.getElementById('outGst').innerText = `+₹${gstAmount.toFixed(2)} (${gstPct}%)`;
    document.getElementById('outMeta').innerText = `${payment} | ${membership.toUpperCase()} Member`;
    document.getElementById('outTotal').innerText = `₹${finalTotal.toFixed(2)}`;

    // Unhide output element block
    document.getElementById('billSummary').style.display = 'block';
});
