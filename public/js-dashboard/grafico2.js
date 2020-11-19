var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Docker', 'Postman', 'Intelijj'],
        datasets: [{
            labels: ['#Top 3','docker'],
            data: [25,22,55],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend:{
         
        display:false
      },
        scales: {
            yAxes: [{
                ticks: {
                        fontSize:19
                
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%' ;
                    }
                }
            }]
        }
    }
});