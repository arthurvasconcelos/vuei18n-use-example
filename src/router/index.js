import Router from 'vue-router';
import paths from './routes';
import NotFound from '../components/not-found';

export default new Router({
    routes: [
        {
            path: '*',
            component: NotFound
        },
        ...paths
    ],
    mode: 'history',
    base: '/',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active-exact',
    scrollBehavior(to, from, savedPosition) {
        return (savedPosition)
            ? savedPosition
            : (to.hash)
                ? { selector: to.hash }
                : { x: 0, y: 0 };
    }
});
