let monthly = true;

const monthlyPrices = ['€19.99', '€24.99', '€39.99'];
const yearlyPrices = ['€199.99', '€249.99', '€399.99'];

let checkBox = document.querySelector('#checkbox');
let prices = document.querySelectorAll('.price');

checkBox.addEventListener('change', function(){
    if(checkBox.checked){
        for(let i = 0; i < prices.length; i++){
            prices[i].textContent = monthlyPrices[i]
        }
    } else {
        for(let i = 0; i < prices.length; i++){
            prices[i].textContent = yearlyPrices[i]
        }
    }
})