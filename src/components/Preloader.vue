<template lang="pug">
	.spinner-container
		svg.spinner(width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg")
			circle.path(fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30")
</template>

<script>
export default {
	name: 'Preloader'
}
</script>

<style lang="scss">
	.spinner-container {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		background: #fff;
		z-index: 1010;
	}

	.spinner {
		-webkit-animation: rotator 1.4s linear infinite;
		animation: rotator 1.4s linear infinite;
	}

	@-webkit-keyframes rotator {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
	}
	@keyframes rotator {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
	}

	.path {
		stroke-dasharray: 187;
		stroke-dashoffset: 0;
		-webkit-transform-origin: center;
		transform-origin: center;
		-webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
		animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
	}

	@-webkit-keyframes colors {
		0% {
			stroke: #4285F4;
		}
		25% {
			stroke: #DE3E35;
		}
		50% {
			stroke: #F7C223;
		}
		75% {
			stroke: #1B9A59;
		}
		100% {
			stroke: #4285F4;
		}
	}
	@keyframes colors {
		0% {
			stroke: #4285F4;
		}
		25% {
			stroke: #DE3E35;
		}
		50% {
			stroke: #F7C223;
		}
		75% {
			stroke: #1B9A59;
		}
		100% {
			stroke: #4285F4;
		}
	}
	@-webkit-keyframes dash {
		0% {
			stroke-dashoffset: 187;
		}
		50% {
			stroke-dashoffset: 46.75;
			-webkit-transform: rotate(135deg);
			transform: rotate(135deg);
		}
		100% {
			stroke-dashoffset: 187;
			-webkit-transform: rotate(450deg);
			transform: rotate(450deg);
		}
	}
	@keyframes dash {
		0% {
			stroke-dashoffset: 187;
		}
		50% {
			stroke-dashoffset: 46.75;
			-webkit-transform: rotate(135deg);
			transform: rotate(135deg);
		}
		100% {
			stroke-dashoffset: 187;
			-webkit-transform: rotate(450deg);
			transform: rotate(450deg);
		}
	}
</style>
