import { test, expect } from '@jest/globals'
import { validateConfirmation } from '../funciones/validateConfirmation(confirmation).js'
console.log(test)

test('validateConfirmation should return true for valid confirmation', () => {
  expect(validateConfirmation('confirmar')).toBe(true)
  expect(validateConfirmation('rechazar')).toBe(true)
})

test('validateConfirmation should return false for invalid confirmation', () => {
  expect(validateConfirmation('aceptar')).toBe(false)
  expect(validateConfirmation('cancelar')).toBe(false)
})
