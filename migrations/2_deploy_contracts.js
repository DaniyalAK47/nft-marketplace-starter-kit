const KryptoBirdz = artifacts.require('KryptoBirdz');

module.exports = function(deployer) {
  deployer.deploy(KryptoBirdz);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};
