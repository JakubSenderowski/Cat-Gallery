<template>
	<div class="gallery">
		<div v-for="cat in displayedCats" :key="cat.id" class="cat-item">
			<img :src="cat.url" :alt="'Kot' + cat.id" @click="handleCatClick(cat)" class="cat-image" />
		</div>
	</div>
</template>
<script>
export default {
	name: 'CatGallery',
	props: {
		cats: {
			type: Array,
			required: true,
		},
	},
	computed: {
		displayedCats() {
			return this.cats.slice(0, 6);
		},
	},
	methods: {
		handleCatClick(cat) {
			console.log('Kliknięto 🐈', cat);
			this.$emit('cat-clicked', cat);
		},
	},
};
</script>
<style scoped>
.gallery {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	padding: 20px;
	max-width: 1200px;
	margin: 0;
	background: white;
	border-radius: 20px;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
.cat-item {
	aspect-ratio: 1/1;
	overflow: hidden;
	border-radius: 12px;
	cursor: pointer;
	transition: transform 0.3s ease;
}
.cat-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}
.cat-item:hover {
	transform: scale(1.05);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
