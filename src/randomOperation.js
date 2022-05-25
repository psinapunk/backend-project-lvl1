const randomOperand = () => {
  const operands = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * 3);
  return operands[rand];
};

const randomOperation = () => {
  const operation = `${Math.floor(Math.random() * 30)} ${randomOperand()} ${Math.floor(Math.random() * 30)}`;
  return operation;
};

const realCalc = (operation) => {
  const expression = operation;
  const [first, operand, second] = expression.split(' ');
  switch (operand) {
    case '+':
      return Number(first) + Number(second);

    case '-':
      return Number(first) - Number(second);

    default:
      return Number(first) * Number(second);
  }
};

export {
  randomOperation, realCalc,
};
