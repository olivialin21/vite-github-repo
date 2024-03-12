<script setup>
const clickToTop = () => {
  window.scrollTo({
    top: 0,
  });
}
</script>

<template>
  <div @click="clickToTop" class="toTop-btn">
    <p>></p>
  </div>
</template>

<style lang="scss" scoped>
.toTop-btn {
  width: 40px;
  height: 40px;
  font-size: 24px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  right: 24px;
  bottom: 24px;
  border-radius: 50%;
  background-color: #ac5828;
  transform: rotate(-90deg);
  transform-origin: center center;
  cursor: pointer;

  p {
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    background-color: #6b2700;
  }
}
</style>