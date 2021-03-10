<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="filtre pelo título da foto"
    />

    <ul class="lista-fotos">
      <!-- para aplicar o filtro nao pega mais do data pega do computed -->
      <li
        class="lista-fotos-item"
        v-for="foto in fotosComFiltro"
        :key="foto.titulo"
      >
        <x-painel :titulo="foto.titulo">
          <img-res :url="foto.url" :titulo="foto.titulo" />
          <!-- passando foto como parâmetro do método remove do componente Home -->
          <x-botao 
                  rotulo="remover" 
                  tipo="button" 
                  :confirmacao="true" 
                  @botaoAtivado="remove(foto)"
                  estilo="perigo"/>
        </x-painel>
      </li>
    </ul>
  </div>
</template>

<script>
// imports comp
import Painel from "../painel/Painel";
import imgRes from "../image/ImageResponsive";
import Botao from "../botao/Botao";

//exports
export default {
  components: {
    "x-painel": Painel,
    "img-res": imgRes,
    "x-botao": Botao,
  },

  data() {
    return {
      titulo: "Fotos",
      fotos: [],
      filtro: "",
    };
  },
  methods: {
    remove(foto) {
      alert(foto.titulo);
    },
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then(
        (fotos) => (this.fotos = fotos),
        (err) => console.log(err)
      );
  },
};
</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
