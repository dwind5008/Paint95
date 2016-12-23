
    document.body.addEventListener("mousedown",activateMouseStatus);
    document.body.addEventListener("mouseup",deactivateMouseStatus);

    var buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttonsDiv";
    document.body.appendChild(buttonsDiv);

    for (var i = 0; i <= 7; i++) {

        var buttonContainer = document.createElement("div");
        buttonContainer.className = "buttonContainer";
        buttonsDiv.appendChild(buttonContainer);

        if (i < 5) {
            var colorButton = document.createElement("input");
            colorButton.type = "button";
            colorButton.className = "button";
            colorButton.id = "colorButton" + i;
            colorButton.addEventListener("click",getColor);
            buttonContainer.appendChild(colorButton);
        }

        // else if (i == 5){
        //     var smallEraserImageContainer = document.createElement("div");
        //     smallEraserImageContainer.id = "smallEraserImageContainer";
        //     buttonContainer.appendChild(smallEraserImageContainer);
        //     var smallEraserImage = document.createElement("img");
        //     smallEraserImage.src = "images/eraser.png";
        //     smallEraserImage.className = "button";
        //     smallEraserImage.id = "smallEraserImage";
        //     smallEraserImage.addEventListener("click",activateSmallEraser);
        //     smallEraserImageContainer.appendChild(smallEraserImage);
        // }
        // working on adding a small eraser

        else if (i == 6){
            var largeEraserImage = document.createElement("img");
            largeEraserImage.src = "images/eraser.png";
            largeEraserImage.className = "button";
            largeEraserImage.id = "largeEraserImage";
            largeEraserImage.addEventListener("click",activateLargeEraser);
            buttonContainer.appendChild(largeEraserImage);
        }

        //need to edit this eraser to have a larger radius

        else if (i == 7){
            var clearButton = document.createElement("button");
            clearButton.innerHTML = "Clear Canvas";
            clearButton.className = "button";
            clearButton.id = "clearButton";
            clearButton.addEventListener("click",clearCanvas);
            buttonContainer.appendChild(clearButton);
        }
    }

    var paintDiv = document.createElement("div");
    paintDiv.className = "paintDiv";
    document.body.appendChild(paintDiv);

    var paintContainer = document.createElement("div");
    paintContainer.className = "paintContainer";
    paintDiv.appendChild(paintContainer);

    for (var i = 0; i <= 2499; i++) {
        var paintPixel = document.createElement("div");
        paintPixel.className = "paintPixel";
        paintPixel.addEventListener("mouseover",applyColor);
        paintPixel.addEventListener("click",applyColorOnClick);
        paintContainer.appendChild(paintPixel);
    }

    var activeMouse = false;

    function activateMouseStatus(){
        activeMouse = true;
    }

    function deactivateMouseStatus(){
        activeMouse = false;
    }

    var selectedColor = "white";

    function getColor(e){
        var currentSelected = document.getElementsByClassName("selected")[0];
        if (currentSelected) {
            currentSelected.classList.remove("selected");
        }
        var selectedColorBox = e.target;
        selectedColorBox.classList.add("selected");
        var style = window.getComputedStyle(selectedColorBox);
        selectedColor = style.getPropertyValue("background-color");
    }

    // function getColor(e){
    //     var currentSelected = document.getElementById("selected");
    //     if (currentSelected){
    //         currentSelected.removeAttribute("id");
    //     }
    //     var selectedColorBox = e.target;
    //     selectedColorBox.setAttribute("id","selected");
    //     var style = window.getComputedStyle(selectedColorBox);
    //     selectedColor = style.getPropertyValue("background-color");
    // }
    // this is an attempt to create a function that changes the outline of a selected div using an id

    function activateSmallEraser(){
        var currentSelected = document.getElementsByClassName("selected")[0];
        if (currentSelected) {
            currentSelected.classList.remove("selected");
        }
        var eraserImage = document.getElementById("smallEraserImage");
        eraserImage.classList.add("selected");
        selectedColor = "white";
    }

    function activateLargeEraser(){
        var currentSelected = document.getElementsByClassName("selected")[0];
        if (currentSelected) {
            currentSelected.classList.remove("selected");
        }
        var eraserImage = document.getElementById("largeEraserImage");
        eraserImage.classList.add("selected");
        selectedColor = "white";
    }

    function clearCanvas(){
        var currentSelected = document.getElementsByClassName("selected")[0];
        if (currentSelected) {
            currentSelected.classList.remove("selected");
        }
        var paintPixels = document.getElementsByClassName("paintPixel");
        for (var i = 0; i <=2499; i++){
            paintPixels[i].style.backgroundColor = "white";
        }
    }

    function applyColor(e) {
        var currentPaintPixel = e.target;
        if (activeMouse == true){
            currentPaintPixel.style.backgroundColor = selectedColor;
        }
    }

    function applyColorOnClick(e){
        var currentPaintPixel = e.target;
        currentPaintPixel.style.backgroundColor = selectedColor;
    }
