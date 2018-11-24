<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add):</label>
      <input ref="messageInput" type="text" name="new-message" v-model="newMessage">
      <p class="red-text" v-if="feedback">{{feedback}}</p>
    </form>
  </div>
</template>


<script>
import db from '@/firebase/init';

export default {
  name:'NewMessage',

  props: {
    name:String,
  },

  data() {
    return {
      newMessage: undefined,
      feedback: undefined,
    }
  },

  methods: {
    addMessage() { console.log(this.newMessage);
      if(this.newMessage) {
        db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        })
        .catch(err => {
          console.log(err);
        })

        //reset
        this.newMessage = undefined; 
        this.feedback = undefined;
      }
      else {
        this.feedback = "You must enter a message in order to send one";
      }
    },
  },

  mounted() {
    this.$refs.messageInput.focus();
  }
}
</script>


<style lang="scss">
  .new-message {
    text-align:left;
  }
</style>

