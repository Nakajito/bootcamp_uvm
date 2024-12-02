document.getElementById('sendData').addEventListener('click', () => {
    const data = {
        name: 'John Doe',
        job: 'Web Developer'
    };

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        document.getElementById('response').classList.remove('error');
        document.getElementById('response').innerHTML = `
            <strong>Respuesta del servidor:</strong>
            <pre>${JSON.stringify(json, null, 2)}</pre>
        `;
    })
    .catch(error => {
        document.getElementById('response').classList.add('error');
        document.getElementById('response').innerHTML = `
            <strong>Error al enviar los datos:</strong> ${error}
        `;
    });
});

document.getElementById('goBack').addEventListener('click', () => {
    window.history.back();
});