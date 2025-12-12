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
<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.85);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	animation: fadeIn 0.3s ease;
}
.modal-content {
	position: relative;
	background: white;
	border-radius: 20px;
	padding: 20px;
	max-width: 90vw;
	max-height: 90vh;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
	animation: slideUp 0.3s ease;
}
.close-button {
	position: absolute;
	top: 10px;
	right: 10px;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	font-size: 24px;
	cursor: pointer;
	transition: all 0.3 ease;
	display: flex;
	align-items: center;
	justify-content: center;
}
.close-button:hover {
	background: rgba(0, 0, 0, 0.8);
	transform: rotate(90deg);
}
.modal-content img {
	max-width: 100%;
	max-height: 80vh;
	border-radius: 12px;
	display: block;
}
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes slideUp {
	from {
		transform: translateY(50px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>
