async function fetchUrl(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

async function fetchAll(urls) {
    try {
        let promises = urls.map(url => fetchUrl(url));

        let results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error('Error fetching URLs:', error);
        return [];
    }
}

let urls = [
    'https://www.codewars.com/users/96kaidan',
    'https://github.com/96kaidan'
];

fetchAll(urls)
    .then(contents => {
        console.log('Loaded data:');
        contents.forEach((content, index) => {
            console.log(`Content of URL ${index + 1}:`, content);
        });
    })
    .catch(error => console.error('Load error:', error));
