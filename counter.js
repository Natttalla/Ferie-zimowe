// counter.js
// Tworzymy zmienną, która przechowuje liczbę odwiedzin
var visits = 0;

// Definiujemy funkcję, która zwiększa liczbę odwiedzin o jeden i wyświetla ją w elemencie o id="counter"
function updateCounter() {
    visits++;
    document.getElementById("counter").innerHTML = visits;
}

// Wywołujemy funkcję updateCounter, gdy strona zostanie załadowana
window.onload = updateCounter;