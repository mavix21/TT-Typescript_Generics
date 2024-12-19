// When returning the value only, it infers the literal type
const returnsValueOnly = <T>(t: T) => t;

const result = returnsValueOnly("a");

// When returning an object or array, it does not infer the literal type
const returnsValueInAnObject = <T>(t: T) => ({ t });

const result2 = returnsValueInAnObject("a");

// With a constraint, it narrows it down to the literal type
const returnsValueInAnObjectWithConstraint = <T extends string>(t: T) => ({ t });

const result3 = returnsValueInAnObjectWithConstraint("a");