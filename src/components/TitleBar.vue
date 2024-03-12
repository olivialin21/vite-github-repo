<script setup>
// import { inject } from "vue";
import { useFetchUserData } from "../composition-api/useFetchUserData"
const useStore = inject("mapStore");
const { store } = useStore;
const userName = ref("olivialin21");

const { fetch } = useFetchUserData();

onMounted(() => {
  fetch(userName.value);
});

const clickSearch = () => {
  fetch(userName.value);
};
</script>

<template>
  <div class="title-bar">
    <div class="input-box">
      <input type="text" v-model="userName">
      <button @click="clickSearch">Search</button>
    </div>
    <img :src="store.userPhoto" alt="404">
    <h2><a :href="'https://github.com/' + userName" target="_blank">{{ store.userTitle }}</a></h2>
  </div>
</template>

<style lang="scss" scoped>
.title-bar {
  margin-bottom: 32px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #6b2700;
    object-fit: cover;
    margin: 0 auto 16px;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;

    a {
      position: relative;
      color: #000;

      &:hover::after{
        width: 100%;
      }

      &::after{
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        height: 4px;
        border-radius: 2px;
        width: 0;
        background-color: #6b2700;
        transition: width 0.3s;
      }
    }
  }
}

.input-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;

  input {
    border: none;
    display: block;
    padding: 12px;
    border-radius: 12px;
    font-size: 16px;
    background-color: #f7f0ef;
    // box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);

    &:focus {
      outline: none;
    }
  }

  button{
    border: none;
    padding: 12px;
    font-size: 16px;
    border-radius: 12px;
    color: #fff;
    background-color: #ac5828;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover{
      background-color: #6b2700;
    }
  }
}
</style>