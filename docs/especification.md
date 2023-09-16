# Especificações do Projeto

O projeto tem o objetivo de incentivar os usuários a adotarem uma alimentação consciente, sustentável e saudável. A partir dessa premissa, o sistema apresenta, como solução, a criação de um catálogo de receitas e o desenvolvimento de uma rede que: 
1) Permita aos usuários adicionar e compartilhar receitas e conteúdos de alimentação inteligente e socialmente responsável; 
2) Possibilite aos usuários a interação entre si e a divulgação de conteúdos produzidos por profissionais especializados em alimentação sustentável. 

Para isso, primeiramente, serão apresentadas as personas, suas características e necessidades específicas no campo alimentar, para a posterior definição dos requisitos do sistema. 

As técnicas a seguir serão as seguintes:
- Definição de personas, com contextualização de seus momentos de vida e de suas necessidades;
- Criação das histórias de usuários, separando em "Persona" | "Funcionalidade" | "Motivo";
- Criação dos requisitos do sistema, a partir dos resultados dos passos anteriores.

## Personas

Persona 1:
Leonardo é cozinheiro, formado em gastronomia e atua na área há cinco anos. Ele busca uma ferramenta que o auxilie a apresentar, em redes sociais, suas receitas do nicho de alimentação sustentável, objetivando a consolidação de seu nome como referência na gastronomia socialmente consciente. 
  - Motivação
     - Divulgar a cozinha sustentável a partir de receitas fundamentadas no movimento Slow Food, consolidando seu nome no mercado de alimentação consciente e incentivando a adoção de receitas sustentáveis pelos usuários, também conscientizando que optem pela alimentação em locais que valorizem o consumo consciente e o máximo aproveitamento dos ingredientes. O Slow Food é um movimento que, em linhas gerais, defende o "alimento bom, limpo e justo para todos".

  - Frustação
     - As redes sociais atuais não possuem ferramentas adequadas para a divulgação de receitas sustentáveis. Estas tendem a perder espaço em razão de pouca informação e inexpressiva visibilidade. 

Persona 2:
Ricardo tem 24 anos, é estudante universitário de baixa renda e vive com a ajuda de seus pais em uma cidade distante de sua terra natal. Ele costuma visitar sua família uma vez ao mês e não costuma planejar as compras no supermercado, tendo muitas vezes que "se virar" com o que há na geladeira. Ele está insatisfeito com sua dieta de poucos nutrientes, baseada em soluções industrializadas, e pretende mudar essa situação no curto prazo, por também ser filho de pais hipertensos e diabéticos.

  - Motivação
    - Encontrar uma alimentação que concilie um nível geral de saúde, que aproveite o máximo dos alimentos em termos nutricionais e de desperdício, tendendo a zero, praticando economia doméstica com uma alimentação saudável, consciente, sustentável e que também seja prática para o seu dia a dia.
    
  - Frustação
    - Hoje, ele tem uma alimentação baseada em alimentos industrializados e com baixo teor nutricional, que são custosos no fim do mês e que afetam sua saúde devido ao quadro médico de pré-diabetes e de deficiência nutricional.
    
## Histórias de Usuários

Com base na análise das personas, as seguintes histórias de usuários foram identificadas:

|EU COMO... | QUERO/PRECISO ...  |PARA ...                 |
|--------------------|------------------------------------|----------------------------------------|
| Cozinheiro | Preciso criar um perfil | Apresentar conteúdos próprios de alimentação sustentável | 
| Cozinheiro | Criar minhas receitas | Consolidar, nas principais redes sociais, meu nome como referência na gastronomia sustentável |
| Cozinheiro | Compartilhar minhas receitas | Divulgar o movimento Slow Food e incentivar a adoção dos demais usuários ao consumo consciente |
| Usuário | Consultar receitas | Criar refeições saudáveis, sustentáveis e com o mínimo de desperdício |  
| Usuário | Pesquisar as receitas por ingrediente ou pelo nome do prato | Consumir de acordo com o que há na geladeira |
| Usuário | Avaliar as receitas | Compartilhar minhas experiências |
| Usuário | Favoritar as receitas | Criar uma dieta balanceada |

## Requisitos

As tabelas, que se seguem, apresentam os requisitos funcionais e não funcionais do escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Criar um perfil para cadastrar as receitas | ALTA |  |
|RF-002| Registrar as receitas | ALTA | |
|RF-003| Consultar as receitas adicionadas | ALTA | | 
|RF-004| Pesquisar as receitas por ingrediente | MÉDIA | | 
|RF-005| Avaliar as receitas |  MÉDIA | |
|RF-006| Editar as receitas adicionadas anteriormente | MÉDIA | | 
|RF-007| Navegar por categorias | MÉDIA | |
|RF-008| Favoritar as receitas | BAIXA ||
|RF-009| Compartilhar as receitas | BAIXA ||

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivo móvel | ALTA | 

## Restrições

O projeto está restrito pelos ítens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.
