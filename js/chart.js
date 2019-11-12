// set global variables of the Chart
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontColor = '#8e8e8e';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = 300;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.aspectRatio = 1;

// create traffic chart ---
let lineChart = new Chart($('#traffic'), {
    type: 'line',

    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],

        datasets: [{
            data: [500, 1000, 750, 1250, 1750, 1250, 1000, 1500, 2000, 1500, 2000],

            backgroundColor: 'rgba(116, 119, 191, 0.25)',
            borderColor: '#7377BF',
            borderWidth: 1,

            pointBackgroundColor: 'white',
            pointBorderColor: '#7377BF',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 6,

            lineTension: 0
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    beginAtZero: true
                }
            }]
        }
    }
});


// create daily traffic chart ---
let barChart = new Chart($('#dailyTraffic'), {
    type: 'bar',

    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],

            backgroundColor: '#7377BF',
            hoverBackgroundColor: '#7377BF'
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 250,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                barPercentage: 0.6
            }]
        }
    }
});


// create mobile users chart ---
let donutChart = new Chart($('#mobileUsers'), {
    type: 'doughnut',

    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],

        datasets: [{
            data: [2000, 1750, 10000],

            backgroundColor: ['#74B1BF', '#81C98F', '#7377BF'],
            hoverBackgroundColor: ['#74B1BF', '#81C98F', '#7377BF']
        }]
    },

    options: {
        legend: {
            display: true,
            position: 'right',
            labels: {
                boxWidth: 20,
                fontSize: 16,
                fontStyle: 'normal',
                padding: 20
            }
        },

        tooltips: {
            enabled: true
        },

        animation: {
            animateScale: true
        }
    }
});