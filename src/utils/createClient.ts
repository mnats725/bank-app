export const createClient = (name: string, balance: number = 0) => {
  let firstNameSymbol = Array.from(name)[0];

  if (name !== "") {
    if (firstNameSymbol !== firstNameSymbol.toUpperCase()) throw new Error("Имя пишется с заглавной буквы");
  } else {
    throw new Error("Введено пустое поле");
  }

  return { name, balance };
};
