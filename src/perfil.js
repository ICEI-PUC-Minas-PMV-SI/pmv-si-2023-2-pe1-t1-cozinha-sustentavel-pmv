fetch('http://localhost:3000/receitas')
              .then(response => response.json())
              .then(data => {
                const publishedRecipes = document.getElementsByClassName('content')[0];
                const favorites = document.getElementsByClassName('content')[1];

                data.forEach(receita => {
                  const publishedRecipesCard = document.createElement('card');
                  publishedRecipesCard.innerHTML = `
                    <a href="">
                        <img src="${receita.imagem}" alt="${receita.titulo}">
                        <h1>${receita.titulo}</h1> 
                        <div class="stars">                        
                            <div class="icon"> 
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </div>
                        </div>
                    </a>
                  `;

                  publishedRecipes.appendChild(publishedRecipesCard);

                  const favoritesCard = document.createElement('card');
                  favoritesCard.innerHTML = `
                    <a href="">
                      <img src="${receita.imagem}" alt="${receita.titulo}">
                    </a>
                    <a href="">
                      <h1>${receita.titulo}</h1>  
                    </a>
                    <div class="stars">                        
                        <div class="icon"> 
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                    </div>
                    <div class="delete-favorite">
                        <a href="">
                            <i class="bi bi-x-circle-fill"></i>
                        </a>
                    </div>
                  `;

                  favorites.appendChild(favoritesCard);
                });
              })
              .catch(error => console.error('Erro:', error));


fetch('http://localhost:3000/perfil')
.then(response => response.json())
.then(data => {
  const identification = document.querySelector('.identification');
  console.log(identification)

  const name = document.createElement('H1');
  const image = document.createElement('img');

  name.innerHTML = data.nome;
  image.src = "img/profile-pic.jpg";
  image.alt = "Foto de Perfil";

  identification.appendChild(name);
  identification.appendChild(image);

})
.catch(error => console.error('Erro:', error));