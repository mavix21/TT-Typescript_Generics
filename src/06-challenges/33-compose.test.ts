function compose<A, R>(fn1: (a: A) => R): (input: A) => R;
function compose<A, B, R>(fn1: (a: A) => B, fn2: (b: B) => R): (input: A) => R;
function compose<A, B, C, R>(fn1: (a: A) => B, fn2: (b: B) => C, fn3: (c: C) => R): (input: A) => R;
function compose(
  ...funcs: Array<(input: any) => any>
) {
  return (input: any) => {
    return funcs.reduce((acc, fn) => fn(acc), input);
  }
}

const addOne = (num: number) => num + 1;

const addTwo = compose(addOne, addOne);