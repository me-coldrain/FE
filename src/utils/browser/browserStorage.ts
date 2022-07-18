import getWindowProperty from "utils/browser/getWindowProperty";

type BrowserStorageEntryName = string;
type BrowserStorageEntryValue = any;
type BrowserStorageEntryTTL = number;
type BrowserStorageEntryCreatedAt = number;

interface BrowserStorageEntry {
  value: BrowserStorageEntryValue;
  ttl: BrowserStorageEntryTTL;
  createdAt: BrowserStorageEntryCreatedAt;
}

export class BrowserStorage {
  private get _storage(): Storage {
    return getWindowProperty().localStorage || {};
  }

  // BrowserStorage handler --------------------------------------------------
  /**
   *
   * @param name
   * @returns null if null, value if not
   */
  getItem(name: BrowserStorageEntryName): any {
    try {
      const entry = this._storage.getItem(name) || "";
      const { value, ttl, createdAt }: BrowserStorageEntry = JSON.parse(entry);

      if (ttl && Date.now() > createdAt + ttl) {
        this._storage.removeItem(name);

        return null;
      }

      return value;
    } catch {
      return null;
    }
  }

  setItem(
    name: BrowserStorageEntryName,
    value: BrowserStorageEntryValue,
    ttl: BrowserStorageEntryTTL = 0
  ): void | Error {
    if (!this._storage) {
      throw new Error("setItem called outside of window scope!");
    }

    const createdAt = Date.now() as BrowserStorageEntryCreatedAt;

    this._storage.setItem(
      name,
      JSON.stringify({
        value,
        ttl,
        createdAt,
      })
    );
  }
  //--------------------------------------------------------------------------------

  // cookie setting ----------------------------------------------------------------
  setCookie(name: string, value: string, days: number): boolean {
    try {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";

      return true;
    } catch (error) {
      console.log("set cookie: ", error);
      return false;
    }
  }

  getCookie(name: string): string | null {
    const nameEQ: string = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  eraseCookie(name: string): boolean {
    try {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      return true;
    } catch (error) {
      console.log("delete cookie: ", error);
      return false;
    }
  }
  // -------------------------------------------------------------------------------
}

export default new BrowserStorage();
