// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCount(selector, count)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
exports.assertion = function(selector, count) {
    /**
     * The message which will be used in the test output and
     * inside the XML reports
     * @type {string}
     */
    this.message = `Testing if element <${selector}> has count: ${count}`;

    /**
     * A value to perform the assertion on. If a function is
     * defined, its result will be used.
     * @type {function|*}
     */
    this.expected = count;

    /**
     * The method which performs the actual assertion. It is
     * called with the result of the value method as the argument.
     * @type {function}
     */
    this.pass = function(value) {
        return value === this.expected;
    };

    /**
     * The method which returns the value to be used on the
     * assertion. It is called with the result of the command's
     * callback as argument.
     * @type {function}
     */
    this.value = function(result) {
        return result;
    };

    /**
     * Performs a protocol command/action and its result is
     * passed to the value method via the callback argument.
     * @type {function}
     */
    this.command = function(callback) {
        const self = this;

        // http://nightwatchjs.org/api/elements.html
        return this.api.elements('css selector', selector, function(result) {
            return callback.call(self, result.value.length);
        });
    };
};
