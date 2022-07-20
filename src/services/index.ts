import { browserStorage } from "utils/browser";
import appConfig from "./appConfig.json";

class Config {
  // types
  ENV: "DEV" | "PROD" | "LOCAL";
  LOG_LEVEL: "DEBUG" | "ERROR" | "NONE";
  SERVER_URL: {
    LOCAL: string;
    DEV: string;
    PROD: string;
  };
  TOKEN: string;

  // state constructor
  constructor() {
    // fix anys later
    this.LOG_LEVEL = appConfig.LOG_LEVEL as any;
    this.ENV = appConfig.ENV as any;
    this.SERVER_URL = appConfig.SERVER_URL[this.ENV] as any;
    this.TOKEN = process.env.TEMP_TOKEN as string;
  }

  // App Configurations getters ------------------------------------------------
  get ServerUrl(): any {
    return this.SERVER_URL;
  }
  // ---------------------------------------------------------------------------

  // token data setting --------------------------------------------------------
  public setToken(name: string, value: string, days: number) {
    try {
      const token = browserStorage.setCookie(name, value, days);
      return token;
    } catch (error) {
      console.log("getting token: services: ", error);
      return false;
    }
  }
  // ---------------------------------------------------------------------------

  // token data from browserStorage --------------------------------------------
  public getToken() {
    try {
      const token = browserStorage.getCookie("token");
      return token;
    } catch (error) {
      console.log("getting token: services: ", error);
      return false;
    }
  }
  // ---------------------------------------------------------------------------

  public async getUser() {
    try {
      const userInfo = {};
      return userInfo;
    } catch (error) {
      console.log("Config: storeHasPressed: error =", error);
      return false;
    }
  }
}

export default new Config();
