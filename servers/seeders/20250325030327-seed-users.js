"use strict";
const axios = require("axios");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      console.log("Fetching countries from Rest Countries API...");
      const response = await axios.get("https://restcountries.com/v3.1/all");

      const data = response.data.map((country) => ({
        name: country.name.common,
        capital: country.capital ? country.capital[0] : "No capital",
        region: country.region || "Unknown",
        population: country.population || 0,
        flagUrl: country.flags && country.flags.png ? country.flags.png : "",
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

      console.log(`Inserting ${data.length} countries into database...`);
      await queryInterface.bulkInsert("Countries", data);
      console.log("Countries seeding completed.");
    } catch (err) {
      console.error("Error while seeding countries:", err);
      throw err;
    }
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Countries", null, {});
    console.log("Countries deletion completed.");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
