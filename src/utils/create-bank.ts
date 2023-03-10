import type { Client } from "../types/client";

export const createBank = (bankName: string, clients: Client[] = []) => {
  if (bankName === "") {
    throw new Error("Имя банка не может быть пустым!");
  }

  return {
    bankName,
    clients,
    addClient: function (client: string) {
      return true;
    },
    removeClient: function (client: string) {
      return true;
    },
  };
};
