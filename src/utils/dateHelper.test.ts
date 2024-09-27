import { formatDate } from './dateHelper';

test('formats date correctly', () => {
    const inputDate = '2022-01-22T03:00:00';
    const expectedOutput = '22 January 2022 Saturday 03:00';
    expect(formatDate(inputDate)).toBe(expectedOutput);
    expect(2 + 2).toBe(4);
});