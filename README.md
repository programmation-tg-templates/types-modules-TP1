# Types et modules - TP1 - Gestion d'un panier d'achats

## Consignes

Vous allez créer une application qui gère un panier d’achats.

L’application devra :

- Enregistrer des produits
- Calculer le prix total du panier
- Afficher la liste des produits et le montant final

Un produit sera caractérisé par :

- Nom
- Prix unitaire
- Quantité

## Arborescence de fichiers

```
📁 src/
├── 📄 affichage.ts
├── 📄 main.ts
├── 📄 panier.ts
└── 📄 produit.ts
```

## Signature des fonctions

### Fichier `affichage.ts`

- `afficherPanier(panier: Produit[]): void`

### Fichier `panier.ts`

- `ajouterProduit(panierARemplir: Produit[], produitAAjoute: Produit)`
- `calculerTotal(panier: Produit[]): number`

## Astuce

1. Lorsque vous exporter un type avec `export type ...` depuis un module, il vaut mieux l'importer avec la commande `import type {...} from ...`.
Ceci aide TypeScript à mieux différencier les types des fonctions.
2. Utilisez uniquement des import nommés pour faciliter le travail des tests unitaires.
