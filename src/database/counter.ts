export function createCounter(initialState = 0) {
  let state = initialState

  return {
    increment: async () => {
      state++;
    },
    get: async () => {
      return state;
    },
  }
}