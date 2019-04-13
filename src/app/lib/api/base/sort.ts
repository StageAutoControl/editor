export interface Nameable {
  name: string;
}

export const sortByName = function(a:Nameable, b:Nameable) {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
};
