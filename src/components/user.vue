<template>
    <div class="background">
      <div class="content">
        <h1>Users</h1>
        <select v-model="selectedUser">
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
        <div v-if="isLoading">Loading posts...</div>
        <div v-else>
          <h2>Posts</h2>
          <ul>
            <p v-for="post in posts" :key="post.id">{{ post.title }}</p>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const users = ref([]);
  const posts = ref([]);
  const selectedUser = ref(null);
  const isLoading = ref(false);
  
  const getUsers = async () => {
    const resource = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(resource);
    users.value = await response.json();
  };
  
  const getPosts = async () => {
    if (selectedUser.value !== null) {
      posts.value = [];
      isLoading.value = true;
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`);
      posts.value = await response.json();
      isLoading.value = false;
    }
  };
  
  getUsers();
  
  watch(selectedUser, getPosts);
  </script>
  
  <style scoped>
  .background {
    background-image: url(image/3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .content {
    background-color: rgba(250, 133, 205, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 80%;
    max-width: 600px;
  }
  
  h1, h2 {
    margin: 10px 0;
  }
  
  select {
    padding: 10px;
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  p {
    background-color: #ee8a8a;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px 0;
  }
  </style>
  