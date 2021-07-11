import { createApp } from 'vue';
import App from './App.vue';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faTwitter, faInstagram);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
