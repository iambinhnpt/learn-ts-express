function log(constructor: any) {
  return function (...args: any[]) {
    console.log(`New ${constructor.name} created!`);
    return new constructor(...args);
  } as typeof constructor;
}

@log
class Yogurt {
  public flavor: string;
  constructor(flavor: string) {
    this.flavor = flavor;
  }
}

new Yogurt('strawberry');
new Yogurt('cherry');