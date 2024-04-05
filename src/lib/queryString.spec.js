// Com o describe, podemos organizar os testes em grupos, então um describe pode conter vários its
import { toQueryString, toObject } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Natalia',
      profession: 'Developer',
    };
    expect(toQueryString(obj)).toBe('name=Natalia&profession=Developer');
  });
});

describe('Query string to object', () => {
  it('should convert a query string into an object', () => {
    const qs = 'name=Natalia&profession=Developer';
    expect(toObject(qs)).toEqual({
      name: 'Natalia',
      profession: 'Developer',
    });
  });
});
