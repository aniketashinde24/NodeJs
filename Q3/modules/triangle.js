function isEquilateral(side1, side2, side3){
    if(side1===side2 && side2===side3 && side3===side1)
        return "Equilateral Triangle";
    else
        return "Not an Equilateral Triangle"
}

function calcPerimeter(side1, side2, side3){
    return side1+side2+side3;
}

module.exports = {
    isEquilateral: isEquilateral,
    calcPerimeter: calcPerimeter
}