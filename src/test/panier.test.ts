// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { ajouterProduit, calculerTotal } from "../panier";
import type { Produit } from "../produit";

describe("ajouterProduit", () => {
  test("devrait ajouter un produit au panier (cas standard)", () => {
    const panier: Produit[] = [];
    const produit: Produit = { nom: "Pomme", prix_unitaire: 1.2, quantite: 4 };
    ajouterProduit(panier, produit);
    expect(panier).toHaveLength(1);
    expect(panier[0]).toEqual(produit);
  });

  test("devrait ajouter plusieurs produits au panier (cas standard)", () => {
    const panier: Produit[] = [];
    ajouterProduit(panier, { nom: "A", prix_unitaire: 1, quantite: 1 });
    ajouterProduit(panier, { nom: "B", prix_unitaire: 2, quantite: 2 });
    expect(panier).toHaveLength(2);
  });

  test("ne devrait pas ajouter un produit avec quantité nulle (corner case)", () => {
    const panier: Produit[] = [];
    const produit: Produit = { nom: "Test", prix_unitaire: 10, quantite: 0 };
    ajouterProduit(panier, produit);
    expect(panier).toHaveLength(0);
  });

  test("ne devrait pas ajouter un produit avec quantité négative (corner case)", () => {
    const panier: Produit[] = [];
    const produit: Produit = { nom: "TestNegatif", prix_unitaire: 10, quantite: -3 };
    ajouterProduit(panier, produit);
    expect(panier).toHaveLength(0);
  });

  test("devrait additionner les quantités si un produit est ajouté plusieurs fois", () => {
    const panier: Produit[] = [];
    const produit: Produit = { nom: "Pomme", prix_unitaire: 1.2, quantite: 2 };
    ajouterProduit(panier, produit);
    ajouterProduit(panier, produit);
    // On s'attend à avoir un seul produit avec la quantité additionnée
    expect(panier).toHaveLength(1);
    expect(panier[0].quantite).toBe(4);
  });
});

describe("calculerTotal", () => {
  test("devrait calculer le total pour un seul produit (cas standard)", () => {
    const panier: Produit[] = [{ nom: "Pomme", prix_unitaire: 1.2, quantite: 4 }];
    expect(calculerTotal(panier)).toBe(4.8);
  });

  test("devrait calculer le total pour plusieurs produits (cas standard)", () => {
    const panier: Produit[] = [
      { nom: "Pomme", prix_unitaire: 1.2, quantite: 4 },
      { nom: "Pain", prix_unitaire: 2.5, quantite: 1 },
    ];
    expect(calculerTotal(panier)).toBe(7.3);
  });

  test("devrait retourner 0 pour un panier vide (corner case)", () => {
    const panier: Produit[] = [];
    expect(calculerTotal(panier)).toBe(0);
  });
});
