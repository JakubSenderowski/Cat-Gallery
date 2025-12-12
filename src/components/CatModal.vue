<template>
	<div v-if="isModalOpen">
		<div class="modal-overlay" @click="close">
			<div class="modal-content" @click.stop>
				<button class="close-button" @click="close">x</button>
				<img :src="selectedCat.url" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CatModal',
	props: {
		selectedCat: {
			type: Object,
			required: false,
			default: null,
		},
		isModalOpen: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		close() {
			this.$emit('close');
		},
	},
};
</script>
<style scoped></style>
