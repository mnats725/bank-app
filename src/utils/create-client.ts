export const createClient = (name: string, balance: number = 0) => {
  if (name === "") {
    throw new Error("Вы ввели пустое поле имени");
  }

  if (balance < 0) {
    return { name, balance: 0 };
  }

  return { name, balance };
};
