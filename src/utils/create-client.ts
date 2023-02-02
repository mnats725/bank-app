export const createClient = (name: string, balance: number = 0) => {
  if (name === "") {
    throw new Error("Вы ввели пустое поле имени");
  }

  return { name, balance: 0 };
};
