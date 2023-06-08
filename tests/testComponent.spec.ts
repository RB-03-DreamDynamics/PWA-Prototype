import { createApp } from 'vue';
import { mount } from 'vitest';

test('Initial message is rendered correctly', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.html()).toContain('Initial Message');
});