import { createClient } from "../utils/create-client";
import { createBank } from "../utils/create-bank";

describe("addClient", () => {
  const client = createClient("name1", 101);
  const clients = Array.from({ length: 5 }, (_, index) => createClient(`name ${index}`, 100 + index));
  const bank = createBank("Bibici", clients);

  test("Проверка метода addClient на коректность выполнения", () => {
    expect(bank.addClient(client)).toEqual(true);
  });

  test("Проверка метода addClient на добавление в список такого-же клиента", () => {
    expect(() => {
      bank.addClient(client);
    }).toThrow("Такой клиент уже существует!");
  });
});
