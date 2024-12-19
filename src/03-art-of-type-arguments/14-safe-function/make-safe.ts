export const makeSafe =
  <TParams extends any[], TReturn>(func: (...args: TParams) => TReturn) =>
  (
    ...args: TParams
  ):
    | {
        type: 'success';
        result: TReturn,
      }
    | {
        type: 'failure';
        error: Error,
      } => {
    try {
      const result = func(...args);
      return {
        type: 'success',
        result,
      }
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      };
    }
  }