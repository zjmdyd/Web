const pin = {
  mounted(el, binding) {
    //是否要定住
    var pinned = binding.value;
    //传入的修饰符，表示定在哪里
    var position = binding.modifiers;
    // 传递给指令的参数，可以表示定在的重要度
    var args = binding.arg;
    if (pinned) {
      el.style.position = 'fixed';
      if (args == "warning") {
        el.style.backgroundColor = "pink";
      }
      for (var val in position) {
        if (position[val]) {
          el.style[val] = '10px';
        }
      }
    } else {
      el.style.position = 'static';
      el.style.backgroundColor = "";
    }
  }
}
export default pin