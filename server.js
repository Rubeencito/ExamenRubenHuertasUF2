const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

const {Sequelize} = require("sequelize");
const {initModels} = require("./models/init-models");

app.use(cors(), express.json());

const port = 3000; // Use const for defining port

app.listen(port, () => {
  console.log(`Port::${port}`);
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Admin123',
  database: 'unirubenhuertas',
  port: 3306
});

connection.connect((err)=>{
  if (err) throw err;
  console.log("Conectado")
})

app.post('/modifCorreuHuertasGonzalez', async (req, res) => {
  await connection.execute('ALTER TABLE alumnes MODIFY COLUMN alumn_e_mail VARCHAR(30)', (err)=>{
    if (`columnType = 'varchar(30)'`){
      console.log("Ja esta modificat, pelacanyes!")
    }
  })
})

app.get('/llistaAssigHuertasGonzalez', (req, res) => {
  connection.query('SELECT assig_codi, assig_nom\n' +
    'FROM professor, departament, assignatures_professor, assignatures\n' +
    'WHERE assig_codi=assigprof_assig_codi\n' +
    'AND prof_dni=assigprof_prof_dni\n' +
    'AND prof_dept_codi=dept_codi\n' +
    'AND dept_nom=\'INFORMATICA I MATEMATICA APLICADA\'\n' +
    'GROUP BY assig_codi, assig_nom', (err, rows) => {
    if (err) throw err;
    console.log("info: ", rows);
    connection.end();
    res.json(rows);
  })
})

const db = new Sequelize("unirubenhuertas","root","Admin123",{
  host: "localhost",
  dialect: "mysql",
});

var initmodels = require("./models/init-models");
var models = initmodels(db);

app.put('/modifDeptHuertasGonzalez', async(req, res) => {
  try {
    const {codi, nom, ubicacio, telef, dni} = req.body;
    console.log(codi, nom, ubicacio, telef, dni);

    const deptExistente = await models.departament.findOne({ where: { DEPT_CODI: 5 } });
    if (!deptExistente) {
      return res.send("No puc, pelacanyes!");
    }
    await models.departament.update(
      {
        DEPT_NOM: nom,
        DEPT_UBICACIO: ubicacio,
        DEPT_TELEFON: telef,
        DEPT_PROF_DNI: dni
      },
      { where: { DEPT_CODI: codi } }
    );

    res.send(nom);
  } catch (error) {
    console.error("Error al modificar departamento:", error);
    res.status(500).send("Error al modificar departamento");
  }
});


app.get('/impartirAssigHuertasGonzalez', async (req, res) => {
  const prof = await models.professor.findOne({
    attributes: ['PROF_DNI'],
    where: {prof_nom: "JOSEP"}
  }).then((h) => {
    return h.PROF_DNI;
  })
  console.log(prof)
  const assig = await models.assignatures_professor.findAll({attributes: ['ASSIGPROF_ASSIG_CODI'], where:{ASSIGPROF_PROF_DNI: prof}})
  console.log(assig.dataValues)
  res.json(assig)
})




