function convertToRadians(degree){
    return Math.PI*180*degree;
}

function convertToTHB(usd){
    return 30*usd;
}

function findMax(v1,v2,v3){
    max = v1;
    if(v2 > max )
        max = v2;

    if(v3 > max )
        max = v3;

    return max;
}

module.exports.radians = convertToRadians;
module.exports.convertToTHB = convertToTHB;
module.exports.findMax = findMax;
