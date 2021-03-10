<template>
    <img class="imagem-responsiva" :src="url" :alt="titulo" /> 
</template>

<script>
//exports
export default {
  props: ["url", "titulo"],
};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>
