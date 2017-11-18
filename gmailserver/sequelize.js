let Sequelize = require('sequelize');

let sequelize = new Sequelize ({
                               dialect: 'postgres',
                               dialectOptions: {
                               ssl: true
                               },
                               host: `ec2-23-21-220-23.compute-1.amazonaws.com`,
                               database: `d9kfc0g85kd1q0`,
                               username: `rddgghwbqbufnr`,
                               Port: 5432,
                               password: `a1a65f57d296c76218ce8910de929fa834823cb5d54a9aa4062f7b1f15db33bf`,
                               dialect : 'postgres'
                               })

let forceObj = {force: false};

sequelize
.authenticate()
.then(() => {
      console.log('Connection to database has been established successfully.');
      })
.catch(err => {
       console.error('Unable to connect to the database:', err);
       });

let User = sequelize.define('user', {
  googleId : { type : Sequelize.STRING, defaultValue: '' }, 
  accessToken : { type : Sequelize.STRING, defualtValue: ''}, 
  expires_in : { type : Sequelize.INTEGER, defualtValue: ''}, 
  refreshToken : { type : Sequelize.STRING, defualtValue: ''},
  profileJSON : { type : Sequelize.JSON}
});

let Company = sequelize.define('company', {
  name: {type: Sequelize.STRING}
});

let Record = sequelize.define('record', {
  //company: { type: Sequelize.STRING, defaultValue: "Enter Company Name" },
  location: { type: Sequelize.STRING, defaultValue: "Enter Location" },
  contact: { type: Sequelize.STRING, defaultValue: "Enter Contact Name" },
  notes: { type: Sequelize.TEXT, defaultValue: "Notes Go Here" },
  coverLetterName: { type: Sequelize.STRING, defaultValue: '' }, 
  coverLetterURL: { type: Sequelize.STRING, defaultValue: ''},
  resumeName: { type: Sequelize.STRING, defaultValue: '' },
  resumeURL: { type: Sequelize.STRING, defaultValue: '' },
  tags: { type: Sequelize.STRING, default: 'default'},
  firstInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
  secondInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
  offer: { type: Sequelize.BOOLEAN, defaultValue: false },
  rejected: { type: Sequelize.BOOLEAN, defaultValue: false },
});

Record.belongsTo(User);
Record.belongsTo(Company);

let Artifacts = sequelize.define('artifact', {
  type: {type: Sequelize.STRING},
  artifact: {type: Sequelize.BLOB},
  artifactTitle: {type: Sequelize.STRING}
})

Artifacts.belongsTo(Record);

let Contact = sequelize.define('contact', {
  name: {type: Sequelize.STRING},
  emailAddress: {type: Sequelize.STRING},
});

let recordsContactMap = sequelize.define('recordscontact');

recordsContactMap.belongsTo(Contact);
recordsContactMap.belongsTo(Record);

exports.sequelize = sequelize;
exports.User = User;
exports.RowEntry = Record;
exports.Company = Company;
exports.Artifacts = Artifacts;
exports.recordsContactMap = recordsContactMap;