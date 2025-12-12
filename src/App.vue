<template>
	<h1>Galeria Kotów 🐱</h1>
	<CatGallery :cats="cats" @cat-clicked="handleCatClick" />
	<button @click="fetchCats" class="refresh-button">Odśwież kotki 🐾🔄️</button>
	<CatModal :selectedCat="selectedCat" :isModalOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import CatService from './services/CatService.js';
import CatGallery from './components/CatGallery.vue';
import CatModal from './components/CatModal.vue';
export default {
	name: 'App',
	components: {
		CatGallery,
		CatModal,
	},
	data() {
		return {
			cats: [],
			isLoading: true,
			selectedCat: null,
			isModalOpen: false,
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
			this.selectedCat = cat;
			this.isModalOpen = true;
		},
		closeModal() {
			this.isModalOpen = false;
			this.selectedCat = null;
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
.refresh-button {
	margin-top: 30px;
	padding: 15px 40px;
	font-size: 1.2rem;
	font-weight: bold;
	color: #667eea;
	background: white;
	border: none;
	border-radius: 50px;
	cursor: pointer;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	transition: all 0.3 ease;
}
.refresh-button:hover {
	transform: translateY(-3px);
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
	background: #f0f0f0;
}
</style>
