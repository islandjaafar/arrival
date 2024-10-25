# arrival
Voici un README mis à jour avec des explications sur les comportements implémentés dans votre projet :

---

# Projet de Simulation avec p5.js

Ce projet simule le comportement de véhicules en utilisant la bibliothèque **p5.js**. Les véhicules errent de manière autonome dans un espace de dessin et adoptent des comportements inspirés de la dynamique comportementale.

## Contenu du Projet

- **index.html** : Fichier principal HTML pour le rendu, incluant les bibliothèques **p5.js** et **p5.sound** ainsi que les scripts JavaScript personnalisés.
- **jsconfig.json** : Configuration de compilation pour les options de compatibilité JavaScript.
- **style.css** : Styles de base pour le canvas et le corps de la page.
- **sketch.js** : Script principal qui initialise le canvas et configure les véhicules.
- **vehicle.js** : Définit la classe `Vehicle` avec plusieurs méthodes de comportement.

## Comportements Implémentés

Les comportements suivants sont inclus dans le script `vehicle.js` :

1. **Errance (Wander)** :  
   Les véhicules se déplacent de manière aléatoire en suivant une direction changeante. Cette technique utilise un cercle imaginaire devant le véhicule, avec un point cible qui se déplace légèrement à chaque image, créant une trajectoire fluide mais imprévisible. 

2. **Recherche (Seek)** :  
   Les véhicules peuvent se diriger vers une cible spécifique. Le comportement de recherche calcule la force nécessaire pour orienter le véhicule vers cette cible, ajustant la vitesse pour atteindre un mouvement direct.

3. **Évitement (Evade)** :  
   Le véhicule peut éviter un autre véhicule en inversant sa direction. Ce comportement utilise le calcul de la trajectoire de l'autre véhicule pour estimer sa future position et adapter la direction.

4. **Pourchasse (Pursue)** :  
   Similaire au comportement de recherche, mais en prenant en compte le mouvement de la cible pour prédire sa position future et ajuster la direction de déplacement en conséquence.

5. **Arrivée (Arrive)** :  
   Lorsqu'un véhicule se rapproche d'une cible, sa vitesse diminue progressivement pour arriver en douceur. Cela évite des arrêts brusques et simule un comportement réaliste.

6. **Fuite (Flee)** :  
   Ce comportement inverse la recherche : le véhicule s’éloigne d’une cible indésirable. Ce comportement peut être combiné avec d’autres pour des interactions dynamiques.

7. **Gestion des Bords (Edges)** :  
   Les véhicules peuvent passer d'un bord du canvas à l'autre sans interruption, créant un effet de boucle. Cela assure qu'ils restent visibles et actifs en permanence.

## Instructions d’Utilisation

1. **Ouvrir `index.html`** dans un navigateur compatible.
2. Le sketch génère un canvas où un ou plusieurs véhicules se déplacent en fonction des comportements décrits.

---

Ce fichier README donne un aperçu complet des comportements de déplacement autonomes dans le projet.
