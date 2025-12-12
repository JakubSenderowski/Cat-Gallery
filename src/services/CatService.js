const API_URL = 'https://api.thecatapi.com/v1/images/search';

class CatService {
	async fetchCats(limit = 6) {
		const url = `${API_URL}?limit=${limit}`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Meow 🐱, nie udało się pobrać danych ${response.status}`);
			}
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Błąd podczas pobierania kotków', error);
			throw error;
		}
	}
}

export default new CatService();
