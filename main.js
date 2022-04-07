let id = document.getElementById("number");
let advice = document.getElementById("advice");
let button = document.getElementById("random");

    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => showAdvice(data));


 const showAdvice = data => {

    const { slip } = data;

    id.textContent = ` #${slip.id}`;
    advice.textContent = `"${slip.advice}"`;
} 

button.addEventListener("click", () => {

    location.reload();
})

