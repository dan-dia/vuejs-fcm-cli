import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import messaging from './plugins/firebase';
Vue.prototype.$messaging = messaging;
// Vue.config.productionTip = false;

function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission == 'granted') {
      messaging
        .getToken({
          vapidKey:
            'BD8IBCiibLMkem7DTHVYk4bIcEAy6yCzbpG2MjnZ6YlC-BP4Sn5_s1IPrvIjxnumz_YzbimyCgQedLCeIzKfDh8',
        })
        .then((token) => console.log('Token From SW: ' + token));
    }
  });
}

requestPermission();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
