import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    mixins: [
        require('./not-found.vue').default
    ]
})
export default class NotFound extends Vue {
    //
}
