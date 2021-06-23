export class StorageUtils {
  public static getCustomerId(): string | null {
    return localStorage.getItem('selectedCustomer');
  }

  public static setCustomerId(id: string) {
    localStorage.setItem('selectedCustomer', id);
  }

  public static getPlatformId(): string | null {
    return localStorage.getItem('selectedPlatform');
  }

  public static setPlatformId(id: string) {
    localStorage.setItem('selectedPlatform', id);
  }
}
