import "https://raw.githubusercontent.com/rbuckton/reflect-metadata/master/Reflect.ts";

export function InjectDependencies<T extends { new (...args: any[]): {} }>(
  target: T
) {
  return class InjectedDependenciesClass extends target {
    constructor(...args: any[]) {
      super(...args);
    }

    inject(dependencies: any) {
      const paramTypes = Reflect.getMetadata("design:paramtypes", target);
      const mappedDependencies = paramTypes.map(
        (param: any) => dependencies[param.name]
      );
      return new target(...mappedDependencies);
    }
  };
}
