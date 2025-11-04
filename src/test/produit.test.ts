// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import type { Produit } from "../produit";

describe("Produit", () => {
  test("devrait créer un Produit valide avec des valeurs standards", () => {
    const produit: Produit = { nom: "Pomme", prix_unitaire: 1.2, quantite: 4 };
    expect(produit.nom).toBe("Pomme");
    expect(produit.prix_unitaire).toBe(1.2);
    expect(produit.quantite).toBe(4);
  });
});
