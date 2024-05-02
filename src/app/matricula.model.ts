export class Matricula {
  matr_alum_dni?: string;
  matr_assig_codig?: string;
  matr_convocatoria?: number;
  matr_nota?: number;

  constructor(
    matr_alum_dni?: string,
    matr_assig_codig?: string,
    matr_convocatoria?: number,
    matr_nota?: number
  ) {
    this.matr_alum_dni = matr_alum_dni;
    this.matr_assig_codig = matr_assig_codig;
    this.matr_convocatoria = matr_convocatoria;
    this.matr_nota = matr_nota;
  }
}
