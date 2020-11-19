var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda', 'Terça','Quarta','Quinta','Sexta','Sabado'],
        datasets: [{
            label: 'Problemas em disco',
            data: [12, 19, 3,45,65,10,20,40],
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
                
        
            borderColor: 
                'rgba(255, 99, 132, 1)',
            
            borderWidth: 1
        },
        {
            label: 'Problemas no processador',
            data: [30, 10, 5,30,34,19,20,25],
            backgroundColor: 
                
                'rgba(54, 162, 235, 0.2)'
            ,
            borderColor: 
               
                'rgba(54, 162, 235, 1)'
                
            ,
            borderWidth: 1
        },
        {
            label: 'Problemas de memória',
            data: [40, 19, 3,45,65,10,20,40],
            backgroundColor: 
               
                'rgba(255, 206, 86, 0.2)'
            ,
            borderColor: 
                
                'rgba(255, 206, 86, 1)'
            ,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%' ;
                    }
                }
            }]
            
        }
    }
});