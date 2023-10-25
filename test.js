import data from './data/data.json' assert { type: "json"};

function crearGradiente(svgID, gradienteID, porcentaje){
    var svg = document.getElementById(svgID);

    var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    linearGradient.setAttribute("id", gradienteID);

    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#fdcae1");

    var stop11 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop11.setAttribute("offset", porcentaje + "%");
    stop11.setAttribute("stop-color", "#fdcae1");

    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", porcentaje + "%");
    stop2.setAttribute("stop-color", "#84b6f4");

    var stop21 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop21.setAttribute("offset", "100%");
    stop21.setAttribute("stop-color", "#84b6f4");

    linearGradient.appendChild(stop1);
    linearGradient.appendChild(stop11);
    linearGradient.appendChild(stop2);
    linearGradient.appendChild(stop21);

    defs.appendChild(linearGradient);

    svg.appendChild(defs);
}

function SelectSex(sex){
  var managersXsports = [];
  var totals = [];
  var i = -1;
  for (var sport in data.sports) {
    i++;
    totals[i] = 0;
    managersXsports[i] = 0;
    if (sex === 'female' || sex === 'all') {
      totals[i] += data.sports[sport].female.numbers_of_teams;
      for (var j = 0; j < data.sports[sport].female.countries.length; j++) {
        if (data.sports[sport].female.countries[j].manager_sex === "female") managersXsports[i]++;
      }
    }
    if (sex === 'male' || sex === 'all') {
      totals[i] += data.sports[sport].male.numbers_of_teams;
      for (var j = 0; j < data.sports[sport].male.countries.length; j++) {
        if (data.sports[sport].male.countries[j].manager_sex === "female") managersXsports[i]++;
      }
    }
  }
  var final = [];
  for (let i = 0; i < managersXsports.length; i++) {
    final[i] = (managersXsports[i] * 100) / totals[i];
  }
  return final;
}


//Dos formas que investigue de como podia funcionar que el selector
//le pasara los valores al resto de clases

function FillAll() {
  var x = document.getElementById("Sexo").value;
  alert("El valor seleccionado es: " + x);
  var a = SelectSex(x);
  crearGradiente('futbol', 'F1g', a[1]);
  crearGradiente('basket', 'F2g', a[0]);
  crearGradiente('rugby7', 'F3g', a[2]);
  crearGradiente('handball', 'F4g', a[4]);
  crearGradiente('hockey', 'F5g', a[6]);
  crearGradiente('softball', 'F6g', a[5]);
  crearGradiente('voley', 'F7g', a[8]);
  crearGradiente('polo', 'F8g', a[7]);
  crearGradiente('baseball', 'F9g', a[3]);
}

//FillAll()

const selectElement = document.querySelector(".Sexo");

selectElement.addEventListener("change", (event) => {
  var a = SelectSex(event.target.value);
  alert("El valor seleccionado es: " + event.target.value);
  crearGradiente('futbol', 'F1g', a[1]);
  crearGradiente('basket', 'F2g', a[0]);
  crearGradiente('rugby7', 'F3g', a[2]);
  crearGradiente('handball', 'F4g', a[4]);
  crearGradiente('hockey', 'F5g', a[6]);
  crearGradiente('softball', 'F6g', a[5]);
  crearGradiente('voley', 'F7g', a[8]);
  crearGradiente('polo', 'F8g', a[7]);
  crearGradiente('baseball', 'F9g', a[3]);

  
});

window.onload = function() {
  var svg1 = document.getElementById('basket');
  var svg1b = document.getElementById('basketball');
  var svg2 = document.getElementById('futbol');
  var svg2b = document.getElementById('soccerball');
  var svg3 = document.getElementById('rugby7');
  var svg3b = document.getElementById('rugbyball');
  var svg4 = document.getElementById('handball');
  var svg4b = document.getElementById('handballball');
  var svg5 = document.getElementById('hockey');
  var svg5b = document.getElementById('hockeyball');
  var svg6 = document.getElementById('softball');
  var svg6b = document.getElementById('softballball');
  var svg7 = document.getElementById('voley');
  var svg7b = document.getElementById('voleyball');
  var svg8 = document.getElementById('polo');
  var svg8b = document.getElementById('poloball');
  var svg9 = document.getElementById('baseball');
  var svg9b = document.getElementById('baseballball');

  svg1.addEventListener('click', function(){
    svg1b.style.rotate = '360deg';
    setTimeout(function(){
      svg1b.style.rotate = '0deg';;
      }, 500);
  });

  svg2.addEventListener('click', function(){
      svg2b.style.rotate = '360deg';
      setTimeout(function(){
        svg2b.style.rotate = '0deg';;
        }, 500);
  });

  svg3.addEventListener('click', function(){
      svg3b.style.rotate = '360deg';
      setTimeout(function(){
        svg3b.style.rotate = '0deg';;
        }, 500);
  });

  svg4.addEventListener('click', function(){
      svg4b.style.rotate = '360deg';
      setTimeout(function(){
        svg4b.style.rotate = '0deg';;
        }, 500);
  });

  svg5.addEventListener('click', function(){
    svg5b.style.top = "180px";
    setTimeout(function(){
      svg5b.style.top = "240px";
      }, 500);
  });

  svg6.addEventListener('click', function(){
      svg6b.style.rotate = '360deg';
      setTimeout(function(){
        svg6b.style.rotate = '0deg';;
        }, 500);
  });

  svg7.addEventListener('click', function(){
      svg7b.style.rotate = '360deg';
      setTimeout(function(){
        svg7b.style.rotate = '0deg';;
        }, 500);
  });

  svg8.addEventListener('click', function(){
      svg8b.style.rotate = '360deg';
      setTimeout(function(){
        svg8b.style.rotate = '0deg';;
        }, 500);
  });

  svg9.addEventListener('click', function(){
      svg9b.style.rotate = '360deg';
      setTimeout(function(){
        svg9b.style.rotate = '0deg';;
        }, 500);
  });
};