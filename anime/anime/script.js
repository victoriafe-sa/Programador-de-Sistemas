//Função para exibir a lista de animes
function loadAnimes() {
    fetch('http://localhost:5566/api/animes')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('anime-list');
            list.innerHTML = '';
            data.forEach(anime => {
                list.innerHTML += `
                <div>
                    <p>${anime.titulo} (${anime.genero}) - ${anime.ano_lancamento} </p>
                    <button onclick="deleteAnime(${anime.id_anime})">Deletar</button>
                    <button onclick="editAnime(${anime.id_anime})">Editar</button>
                </div>`;
            });
        })
        .catch(error => console.error('Erro:', error));
}

//Adicionar nova anime
document.getElementById('anime-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const ano_lancamento = document.getElementById('ano_lancamento').value;

    fetch('http://localhost:5566/api/animes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, genero, ano_lancamento })
    })
        .then(() => {
            loadAnimes();
            document.getElementById('anime-form').reset();
        })
        .catch(error => console.error('Erro:', error));
});

// Deletar anime
function deleteAnime(id) {
    fetch(`http://localhost:5566/api/animes/${id}`, { method: 'DELETE' })
        .then(() => loadAnimes())
        .catch(error => console.error('Erro:', error));
}

// Editar anime
function editAnime(id, titulo, genero, ano_lancamento) {
    const tituloNovo = prompt('Novo titulo: ', titulo);
    const generoNova = prompt('Nova genero:', genero);
    const ano_lancamentoNovo = prompt('Novo ano_lancamento:', ano_lancamento);

    fetch(`http://localhost:5566/api/animes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: tituloNovo, genero: generoNova, ano_lancamento: ano_lancamentoNovo })
    })
        .then(() => loadAnimes())
        .catch(error => console.error('Erro:', error));
}

// Carregar a lista ao abrir a pagina
loadAnimes();