<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="message-input">New Message:</label>

      <div class="rel">
        <input ref="messageInput" type="text" name="message-input" class="message-input" v-model="newMessage" />
        <button class="btn gray" type="submit">
          <i class="material-icons">add</i>
        </button>
      </div>
      
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

    .message-input {
      max-width:calc(100% - 50px);
    }

    button {
      position:absolute;
      bottom:8px; right:0;
      max-width:44px;
      padding:0 10px;
    }
  }
</style>

