<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '~/store/todos';

const todos = useTodosStore();
const newTodo = ref('');

function handleNewTodo() {
  if (!newTodo.value) {
    return;
  }

  todos.addTodo(newTodo.value);
  newTodo.value = '';
}
</script>

<template>
  <q-form class="row items-center q-gutter-sm" autocomplete="off" @submit="handleNewTodo">
    <q-input v-model="newTodo" class="col-grow" label="Новая задача" dense />
    <q-btn round color="primary" icon="add" type="submit" />
  </q-form>
</template>
