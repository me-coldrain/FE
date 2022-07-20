import Config from "./index";

type RequestParams = {
  endpoint: string;
  // token?: string | null
  method?: "POST" | "GET" | "PUT" | "DELETE";
  retries?: number;
  params?: any;
  auth?: boolean;
};

const baseUrl = "http://13.125.255.206/api/";

export const makeRequest: any = async ({
  endpoint,
  method = "GET",
  retries = 3,
  params = null,
  auth = true,
}: RequestParams) => {
  const options: {
    method: "POST" | "GET" | "PUT" | "DELETE";
    headers: any;
    body?: any;
  } = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...(params && { body: JSON.stringify(params) }),
  };
  const apiUri = baseUrl + endpoint;
  try {
    if (auth) {
      const userTokens = Config.getToken();
      if (!userTokens)
        throw {
          message: "NO TOKENS",
          status: 406,
        };
      options.headers.Authorization = `Bearer ${userTokens}`;

      const res = await fetch(apiUri, options);
      console.log("makeRequest: res =", res);

      if (res.status === 200) {
        const json = await res.json();
        console.log("makeRequest: json =", json);
        return json;
      }
      throw {
        message: res.json(),
        status: res.status,
      };
    } else {
      const res = await fetch(apiUri, options);
      console.log("res =", res);

      if (res.status === 200) {
        const json = await res.json();
        console.log("json =", json);
        return json;
      }
      // throw {
      //   message: "Fetch failed",
      //   status: res.status,
      // };
    }
  } catch (error: any) {
    console.log("makeRequest: error =", error);
    return false;
  }
};