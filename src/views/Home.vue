<template>
  <anim-view class="home container">
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
        const name = this.name.charAt(0).toUpperCase() + this.name.slice(1); //initial Uppercase
        this.$router.push({ name:'chat', params:{ name } })
        console.log(name);
      }
      else {
        this.feedback = 'You must enter a name to join'
      }
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

    form {
      position:absolute;
      top:50%;
      transform:translateY(-40%);
      width:calc(100% - 50px);
      padding:10px 0;
    }
  }
</style>

