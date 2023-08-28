export const randomLocation = () => {
  var x = Math.floor(Math.random() * 4);
  var y = Math.floor(Math.random() * 4);
  return [x, y];
};

export const randomNumber = () => {
  var tmp = Math.floor(Math.random() * 4);
  var num;
  if (tmp === 1) {
    num = 4;
  } else {
    num = 2;
  }
  return num;
};
