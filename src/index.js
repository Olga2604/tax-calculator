// let content = document.getElementById('quotes'), // element into which to insert the compiled information
//     src = document.getElementById('quotes-template').innerHTML, // markup of the template
//     template = Handlebars.compile(src), // compiles the template in use
//     html = template(quotes); // compiles the data into the template
//
// content.innerHTML = html; // renders to the DOM
import '../src/scss/style.scss';


let netSalary,
    grossSalary,
    totalTaxes,
    personalIncomeTax,
    pension,
    socialInsurance,
    medicalInsurance,
    injuryFee,
    monthlyTaxes,
    yearTaxes;

init();

document.querySelector('.btn-close').addEventListener('click', clearSalaryInput);

function init() {
    netSalary = document.getElementById('net-salary');
    grossSalary = 0;
    totalTaxes = 0;
    personalIncomeTax = 0;
    pension = 0;
    socialInsurance = 0;
    medicalInsurance = 0;
    injuryFee = 0;
    monthlyTaxes = 0;
    yearTaxes = 0;

    document.querySelector('.btn-close').style.display = 'none';
}

function roundNumber(value) {
    return Number(value.toFixed());
}

function getPensionTax(value) {
    let calculatedPension;
    if (value <= 1150000) {
        calculatedPension = (value * 0.22) / 12;
        return calculatedPension;
    } else {
        calculatedPension = (1150000 * 0.22 + ((value - 1150000) * 0.1)) / 12;
        return calculatedPension;
    }
}

function getSocialInsuranceTax(value) {
    let calculatedSocialInsurance;

    if (value <= 865000) {
        calculatedSocialInsurance = (value * .029 / 100) / 12;
        return calculatedSocialInsurance;
    } else {
        calculatedSocialInsurance = (865000 * 0.29 / 100) / 12;
        return calculatedSocialInsurance;
    }
}

document.querySelector('#calculateTaxes')
    .addEventListener('click', function calculateMonthlyTaxAmount() {
        if (netSalary.value) {
            let yearSalary = netSalary.value * 12;

            grossSalary = roundNumber(yearSalary * 100 / 87);
            personalIncomeTax = roundNumber((yearSalary * 13 / 87) / 12);
            pension = roundNumber(getPensionTax(yearSalary));
            socialInsurance = roundNumber(getSocialInsuranceTax(yearSalary));
            medicalInsurance = roundNumber((grossSalary * 0.51 / 100) / 12);
            injuryFee = roundNumber((grossSalary * 0.2 / 100) / 12);
            monthlyTaxes = roundNumber(personalIncomeTax + pension + socialInsurance + medicalInsurance + injuryFee);
            yearTaxes = monthlyTaxes * 12;

            document.querySelector('#personal-income-tax').textContent = `${personalIncomeTax.toLocaleString()} руб.`;
            document.querySelector('#pension').textContent = `${pension.toLocaleString()} руб.`;
            document.querySelector('#social-insurance').textContent = `${socialInsurance.toLocaleString()} руб.`;
            document.querySelector('#medical-insurance').textContent = `${medicalInsurance.toLocaleString()} руб.`;
            document.querySelector('#injury-fee').textContent = `${injuryFee.toLocaleString()} руб.`;
            document.querySelector('#monthly-taxes').textContent = `${monthlyTaxes.toLocaleString()} руб.`;
            document.querySelector('#year-taxes').textContent = `${yearTaxes.toLocaleString()} руб.`;

            document.querySelector('.btn-close').style.display = 'block';
        }
    });

function clearSalaryInput() {
    document.getElementById('net-salary').value = null;
    [...document.querySelectorAll('.tax')].map(e => e.textContent = '0 руб.');
    document.querySelector('.btn-close').style.display = 'none';
    init();
}
