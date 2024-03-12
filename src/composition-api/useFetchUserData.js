import { apiGetUserData } from "../api";
import store from "./store";

export function useFetchUserData() {
  const { setUserData } = store;

  const fetch = async (userName) => {
    try {
      const res = await apiGetUserData(userName);
      setUserData(res.data.avatar_url, res.data.login);
    } catch (error) {
      console.error("取得 user 錯誤", error);
    }
  };

  return { fetch };
}
