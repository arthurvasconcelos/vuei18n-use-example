import { sortBy } from 'lodash';

const files = require.context('.', false, /\.js$/);
const routes = [];

files.keys().forEach((key) => {
    if (key === './index.js') return;
    files(key).routes.map((route) => routes.push(route));
});

export default sortBy(routes, ['path']);
