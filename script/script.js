const sauna_place_one = {
    one_hour: {
        monday: 120,
        tuesday: 120,
        wednesday: 120,
        thursday: 120,
        friday: 120,
        saturday: 120,
        sunday: 120,
    },
    two_hours: {
        monday: 200,
        tuesday: 200,
        wednesday: 200,
        thursday: 200,
        friday: 250,
        saturday: 250,
        sunday: 250,
    },
    three_hours: {
        monday: 250,
        tuesday: 250,
        wednesday: 250,
        thursday: 250,
        friday: 300,
        saturday: 300,
        sunday: 300,
    }
};

const sauna_place_second = {
    one_hour: {
        monday: 150,
        tuesday: 150,
        wednesday: 150,
        thursday: 150,
        friday: 150,
        saturday: 150,
        sunday: 150,
    },
    two_hours: {
        monday: 250,
        tuesday: 250,
        wednesday: 250,
        thursday: 250,
        friday: 300,
        saturday: 300,
        sunday: 300,
    },
    three_hours: {
        monday: 300,
        tuesday: 300,
        wednesday: 300,
        thursday: 300,
        friday: 350,
        saturday: 350,
        sunday: 350,
    }
};

function calculatePrice() {
    const people = document.getElementById('people').value;
    const hours = document.getElementById('hours').value;
    const day = document.getElementById('day').value;
    const sauna = document.getElementById('sauna').value;

    let saunaData;

    switch (sauna) {
        case 'sauna_place_one':
            saunaData = sauna_place_one;
            break;
        case 'sauna_place_second':
            saunaData = sauna_place_second;
            break;
        default:
            saunaData = null;
            break;
    }

    const totalPrice = saunaData[hours][day];
    const pricePerPerson = people > 0 ? (totalPrice / people).toFixed(2) + 'грн' : '-';

    const totalPriceAmount = document.getElementById('total-price-amount');
    const pricePerPersonAmount = document.getElementById('price-per-person-amount');

    totalPriceAmount.innerText = `${totalPrice.toFixed(2)} грн`;
    pricePerPersonAmount.innerText = `${pricePerPerson}`;

    totalPriceAmount.classList.add('font-bold', 'text-black','uppercase');
    pricePerPersonAmount.classList.add('font-bold', 'text-black','uppercase');
}