// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { afficherPanier } from "../affichage";
import type { Produit } from "../produit";

describe("afficherPanier", () => {
  let consoleLogSpy: jest.SpyInstance;
  let consoleTableSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    consoleTableSpy = jest.spyOn(console, "table").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleTableSpy.mockRestore();
  });

  test("devrait afficher le panier avec des produits (cas standard)", () => {
    const panier: Produit[] = [
      { nom: "Pomme", prix_unitaire: 1.2, quantite: 4 },
      { nom: "Pain", prix_unitaire: 2.5, quantite: 1 },
    ];
    afficherPanier(panier);
    expect(consoleLogSpy).toHaveBeenCalledWith("\n Contenu du panier :");
    expect(consoleTableSpy).toHaveBeenCalledWith(panier);
    expect(consoleLogSpy).toHaveBeenCalledWith("Total à payer : 7.30 €\n");
  });

  test("devrait afficher un panier vide (corner case)", () => {
    const panier: Produit[] = [];
    afficherPanier(panier);
    expect(consoleLogSpy).toHaveBeenCalledWith("\n Contenu du panier :");
    expect(consoleTableSpy).toHaveBeenCalledWith(panier);
    expect(consoleLogSpy).toHaveBeenCalledWith("Total à payer : 0.00 €\n");
  });

  test("devrait afficher un panier avec un produit à quantité nulle (corner case)", () => {
    const panier: Produit[] = [{ nom: "Test", prix_unitaire: 10, quantite: 0 }];
    afficherPanier(panier);
    expect(consoleLogSpy).toHaveBeenCalledWith("\n Contenu du panier :");
    expect(consoleTableSpy).toHaveBeenCalledWith(panier);
    expect(consoleLogSpy).toHaveBeenCalledWith("Total à payer : 0.00 €\n");
  });
});
