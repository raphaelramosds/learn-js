# Introdução ao Electron

## Como funciona

Uma aplicação desenvolvida com Electron é composta por dois tipos principais de processos: o processo principal (main process) e o processo de renderização (renderer process).

Toda definição do processo principal se encontra em `index.js`


### Main process

O processo principal funciona como o núcleo da aplicação — ele é executado em um ambiente Node.js e é responsável por criar janelas, gerenciar eventos do sistema operacional e controlar o ciclo de vida da aplicação.


### Renderer process

O processo de renderização é o responsável pela interface visual. Ele executa código HTML, CSS e JavaScript em um ambiente semelhante ao de um navegador, exibindo o conteúdo para o usuário e interagindo com o processo principal por meio de canais de comunicação seguros.

O renderizador é criado automaticamente ao chamar 

```js
win.loadFile('index.html')
```

Essa linha faz o Electron abrir um processo separado para renderizar o conteúdo do arquivo `index.html`

## Comunicação entre os processos

O script de preload atua como uma ponte segura entre o main e o renderer, permitindo expor funções controladas do Node.js ao código da interface