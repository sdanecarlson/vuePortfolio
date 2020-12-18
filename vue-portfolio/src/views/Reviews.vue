<template>
<div>
  <h1>This is what people have to say about dane:</h1>
  <form class="formClass" @submit.prevent="addItem">
    Author: <input type="text" v-model="author"> <br> 
    Review: <input style="padding-bottom: 40px" type="text" v-model="text"> <br>
    <button style="margin: 10px" type="submit">Add</button>
    <hr style="color: white;">
  </form>
  <ul>
    <li v-for="item in items" :key="item.id">
      <label style="text-align: left" :class="{ item: true, completed: item.completed }">
          <h1 style="color: white; margin: 0;">{{ item.author }}:</h1> <br> {{ item.text }}

      </label>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      items: [],
      text: '',
      author: '',
    }
  },
  computed: {
    activeItems() {
      return this.items.filter(item => {
        return !item.completed;
      });
    },
  },
  methods: {
    async addItem() {
      try {
        await axios.post("/api/items", {
          text: this.text,
          author: this.author,
        });
        this.text = "";
        this.author = "";
      } catch (error) {
        console.log(error);
      }
        this.getItems();
    },
    deleteItem(item) {
      var index = this.items.indexOf(item);
      if (index > -1)
        this.items.splice(index, 1);
    },
    showAll() {
      this.show = 'all';
    },
    showActive() {
      this.show = 'active';
    },
    showCompleted() {
      this.show = 'completed';
    },
    deleteCompleted() {
      this.items = this.items.filter(item => {
        return !item.completed;
      });
    },
    async getItems() {
      try {
        const response = await axios.get("/api/items");
        this.items = response.data.item;
        console.log(response.data.item)
      } catch (error) {
        console.log(error);
      }
    },
  },
  created: function() {
    this.getItems();
  },
}
</script>

<style scoped>
/* List */

h1 {
  margin: 40px 0 20px;
  font-size: 200%;
  font-weight: 800;
}

.formClass input{
    align-content: left;
    margin: 5px;
    width: 500px;
}

ul {
  list-style: none;
}
li {
  color: #42b983;
  border-style: solid;
  border-width: 2px;
  border-color: #42b983;
  width: 500px;
  min-height: 40px;
  padding: 10px;
  margin-left: 40%;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 1em;
  display: flex;
}
.delete {
  display: none;
  margin-left: auto;
}
li:hover .delete {
  display: block;
}
label {
  width: 400px;
}
.completed {
  text-decoration: line-through;
}
/* Form */
input[type=checkbox] {
  transform: scale(1.5);
  margin-right: 10px;
}
input[type=text] {
  font-size: 1em;
}
button {
  font-family: 'Arvo';
  font-size: 1em;
}
/* Controls */
.controls {
  margin-top: 20px;
}
/* Custom checkbox
/* Customize the label (the container) */
.item {
  display: block;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default checkbox */
.item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}
/* On mouse-over, add a grey background color */
.item:hover input~.checkmark {
  background-color: #ccc;
}
/* When the checkbox is checked, add a blue background */
.item input:checked~.checkmark {
  background-color: #2196F3;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.item input:checked~.checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.item .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>