import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const idInput = wrapper.find('#username');
    expect(idInput.element.value).toBe('test');
    expect(wrapper.vm.isUsernameValid).toBeFalsy();
  });
});
