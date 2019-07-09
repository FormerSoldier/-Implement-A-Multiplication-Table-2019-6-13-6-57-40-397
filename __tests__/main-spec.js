const obj = require('../main');

it('should return false when call isStartSmallerEqualEnd given 10,1',() => {
    expect(obj.isStartSmallerEqualEnd(10,1)).toBe(false);
});