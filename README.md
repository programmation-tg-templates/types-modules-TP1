# Types et modules - TP1 - Gestion d'un panier d'achats

## Consignes

Vous allez créer une application qui gère un panier d’achats.

L’application devra :

- Enregistrer des produits
- Calculer le prix total du panier
- Afficher la liste des produits et le montant final

Un `Produit` sera caractérisé par :

- `nom`
- `prix_unitaire`
- `quantite`

À vous de choisir les bons types pour ces attributs.

## Arborescence de fichiers

```
📁 src/
├── 📄 affichage.ts
├── 📄 main.ts
├── 📄 panier.ts
└── 📄 produit.ts
```

Utilisez les fonctions des autres fichiers dans le fichier main.ts pour produire l'affichage suivant :

```
Contenu du panier :
┌─────────┬─────────┬───────────────┬──────────┐
│ (index) │ nom     │ prix_unitaire │ quantite │
├─────────┼─────────┼───────────────┼──────────┤
│ 0       │ 'Pomme' │ 1.2           │ 4        │
│ 1       │ 'Pain'  │ 2.5           │ 1        │
│ 2       │ 'Lait'  │ 1.8           │ 2        │
└─────────┴─────────┴───────────────┴──────────┘
Total à payer : 10.90 €
```

## Signature des fonctions

### Fichier `affichage.ts`

- `afficherPanier(panier: Produit[]): void`

### Fichier `panier.ts`

- `ajouterProduit(panierARemplir: Produit[], produitAAjoute: Produit)`
- `calculerTotal(panier: Produit[]): number`

### Fichier `produit.ts`

Ce fichier ne contient aucune fonction mais bien la définition du type `Produit`.

## Astuce

1. Lorsque vous exporter un type avec `export type ...` depuis un module, il vaut mieux l'importer avec la commande `import type {...} from ...`.
   Ceci aide TypeScript à mieux différencier les types des fonctions.
2. Utilisez uniquement des import nommés pour faciliter le travail des tests unitaires.
3. La commande `console.table(nom_tableau)` est une **méthode intégrée** de JavaScript (et donc de TypeScript) qui permet d'**afficher des tableaux ou des objets sous forme de tableau lisible** directement dans la console.
