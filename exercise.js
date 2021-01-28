let ask = Number(prompt(`
What do you wanna find (select a number) ? 
    1: Volume of a cube.
    2: Circumfrence of a circle.
    3: Area of a square.
    4: Perimeter of a square.
    5: Volume of a cube.
    6: Exit program. `
));


switch (ask) {
    case 1:
    function volumeCube(){
        let side = prompt('input the side of the cube',10);
        return Math.pow(side,3);
    }
    alert(volumeCube());
    break;
    case 2:
        function circumfrenceOfCircle(){
            let side = prompt('input the side of the cube',10);
            return Math.pow(side,3);
        }
        alert(circumfrenceOfCircle());
        break;
    case 3:
        function areaOfSquare(){

        }
        areaOfSquare();
        break;
    case 4:
        function perimeterOfSquare(){

        }
        perimeterOfSquare();
        break;
    case 5:
        function volumeOfCube() {
    
        }
        volumeOfCube();
        break;

    default:
        function exit(){

        }
        break;
}


