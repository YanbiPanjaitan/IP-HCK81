"use strict";
const fs = require("fs");
const path = require("path");
const {hashPassword} = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const usersDataPath = path.join(__dirname, "../data/users.json");
      const usersData = JSON.parse(fs.readFileSync(usersDataPath, "utf8"));

      const users = usersData.map((user) => {
        const hashedPassword = user.google_id
          ? null
          : hashPassword(user.password || "");

        return {
          username: user.username,
          email: user.email,
          password: hashedPassword,
          google_id: user.google_id || null,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      });

      await queryInterface.bulkInsert("Users", users, {});
      console.log(" User seed data successfully inserted.");
    } catch (error) {
      console.error(" Error seeding users:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete("Users", null, {});
      console.log("✅ User seed data successfully deleted.");
    } catch (error) {
      console.error("❌ Error deleting user seeds:", error);
      throw error;
    }
  },
};
