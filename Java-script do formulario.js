       const form = document.querySelector("#formulario");
        const texto = document.querySelector("#campoTexto");
        const comentario = document.querySelector("#comentario");
        const textosEnviadosDiv = document.querySelector("#textosEnviados");

        form.addEventListener("submit", event => {
            event.preventDefault();
            const titulo = texto.value;
            const comentarioTexto = comentario.value;

            const data = {
                title: titulo,
                body: comentarioTexto,
                userId: 1,
            };

            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                textosEnviadosDiv.innerHTML = `<p>${data.title}</p>               <p>${data.body}</p>`;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });