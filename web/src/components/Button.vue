<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import VueFeather from 'vue-feather';

export default defineComponent({
  props: {
    text: String,
    url: String,
    variant: String,
    leftIcon: String,
    rightIcon: String,
  },
  components: {
    VueFeather,
  },
});
</script>

<template>
  <button v:on="$listeners" :class="`btn ${variant ? variant : ''}`">
    <VueFeather class="ic" :type="leftIcon" v-show="leftIcon" />
    {{ text }}
    <VueFeather class="ic" :type="rightIcon" v-show="rightIcon" />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  gap: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: var(--title-color);
  background: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  font-weight: 500;
  cursor: pointer;
  text-shadow: 0 0 24px rgba(255, 255, 255, 0.5);
  border: none;
  transition: 0.3s ease-in;

  &:hover {
    color: var(--text-color);
  }
}

.primary {
  background-color: var(--accent-color);

  &:hover {
    background-color: var(--darker-accent-color);
    color: var(--title-color);
  }
}

.secondary {
  outline: 1px solid var(--accent-color);
  color: var(--accent-color);
  text-shadow: none;

  &:hover {
    outline: 1px solid var(--darker-accent-color);
    color: var(--darker-accent-color);
  }
}

.disabled {
  background-color: var(--disabled-color);
  color: var(--disabled-darker-color);

  &:hover {
    background-color: var(--disabled-darker-color);
    color: var(--disabled-color);
  }
}
</style>
