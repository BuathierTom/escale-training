
# Escale Training

L'Escale est un site de restauration qui met en avant les menu disponible dans un restaurant à Boulogne-Sur-Mer. 

## Gestion de projet 

Lien vers le trello pour les missions qui vous sont imposées : [trello.com](https://trello.com/invite/b/jlrhEYpg/ATTIf32685a3c53bcde9b2a99de8145747fd069114EE/projet-escale)



## Installation

Pour chaque repertoire (`backend` et `frontend`), installez les dependances :

```bash 
cd .\backend\
npm install
```

```bash 
cd .\frontend\
npm install
```

# 

L'arborescence du projet se présente comme ceci : 

![arborescence](https://github.com/BuathierTom/BuathierTom/assets/97435667/a7a7555a-aea2-484f-b49e-ecb7629020bc)


## How to launch ?

Pour lancer le projet, vous devez avoir installer les dependances comme montré dans l'étape précedente. Puis, démarrer le back et le front en même temps.

Pour le **Front-End** : 

```bash
npm run dev 
```

Pour le **Back-End** : 

```bash
npm run dev 
```
Le back se lancera avec le port 3000
## Documentation

Une documentation swagger est disponible sur : `localhost:3000/docs`

Elle décrit toutes les fonctions du back, avec les modeles qui sont reliés au fonctions. 




## Environment Variables

Pour exécuter ce projet, vous devrez ajouter les variables d'environnement suivantes à votre fichier .env :

```
DB_URI = 'mongodb+srv://escale:cocotomsucre@escale.n0dxq6n.mongodb.net/?retryWrites=true&w=majority'

DB_NAME = 'escale'
```
## Maquette

Pour ce projet, nous avons respecter une maquette, pour faire ce que nous vous demandons. 

Lien vers le figma : [Figma.com](https://www.figma.com/file/b1n4B41rIQjbCNI0W7zplI/Untitled?type=design&node-id=0%3A1&mode=design&t=Gfal9HWiCjTTu15I-1)
## Palette de couleur

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary color | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Secondary Color | ![#F3EFEB](https://via.placeholder.com/10/F3EFEB?text=+) #F3EFEB |
| Tertiary Color | ![#FF0000](https://via.placeholder.com/10/FF0000?text=+) #FF0000 |


## Ajouts & Corrections sur le site

- [Ajouts](#ajouts)
    - [Ajout d'un footer](#ajout-d-un-footer)
    - [Ajout d'un mailer](#ajout-d-un-mailer)
    - [Ajout de la carte boissons](#Ajout-de-la-carte-des-boissons)
- [Corrections](#corrections)
    - [Redirection du menu](#Redirection-du-menu)
    - [Ajout style pop-up](#Ajout-style-pop-up)
    - [Formulaire de contact](#Formulaire-de-contact)


### Ajouts

#### Ajout d'un footer

Ajout d’un footer qui indiquera par exemple l’adresse du restaurant, ou encore des réseaux sociaux.

- Tout d’abord effectuer une maquette du footer afin d’avoir un repère lors du code

- Créer un composant Footer.jsx dans le dossier Layout en reprenant la structure des autres composants

- Créer un fichier footer.scss dans le dossier Layout présent dans le dossier styles pour y mettre le style du footer

- Importer ensuite le fichier footer.sccs dans le fichier main.scss comme les fichiers déjà présent

- Mettre dans le footer les élément suivant:

- Adresse du restaurant ( 52-54 Bd Sainte-Beuve, 62200 Boulogne-sur-Mer)

- Politique de communication

- Réseaux sociaux (Facebook, Instagram)

- Mentions Légales

- Plats fait maison
# 
#### Ajout d'un mailer

Ajout d’un mailer qui lorsque l’utilisateur réserve une table, reçoit automatiquement un mail de confirmation.

- Mailer :

Pour créer le mailer, on va utiliser le package nodemailer.

- Faire un transporter.mail.js dans un dossier mail

- Puis ajouter l’envoie d’un mail dans le fichier reservation.controller.js en appelant la méthode transporter.

    - Faites des recherches pour l'envoi du mail. Il vous faut créer un email (gmail de préférence) et ensuite récupérer le mot de passe de l’application sur gmail. (faites des recherches).

    - et surtout n’oubliez pas d'ajouter avant d’envoyer un try et catch avant l’envoie du mail pour utiliser la méthode addLog() (Regarder dans le fichier avant de le faire pour comprendre comment la méthode est faites)
# 
#### Ajout de la carte des boissons

Reproduire ce qui a été fait pour les autres cartes :

- Créer un composant Drinks.jsx en reprenant la même manière de faire que pour les autres partie du menu tels que Escale.jsx, Discovery.jsx, Desserts.jsx

- L’importer ensuite dans le composant Menu.jsx et l’ajouter au menu.

### Corrections

#### Redirection du menu 

Redirection du menu vers les différentes parties, ils devront utiliser des ancres et scroll smooth pour rendre la transition plus fluide.

Pour mettre en place les redirections, il faut ajouter des ancres (faire des recherches)  sur les différentes sections représentant la partie menu, la partie contact et la partie reservation qu’on veut relier. Il faut également utiliser la propriété CSS “scroll-behavior: smooth;” pour rendre le scroll plus fluide et plus esthétique.
# 
#### Ajout du style pour la pop-up 

Créer un composant pour créer les pop-ups (vous pouvez utiliser SweetAlert par exemple)

Ainsi qu’un fichier de style pour les personnalisés si besoin.

Importer ensuite vos pop-ups dans les fichiers pour les utiliser.

Pour la gestion des pop-ups de réservation vous pouvez les importer dans le fichier Reservation.jsx puis l’utiliser à l’endroit ou la gestion de la réservation est effectuée.
# 
#### Formulaire de contact

Rendre fonctionnel le formulaire de contact :

Implémenter un système pour récupérer le message envoyé par le client par mail par exemple en utilisant Formspree ou autre si vous le souhaitez.
## Authors

- [@BuathierTom](https://www.github.com/BuathierTom)
- [@adriengmbt](https://www.github.com/adriengmbt)
- [@crepincorentin](https://www.github.com/crepincorentin)


