<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
            <span v-if="!open" @click="open = !open">&#x25B2; Expand</span>
        </div>
        <slot v-if="open">
            DefaultContent
        </slot>
    </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style>
.header {
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
}
</style>
