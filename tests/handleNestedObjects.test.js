const handleNestedObject = require('../handleNestedObject')

describe('handleNestedObject', () => {
  test('Deve atualizar propiedades existentes', () => {
    const original = { a: 1, b: { c: 2}}
    const operation = { b: { c : 42} }

    const result = handleNestedObject(original, operation)

    expect(result).toEqual({ a: 1, b: { c: 42 }})
    expect(original).toEqual({ a: 1, b: { c: 2}}) // Garante inmutabilidade
  })

  test('Deve adicionar novas propiedades', () => {
    const original = { a: 1 }
    const operation = { b: {c : 2} }

    const result = handleNestedObject(original, operation)

    expect(result).toEqual({ a: 1, b: {c : 2}})
    expect(original).toEqual({ a: 1 }) // Garante inmutabilidade
  })

  test('Deve excluir propiedades ao passar null', () => {
    const original = { a: 1, b: { c: 2}, d: 5}
    const operation = { d: null }

    const result = handleNestedObject(original, operation)

    expect(result).toEqual({ a: 1, b: { c: 2} })
    expect(original).toEqual({ a: 1, b: { c: 2}, d: 5}) // Garante inmutabilidade
  })

  test('Deve clonar objetos se não tiver operações', () => {
    const original = { a: 1, b: { c: 2}, d: 5}
    const operation = {}

    const result = handleNestedObject(original, operation)

    expect(result).toEqual({ a: 1, b: { c: 2}, d: 5})
    expect(original).toEqual({ a: 1, b: { c: 2}, d: 5}) // Garante inmutabilidade
  })
})