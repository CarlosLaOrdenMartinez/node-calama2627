function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('solo números enteros ≥ 0')
  }
  let anterior = 0
  let actual = 1
  for (let i = 0; i < n; i++) {
    [anterior, actual] = [actual, anterior + actual]
  }
  return anterior
}

export { fibonacci }