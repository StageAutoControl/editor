export const newName = (name: string):string  => {
  name = name + "";
  if (!name.length) {
    return "new";
  }

  let num = parseInt(name.charAt(name.length-1), 10);
  if (!num) {
    num = 1;
  }

  return name + " " + (num +1);
};
