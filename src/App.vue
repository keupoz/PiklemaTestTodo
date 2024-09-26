<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import TodoToolbar from './components/TodoToolbar.vue';
import { useTodosStore } from './store/todos';

const todos = useTodosStore();
</script>

<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Todo App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding class="flex justify-center">
        <div class="column q-gutter-md content">
          <q-card>
            <q-card-section>
              <TodoToolbar />
            </q-card-section>
          </q-card>

          <q-btn color="negative" flat @click="todos.removeDone">
            Удалить выбранные задачи
          </q-btn>

          <q-card class="col">
            <q-card-section>
              <TodoList />
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  max-width: 512px;
}
</style>
