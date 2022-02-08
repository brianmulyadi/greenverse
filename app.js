// TO DO
// * read json file and assign it into a variable
// * calculate time remaining
// * inject HTML to table

// FETCH FUNCTION
let companies = [];

const fetchPromise = fetch('./db.json');
fetchPromise.then(res => res.json())
    .then(resData => {
        companies = resData;
        displayCompanies(companies);
    })
    .catch(err => {
    console.error(err);
})

// TODAY'S DATE
const currentDate = new Date().getTime();

// SELECT ITEMS
const testContainer = document.querySelector('.test-container');
const tableBody = document.querySelector('.table-body');
const searchInput = document.getElementById('search-input');
const nameFilter = document.getElementById('name-filter');
const timeFilter = document.getElementById('time-filter');

// FLAGS
let nameFlag = true;
let timeFlag = true;

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded',() => {
    // displayCompanies(companies);
})

searchInput.addEventListener('keyup', (e) => {
    let value = '';
    if (e.key === 'Backspace') {
        value = searchInput.textContent.slice(0,-1);
        searchInput.textContent = value;
    } else {
        value = searchInput.textContent += e.key;
    }
    // console.log(searchInput.textContent, value);
    const filteredCompanies = searchTable(value, companies);
    displayCompanies(filteredCompanies);
})

nameFilter.addEventListener('click', () => {
    let sorted = [];
    if (nameFlag) {
        sorted = companies.sort((a,b) => {
            if (a["Company Name"].toLowerCase() < b["Company Name"].toLowerCase()) {
                return -1;
            } else if (a["Company Name"].toLowerCase() > b["Company Name"].toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        });
        nameFlag = false;
    } else {
        sorted = companies.sort((a,b) => {
            if (a["Company Name"].toLowerCase() < b["Company Name"].toLowerCase()) {
                return 1;
            } else if (a["Company Name"].toLowerCase() > b["Company Name"].toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        });
        nameFlag = true;
    }
    displayCompanies(sorted);
})

timeFilter.addEventListener('click', () => {
    let sorted = [];
    if (timeFlag) {
        sorted = companies.sort((a,b) => {
            return a.Deadline - b.Deadline;
        });
        timeFlag = false;
    } else {
        sorted = companies.sort((a,b) => {
            return b.Deadline - a.Deadline;
        });
        timeFlag = true;
    }
    displayCompanies(sorted);
})

// FUNCTIONS
function displayCompanies(companies) {
    let display = companies.map((item) => {
        const futureTime = item["Unix Date"]*1000;
        getRemainingTime(futureTime);
        return `<tr>
                    <td>${item["Company Name"]} <span><a href=""><i class="fa fa-info-circle has-text-grey-light"></i></a></span></td>
                    <td>${item.Target}</td>
                    <td>${item.Deadline}</td>
                    <td>${item["Last Updated"]}</td>
                    <td class="is-family-monospace">${format(values[0])} y ${format(values[1])} m ${format(values[2])} d</td>
                </tr>`
    });
    display = display.join('');
    tableBody.innerHTML = display;
}

function getRemainingTime(futureTime) {
    const t = futureTime - currentDate;
    
    let oneYear = 365 * 24 * 60 * 60 * 1000;
    let oneMonth = 30 * 24 * 60 * 60 * 1000;
    let oneDay = 24 * 60 * 60 * 1000;

    let years = Math.floor(t/oneYear);
    let months = Math.floor((t%oneYear)/oneMonth);
    let days = Math.floor((t%oneMonth)/oneDay);

    if (t < 0) {
        return values = [0,0,0];
    } else {
        return values = [years,months,days];
    }
}

function format(x) {
    if (x < 10) {
        return x = `0${x}`
    }
    return x
};

function searchTable(value, data) {
    const filteredData = [];
    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase();
        const name = data[i]['Company Name'].toLowerCase();

        if (name.includes(value)) {
            filteredData.push(data[i])
        }
    }
    return filteredData;
}

