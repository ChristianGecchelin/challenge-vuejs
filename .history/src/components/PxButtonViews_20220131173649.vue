<template>
  <div>
    <button>Home</button>
    <button>Form</button>
  </div>
</template>

<script>
export default {
  name: "PxButtonViews",
};
</script>

<style scoped>
div {
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
button {
  position: absolute;
  bottom: 0;
}
</style>
