function isStartSmallerEqualEnd(start, end){
    return start <= end;
}

function isInRange(start, end){
    return start >= 1 && start <= 1000 && end >= 1 && end <= 1000;
}

function createMultiplyTable(startSmallerEqualEnd, inRange, start, end){
    if(!startSmallerEqualEnd)
        return null;
    if(!inRange)
        return 'Out Of Range';
    var result = [];
    var result_child = [];
    for(let i = start; i <= end; i++){
        for(let j = start; j <= i; j++){
            result_child.push(i + '*' + j + '=' + (i*j));
        }
        result.push(result_child.join(' '));
        result_child = [];
    }
    return result.join('\n');
}

module.exports = {
    isStartSmallerEqualEnd,
    isInRange,
    createMultiplyTable
};