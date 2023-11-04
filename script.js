const calculatorForm = document.getElementById("calculatorForm");

calculatorForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stops form from refreshing website
    let top = document.getElementById("top");
    let bottom = document.getElementById("bottom");
    let right = document.getElementById("right");
    let left = document.getElementById("left");

    let width = (parseFloat(right.value)-parseFloat(left.value))/200;
    let height = (parseFloat(bottom.value)-parseFloat(top.value))/200;
    let X = 76.2 + ((152.4 - width)/2);
    let Y = 50.8 + ((101.6 - height)/2);

    let response = document.getElementById("response");
    let str = `Width: ${width}<br>Height: ${height}<br>X: ${X}<br>Y: ${Y}`;
    response.innerHTML = str;
});