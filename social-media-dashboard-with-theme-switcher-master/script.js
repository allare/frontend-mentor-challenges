const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const titleSection = document.querySelector('.title-section');
const midRows = document.querySelectorAll('.mid-row');
const cardsOverviewLeft = document.querySelectorAll('.card-overview-left');
const attribution = document.querySelector('.attribution');
const cards = document.querySelectorAll('.card');

const checkBox = document.getElementById('checkbox');


checkBox.addEventListener('change', () => {

        if(checkBox.checked){
            addToSingleElements();
            addToMultiElements();    
        }
        else{
            
            removeFromSingleElements();
            removeFromMultiElements();            
        }
});

function addToSingleElements(){
    wrapper.classList.add('checked');
    header.classList.add('checked');
    titleSection.classList.add('checked');
    attribution.classList.add('checked');
}

function removeFromSingleElements(){
    wrapper.classList.remove('checked');
    header.classList.remove('checked');
    titleSection.classList.remove('checked');
    attribution.classList.remove('checked');
}

function addToMultiElements(){
    cards.forEach(card => {
        card.classList.add('checked');
    });
            
    midRows.forEach(midRow => {
        midRow.classList.add('checked');
    });

    cardsOverviewLeft.forEach(cardOverviewLeft => {
        cardOverviewLeft.classList.add('checked');
    });
}

function removeFromMultiElements(){
    cards.forEach(card => {
        card.classList.remove('checked');
    });
            
    midRows.forEach(midRow => {
        midRow.classList.remove('checked');
    });

    cardsOverviewLeft.forEach(cardOverviewLeft => {
        cardOverviewLeft.classList.remove('checked');
    });
}
