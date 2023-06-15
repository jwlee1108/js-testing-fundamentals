const {sum, subtract} = require('../math')

function testSum() {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
}

function testSubtract() {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
}

test('sum add numbers', testSum);

test('subtract subtracts numbers', testSubtract);
// test('sum adds numbers', () => {
//   const result = sum(3, 7)
//   const expected = 10
//   expect(result).toBe(expected)
// })

// test('subtract subtracts numbers', () => {
//   const result = subtract(7, 3)
//   const expected = 4
//   expect(result).toBe(expected)
// })

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
