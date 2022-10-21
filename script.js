//Putting the modal wrapper inside of a container
const modalWrapper = document.querySelector(".modal-wrapper");
//Putting the image inside of a container
const image = document.getElementById("image");

//Putting the jorge jesus button inside of a container
const jorgeJesusBtn = document.getElementById("jorgeJesusBtn");
//Putting the fatih terim button inside of a container
const fatihTerimBtn = document.getElementById("fatihTerimBtn");
//Putting the close button inside of a container
const close = document.getElementById("close");

//removing hidden class from modal wrapper and adding jorge jesus picture src with click eventlistener on jorgejesus button
jorgeJesusBtn.addEventListener("click", function () {
    modalWrapper.classList.remove("hidden");
    image.src = "images/jorge-jesus.jpeg";
})
//removing hidden class from modal wrapper and adding fatih terim picture src with click eventlistener on fatihterim button
fatihTerimBtn.addEventListener("click", function () {
    modalWrapper.classList.remove("hidden");
    image.src = "images/fatih-terim.jpeg";
})

//adding hidden class to modal wrapper with the close button
close.addEventListener("click", function () {
    modalWrapper.classList.add("hidden");
})

//Gör så att man kan klicka utanför för att kunna stänga. Kopierade rakt av så jag förstår inte koden.
window.onclick = function(e) {
    if(e.target == modalWrapper) {
        modalWrapper.classList.add("hidden");
    }
}