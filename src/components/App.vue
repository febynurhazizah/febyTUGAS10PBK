<!-- App.vue -->
<template>
  <div class="background">
    <nav>
      <ul>
        <li @click="selectedMenu = 'todos'">Todos</li>
        <li @click="selectedMenu = 'posts'">Posts</li>
      </ul>
    </nav>
    <div>
      <todos v-if="selectedMenu === 'todos'" />
      <user v-if="selectedMenu === 'posts'" />
    </div>
  </div>
</template>

<script>
import todos from './todos.vue';
import user from './user.vue';

export default {
  components: {
    todos,
    user,
  },
  data() {
    return {
      selectedMenu: '', // Memilih menu aktif: 'registration' atau 'posts'
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #f4f4f4;
  padding: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.background {
  background-image: url(image/3.jpg);
}
</style>
