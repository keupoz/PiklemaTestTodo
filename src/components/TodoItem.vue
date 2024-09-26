<script setup lang="ts">
import type { TodoItem } from '~/store/todos';

export interface Props {
  todo: TodoItem;
}

interface Emits {
  (e: 'isDoneChange', value: boolean): void;
  (e: 'removeRequest'): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <q-item v-ripple tag="label">
    <q-item-section avatar>
      <q-checkbox :model-value="todo.isDone" @update:model-value="$emit('isDoneChange', $event)" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="non-selectable" :class="{ 'text-strike': todo.isDone }">
        {{ todo.title }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-toolbar class="row">
        <q-btn round color="negative" flat icon="delete" @click="$emit('removeRequest')" />
      </q-toolbar>
    </q-item-section>
  </q-item>

  <q-separator />
</template>
