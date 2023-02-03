import type { Client } from "../types/client";

export const createBank = (bankName: string, clients: Client[] = []) => ({
  bankName,
  clients,
  addClient: function (client: string) {
    return true;
  },
  removeClient: function (client: string) {
    return true;
  },
});
