const calculatorForm = document.getElementById("calculatorForm");

calculatorForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stops form from refreshing website
    let top = document.getElementById("top");
    let bottom = document.getElementById("bottom");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let response = document.getElementById("response");
    let str = `Width: ${(parseFloat(right.value)-parseFloat(left.value))/200}<br>Height: ${(parseFloat(bottom.value)-parseFloat(top.value))/200}<br>X: ${(114.61249 - ((30480 - parseFloat(right.value))/200))}<br>Y: ${(79.13249 - ((20320 - parseFloat(bottom.value))/200))}`;
    response.innerHTML = str;
});