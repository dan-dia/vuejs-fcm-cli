<template>
  <section>
    <h1>FCM With Vuejs</h1>
    <h2>TOKEN : {{ permission }}</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      permission: null,
    };
  },
  mounted() {
    this.$messaging
      .getToken({
        vapidKey:
          "BD8IBCiibLMkem7DTHVYk4bIcEAy6yCzbpG2MjnZ6YlC-BP4Sn5_s1IPrvIjxnumz_YzbimyCgQedLCeIzKfDh8",
      })
      .then((token) => (this.permission = token));
  },
  // mounted() {
  //   this.startListener();
  //   this.$messaging.onMessage((payload) => {
  //     console.log("ini onmessage: " + payload);
  //   });
  // },
  // methods: {
  //   async startListener() {
  //     try {
  //       await this.requstPermission();
  //       await this.getIdToken();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   requstPermission() {
  //     try {
  //       this.permission = Notification.requestPermission();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   async getIdToken() {
  //     try {
  //       this.idToken = await this.$messaging.getToken({
  //         vapidKey:
  //           "BD8IBCiibLMkem7DTHVYk4bIcEAy6yCzbpG2MjnZ6YlC-BP4Sn5_s1IPrvIjxnumz_YzbimyCgQedLCeIzKfDh8",
  //       });
  //       console.log("TOKEN ID FOR this browser");
  //       console.log(this.idToken);
  //     } catch (e) {
  //       console.error("Error : ", e);
  //     }
  //   },
  // },
};
</script>

<style>
</style>