import Config from "./index";

type RequestParams = {
  endpoint: string;
  // token?: string | null
  method?: "POST" | "GET" | "PUT" | "DELETE";
  retries?: number;
  params?: any;
  auth?: boolean;
  token: string;
};

const baseUrl = "http://43.200.163.208/api/";

export const makeRequest: any = async ({
  endpoint,
  method = "GET",
  retries = 3,
  params = null,
  auth = true,
  token,
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
      const userTokens = Config.getToken() || token;
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

      // 회원가입 성공시 로그인 페이지로 넘어갈 수 있또록 해야함
      if (res.status === 201) {
        const json = await res.json();
        console.log("json =", json);

        Config.setToken("token", json?.accesstoken, 30);

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
