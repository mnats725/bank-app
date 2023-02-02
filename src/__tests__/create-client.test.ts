import { createClient } from "../utils/create-client";

describe("createClient", () => {
  test("Проверка функции createClient на коректность выполнения", () => {
    expect(createClient("Mnats", 100)).toEqual({ name: "Mnats", balance: 100 });
  });

  test("Проверка объекта клиента на проверку отсутствия баланса", () => {
    expect(createClient("Mnats")).toEqual({ name: "Mnats", balance: 0 });
  });

  test("Проверка функции createClient на отрицательный баланс", () => {
    expect(createClient("Mnats", -100)).toEqual({ name: "Mnats", balance: -100 });
  });
});
