$('#close').click(function () {
    $('.alert-message').slideUp();
});

// Chart.js
const ctx = $('#webTraffic');

const traffic = [
    500, 1000, 750, 1250,
    1750, 1250, 1000, 1500,
    2000, 1500, 2000
];

const weeklyTraffic = [
    '16-22', '23-29', '30-5', '6-12',
    '13-19', '20-26', '27-3', '4-10',
    '11-17', '18-24', '25-31'
];


Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#8e8e8e';
Chart.defaults.global.defaultFontStyle = 300;

let lineChart = new Chart(ctx, {
    // The type of chart
    type: 'line',

    // The dataset
    data: {
        labels: weeklyTraffic,

        datasets: [{
            data: traffic,

            backgroundColor: 'rgba(116, 119, 191, 0.25)',
            borderColor: 'rgba(116, 119, 191)',
            borderWidth: 1,

            pointBackgroundColor: 'white',
            pointBorderColor: 'rgba(116, 119, 191)',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 6,

            lineTension: 0
        }]
    },

    // Configuration options
    options: {
        maintainAspectRatio: false,

        legend: {
            display: false
        },

        tooltips: {
            enabled: false
        },

        // Hide vertical grid lines
        scales: {
            yAxes: [{
                // gridLines: {
                //     tickMarkLength: 0,
                //     offsetGridLines: true
                // },

                ticks: {
                    max: 2500,
                    beginAtZero: true
                }
            }]
        }

    }
});