<template>
  <div class="navbar">
    <div @click="$router.push('./')" style="cursor: pointer">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты </my-button>
      <my-button style="margin-left: 15px" @click="$router.push('/about')"
        >О сайте
      </my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgb(190, 184, 184);
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
