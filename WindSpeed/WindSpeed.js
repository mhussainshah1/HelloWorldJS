/*
Create a single-page web application which allows the user to select a windspeed and displays the category hurricane associated with that windspeed. Use the following chart for reference:

Hurricane wind speed chart
Category	Wind Speed (mph)
1	74 - 95
2	96 - 110
3	111 - 130
4	131 - 155
5	155 and above
*/

var select = document.querySelector('select');
var para = document.getElementById("para");//var para =document.querySelector('p');

select.addEventListener('change', setWeather);


function setWeather() {
    var choice = select.value;

    switch (choice) {
        case "1":
            para.innerHTML = 'Cat 1';
            break;
        case "2":
            para.innerHTML = 'Cat 2';
            break;
        case "3":
            para.innerHTML = 'Cat 3';
            break;
        case "4":
            para.textContent = 'Cat 4';
            break;
        case "5":
            para.textContent = 'Cat 5';
            break;
        default:
            para.textContent = 'Invalid choice';
    }
}
