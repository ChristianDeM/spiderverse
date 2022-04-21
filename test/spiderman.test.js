const Spiderman = require('../app/Spiderman')
describe("Probando clase spyderman", () => {
    test('Caso 1: crando un objeto', () => {
      const Andrew = new Spiderman("spyderman sony",31,"Andrew Garfield","sony")
        expect(Andrew.name).toBe("spyderman sony")
        expect(Andrew.edge).toBe(31)
        expect(Andrew.nameactor).toBe("Andrew Garfield")
        expect(Andrew.movie).toBe("sony")
    })
    test('Caso 2: crando a tom ', () => {
        const Tom = new Spiderman("Tome holland",31,"Andrew Garfield","sony")
          expect(Tom.name).toBe("Tome holland")
      })
  })