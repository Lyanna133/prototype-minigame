
# Prototype Mini-game

Welkom, 
voor mijn stage heb ik gewerkt aan het ontwikkelen van een digitale
escape room. Hiervoor heb ik een prototype gemaakt met het framework [Phaser.io](http://phaser.io/).
In deze Readme staan de stappen om dit prototype te installeren op jouw eigen computer
en hier verder aan te kunnen werken.



## Auteurs


- [@Anouk Wijnen](https://github.com/Lyanna133)




## Documentatie

```bash
  #Dit project maakt gebruik van
  Nodejs: v19.2.0
  Phaser: 3.55.2
```


## Instaleren

Instaleer project via [@Github](https://github.com/Lyanna133/prototype-escaperoom)

```bash
  #Gebruik Github of Gitkraken
  - In Gitlab klik op de clone knop en kopieer de link.
  - In Github klik op 'Add' daarna op clone repository.
  - Zet de link in de URL tab en clone het project.
```
```bash
  #Project op eigen pc
  - In Gitlab klik op de download source code knop links van de clone knop.
  - Gebruik zip en sla het project op in je eigen gekozen folder
```
[@Github phaser3 template](https://github.com/ourcade/phaser3-vite-template)
```bash
  #Stappen die ik zelf heb doorlopen voor het installeren
  - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh |
    bash            # Dit is het instaleren van nvm Mac version

  - export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s
    "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
            # Dit laad nvm
  
  - nvm install node      # Installeren van node
  - nvm use node          # Laden van node

  - npx degit https://github.com/ourcade/phaser3-vite-template *your folder*
    npm install         # Installeert de phaser 3 template

  - npm run start       # Start applicatie op je localhost
```


## Screenshots

<img width="696" alt="2 boxes open" src="https://user-images.githubusercontent.com/103851643/211284477-2127da79-502a-4ef9-9c5c-f7529c9c3686.png">


