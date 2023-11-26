fetch('http://localhost:3000/receitas')
              .then(response => response.json())
              .then(data => {
                const recipeCards = document.querySelector('.recipe-cards');
                data.forEach(receita => {
                  const card = document.createElement('div');
                  card.className = 'card';
                  card.innerHTML = `
                    <a href="visualizar-receita.html">
                        <h2 class="card-title">${receita.titulo}</h2>
                        <img src="${receita.imagem}" alt="${receita.titulo}" class="card-image">
                        <p class="card-description">${receita.descricao}</p>
                        <div class="fill-button">Visualizar receita</div>
                    </a>
                  `;
                  recipeCards.appendChild(card);
                });
              })
              .catch(error => console.error('Erro:', error));