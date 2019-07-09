const obj = require('../main');

it('should return false when call isStartSmallerEqualEnd given 10,1',() => {
    expect(obj.isStartSmallerEqualEnd(10,1)).toBe(false);
});
it('should return true when call isStartSmallerEqualEnd given 1,10',() => {
    expect(obj.isStartSmallerEqualEnd(1,10)).toBe(true);
});

it('should return false when call isInRange given -1,10', () => {
    expect(obj.isInRange(-1,10)).toBe(false);
});
it('should return true when call isInRange given 10,20', () => {
    expect(obj.isInRange(10,20)).toBe(true);
});

it('should return null when call createMultiplyTable given false, true, 10,1',() =>{
    expect(obj.createMultiplyTable(false,true,10,1)).toBe(null);
});
it('should return "Out Of Range" when call createMultiplyTable given true, false, -1,10',() =>{
    expect(obj.createMultiplyTable(true,false,-1,10)).toBe("Out Of Range");
});
it('should return "2*2=4" when call createMultiplyTable given true, true, 2,2',() =>{
    expect(obj.createMultiplyTable(true,true,2,2)).toBe("2*2=4");
});

it('should return "1*1=1\n2*1=2 2*2=4" when call createMultiplyTableByRange given 1,2',() =>{
    expect(obj.createMultiplyTableByRange(1,2)).toBe("1*1=1\n2*1=2 2*2=4");
});