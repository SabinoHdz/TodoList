<!-- <template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold text-center mb-4">Lista de Tareas</h1>
      <div class="flex mb-4">
        <input
          v-model="newTask"
          type="text"
          class="flex-1 p-2 border rounded-l focus:outline-none"
          placeholder="Nueva tarea"
        />
        <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded-r">+</button>
      </div>
      <ul>
        <li v-for="(task, index) in tasks" :key="index" class="flex justify-between items-center bg-gray-50 p-2 mb-2 rounded">
          <span :class="{ 'line-through text-gray-500': task.completed }">{{ task.text }}</span>
          <div>
            <button @click="toggleTask(index)" class="mr-2 text-green-500">✔</button>
            <button @click="deleteTask(index)" class="text-red-500">✖</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const newTask = ref("");
const tasks = ref([]);

onMounted(() => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) tasks.value = JSON.parse(savedTasks);
});

watch(
  tasks,
  (newVal) => {
    localStorage.setItem("tasks", JSON.stringify(newVal));
  },
  { deep: true }
);

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, completed: false });
    newTask.value = "";
  }
};

const toggleTask = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
</style> -->
