var Owned = artifacts.require("Owned");
var HostelMangement = artifacts.require("LibraryMangement");
module.exports = function (deployer) {
      deployer.deploy(Owned);
      deployer.deploy(HostelMangement);
}