fetch('data.json').then(response => response.json()).then(data => {
    function SelectSex(sex){

    }
})

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

crearGradiente('futbol', 'F1g', 10);
crearGradiente('basket', 'F2g', 20);
crearGradiente('rugby7', 'F3g', 30)
crearGradiente('handball', 'F4g', 40);
crearGradiente('hockey', 'F5g', 50);
crearGradiente('softball', 'F6g', 60)
crearGradiente('voley', 'F7g', 70);
crearGradiente('polo', 'F8g', 80);
crearGradiente('baseball', 'F9g', 90)


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

    var porciento = '0%';
    svg1.setAttribute('percentage', 'porciento')

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
      svg5b.style.top = "150px";
      setTimeout(function(){
        svg5b.style.top = "210px";
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



// {
//   "countries": {
//       "ang": {
//           "country_name": "Angola",
//           "continent": "África",
//           "development": ""
//       },
//     },
//     "sports": {
//         "basket": {
//             "sport_name": "Baloncesto",
//             "female": {
//                 "event_name": "Copa Mundial",
//                 "event_date": 2022,
//                 "numbers_of_teams": 12,
//                 "countries": [
//                     {
//                         "country_id": "aus",
//                         "manager_name": "Sandy Brondello",
//                         "manager_sex": "female",
//                         "result": 3
//                     },
//                   ]
//                 },
//                 "male": {
//                     "event_name": "Copa Mundial",
//                     "event_date": "2023",
//                     "countries": [
//                         {
//                             "country_id": "ger",
//                             "manager_name": "Gordie Herbert",
//                             "manager_sex": "male",
//                             "result": 1
//                         },
//                       ]
//                     }
//                 },
//                 "futbol": {
//                     "sport_name": "Fútbol",
//                     "female": {
//                         "event_name": "Copa Mundial",
//                         "event_date": 2023,
//                         "numbers_of_teams": 32,
//                         "countries": [
//                             {
//                                 "country_id": "aus",
//                                 "manager_name": "Tony Gustavsson",
//                                 "manager_sex": "male",
//                                 "result": 4
//                             },
//                           ]
//                         },
//                         "male": {
//                             "event_name": "Copa del Mundo",
//                             "event_date": 2022,
//                             "countries": [
//                                 {
//                                     "country_id": "aus",
//                                     "manager_name": "Graham Arnold",
//                                     "manager_sex": "male",
//                                     "result": 11
//                                 },