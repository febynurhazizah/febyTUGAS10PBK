<template>
  <div class="background">
    <div class="content">
      <h1>Feby Nurhazizah</h1> 
      <h2>NPM 223510108</h2>
      <p>Tabel kegiatan</p>
      <table>
        <thead>
          <tr>
            <th>Kegiatan</th>
            <th>Status</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="activity in activities" :key="activity.id" :class="{ completed: activity.completed }">
            <td>
              <span :style="{ 'text-decoration': activity.completed ? 'line-through' : 'none' }">{{ activity.name }}</span>
            </td>
            <td>
              <span v-if="activity.completed">Telah Selesai</span>
              <span v-else>Belum Selesai</span>
              <input type="checkbox" v-model="activity.completed">
            </td>
            <td>
              <button @click="cancelActivity(activity.id)">Batalkan</button>
            </td>
          </tr>
        </tbody>
      </table>
      <form @submit.prevent="addActivity">
        <input type="text" v-model="newActivity" placeholder="Masukkan kegiatan baru">
        <button type="submit">Tambahkan</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const activities = ref([
      { id: 1, name: 'futsal', completed: false },
      { id: 2, name: 'tenis', completed: false }
    ]);
    const newActivity = ref('');

    function addActivity() {
      if (newActivity.value.trim() !== '') {
        activities.value.push({ id: Date.now(), name: newActivity.value, completed: false });
        newActivity.value = '';
      }
    }

    function cancelActivity(id) {
      const index = activities.value.findIndex(activity => activity.id === id);
      if (index !== -1) {
        activities.value.splice(index, 1);
      }
    }

    return {
      activities,
      newActivity,
      addActivity,
      cancelActivity
    };
  }
};
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
  padding: 20px;
  box-sizing: border-box;
}

.content {
  background-color: rgba(247, 147, 202, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%;
  max-width: 600px;
}

h1, h2 {
  margin: 10px 0;
  color: #333;
}

p {
  margin: 10px 0;
  font-weight: bold;
  color: #555;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  border: 1px solid #68e6e6;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #42a2da;
  color: #333;
}

.completed {
  background-color: #ffe0e0;
}

.completed span {
  text-decoration: line-through;
}

input[type="text"] {
  width: calc(100% - 22px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
