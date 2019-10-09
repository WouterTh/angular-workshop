# angular-workshop

## Prerequisites

### Visual Studio Code
Mijn favoriete IDE voor het lichtere werk, [klik hier om te downloaden](https://code.visualstudio.com/).
Sterk aangeraden extensies: 
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [TS Lint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

### Node JS
Installeert de Node JS runtime en NPM. De LTS versie is noodzakelijk. [Klik hier om LTS versie te downloaden](https://nodejs.org/dist/v10.16.3/node-v10.16.3-x64.msi).

Installatie status kan gemakkelijk nagekeken worden door de volgende commando's in te geven in een command prompt window:
```bash
node -v
npm -v
```
Indien correct geïnstalleerd zou de versienummer moeten verschijnen. Node zou rond versie 10 moeten zitten, npm rond versie 6.

### Angular CLI

Als npm geïnstalleerd is, kan Angular gemakkelijk geïnstalleerd worden via npm:
```bash
npm install @angular/cli@latest -g
```
De versienummer kan geverifieerd worden via onderstaand commando en zou rond versie 6.3 moeten zitten
```bash
ng --version
```

### Git
Check of git geïnstalleerd is via het commando:
```bash
git --version
```
Meestal wordt dit via Visual Studio of andere source control software mee geïnstalleerd, de meest recente versie is 2.23. Moest dit nog niet geïnstalleerd zijn, [klik hier om de laatste versie te downloaden](https://git-scm.com/download/win). 
Updaten kan via onderstaand commando (indien git 2.16 of recenter reeds geïnstalleerd):
```bash
git update-git-for-windows
```
In oudere versies kan dit via:
```bash
git update
```
