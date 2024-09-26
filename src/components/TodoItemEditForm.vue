<script setup lang="ts">
import { ref } from 'vue';

export interface Props {
  initialTitle: string;
}

interface Emits {
  (e: 'submit', value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const newTitle = ref(props.initialTitle);

function handleNewTitle() {
  if (!newTitle.value) {
    return;
  }

  emit('submit', newTitle.value);
}
</script>

<template>
  <q-form class="row items-center q-gutter-sm" autocomplete="off" @submit="handleNewTitle">
    <q-input
      v-model="newTitle"
      class="col-grow"
      label="Новое название"

      dense
      autofocus

      @keyup.stop.space
      @blur="handleNewTitle"
    />
  </q-form>
</template>
