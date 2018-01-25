import { getRenderedSelectorText } from '../utils';
import { expect } from 'chai';
import Vue from 'vue';
import NotFound from '../../../src/components/not-found';

describe('NotFound.vue', () => {
    it('should render correct contents', () => {
        expect(getRenderedSelectorText(NotFound, {}, 'h1')).to.equal('Not found...');
    });
});
