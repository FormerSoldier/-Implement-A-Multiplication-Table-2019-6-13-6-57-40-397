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