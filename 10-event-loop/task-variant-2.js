/* Напишите функцию, которая извлекает
данные из API и отменяет запрос, если он
занимает больше указанного времени. */

async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        clearTimeout(timeoutId);
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request aborted due to timeout');
        } else {
            console.error('Fetch error:', error);
        }
        throw error;
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const timeoutMs = 5000;

fetchDataWithTimeout(apiUrl, timeoutMs)
    .then(data => console.log('Received data:', data))
    .catch(error => console.error('Error fetching data:', error));
