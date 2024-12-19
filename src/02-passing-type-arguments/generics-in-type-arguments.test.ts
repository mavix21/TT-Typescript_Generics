import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const cloneComponent = <TProps>(component: Component<TProps>) => {
  return new Component(component.getProps());
}

it("Should clone a component", () => {
  const component = new Component({ foo: "bar" });
  const clonedComponent = cloneComponent(component);

  const result = clonedComponent.getProps();

  expect(result).toEqual({ foo: "bar" });

  type test = [
    Expect<Equal<typeof result, { foo: string }>>,
  ]
});