export class Commune {
  public nom: string;
  public population: number;
  public codesPostaux: string;
  public codeDepartement: string;
  constructor(aNom: string, aPop: number, aCodeP: string, aDpt: string) {
    this.nom = aNom;
    this.population = aPop;
    this.codesPostaux = aCodeP;
    this.codeDepartement = aDpt;
  }
}

export type CommuneServe = {
  nom: string;
  population: number;
  codesPostaux: string;
  codeDepartement: string;
};
