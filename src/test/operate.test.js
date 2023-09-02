import operate from '../logic/operate';

describe('operate', () => {
  describe('Unknown operation', () => {
    test('throws error for unknown operation', () => {
      expect(() => operate('4', '2', '^')).toThrow("Unknown operation '^'");
    });
  });

  describe('addition', () => {
    test('perfoms addition correctly i.e. 3 + 4 = 7', () => {
      expect(operate('3', '4', '+')).toBe('7');
    });
  });

  describe('subtraction', () => {
    test('perfoms subtraction correctly i.e. 6 - 4 = 2', () => {
      expect(operate('6', '4', '-')).toBe('2');
    });
  });

  describe('multiplication', () => {
    test('perfoms multiplication correctly i.e. 5 x 4 = 20', () => {
      expect(operate('5', '4', 'x')).toBe('20');
    });

    test('perfoms multiplication correctly i.e. 5 x 0 = 0', () => {
      expect(operate('5', '0', 'x')).toBe('0');
    });
  });

  describe('division', () => {
    test('performs division correctly', () => {
      expect(operate('6', '2', '÷')).toBe('3');
    });

    test('handles division by zero', () => {
      expect(operate('3', '0', '÷')).toBe("Can't divide by 0.");
    });
  });

  describe('modulo', () => {
    test('performs modulo correctly', () => {
      expect(operate('5', '2', '%')).toBe('1');
    });

    test('handles modulo with zero divisor', () => {
      expect(operate('7', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
    });
  });

  describe('AC operation', () => {
    test('resets to 0 with AC operation', () => {
      expect(operate('5', '2', 'AC')).toBe('0');
    });
  });

  describe('sign operation', () => {
    test('changes sign correctly', () => {
      expect(operate('6', '4', '+/-')).toBe('-6');
    });
  });
});
