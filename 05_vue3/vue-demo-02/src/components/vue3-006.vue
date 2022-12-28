<template>
    <div>
        <button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
    </div>
</template>

<script setup>

function warn(message, event) {
    console.log(message)
    console.log(event)
    if(event) {
        /*preventDefault
        该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。
        例如，如果 type 属性是 “submit”，在事件传播的任意阶段可以调用任意的事件句柄，
        通过调用该方法，可以阻止提交表单。注意，如果 Event 对象的 cancelable 属性是 fasle，
        那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。
        */
        event.preventDefault()

        /*event.stopPropagation();
        终止事件在传播过程的捕捉、目标处理或起泡阶段进一步传播。
        调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。
        */
    }
    alert(message)
}
/*
@click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为
而 @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。

<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<div @click.capture="doThis">...</div>

<!-- 点击事件最多被触发一次 -->
<a @click.once="doThis"></a>

<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()` -->
<div @scroll.passive="onScroll">...</div>

.passive 修饰符一般用于触摸事件的监听器，可以用来改善移动端设备的滚屏性能。

请勿同时使用 .passive 和 .prevent，因为 .passive 已经向浏览器表明了你不想阻止事件的默认行为。
如果你这么做了，则 .prevent 会被忽略，并且浏览器会抛出警告
*/

/*
按键修饰符#
在监听键盘事件时，我们经常需要检查特定的按键。
Vue 允许在 v-on 或 @ 监听按键事件时添加按键修饰符。

template
<!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<input @keyup.enter="submit" />
你可以直接使用 KeyboardEvent.key 暴露的按键名称作为修饰符，但需要转为 kebab-case 形式。

<input @keyup.page-down="onPageDown" />
在上面的例子中，仅会在 $event.key 为 'PageDown' 时调用事件处理。
*/
</script>