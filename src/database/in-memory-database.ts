export interface DataSchema {
  key: string,
  counter: number
}

export class InMemoryDatabase {
  public database: DataSchema[] = [
    {
      key: 'test',
      counter: 0
    }
  ]

  increment(key: string) {
    const item = this.database.find(entry => entry.key === key)

    if (item) {
      item.counter++
    } else {
      throw new Error(`Key '${key}' not found in the database.`)
    }
  }
}

export const databaseInstance = new InMemoryDatabase()