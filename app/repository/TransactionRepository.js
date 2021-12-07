export class TransactionRepository {
  async getTransaction() {
    try {
      const response = await fetch('https://nextar.flip.id/frontend-test');
      const json = await response.json();
      const jsonMap = new Map(Object.entries(json));
      const data = [];
      for (const key of jsonMap.keys()) {
        data.push(jsonMap.get(key));
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
}
