<script setup lang="ts">
import { useTodosStore } from '~/store/todos';

const todos = useTodosStore();
</script>

<template>
  <h6 v-if="!todos.items.length" class="text-center">
    Используйте поле выше, чтобы добавить задачу
  </h6>
  <q-list v-else>
    <template v-for="todo in todos.items" :key="todo.id">
      <q-item v-ripple tag="label">
        <q-item-section avatar>
          <q-checkbox v-model="todo.isDone" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="non-selectable" :class="{ 'text-strike': todo.isDone }">
            {{ todo.title }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-toolbar class="row">
            <q-btn round color="negative" flat icon="delete" @click="todos.removeTodo(todo.id)" />
          </q-toolbar>
        </q-item-section>
      </q-item>

      <q-separator />
    </template>
  </q-list>
</template>
