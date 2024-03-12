import { reactive } from "vue";

const store = reactive({
  reposList: [],
  userPhoto: "",
  userTitle: "olivialin21",
});

const setReposList = (repos) => {
  store.reposList = [...store.reposList, ...repos];
};

const setUserData = (url, userName) => {
  store.userPhoto = url;
  store.userTitle = userName;
};

const resetRepoData = () => {
  store.reposList = [];
}

export default { store, setReposList, setUserData, resetRepoData };
