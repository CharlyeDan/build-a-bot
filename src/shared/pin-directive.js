/* eslint-disable no-param-reassign */
export default {
  beforeMounted(element, binding) {
    // console.log('arg', binding.arg, 'modifiers: ', binding.modifiers);
    if (binding.arg !== 'position') return;
    Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = '5px';
    });
    element.style.position = 'absolute';
  },
};
