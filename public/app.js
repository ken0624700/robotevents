import Events from './components/events.js';

const teamIds = [
	'23032', // 8000B
	'23035', // 8000C
	'64680', // 8000E
	'155481', // 8000J
];

const app = Vue.createApp().component('Events', Events);
app.mount('#app');
