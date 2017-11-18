const axios = require('axios')

exports.getContact = function(req, res) {
  const config = {
    headers : {'X-FullContact-APIKey': process.env.FULLCONTACTAPI}
  } 
  // console.log("EMAIL,", req.body.contactEmail);
  let contactEmail = req.body.contactEmail;
  axios.get(`https://api.fullcontact.com/v2/person.json?email=${contactEmail}`, config)
  .then((response) => {
    const socialProfiles = response.data.socialProfiles.map((profile) => {
      return {name: profile.typeName, url:profile.url}
    })
    res.send(socialProfiles)
  })
  .catch((err) => console.log('FULLCONTACT APU ERROR: :', err));
}
