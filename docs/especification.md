# Especificações do Projeto

O projeto tem o objetivo de incentivar as pessoas a terem uma alimentação mais sutentável e menos processada. Com isso o sistema tem como solução a criação de um catálago de receitas e o desenvolvimento de uma rede que possibilita usuários a explorarem e adicionarem mais informações e conteúdo.

Para isso será abordado a construção das personas e das histórias de usuários para, posteriormente, serem definidas os requisitos do sistema.

As técnicas utilizadas são:
- Definição de personas, contextualizando seus momentos de vida e suas necessidades.
- Criação das histórias de usuários, separando em "Persona" | "Funcionalidade" | "Motivo".
- Criação dos requisitos do sistema, baseado nos resultados dos passos anteriores.

## Personas

Leonardo é cozinheiro formado em gastronomia já atuando na área há alguns anos. Ele busca uma ferramenta que o auxilie a apresentar suas receitas do nicho sustentável em redes sociais mostrando todo seu conhecimento e criando um nome de referência. 
  - Motivação
     - Apresentar sua receitas sustentáveis baseada no movimento Slow Food e criar uma marca. O Slow food é um movimento que defende alimentos de qualidade e acessíveis a todos com minimo despedicio.  
  - Frustação
     - As redes sociais atuais não possui ferramentas adequadas para apresentação das receitas. 

Ricardo tem 24 anos, é estudante universitário e vive em uma cidade distante de sua terra natal com a ajuda de seus pais. Ele costuma visitar sua família uma vez no mês e geralmente não costuma planejar as compras no supermercado, tendo que muitas vezes se virar com o que tem na geladeira e com baixo orçamento. Ele sabe que tem uma dieta com poucos nutrientes focada em soluções processadas e gostaria de mudar isso no curto prazo.
  - Motivação
    - Buscar uma alimentação mais saudavel, sustentavel com o minimo de desperdício.
  - Frustação
    - Alimentação baseada em aliemntos processados com baixo teor nutricional.
    

## Histórias de Usuários
Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... | QUERO/PRECISO ...  |PARA ...                 |
|--------------------|------------------------------------|----------------------------------------|
| Cozinheiro | Preciso criar um perfil | Apresentar sua marca | 
| Cozinheiro | Criar minhas receitas | Apresentar o conceito Slow Food e divulgar uma marca |
| Cozinheiro | Compartilhar minhas Receitas | Apresentar em minhas redes sociais |
| Usuário | consultar receitas | Possuir uma alimentação mais saudavel, sustentavel com o minimo de desperdício. |  
| Usuário | Pesquisar as receitas por ingrediente ou pelo nome do prato | consumir baseado no que tenho na geladeira |
| Usuário | Avaliar as receitas | compartilhar minhas experiencias |
| Usuário | Favoritar sua receitas | criar uma dieta balanceada |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Criar um perfil para cadastrar receitas | ALTA |  |
|RF-002| Registrar as receitas | ALTA | |
|RF-003| Consultar as receitas adicionadas | ALTA | | 
|RF-004| Pesquisar as receitas por ingrediente | MÉDIA | | 
|RF-005| O usuário precisa avaliar as receitas |  MÉDIA | |
|RF-006| Editar receitas adicionadas anteriormente | MÉDIA | | 
|RF-007| Navegar por categorias | MÉDIA | |
|RF-008| Favoritar receitas | BAIXA ||
|RF-009| Compartilhar receitas | BAIXA ||

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.
