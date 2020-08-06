var trafficLine = document.getElementById('trafficLine');
var trafficChart = new Chart(trafficLine, {
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
        onResize: function() {
          console.log('test');
        },
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

var dailyTraffic = document.getElementById('dailyTraffic');
var dailyChart = new Chart(dailyTraffic, {
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

var mobileUsers = document.getElementById('mobileUsers');
var mobileChart = new Chart(mobileUsers, {
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
