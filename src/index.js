const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('#result');

const cardPatterns = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/, // começa com 4, seguido por 12 ou 15 dígitos

    Mastercard: /^5[1-5][0-9]{14}$/, // começa com 51 a 55, seguido por 14 dígitos

    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/, // começa com 6011 ou 65, seguido por 12 dígitos

    'American Express': /^3[47][0-9]{13}$/, // começa com 34 ou 37, seguido por 13 dígitos

    'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, // começa com 300-305, 36 ou 38, seguido por 11 dígitos

    JCB: /^(?:2131|1800|35\d{3})\d{11}$/, // começa com 2131, 1800 ou 35, seguido por 11 dígitos

    Hipercard: /^(38|60)\d{11,17}$/, // Começa com 38 ou 60, com 13-19 dígitos

    Aura: /^50\d{14}$/, // Começa com 50, com 16 dígitos

    EnRoute: /^(2014|2149)\d{11}$/, // Começa com 2014 ou 2149, com 15 dígitos

    Voyager: /^8699\d{11}$/, // Começa com 8699, com 15 dígitos
};

function formatCardNumber(cardNumber) {
    return cardNumber.replace(/\s+/g, '');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const card = formatCardNumber(input.value);
    const cardType = Object.keys(cardPatterns).find(type => cardPatterns[type].test(card));
    result.textContent = cardType || 'Bandeira não identificada';
});