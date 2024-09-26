<script setup lang="ts">
import { useTodosStore } from '~/store/todos';
import TodoItem from './TodoItem.vue';

const todos = useTodosStore();
</script>

<template>
  <h6 v-if="!todos.items.length" class="text-center">
    Используйте поле выше, чтобы добавить задачу
  </h6>
  <q-list v-else>
    <TodoItem
      v-for="todo in todos.items"
      :key="todo.id"
      :todo="todo"

      @is-done-change="todo.isDone = $event"
      @remove-request="todos.removeTodo(todo.id)"
    />
  </q-list>
</template>
