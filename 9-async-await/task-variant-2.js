/* Напишите функцию, которая сначала
загружает данные с одного сервера, а затем
использует эти данные для выполнения
запроса к другому серверу. Используйте
async/await для обеспечения
последовательного выполнения запросов. */

async function fetchDataFromServer1() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from Server 1:', error);
        throw error;
    }
}

async function sendDataToServer2(data) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let result = await response.json();
        return result;
    } catch (error) {
        console.error('Error sending data to Server 2:', error);
        throw error;
    }
}

async function executeSequentialRequests() {
    try {
        let server1Data = await fetchDataFromServer1();
        console.log('Loaded data from Server 1:', server1Data);

        let result = await sendDataToServer2(server1Data);
        console.log('Response from Server 2:', result);

        return result;
    } catch (error) {
        console.error('Sequential requests error:', error);
        return null;
    }
}

executeSequentialRequests()
    .then(result => {
        if (result !== null) {
            console.log('Sequential requests completed successfully.');
        } else {
            console.log('Sequential requests encountered an error.');
        }
    })
    .catch(error => {
        console.error('Unhandled error in executeSequentialRequests:', error);
    });
