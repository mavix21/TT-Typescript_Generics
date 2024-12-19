type GetParamKeys<TTranslation extends string> = TTranslation extends ""
  ? []
  : TTranslation extends `${string}{${infer Param}}${infer Tail}`
  ? [Param, ...GetParamKeys<Tail>]
  : [];

type ParamKeys = GetParamKeys<"Hello {world}, {count} {times}">[number];

const translate = <
  TTranslations extends Record<string, string>,
  TTranslationKey extends keyof TTranslations,
  TParamKeys extends string[] = GetParamKeys<TTranslations[TTranslationKey]>,
>(
  translations: TTranslations,
  key: TTranslationKey,
  ...args: TParamKeys extends []
    ? []
    : [params: Record<TParamKeys[number], string>]
) => {
  const translation = translations[key];
  const params: any = args[0] || {};

  return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
}

const translations = {
  title: "Hello, {name}!",
  subtitle: "You have {count} new messages",
  button: "Click me!",
} as const;

const buttonText = translate(translations, "subtitle", { count: "6" });