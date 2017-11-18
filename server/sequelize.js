let Sequelize = require('sequelize');

let sequelize = new Sequelize ({
                               dialect: 'postgres',
                               dialectOptions: {
                               ssl: true
                               },
                               host: `ec2-23-21-220-23.compute-1.amazonaws.com`,
                               database: `d9kfc0g85kd1q0`,
                               username: `rddgghwbqbufnr`,
                               logging: true,
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
  profileJSON : { type : Sequelize.JSON},
  emailAddress : { type: Sequelize.STRING}
});

User.sync(forceObj).then(() => {
  User.bulkCreate([
  {
    googleId : 123, 
    accessToken : 'ser', 
    expires_in : 123333, 
    refreshToken : '123123',
    profileJSON : '12321213213231'
  }
  ]);
});

let Company = sequelize.define('company', {
  name: {type: Sequelize.STRING}
});

Company.sync(forceObj).then(() => {
  Company.bulkCreate([{
    name: 'Bitcoin'
  },{
    name: 'Google'
  }])
})


let Contact = sequelize.define('contact', {
  name: {type: Sequelize.STRING},
  emailAddress: {type: Sequelize.STRING},
});

Contact.sync(forceObj).then(() => {
  Contact.bulkCreate([{
    name: 'Tommy York (Corporate)',
    emailAddress: 'tommy.york@gmail.com'
  }])
})
.catch((err) => console.log(err));

let Record = sequelize.define('record', {
  googleId: {type: Sequelize.STRING},
  // companyId is already set up. 

  location: { type: Sequelize.STRING, defaultValue: "Enter Location" },
  notes: { type: Sequelize.TEXT, defaultValue: "Notes Go Here" },
  tags: { type: Sequelize.STRING, default: 'default'},
  jobApplicationURL: { type: Sequelize.STRING, default: 'www.tommy-york.com'},

  firstInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
  secondInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
  offer: { type: Sequelize.BOOLEAN, defaultValue: false },
  rejected: { type: Sequelize.BOOLEAN, defaultValue: false },
  
  // this is for the document management. 
  coverLetterName: { type: Sequelize.STRING, defaultValue: 'none yet!' }, 
  coverLetterURL: { type: Sequelize.STRING, defaultValue: ''},
  resumeName: { type: Sequelize.STRING, defaultValue: 'none yet!' },
  resumeURL: { type: Sequelize.STRING, defaultValue: '' },

  // This is for the fullContact
  contactValue: { type: Sequelize.STRING, defaultValue: '' },
  contactEmailAddress: { type: Sequelize.STRING, defaultValue: '' },
  socialProfiles: { type: Sequelize.ARRAY(Sequelize.JSON), defaultValue: [] },

});

Record.belongsTo(User);
Record.belongsTo(Company);
Record.belongsTo(Contact)

// let Contact = sequelize.define('contact', {
//   name: {type: Sequelize.STRING},
//   emailAddress: {type: Sequelize.STRING},
// });

// Contact.sync(forceObj).then(() => {
//   Contact.bulkCreate([{
//     name: 'Tommy York (Corporate)',
//     emailAddress: 'tommy.york@gmail.com'
//   }])
// })
// .catch((err) => console.log(err));

Record.sync(forceObj).then(() => {
  Record.bulkCreate([{
    googleId : Math.random() * 10000000000000,
    location: 'Hack Reactor NY', //{ type: Sequelize.STRING, defaultValue: "Enter Location" },
    notes: 'loud chairs',  //{ type: Sequelize.TEXT, defaultValue: "Notes Go Here" },
    tags: 'seamus tommy etc',//{ type: Sequelize.STRING, default: 'default'},
    jobApplicationURL: 'www.tommy-york.com',//{ type: Sequelize.STRING, default: 'www.tommy-york.com'},

    firstInterview: false, // { type: Sequelize.BOOLEAN, defaultValue: false },
    secondInterview: false, // { type: Sequelize.BOOLEAN, defaultValue: false },
    offer: false, //{ type: Sequelize.BOOLEAN, defaultValue: false },
    rejected: true, //{ type: Sequelize.BOOLEAN, defaultValue: false },
    
    // this is for the document management. 
    coverLetterName: 'CL 1', //{ type: Sequelize.STRING, defaultValue: 'none yet!' }, 
    coverLetterURL: 'https://drive.google.com/drive/folders/0B1tVIam7_Q5xflVIa2IwOGJyQkpQY1gzWHU5YkFHdjM3SF9OVEVHdUxyNnpxZkNjejNiZWs', //{ type: Sequelize.STRING, defaultValue: ''},
    resumeName: 'Res 1', //{ type: Sequelize.STRING, defaultValue: 'none yet!' },
    resumeURL: 'https://drive.google.com/drive/folders/0B1tVIam7_Q5xflVIa2IwOGJyQkpQY1gzWHU5YkFHdjM3SF9OVEVHdUxyNnpxZkNjejNiZWs', //{ type: Sequelize.STRING, defaultValue: '' },

    // This is for the fullContact
    contactValue: 'Seamus Martin', //{ type: Sequelize.STRING, defaultValue: '' },
    contactEmailAddress: 'tommy.york@gmail.com',// { type: Sequelize.STRING, defaultValue: '' },
    socialProfiles: [{'facebook' : 'www.facebook.com'}], // { type: Sequelize.STRING, defaultValue: '' },
  }]);
});

let Artifacts = sequelize.define('artifact', {
  type: {type: Sequelize.STRING},
  artifact: {type: Sequelize.BLOB},
  artifactTitle: {type: Sequelize.STRING}
})

Artifacts.belongsTo(Record);

Artifacts.sync(forceObj).then(() => {
  Artifacts.bulkCreate([{
    type: 'Empty',
    artifact: '',
    artifactTitle: 'Empty artifact.',
  }])
})


// Record.hasMany(Contact, {as: 'Record'});
// Contact.hasOne(Record);



// let recordsContactMap = sequelize.define('recordscontact');

// recordsContactMap.belongsTo(Contact);
// recordsContactMap.belongsTo(Record);

// recordsContactMap.sync(forceObj).then(() => {
//   recordsContactMap.bulkCreate([{
//     contactId: 1,
//     recordId: 1
//   }])
// })

exports.sequelize = sequelize;
exports.User = User;
exports.RowEntry = Record;
exports.Company = Company;
exports.Artifacts = Artifacts;
// exports.recordsContactMap = recordsContactMap;