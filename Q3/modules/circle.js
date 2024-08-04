function calcArea(radius){
    return Math.PI*radius**2;
}

function calcCircumference(radius){
    return 2*Math.PI*radius;
}

function calcDiameter(radius){
    return 2*radius;
}

module.exports = {
    calcArea,
    calcCircumference,
    calcDiameter
}