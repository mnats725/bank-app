import { createBank } from "../utils/create-bank";

describe("createBank", () => {
  test("Проверка функции createBank на коректность выполнения", () => {
    expect(createBank("Сбербанк", [{ name: "Mnats", balance: 5000 }])).toMatchObject({
      bankName: "Сбербанк",
      clients: [{ name: "Mnats", balance: 5000 }],
    });
  });

  test("Проверка функции createBank на пустое значение поля имени банка", () => {
    expect(() => {
      createBank("", []);
    }).toThrow("Имя банка не может быть пустым!");
  });

  test("Проверка функции createBank на пустое значение параметра клиента", () => {
    expect(createBank("Сбербанк")).toMatchObject({
      bankName: "Сбербанк",
      clients: [],
    });
  });
});
