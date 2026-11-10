import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/fibonacci.js'

describe('fibonacci', () => {
  it('devuelve 0 para n = 0', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('devuelve 1 para n = 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('suma los dos anteriores para n >= 2', () => {
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(5)).toBe(5)
    expect(fibonacci(10)).toBe(55)
  })

  it('lanza RangeError si n es negativo', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError)
    expect(() => fibonacci(-1)).toThrow('solo números enteros ≥ 0')
  })

  it('lanza RangeError si n no es entero', () => {
    expect(() => fibonacci(1.5)).toThrow(RangeError)
  })
})