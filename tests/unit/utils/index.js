import Vue from 'vue';

/**
 * Get rendered text from component
 *
 * @param {*} Component
 * @param {*} propsData
 * @returns {(string | null)}
 */
export const getRenderedText = (Component, propsData) => {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData: propsData }).$mount();
    return vm.$el.textContent;
};

/**
 * Get rendered text from component by query selector
 *
 * @param {*} Component
 * @param {*} propsData
 * @param {string} selectors
 * @returns {(string | null)}
 */
export const getRenderedSelectorText = (Component, propsData, selectors) => {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData: propsData }).$mount();
    return vm.$el.querySelector(selectors).textContent;
};

/** Export default */
export default {
    getRenderedText,
    getRenderedSelectorText
};
