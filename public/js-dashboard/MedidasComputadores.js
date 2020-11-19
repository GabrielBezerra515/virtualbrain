let graficomaquina = new Chart(document.getElementById("GraficoPc"),
{
    type:"line",
data:{labels:[],
datasets:[
    {label:"Disco",
data:[],
fill:false,
borderColor:"rgb(75, 192, 192)",
lineTension:0.1
},

{label:"Memória",
data:[],
fill:false,
borderColor:"red",
lineTension:0.1
},

]},
options:{
    animation:{
        easing:"easeOutQuad"
    },
    responsive:true

}
},


);

setInterval(function() {
    let tempo = new Date();
    let hora = tempo.getHours()<10? "0"+tempo.getHours(): tempo.getHours();
    let minutos = tempo.getMinutes()<10? "0"+ tempo.getMinutes():tempo.getMinutes()
    let segundos = tempo.getSeconds()<10? "0"+ tempo.getSeconds():tempo.getSeconds()

    if(graficomaquina.data.datasets[0].data.length == 7) {
        graficomaquina.data.datasets[0].data.shift();
        graficomaquina.data.labels.shift();
    }
    graficomaquina.data.datasets[0].data.push( Math.random() * 10 + 1 );
    graficomaquina.data.labels.push(`${hora}:${minutos}:${segundos}`)

    if(graficomaquina.data.datasets[1].data.length == 7) {
        graficomaquina.data.datasets[1].data.shift();
    }
    graficomaquina.data.datasets[1].data.push( Math.random() * 10 + 1 );
    graficomaquina.update();

}, 2000);
