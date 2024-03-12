import { ref } from "vue";
import { apiGetGithubRepos } from "../api";
import useStore from "./store";

export function useFetchRepos() {
  const { store, setReposList, resetRepoData } = useStore;
  const isLoad = ref(false);
  const pageIdx = ref(0);
  const reposEnd = ref(false);

  const init = async () => {
    pageIdx.value++;
    const data = {
      userName: store.userTitle,
      page: pageIdx.value,
    };
    try {
      const res = await apiGetGithubRepos(data);
      isLoad.value = true;
      setReposList(res.data);
      if (res.data.length < 10) reposEnd.value = true;
    } catch (error) {
      console.error("取得 Repos 錯誤", error);
    }
  };

  const next = () => {
    if (reposEnd.value) return;
    isLoad.valve = false;
    init();
  };

  const reset = () => {
    resetRepoData();
    pageIdx.value = 0;
    isLoad.valve = false;
    reposEnd.value = false;
    init();
  };

  return { init, isLoad, next, reset, reposEnd };
}
