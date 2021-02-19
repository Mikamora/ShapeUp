const canvas = document.querySelector(".canvas");

const shape = document.querySelector("#Shape");
const widthTrack = document.querySelector("#Width");
const heightTrack = document.querySelector("#Height");
const radiusTrack = document.querySelector("#Radius");
const area = document.querySelector("#Area");
const perimeter = document.querySelector("#Perimeter");

const rectBtn = document.querySelector(".rectangle");
const squBtn = document.querySelector(".square");
const cirBtn = document.querySelector(".circle");
const triBtn = document.querySelector(".triangle");

let MAX = 520;
let randomTri = 0;

rectBtn.addEventListener("click", () => {
    let a = document.querySelector("#rectangle-height").value;
    let b = document.querySelector("#rectangle-width").value;
    new Rectangle(a, b);
})
squBtn.addEventListener("click", ()=> {
    let a = document.querySelector("#square-length").value;
    new Square(a);
})
cirBtn.addEventListener("click", ()=>{
    let a = document.querySelector("#circle-radius").value;
    new Circle(a);
})
triBtn.addEventListener("click", ()=>{
    MAX = 400;
    let a = document.querySelector("#triangle-height").value;
    new Triangle(a);
    MAX = 520;
})

class Shape{
    constructor(height, width){
        this.width = width;
        this.height =height;
        this.div = document.createElement("div");
        this.div.className = "shapes";
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
        this.xVal = randomVal(0, MAX);
        this.yVal = randomVal(0, MAX);
        this.div.style.left = `${this.xVal}px`; //x coordinate
        this.div.style.top = `${this.yVal}px`; //y coordinate
        this.updateColor();
        canvas.appendChild(this.div);
        this.dblclick();
        this.updatePanel();

    }
    updateLocation(){
        this.div.style.left = `${this.xVal}px`; //x coordinate
        this.div.style.top = `${this.yVal}px`; //y coordinate
    }
    updateColor(){
        let randomColor = `rgb(${randomVal(0,255)}, ${randomVal(0,255)}, ${randomVal(0,255)}, ${(Math.random()* (1-.5)) + .5})`;
        this.div.style.backgroundColor = randomColor;
    }
    dblclick(){
        this.div.addEventListener("dblclick", ()=>{
            canvas.removeChild(this.div);
        })
    }
}

class Rectangle extends Shape{
    constructor(height, width){
        super(height, width);
        this.updatePanel();
    }
    updatePanel(){
        this.div.addEventListener("click", ()=>{
            if(this.radius == undefined){
                this.radius = "N/A";
            }
            shape.textContent = `Shape Name: Rectangle`;
            widthTrack.textContent = `Width: ${this.width} pixels`;
            heightTrack.textContent = `Height: ${this.height} pixels`;
            radiusTrack.textContent = `Radius: ${this.radius} pixels`;
            area.textContent = `Area: ${this.height * this.width} pixels`;
            perimeter.textContent = `Perimeter: ${(this.height*2) + (this.width*2)} pixels`;
        })
    }
}

class Square extends Shape{
    constructor(height){
        super(height);
        this.width = height;
        this.div.style.width = `${height}px`;
        this.updatePanel();
    }
    updatePanel(){
        this.div.addEventListener("click", ()=>{
            if(this.radius == undefined){
                this.radius = "N/A";
            }
            shape.textContent = `Shape Name: Square`;
            widthTrack.textContent = `Width: ${this.width} pixels`;
            heightTrack.textContent = `Height: ${this.height} pixels`;
            radiusTrack.textContent = `Radius: ${this.radius} pixels`;
            area.textContent = `Area: ${this.height * this.height} pixels`;
            perimeter.textContent = `Perimeter: ${this.height * 4} pixels`;
        })
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
        this.div.style.width = `${radius*2}px`;
        this.div.style.height = `${radius*2}px`;
        this.div.style.borderRadius = "50%";
        this.updatePanel();
    }
    updatePanel(){
        this.div.addEventListener("click", ()=>{
            this.width = "N/A";
            this.height = "N/A";
            shape.textContent = `Shape Name: Circle`;
            widthTrack.textContent = `Width: ${this.width} pixels`;
            heightTrack.textContent = `Height: ${this.height} pixels`;
            radiusTrack.textContent = `Radius: ${this.radius} pixels`;
            area.textContent = `Area: ${3.14 * (this.radius*this.radius)} pixels`;
            perimeter.textContent = `Perimeter: ${3.14 * (2 * this.radius)} pixels`;
        })
    }
}

class Triangle extends Shape{
    constructor(height){
        super();
        this.height = height;
        this.div.style.height ="0";
        this.div.style.width ="0";
        randomTri = randomVal(0, 5);
        if(randomTri == 1){
            this.div.style.borderLeft = `${height}px solid transparent`;
            this.div.style.borderTop = `${height}px solid transparent`;
            this.div.style.borderRight = `${height}px solid ${this.updateColor()}`
        } else if (randomTri == 2){
            this.div.style.borderTop = `${height}px solid transparent`;
            this.div.style.borderRight = `${height}px solid transparent`;
            this.div.style.borderLeft = `${height}px solid ${this.updateColor()}`;
        } else if(randomTri == 3){
            this.div.style.borderRight = `${height}px solid transparent`;
            this.div.style.borderBottom = `${height}px solid transparent`;
            this.div.style.borderLeft = `${height}px solid ${this.updateColor()}`;
        } else if(randomTri == 4){
            this.div.style.borderBottom = `${height}px solid transparent`;
            this.div.style.borderLeft = `${height}px solid transparent`;
            this.div.style.borderRight = `${height}px solid ${this.updateColor()}`;
        }
        this.updatePanel();
    }
    updateColor(){
        let randomColor = `rgb(${randomVal(0,255)}, ${randomVal(0,255)}, ${randomVal(0,255)}, ${Math.random()* (1-.5) + .5})`;
        return randomColor;
    }
    updatePanel(){
        this.div.addEventListener("click", ()=>{
            if(this.radius == undefined){
                this.radius = "N/A";
            }
            shape.textContent = `Shape Name: Triangle`;
            widthTrack.textContent = `Width: ${this.height} pixels`;
            heightTrack.textContent = `Height: ${this.height} pixels`;
            radiusTrack.textContent = `Radius: ${this.radius} pixels`;
            area.textContent = `Area: ${0.5 * this.height * this.height} pixels`;
            perimeter.textContent = `Perimeter: ${2 * this.height + (Math.sqrt(2)) * this.height} pixels`;
        })
    }
}





function randomVal(min, max){
    return Math.floor(Math.random() * (max - min)) + min; //random num in between 2
}