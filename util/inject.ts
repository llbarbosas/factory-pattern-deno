import "https://raw.githubusercontent.com/rbuckton/reflect-metadata/master/Reflect.ts";

export function InjectDependencies<T extends { new (...args: any[]): {} }>(
  target: T
) {
  return class InjectedDependenciesClass extends target {
    constructor(...args: any[]) {
      super(...args);
    }

    injectDependencies(dependencies: any) {
      const paramTypes = Reflect.getMetadata("design:paramtypes", target);
      const mappedDependencies = paramTypes.map(
        (param: any) => dependencies[param.name]
      );
      return new target(...mappedDependencies);
    }
  };
}

export function Module<T>(target: any, config: { providers: any[] }): T {
  const providersMap: { [providerName: string]: any } = {};

  for (const provider of config.providers) {
    if (provider.provide && provider.useValue) {
      providersMap[provider.provide] = provider.useValue;
    } else {
      providersMap[provider.name] = new provider();
    }
  }

  return new target().injectDependencies(providersMap);
}
