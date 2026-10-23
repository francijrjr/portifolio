# Portfólio · Francinilton Sobreira

Site estático em português, inglês e espanhol, com títulos animados usando o
[Blur Text do React Bits](https://reactbits.dev/text-animations/blur-text).

## Desenvolvimento

Requer Node.js 22 ou superior.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:5173. O JavaScript é recompilado ao salvar; atualize o
navegador para visualizar as mudanças.

## Build e publicação

```sh
npm run build
```

O build gera `assets/main.js` e seus avisos de licença. Esses arquivos são
versionados para manter a publicação estática existente, inclusive GitHub Pages,
sem exigir um servidor Node.js. Publique `index.html`, `styles.css`, `favicon.svg`,
`assets/` e `public/licenses/`. Também é possível abrir `index.html` diretamente.
Sempre execute o build depois de editar `script.js` ou `src/`.

## Animações

- `src/components/react-bits/BlurText.jsx`: componente oficial incorporado via
  instalação manual, com a propriedade `as` adicionada para preservar HTML semântico.
- `src/text-effects.jsx`: integração dos títulos, troca de idioma e alternativa
  estática para movimento reduzido ou navegadores sem IntersectionObserver.
- `src/hero-slides.js`: mensagens de apresentação em PT, EN e ES.
- `src/hero-rotator.jsx`: alterna chamada, título e descrição juntos a cada 7 segundos,
  com controles para pausar e avançar. A segunda frase do título aparece em azul.
- `data-text-effect="heading"`: entrada dos títulos de seção ao entrar na tela.
- Os títulos das seções animam uma vez. A apresentação pausa ao receber foco,
  durante hover, fora da tela ou em uma aba oculta. Com movimento reduzido, a
  troca é manual. O espaço reservado evita deslocar os botões entre mensagens.
  Os textos continuam no HTML inicial para leitura sem JavaScript e indexação.

Origem: [React Bits, revisão e12c221](https://github.com/DavidHDev/react-bits/tree/e12c22192ac7b4b452c5e2feb9b586d74765d696).
Licença original preservada em `public/licenses/react-bits.md`.
React, Motion e ícones Lucide são incluídos no bundle local; as fontes usam Google Fonts.

## Verificação

```sh
npx playwright install chromium
npm test
```

Os testes verificam os três idiomas em 320, 390, 768 e 1440 px, os títulos ao
rolar, movimento reduzido, leitura sem JavaScript, navegação e composição da
mensagem do WhatsApp. O contador externo é simulado para não registrar visitas de teste.
