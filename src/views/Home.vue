<template>
  <anim-view class="home">
    <div class="container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>

        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input ref="nameInput" type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
    </div>
  </anim-view>
</template>

<script>
import AnimView from '@/components/AnimView';

export default {
  name: 'home',
  components: {
    AnimView,
  },
  
  data() {
    return {
      name:null,
      feedback:undefined,
    }
  },

  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name:'chat', params:{ name:this.name } })
      }
      else {
        this.feedback = 'You must enter a name to join'
      }
      console.log(this.name);
    }
  },

  mounted() {
    this.$refs.nameInput.focus();
  }
}
</script>

<style lang="scss">
  .home {
    button { margin: 30px auto; }
  }
</style>

