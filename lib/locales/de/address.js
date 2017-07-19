 function Address (faker) {

  //
  // TODO: change all these methods that accept a boolean to instead accept an options hash.
  //
  /**
   * Returns a random localized street address
   *
   * @method faker.address.streetAddress
   * @param {Boolean} useFullAddress
   */
  this.streetAddress = function (useFullAddress) {
      if (useFullAddress === undefined) { useFullAddress = false; }
      var address = "";
      switch (faker.random.number(2)) {
      case 0:
          address = faker.random.arrayElement(faker.locales[faker.locale].address.street_root) + " " + Helpers.replaceSymbolWithNumber("#");
          break;
      case 1:
          address = faker.random.arrayElement(faker.locales[faker.locale].address.street_root) + " " + Helpers.replaceSymbolWithNumber("##");
          break;
      }
      return useFullAddress ? (address + " " + faker.address.secondaryAddress()) : address;
  }
}

module.exports = Address;
