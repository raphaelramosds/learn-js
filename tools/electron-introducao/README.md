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

Abaixo uma explicação de como a janela principal da aplicação consegue acessar, por exemplo, a versão do Node.js do processo principal

1. `preload.js` empacota um objeto com a saída de funções do Node.js (obter versões do node, chrome e node), e o expõe
2. `index.js` carrega o script de preload
3. `renderer.js` acessa o objeto e renderiza suas saídas em um elemento HTML de parágrafo

### IPC

O Electron provê módulos IPC para enviar mensagens entre o processo principal e o renderizador

Para enviar uma mensagem da sua página web para o processo principal, você pode configurar um manipulador no processo principal usando ipcMain.handle e, em seguida, expor uma função que chame ipcRenderer.invoke para acionar esse manipulador no seu script preload.

```javascript
// index.js
app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    // ..
})
```

```javascript
// preload.js
const { ipcRenderer, contextBridge } = require('electron')
contextBridge.exposeInMainWorld('versions', {
    // ...
    ping: () => ipcRenderer.invoke('ping'),
})
```

