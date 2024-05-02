export class Professor {
  prof_dni?: string;
  prof_nom?: string;
  prof_cognom_1?: string;
  prof_cognom_2?: string;
  prof_adreca?: string;
  prof_codi_postal?: string;
  prof_poblacio?: string;
  prof_comarca?: string;
  prof_telefon?: string;
  prof_data_naixement?: Date;
  prof_casat?: number;
  prof_e_mail?: string;
  prof_categoria?: string;
  prof_sou?: number;
  prof_dept_codi?: number;
  prof_data_entrada?: Date;
  constructor(
    prof_dni?: string,
    prof_nom?: string,
    prof_cognom_1?: string,
    prof_cognom_2?: string,
    prof_adreca?: string,
    prof_codi_postal?: string,
    prof_poblacio?: string,
    prof_comarca?: string,
    prof_telefon?: string,
    prof_data_naixement?: Date,
    prof_casat?: number,
    prof_e_mail?: string,
    prof_categoria?: string,
    prof_sou?: number,
    prof_dept_codi?: number,
    prof_data_entrada?: Date,
  ) {
    this.prof_dni = prof_dni;
    this.prof_nom = prof_nom;
    this.prof_cognom_1 = prof_cognom_1;
    this.prof_cognom_2 = prof_cognom_2;
    this.prof_adreca = prof_adreca;
    this.prof_codi_postal = prof_codi_postal;
    this.prof_poblacio = prof_poblacio;
    this.prof_comarca = prof_comarca;
    this.prof_telefon = prof_telefon;
    this.prof_data_naixement = prof_data_naixement;
    this.prof_casat = prof_casat;
    this.prof_e_mail = prof_e_mail;
    this.prof_categoria = prof_categoria;
    this.prof_sou = prof_sou;
    this.prof_dept_codi = prof_dept_codi;
    this.prof_data_entrada = prof_data_entrada;
  }
}
