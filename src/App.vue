<template>
	<h1>Galeria Kotów 🐱</h1>
	<CatGallery :cats="cats" @cat-clicked="handleCatClick" />
</template>

<script>
import CatService from './services/CatService.js';
import CatGallery from './components/CatGallery.vue';
export default {
	name: 'App',
	components: {
		CatGallery,
	},
	data() {
		return {
			cats: [],
			isLoading: true,
		};
	},
	methods: {
		async fetchCats() {
			try {
				const data = await CatService.fetchCats();
				this.cats = data;
				this.isLoading = false;
			} catch (error) {
				console.error('Meow, Wystąpił błąd', error);
			}
		},
		handleCatClick(cat) {
			console.log('Test kliknięcia', cat);
		},
	},
	mounted() {
		this.fetchCats();
	},
};
</script>
<style>
#app {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	padding: 40px 20px;
}
h1 {
	color: white;
	font-size: 3rem;
	margin-bottom: 40px;
	text-align: center;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
