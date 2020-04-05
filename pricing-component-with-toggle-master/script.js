const monthlyPrice = document.querySelectorAll('.monthly-price');
const annualPrice = document.querySelectorAll('.annual-price');
const toggleCheckBox = document.getElementById('checkbox');

toggleCheckBox.addEventListener('change', () => {

    if(toggleCheckBox.checked){
        monthlyPrice.forEach(price => {
            price.style.display = 'block';
        });

        annualPrice.forEach(price => {
            price.style.display = 'none';
        })
    }
    else{
        monthlyPrice.forEach(price => {
            price.style.display = 'none';
        });

        annualPrice.forEach(price => {
            price.style.display = 'block';
        })
    }
});