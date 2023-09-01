import calculate from '../logic/calculate';
import operate from '../logic/operate';

// Mock the 'operate' function
jest.mock('../logic/operate', () => jest.fn());

describe('calculate', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should handle the "AC" button correctly', () => {
    const result = calculate({ total: '4', next: '6', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('should handle number buttons correctly', () => {
    const result1 = calculate({ total: null, next: null, operation: '-' }, '4');
    expect(result1).toEqual({
      total: null,
      next: '4',
      operation: '-',
    });

    const result2 = calculate({ total: '6', next: null, operation: '+' }, '2');
    expect(result2).toEqual({
      total: '6',
      next: '2',
      operation: '+',
    });
  });

  test('should handle the "." button correctly', () => {
    const result1 = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result1).toEqual({ total: '10', next: '5.', operation: '+' });

    const result2 = calculate({ total: '10', next: '5.5', operation: '-' }, '.');
    expect(result2).toEqual({ total: '10', next: '5.5', operation: '-' });

    const result3 = calculate({ total: null, next: 0, operation: null }, '.');
    expect(result3).toEqual({ total: null, next: '0.', operation: null });
  });

  test('should handle the "=" button correctly', () => {
    operate.mockReturnValue('15');

    const result1 = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result1).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  test('should handle the "+/-" button correctly', () => {
    const result1 = calculate({ total: null, next: '5', operation: null }, '+/-');
    expect(result1).toEqual({ total: null, next: '-5', operation: null });

    const result2 = calculate({ total: '10', next: null, operation: null }, '+/-');
    expect(result2).toEqual({ total: '-10', next: null, operation: null });
  });

  test('should handle operation buttons', () => {
    operate.mockReturnValue('15');

    const result1 = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result1).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
    const result2 = calculate({ total: '10', next: null, operation: null }, '+');
    expect(result2).toEqual({ total: '10', next: null, operation: '+' });

    const result3 = calculate({ total: '10', next: '5', operation: '+' }, '*');
    expect(result3).toEqual({
      total: '15',
      next: null,
      operation: '*',
    });
  });
});
