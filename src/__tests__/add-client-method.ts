import { createClient } from "../utils/create-client";
import { createBank } from "../utils/create-bank";

describe("createBank", () => {
  const bank = createBank("Bibici", []);

  test("Проверка метода addClient на коректность выполнения", () => {
    expect(createClient("Dima", 6666)).toMatchObject({
      addClient: true,
    });
  });

  test("Проверка метода addClient на добавление в список такого-же клиента", () => {
    expect(() => {
      bank.addClient(createClient("Dima", 6666));
    }).toThrow("Такой клиент уже существует!");
  });

  test("Проверка метода addClient на добавление без клиента ", () => {
    expect(() => {
      bank.addClient({});
    }).toThrow("Выберете клиента которого вы хотите добавить!");
  });
});
