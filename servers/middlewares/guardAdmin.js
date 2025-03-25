async function guardAdmin(req, res, next) {
  try {
    if (req.user.role !== "Admin") {
      throw {
        name: "Forbidden",
        message: "You're not allowed to do this task",
      };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {guardAdmin};
