import Home from './components/shared/home/Home.vue';
import Cadastro from './components/shared/cadastro/Cadastro.vue';

// adicionando a propriedade título
export const routes = [

    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }

];