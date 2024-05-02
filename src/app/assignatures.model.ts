export class Assignatures {
  assig_codi?: string;
  assig_nom?: string;
  assig_credit?: number;
  assig_dni_professor_resp?: string;
  assig_semestre?: number;
  assig_curs?: number;
  assig_tipus?: string;
  assig_carrera?: string;

  constructor(
    assig_codi?: string,
    assig_nom?: string,
    assig_credit?: number,
    assig_dni_professor_resp?: string,
    assig_semestre?: number,
    assig_curs?: number,
    assig_tipus?: string,
    assig_carrera?: string
  ) {
    this.assig_codi = assig_codi;
    this.assig_nom = assig_nom;
    this.assig_credit = assig_credit;
    this.assig_dni_professor_resp = assig_dni_professor_resp;
    this.assig_curs = assig_curs;
    this.assig_tipus = assig_tipus;
    this.assig_carrera = assig_carrera;
  }
}
