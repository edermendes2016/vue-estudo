<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <!-- modificador lazy so faz a chamada quando deixar o campo input -->
        <input v-model.lazy="foto.titulo" id="titulo" autocomplete="off">
      </div>
       <div class="controle">
        <label for="url">URL</label>
        <input v-model.lazy="foto.url" id="url" autocomplete="off">
        <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea v-model="foto.descricao" id="descricao" autocomplete="off"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>



<script>
import ImagemResponsiva from "../image/ImageResponsive.vue";
import Botao from "../botao/Botao.vue";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      foto: {
        titulo: "",
        url: "",
        descricao: "",
      },
    };
  },

  methods: {
    grava() {
      console.log(this.foto);

      this.foto = {
        titulo: "",
        url: "",
        descricao: "",
      };
    },
  },
};
</script>
<style scoped>
.centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>