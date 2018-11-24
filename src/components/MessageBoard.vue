<template>
  <ul ref="messageBoard" class="message-board">
    <li v-for="message in messages" :key="message.id">
      <span class="name teal-text">{{message.name}}</span>
      <span class="message grey-text text-darken-3">{{message.content}}</span>
      <span class="time grey-text">{{message.timestamp}}</span>
    </li>
  </ul>
</template>


<script>
import db from '@/firebase/init';
import moment from 'moment';

export default {
  name:'MessageBoard',

  data() {
    return {
      messages: [],
    }
  },

  methods: {
    onFirestoreSnapshot(snapshot) {
      const cut_off_time_ms = 2 * 60 * 60 * 1000; // 2 Hours in milliseconds
      const now = Date.now();
      const cutoff = now - cut_off_time_ms;
      const { messageBoard } = this.$refs;

      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const { id } = change.doc;
          const { name, content, timestamp } = change.doc.data();
          
          if (timestamp <= cutoff) {
            db.collection('messages').doc(id).delete();
          }
          else {
            this.messages.push({ id, name, content, timestamp: moment(timestamp).format('lll') });
          }
        }
      })

      this.$nextTick(() => {
        messageBoard.scrollTop = messageBoard.scrollHeight;
      });
    }
  },

  created() {
    this.unsubscribe = db.collection('messages').orderBy('timestamp')
      .onSnapshot(this.onFirestoreSnapshot); //listener of change in DB
  },

  beforeDestroy() {
    this.unsubscribe();
  }
}
</script>


<style lang="scss">
  .message-board {
    text-align:left;
    max-height:300px;
    overflow:auto;
    -webkit-overflow-scrolling: touch; 

    li { margin-bottom:8px; }
    span { font-size: 1.4em; }
    .name { padding-right:5px; }
    .time {
      display:block;
      font-size:0.8em;
    }
  }
</style>


