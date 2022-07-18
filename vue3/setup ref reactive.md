```js
<template>
  <div>{{ name }}</div>
  <div>{{ nameCache }}</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
} from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup(props, context) {
    const refName = ref(0);
    const state = reactive({
      name: "siwenfeng",
    });

    // eslint-disable-next-line vue/return-in-computed-property
    const nameCache = computed(() => {
      return "s" + refName.value;
    });
    setInterval(() => {
      refName.value++;
    }, 1000);
    watchEffect(() => {
      console.log(refName.value);
    });
    watch(
      () => refName.value,
      (count, prevCount) => {
        /* ... */
        console.log(count, prevCount);
      }
    );
    return {
      name: refName,
      state,
      nameCache: nameCache,
    };
  },
});
</script>
```

