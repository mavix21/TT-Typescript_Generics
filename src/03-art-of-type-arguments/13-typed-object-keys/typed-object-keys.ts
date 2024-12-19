// const typedObjectKeys = (obj: unknown) => {
//   return Object.keys(obj);
// }

// Solution No. 1
// const typedObjectKeys = <TObject extends object>(obj: TObject) => {
//   return Object.keys(obj) as Array<keyof TObject>;
// }

// Solution No. 2
export const typedObjectKeys = <T extends string>(obj: Record<T, any>) => {
  return Object.keys(obj) as Array<T>;
}
