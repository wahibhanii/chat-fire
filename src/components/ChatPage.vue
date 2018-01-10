<template>
    <v-container>
      <h1>Chat Page</h1>
      <v-layout justify-center>
        <v-list>
          <v-list-tile v-for="(line, i) in chat" :key="i" >
            <span class="bold">{{line.sender}}: </span> <span>{{line.message}} </span>
          </v-list-tile>
        </v-list>
      </v-layout>
      <v-layout wrap>
        <v-flex sm4 xs6 class="pr-2" >
          <v-text-field label="Sender" v-model="sender" sm-2></v-text-field>
        </v-flex>
        <v-flex sm8 xs8class="pl-2">
          <v-text-field label="Message" v-model="newMessage" sm-8></v-text-field>
        </v-flex>
        </v-layout>
      
      <v-btn @click="send">
        Send
      </v-btn>
    </v-container>
</template>

<script>

export default {
  data () {
    return {
      sender: '',
      newMessage: ''
    }
  },
  firebase () {
    return {
      chat: {
        source: this.$fbasedb.ref('chat'),
        anArray: true
      }
    }
  },
  methods: {
    send () {
      console.log('sending data', this.sender, this.newMessage)
      // this.$fbasedb.ref('hihi').set({
      //   name: 'INI NAMA',
      //   apalah: 'APA SAJA'
      // })
      this.$fbasedb
      .ref('chat')
      .push({
        sender: this.sender,
        message: this.newMessage,
        sendAt: String(new Date())
      })
    }
  },
  created () {
    console.log('db nih : ', this.$fbasedb)
  }
}
</script>

<style>
.bold{
  font-weight: bold;
}
</style>
