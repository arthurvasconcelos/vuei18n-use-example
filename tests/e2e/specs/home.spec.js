// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {
    'Home.vue': function (browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL;

        browser
            .url(devServer)
            .pause(1000);

        browser.expect.element('#app').to.be.visible.before(5000);
        browser.expect.element('.screen-main').to.be.present;

        browser.end();
    }
};
