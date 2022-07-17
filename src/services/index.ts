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

  // state constructor
  constructor() {
    // fix anys later
    this.LOG_LEVEL = appConfig.LOG_LEVEL as any;
    this.ENV = appConfig.ENV as any;
    this.SERVER_URL = appConfig.SERVER_URL[this.ENV] as any;
  }

  // App Configurations getters ------------------------------------------------
  get ServerUrl(): any {
    return this.SERVER_URL;
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
