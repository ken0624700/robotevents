export default {
	props: {
		teamId: String,
	},
	watch: {
		teamId: {
			handler(newId) {
				this.fetchEvents();
			},
			immediate: true
		}
	},
	methods: {
		fetchEvents() {
			const today = new Date().toISOString().split('T')[0];
			const request = new Request(`${apiBaseUrl}/teams/${this.teamId}/events?start=${today}`);
			fetch(request)
  				.then((response) => {
    				if (!response.ok) {
      					throw new Error(`HTTP error! Status: ${response.status}`);
    				}
    				return response.json();
  			}).then((response) => {
				  console.log('12345 got response', response);
  			});
		},
	},
	template: `
		<div class="container">
			events
		</div>
	`
}