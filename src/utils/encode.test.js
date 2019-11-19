import { encode } from './encode';

describe('encode', () => {
  describe('when an empty object is passed', () => {
    it('should return an empty string', () => {
      expect(encode({})).toBe('');
    });
  });

  describe('when an object containing primitive data types is passed', () => {
    it('should return an encoded string', () => {
      expect(
        encode({
          a: 'string',
          b: 123456789,
          c: true,
          d: null,
          e: undefined,
        }),
      ).toBe('a=string&b=123456789&c=true&d=null&e=undefined');
    });
  });

  describe('when an object containing complex data types is passed', () => {
    it('should throw an error', () => {
      expect(() =>
        encode({
          a: {},
        }),
      ).toThrowError();
      expect(() =>
        encode({
          a: [],
        }),
      ).toThrowError();
    });
  });
});
