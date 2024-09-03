const sauna_place_one = {
    1: {
        monday: 120,
        tuesday: 120,
        wednesday: 120,
        thursday: 120,
        friday: 120,
        saturday: 120,
        sunday: 120,
    },
    2: {
        monday: 200,
        tuesday: 200,
        wednesday: 200,
        thursday: 200,
        friday: 250,
        saturday: 250,
        sunday: 250,
    },
    3: {
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
    1: {
        monday: 150,
        tuesday: 150,
        wednesday: 150,
        thursday: 150,
        friday: 150,
        saturday: 150,
        sunday: 150,
    },
    2: {
        monday: 250,
        tuesday: 250,
        wednesday: 250,
        thursday: 250,
        friday: 300,
        saturday: 300,
        sunday: 300,
    },
    3: {
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
    const people = parseInt(document.getElementById('people').value, 10);
    const hours = parseInt(document.getElementById('hours').value, 10);
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
            console.log('Sauna has not been found');
            return;
    }

    let basePrice = saunaData[Math.min(hours, 3)][day];

    let additionalPeople
    let extraTime

    if (people > 4) {
        additionalPeople = 50 * (people - 4)
        basePrice += additionalPeople;
    }

    if (hours > 3) {
        extraTime = 100 * (hours - 3)
        basePrice += extraTime;
    }

    const showerBase = 25
    const showerCost = showerBase * people;

    const totalPrice = basePrice + showerCost;
    const pricePerPerson = people > 0 ? (totalPrice / people).toFixed(2) + ' грн' : '-';


    // --GET ELEMENTS

    const showerAmount = document.getElementById('shower-amount');
    const additionalPeopleAmount = document.getElementById('additional-people-amount');
    const extraTimeAmount = document.getElementById('extra-time-amount');
    const totalPriceAmount = document.getElementById('total-price-amount');
    const pricePerPersonAmount = document.getElementById('price-per-person-amount');


    //---DATA OUTPUT---

    //shower
    showerAmount.innerText = `${showerBase.toFixed(2)} грн`;

    //extra
    if (people > 4) {
        additionalPeopleAmount.innerText = `${additionalPeople.toFixed(2)} грн`
    } else {
        additionalPeopleAmount.innerText = '-'
    }

    if (hours > 3) {
        extraTimeAmount.innerText = `${extraTime.toFixed(2)} грн`
    } else {
        extraTimeAmount.innerText = '-'
    }

    //base
    totalPriceAmount.innerText = `${totalPrice.toFixed(2)} грн`;
    pricePerPersonAmount.innerText = `${pricePerPerson}`;


    //---STYLES---

    pricePerPersonAmount.classList.add('font-bold', 'text-black', 'uppercase');
    totalPriceAmount.classList.add('font-bold', 'text-black', 'text-xl', 'uppercase');
}

