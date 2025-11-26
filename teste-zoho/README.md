



/teste-zoho
|
|-- /assets/
|   |-- /css/
|   |   |-- global.css      (Estilos globais, fonts, responsividades)
|   |   |-- hero.css         (Estilos com header e hero)
|   |   |-- testimonial.css        
|   |   |-- features.css        
|   |   |-- advantages.css    
|   |   |-- tabs.css      
|   |   |-- footer.css      
|   |
|   |-- /images/  (imagens da aplicação)
|   |
|   |-- /js/
|   |   |-- testimonial.js (logica js com jquery carrossel)
|   |   |   
|   |   |-- tabs.js               (logica js jquery menu)
|
|-- /components/              <-- HTML de cada seção
|   |
|   |-- hero.html
|   |-- testimonial.html
|   |-- features.html
|   |-- advantages.html
|   |-- tabs.html
|   |-- footer.html
|
|-- index.html                <-- O HTML principal que monta tudo
|-- README.md






🛠️ Destaques do Desenvolvimento
Gostaria de ressaltar algumas práticas e implementações que realizei no projeto:

Performance: Implementação de uma etapa de minificação de JavaScript (tabs.min.js) e separação de CSS para otimizar o tempo de carregamento em produção.

Boas Práticas: Uso do princípio DRY (Don't Repeat Yourself) na seção de abas (Tabs), onde a estrutura repetitiva do painel é gerada dinamicamente via JavaScript/jQuery.

Carregamento Assíncrono: Uso do jQuery para carregamento assíncrono dos componentes HTML, com a inclusão de um loading screen (#loader-wrapper) para melhorar a experiência do usuário durante o carregamento.

Responsividade: O layout foi projetado com foco na responsividade, utilizando Media Queries para adaptação em diferentes dispositivos (mobile, tablet e desktop).