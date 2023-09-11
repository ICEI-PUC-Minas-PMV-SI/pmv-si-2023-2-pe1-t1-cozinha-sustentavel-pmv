# Especificações do Projeto

O projeto tem o objetivo de incentivar as pessoas a terem uma alimentação mais sutentável e menos processada. Com isso o sistema tem como solução a criação de um catálago de receitas e o desenvolvimento de uma rede que possibilita usuários a explorarem e adicionarem mais informações e conteúdo.

Para isso será abordado a construção das personas e das histórias de usuários para, posteriormente, serem definidas os requisitos do sistema.

As técnicas utilizadas são:
- Definição de personas, contextualizando seus momentos de vida e suas necessidades.
- Criação das histórias de usuários, separando em "Persona" | "Funcionalidade" | "Motivo".
- Criação dos requisitos do sistema, baseado nos resultados dos passos anteriores.

## Personas
Leonardo é cozinheiro formado em gastronomia já atuando na área há alguns anos. Ele busca uma ferramenta que o auxilie a apresentar suas receitas do nicho sustentável em redes sociais mostrando todo seu conhecimento e criando um nome de referência. 

Ricardo tem 24 anos, é estudante universitário e vive em uma cidade distante de sua terra natal com a ajuda de seus pais. Ele costuma visitar sua família uma vez no mês e geralmente não costuma planejar as compras no supermercado, tendo que muitas vezes se virar com o que tem na geladeira e com baixo orçamento. Ele sabe que tem uma dieta com poucos nutrientes focada em soluções processadas e gostaria de mudar isso no curto prazo.

Pedro e Julia começaram a morar juntos recentemente. Eles vão uma vez na semana ao supermercado e tentam sempre diversificar o que consomem. Como trabalham durante a semana, param no domingo para cozinhar marmitas de refeições que ficarão congeladas até seu consumo. Eles preferem aproveitar o fim de semana em atividades juntos, como ver filmes comendo petiscos. 

Márcia é uma viuva aposentada de 80 anos que vive só em seu apartamento. Ela sempre gostou de reutilizar embalagens e outros itens em sua cozinha, além de compartilhar dicas de economia doméstica com suas amigas do prédio. Ela costuma fazer caminhadas matinais e cozinhar todos os dias seu almoço.

## Histórias de Usuários
Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... | QUERO/PRECISO ...  |PARA ...                 |
|--------------------|------------------------------------|----------------------------------------|
| Usuário | Preciso criar um perfil | registrar minhas receitas | 
| Cozinheiro | Registrar minhas receitas | Apresentar em minhas redes sociais |
| Usuário | Ler as receitas adicionadas na plataforma | aplica-las em meus alimentos |  
| Estudante | Pesquisar as receitas por ingrediente | consumir baseado no que tenho na geladeira |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Criar um perfil para cadastrar receitas | ALTA |  |
|RF-002| Registrar as receitas | ALTA | |
|RF-003| Consultar as receitas adicionadas | ALTA | | 
|RF-004| Pesquisar as receitas por ingrediente | MÉDIA | | 
|RF-005| Editar as receitas adicionadas anteriormente | MÉDIA | | 
|RF-006| Navegar por categorias | MÉDIA | |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| O usuário precisa avaliar as receitas |  MÉDIA | 
|RNF-003| Favoritar as receitas | BAIXA |
|RNF-004| Compartilhar facilmente as receitas | BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.
