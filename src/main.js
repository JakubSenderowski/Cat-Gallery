import './assets/main.css';
import CatService from './services/CatService.js';

import { createApp } from 'vue';
import App from './App.vue';

//Test

CatService.fetchCats()
	.then((cats) => {
		console.log('Pobrane koty 🐈: ', cats);
	})
	.catch((error) => {
		console.error('Błąd', error);
	});
createApp(App).mount('#app');
