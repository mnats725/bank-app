import { createBank } from "../utils/create-bank";
import { createClient } from "../utils/create-client";

describe("createBank", () => {
  test("Проверка функции createBank на коректность выполнения", () => {
    expect(createBank("Сбербанк", [createClient("Mnats", 7777)])).toMatchObject({
      bankName: "Сбербанк",
      clients: [{ name: "Mnats", balance: 7777 }],
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
