<template>
  <anim-view class="chat container">
    <div class="card">
      <div class="card-content">
        <h2 class="center teal-text">Chat</h2>
        <message-board />
      </div>

      <div class="card-action">
        <new-message :name="name" />
      </div>
    </div>
  </anim-view>
</template>


<script>
import MessageBoard from '@/components/MessageBoard';
import NewMessage from '@/components/NewMessage';
import AnimView from '@/components/AnimView';

export default {
  name:'Chat',

  components: {
    AnimView,
    MessageBoard,
    NewMessage,
  },

  props: {
    name:String,
  },

  data() {
    return {

    }
  }
}
</script>


<style lang="scss">
  .chat {
    position: absolute;
    top:0px; bottom:0px;
  }
</style>

