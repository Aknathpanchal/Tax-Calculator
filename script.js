

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('taxForm').addEventListener('submit', function (event) {
//         event.preventDefault();
//         checkData();
//     });

//     document.querySelector('.close').addEventListener('click', function () {
//         document.getElementById('resultModal').style.display = 'none';
//     });
// });

// function checkData() {
//     var income = parseFloat(document.getElementById('income').value);
//     var deductions = parseFloat(document.getElementById('deductions').value);
//     var extraIncome = parseFloat(document.getElementById('extraIncome').value);

//     if (isNaN(income)) {
//         setError(document.getElementById('income'), "Please enter a valid number.");
//         return;
//     }

//     if (isNaN(deductions)) {
//         setError(document.getElementById('deductions'), "Please enter a valid number.");
//         return;
//     }

//     if (isNaN(extraIncome)) {
//         setError(document.getElementById('extraIncome'), "Please enter a valid number.");
//         return;
//     }

//     hideAllErrorIcons();

//     var age = document.getElementById('age').value;

//     if (!age) {
//         displayError('Please select an age range.');
//         return;
//     }

//     // Calculate tax and show modal
//     var taxAmount = calculateTax(income, deductions, extraIncome, age);
//     displayResult(taxAmount);
// }

// function setError(element, message) {
//     var errorIcon = element.parentElement.querySelector('.error-icon');
//     errorIcon.style.display = 'block';
//     errorIcon.setAttribute('title', message);
// }

// function hideAllErrorIcons() {
//     var errorIcons = document.querySelectorAll('.error-icon');
//     errorIcons.forEach(function (icon) {
//         icon.style.display = 'none';
//     });
// }

// function displayError(message) {
//     var ageErrorIcon = document.getElementById('ageError');
//     ageErrorIcon.style.display = 'block';
//     ageErrorIcon.setAttribute('title', message);
// }

// function calculateTax(income, deductions, extraIncome, age) {
//     var totalIncome = income + extraIncome - deductions;
//     var taxAmount = 0;

//     if (totalIncome <= 800000) {
//         // No tax
//         return taxAmount;
//     }

//     var taxableAmount = totalIncome - 800000;

//     if (age === '<40') {
//         taxAmount = taxableAmount * 0.3;
//     } else if (age === '>=40 & <60') {
//         taxAmount = taxableAmount * 0.4;
//     } else if (age === '>=60') {
//         taxAmount = taxableAmount * 0.1;
//     }

//     return taxAmount;
// }

// function displayResult(taxAmount) {
//     var resultElement = document.getElementById('result');
//     resultElement.innerText = 'Tax Amount: ' + taxAmount.toFixed(2);

//     var modal = document.getElementById('resultModal');
//     modal.style.display = 'block';
// }


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('taxForm').addEventListener('submit', function (event) {
        event.preventDefault();
        checkData();
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('resultModal').style.display = 'none';
    });
});

function checkData() {
    var income = parseFloat(document.getElementById('income').value);
    var deductions = parseFloat(document.getElementById('deductions').value);
    var extraIncome = parseFloat(document.getElementById('extraIncome').value);

    if (isNaN(income)) {
        setError(document.getElementById('income'), "Please enter a valid number.");
        return;
    }

    if (isNaN(deductions)) {
        setError(document.getElementById('deductions'), "Please enter a valid number.");
        return;
    }

    if (isNaN(extraIncome)) {
        setError(document.getElementById('extraIncome'), "Please enter a valid number.");
        return;
    }

    hideAllErrorIcons();

    var age = document.getElementById('age').value;

    if (!age) {
        displayError('Please select an age range.');
        return;
    }

    // Calculate tax and show modal
    var taxAmount = calculateTax(income, deductions, extraIncome, age);
    displayResult(income, deductions, extraIncome, taxAmount);
}

function setError(element, message) {
    var errorIcon = element.parentElement.querySelector('.error-icon');
    errorIcon.style.display = 'block';
    errorIcon.setAttribute('title', message);
}

function hideAllErrorIcons() {
    var errorIcons = document.querySelectorAll('.error-icon');
    errorIcons.forEach(function (icon) {
        icon.style.display = 'none';
    });
}

function displayError(message) {
    var ageErrorIcon = document.getElementById('ageError');
    ageErrorIcon.style.display = 'block';
    ageErrorIcon.setAttribute('title', message);
}

function calculateTax(income, deductions, extraIncome, age) {
    var totalIncome = income + extraIncome - deductions;
    var taxAmount = 0;

    if (totalIncome <= 800000) {
        // No tax
        return taxAmount;
    }

    var taxableAmount = totalIncome - 800000;

    if (age === '<40') {
        taxAmount = taxableAmount * 0.3;
    } else if (age === '>=40 & <60') {
        taxAmount = taxableAmount * 0.4;
    } else if (age === '>=60') {
        taxAmount = taxableAmount * 0.1;
    }

    return taxAmount;
}

function displayResult(income, deductions, extraIncome, taxAmount) {
    var totalIncome = income + extraIncome - deductions;
    var afterTaxIncome = totalIncome - taxAmount;

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p><strong>Gross Annual Income:</strong> ${income}</p>
        <p><strong>Deductions:</strong> ${deductions}</p>
        <p><strong>Extra Income:</strong> ${extraIncome}</p>
        <p><strong>Total Tax:</strong> ${taxAmount.toFixed(2)}</p>
        <p><strong>After Tax Income:</strong> ${afterTaxIncome.toFixed(2)}</p>
    `;

    var modal = document.getElementById('resultModal');
    modal.style.display = 'flex';

    document.querySelector('.close').addEventListener('click', function () {
        modal.style.display = 'none';
    });
}
