import { Equal, Expect } from "../helpers/type-utils";

const returnWhatIPassIn = <T>(t: T) => t;

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn('matt');

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, 'matt'>>];
