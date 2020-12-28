const partition = require('./2.4');

describe('2.4 - partition', () => {
  const list1 = {
    value: 3, next: {
      value: 5, next: {
        value: 8, next: {
          value: 5, next: {
            value: 10, next: {
              value: 2, next: {
                value: 1, next: null
              }
            }
          }
        }
      }
    }
  };

  
  const answer = partition(list1, 5);
  const lessThanPartition = [answer.value, answer.next.value, answer.next.next.value];
  const moreThanPartition = [answer.next.next.next.next.value, answer.next.next.next.next.next.value, answer.next.next.next.next.next.next.next.value];
  test.each(lessThanPartition)(
    "%p is less than the given partition",
    (val) => {
      expect(val).toBeLessThan(5);
    }
  )
  test.each(moreThanPartition)(
    "%p is equal to or greater than the given partition",
    (val) => {
      expect(val).toBeGreaterThanOrEqual(5);
    }
  )
})