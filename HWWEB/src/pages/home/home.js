import Vue from 'vue';
import Home from './Home.vue';

require('../../assets/css/common.styl');

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<Home/>',
    components: { Home }
});
