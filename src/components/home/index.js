import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    mixins: [
        require('./home.vue').default
    ],
    components: {}
})
export default class Home extends Vue {
    //
}
