const trafficLine = document.getElementById('trafficLine');
const trafficChart = new Chart(trafficLine, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: [
                'rgba(149, 148, 227, 0.2)',
            ],
            borderColor: [
                'rgba(149, 148, 227, 1)',
            ],
            borderWidth: 1,
            lineTension: 0,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointBorderColor: 'rgba(149, 148, 227, 1)',
            pointBorderWidth: 3,
            pointRadius: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const dailyTraffic = document.getElementById('dailyTraffic');
const dailyChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(149, 148, 227, 1)',
                'rgba(149, 148, 227, 1)',
                'rgba(149, 148, 227, 1)',
                'rgba(149, 148, 227, 1)',
                'rgba(149, 148, 227, 1)',
                'rgba(149, 148, 227, 1)',
                'rgba(149, 148, 227, 1)',
            ],
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const mobileUsers = document.getElementById('mobileUsers');
const mobileChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [15, 17, 68],
            backgroundColor: [
                'rgba(100, 175, 189, 1)',
                'rgba(82, 255, 122, 1)',
                'rgba(149, 148, 227, 1)',
            ],
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
          position: 'right'
        },
    }
});

/* Create Custom Select, pass select element into function */
/* Based on jQuery custom select snippet #1 found here:
   https://speckyboy.com/open-source-css-javascript-select-box-snippets/
*/
const createCustomSelect = function(selectEle) {
  const customOptions = selectEle.children;
  const selectWrapper = document.createElement('DIV');
  const selectedItem = document.createElement('DIV');
  const selectList = document.createElement('UL');

  // Add custom select classes to elements
  selectEle.classList.add('custom_select-hidden');
  selectWrapper.className = 'custom_select-wrap';
  selectedItem.className = 'custom_select-selected';
  selectList.className = 'custom_select-list';

  // Create DOM structure
  selectEle.parentNode.insertBefore(selectWrapper, selectEle);
  selectWrapper.appendChild(selectEle);
  selectWrapper.appendChild(selectedItem);
  selectWrapper.appendChild(selectList);

  // Add initial item as base text for shown selection
  selectedItem.textContent = customOptions[0].textContent;

  // Create custom list based off options in select
  for (let i = 0; i < customOptions.length; i++) {
    const selectItem = document.createElement('LI');
    selectItem.textContent = customOptions[i].textContent;
    selectItem.dataset.rel = customOptions[i].value;
    selectList.appendChild(selectItem);
  }

  const listItems = selectList.children;

  // Add event listener for toggling visibility of dropdown and active state
  selectedItem.addEventListener('click', function(e) {
    e.stopPropagation();
    const activeSelects = document.querySelectorAll('.custom_select-selected.active');
    for (let i = 0; i < activeSelects.length; i++) {
      if (this !== activeSelects[i]) {
        activeSelects[i].classList.remove('active');
        activeSelects[i].nextElementSibling.style.display = 'none';
        activeSelects[i].parentElement.classList.remove('open-up');
      }
    }

    this.classList.toggle('active');
    if (this.nextElementSibling.style.display === 'none' || this.nextElementSibling.offsetParent === null) {
      const heightFromBottom = document.body.clientHeight - (selectWrapper.offsetTop + selectWrapper.offsetHeight);
      this.nextElementSibling.style.display = 'block';

      // Check if dropdown height is larger then distance to bottom of document
      // If so open upwards
      if (this.nextElementSibling.offsetHeight > heightFromBottom) {
        selectWrapper.classList.add('open-up');
      }
    } else {
      this.nextElementSibling.style.display = 'none';
      selectWrapper.classList.remove('open-up');
    }
  });

  // Add event listener to items in list to change
  // select's value based on selection. Hide dropdown
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function(e) {
      e.stopPropagation();
      const selectedValue = this.dataset.rel;
      selectedItem.textContent = this.textContent;
      selectedItem.classList.remove('active');
      selectEle.value = selectedValue;
      selectList.style.display = 'none';
      //console.log(selectEle.value);
    });
  }

  // Add event listener to document to hide select dropdown
  // when clicked outside of select menu
  document.addEventListener('click', function() {
    if (selectedItem.classList.contains('active')) {
      selectedItem.classList.remove('active');
      selectList.style.display = 'none';
    }
  });
}

const customSelect = document.querySelectorAll('.custom_select');
if (customSelect.length) {
  for (let i = 0; i < customSelect.length; i++) {
    createCustomSelect(customSelect[i]);
  }
}
