import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('should render', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  });
});
