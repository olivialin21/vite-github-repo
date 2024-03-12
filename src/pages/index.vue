<script setup>

</script>

<template>
  <div class="container">
    <div class="index">
      <ToTopBtn />
      <h1>Github Repo Search</h1>
      <TitleBar />
      <ReposList />
      <p>Copyright © 2024 Yu-Shan Lin. All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  min-height: 100vh;
  position: relative;
  padding: 10vh 20px 10vh;
}

h1{
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #6b2700;
  margin-bottom: 24px;
}

p{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  font-size: 12px;
  text-align: center;
  color: #6b2700;
}
</style>