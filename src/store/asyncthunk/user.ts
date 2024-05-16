// interface MyData {
//   // ...
// }

// const fetchUserById = createAsyncThunk(
//   'users/fetchById',
//   // Declare the type your function argument here:
//   async (userId: number) => {
//     const response = await fetch(`https://reqres.in/api/users/${userId}`)
//     // Inferred return type: Promise<MyData>
//     return (await response.json()) as MyData
//   },
// )

// // the parameter of `fetchUserById` is automatically inferred to `number` here
// // and dispatching the resulting thunkAction will return a Promise of a correctly
// // typed "fulfilled" or "rejected" action.
// const lastReturnedAction = await store.dispatch(fetchUserById(3))