import Events from './components/events.js';

const teamIds = [
	'23032', // 8000B
	'23035', // 8000C
	'64680', // 8000E
	'155481', // 8000J
];

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmU4MjdmZWUyMGM3NjU1MzMzY2YyOWViZWI2ZjUwODk3ZjEzZTRkNTI5NGI3M2U1YzQ2OTZkYzdjMGM3ZDFlNWFjMGQzOTVhZjMyMTc3MTciLCJpYXQiOjE3MDY2NzUwMDEuMzQ0NTQ5OSwibmJmIjoxNzA2Njc1MDAxLjM0NDU1MywiZXhwIjoyNjUzNDQ2MjAxLjMzNzI0NzgsInN1YiI6IjEyNjUxOSIsInNjb3BlcyI6W119.n7N3E5qGICwGlJf-RC-mq6VAwb4kHZrBoJsDdDJApcf0V46JhyGgCrCrjUkSSJsZWQ19Tg4lHHIOAwx5VZDZoTfGVtsurIpTid3Je_Joxo_16WIceO4xxTxsmyQURWRzDHe6Go6c6DHtMRnVuep7NR5hvnSENRl2sAE8k_KN09OL_v1lC6UIHRXk-QsdZ3tBcDKFqPuZoc3Kyh787iIcynliWOh7bVfHpl0jZXIyAoimn3vU2OZtiavjPZAIiCMRJfGNXU2A338puDdDywZYkKOch7x--Oglcp1rng4fh5QTsgl7UDta-a9O-jJk897TpzA1u1BvBceceqOn8Sey-DdyKvCDj-vTPOKPko6YkrNvTsvqkE7HNvkZMlO0YCkv1zE52H4mVc92De_J2bczlDXoPS6rgWBnl8XvySpKiS_f7dI0WVk0qi3TJ8jHdXc2aVCJDqaZokggt1-4lLptd3LviTraSmXTF55L3Kw5X_ohIOKa0ShBQwKxNzNYXIljUhk18x1J3R_OYMdUjgY4j8o-OutprAkw-7BnLiY53tpZpYhu6HTy41AvEMDGqCv_tz6xWFCVOlM4eKKuyND8jWFDJQEVKzLZqzSzV16znmkz2eCHBWnrya3fdGB4yeQfTFj6KBPhFHem4_DHvRbtjFtt_g51uNoLwcCS7_J4-9Y';
const apiBaseUrl = 'https://www.robotevents.com/api/v2';

const app = Vue.createApp();
app.mount('#app');
