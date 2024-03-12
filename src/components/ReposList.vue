<script setup>
import { useScrollDown } from '../composition-api/useScrollDown.js';
import { useFetchRepos } from '../composition-api/useFetchRepos.js';

const useStore = inject("mapStore");
const { store } = useStore;

const { isDown } = useScrollDown();
const { init, isLoad, next, reset, reposEnd } = useFetchRepos();

watch(isDown, (newVal) => {
  if (!newVal) return;
  next();
});

watch(() => store.userTitle, () => {
  reset()
});

onMounted(() => {
  init();
});
</script>

<template>
  <div class="repos-list">
    <div class="card" v-for="item in store.reposList" :key="item.id">
      <h3>{{ item.name }}</h3>
      <a :href="item.html_url" target="_blank">{{ item.html_url }}</a>
      <div class="star">
        <img src="../assets/star.png" alt="star">
        <p>{{ item.stargazers_count }}</p>
      </div>
    </div>
    <div class="end" v-if="reposEnd"></div>

    <p class="loading" v-if="!isLoad">Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
.repos-list {
  display: flex;
  flex-direction: column;
  align-items: center;

  .card {
    width: 500px;
    padding: 24px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    @media(max-width:"576px") {
      width: 100%;
    }

    &:hover {
      background-color: #f7f0ef;
    }
  }

  h3 {
    word-break: break-all;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  a {
    display: block;
    word-break: break-all;
    margin-bottom: 8px;
    color: #ac5828;
    transition: color 0.3s;

    &:hover {
      color: #6b2700;
    }
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }

  .end{
    margin-top: 16px;
    height: 4px;
    width: 48px;
    border-radius: 2px;
    background-color: #da895a;
  }
}

.star {
  display: flex;
  align-items: center;
}

.loading{
  font-weight: bold;
  color: #6b2700;
}
</style>