import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import * as Logger from 'js-logger';
import { Component } from 'vue-property-decorator';

let Config = require('./config.json');

/** Vue uses */
Vue.use(VueI18n);
Vue.use(VueRouter);

/** Logger */
let logLevel = (Config.debug ? Logger.DEBUG : Logger.ERROR);
Logger.useDefaults();
Logger.setLevel(logLevel);

Vue.config.errorHandler = function (err, vm, info) {
    Logger.error('Vue error: ', err);
};

/** Other Vue configs */
Vue.config.productionTip = false;

/** i18n config */
/** http://kazupon.github.io/vue-i18n/en/ */
const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: require('./locales/messages/en.json')
    },
    dateTimeFormats: {},
    numberFormats: {}
});

console.log('vue-i18n instance before applied: ', i18n);

import router from './router';

/**
 * Main App Class
 *
 * @class App
 * @extends {Vue}
 */
@Component({
    mixins: [
        require('./main.vue').default
    ],
    router,
    components: {
        // Main components
    }
})
class App extends Vue {
    mounted () {
        console.log('vue: ', this);
        console.log('vue-i18n instance after applied: ', this._i18n);
    }
}

window.onerror = function (errorMsg, url, lineNo, colNo, error) {
    Logger.error('Global event: ', errorMsg);
};

/** App Instance */
export const app = new App({ i18n }).$mount('#app');
