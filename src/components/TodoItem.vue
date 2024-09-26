<script setup lang="ts">
import { ref } from 'vue';
import type { TodoItem } from '~/store/todos';
import TodoItemEditForm from './TodoItemEditForm.vue';

export interface Props {
  todo: TodoItem;
}

interface Emits {
  (e: 'isDoneChange', value: boolean): void;
  (e: 'titleChange', value: string): void;
  (e: 'removeRequest'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const isEditing = ref(false);

function handleNewTitle(newTitle: string) {
  isEditing.value = false;
  emit('titleChange', newTitle);
}
</script>

<template>
  <q-item v-ripple tag="label">
    <q-item-section avatar>
      <q-checkbox :model-value="todo.isDone" @update:model-value="$emit('isDoneChange', $event)" />
    </q-item-section>

    <q-item-section>
      <TodoItemEditForm v-if="isEditing" :initial-title="todo.title" @submit="handleNewTitle" />
      <q-item-label v-else class="non-selectable" :class="{ 'text-strike': todo.isDone }">
        {{ todo.title }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-toolbar class="row">
        <q-btn round flat icon="edit" @click="isEditing = true" />
        <q-btn round color="negative" flat icon="delete" @click="$emit('removeRequest')" />
      </q-toolbar>
    </q-item-section>
  </q-item>

  <q-separator />
</template>
