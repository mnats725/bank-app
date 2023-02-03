import { createBank } from "../utils/create-bank";
import { createClient } from "../utils/create-client";

describe("createBank", () => {
  const clients = Array.from({ length: 5 }, (_, index) => createClient(`name ${index}`, 100 + index));

  test("Проверка функции createBank на коректность выполнения", () => {
    expect(createBank("Сбербанк", clients)).toMatchObject({
      bankName: "Сбербанк",
      clients: clients,
    });
  });

  test("Проверка функции createBank на пустое значение поля имени банка", () => {
    expect(() => {
      createBank("");
    }).toThrow("Имя банка не может быть пустым!");

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
