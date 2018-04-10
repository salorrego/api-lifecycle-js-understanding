const util = require('util');


function searchPackages(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // console.log(req.query.package);
  const packagesToGet = req.query.package || 'all';
  let packages = [];
  let package = {
    id: packagesToGet,
    name: "",
    price: 0,
    services: [
      {id: "0", name: "", price: 0}
    ]
  };

  //TODO: add logic to get packages from DB
  if(packagesToGet === "all"){
    package.id = "123";
    package.name = "testPackage";
    package.price = 100;
  }
  packages.push(package);
  
  // this sends back a JSON response
  res.json(packages);
}

module.exports = {
  searchPackages: searchPackages
};