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
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
button {
  padding: 5px 40px;
}
</style>
