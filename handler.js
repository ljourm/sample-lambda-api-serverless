const api = require("lambda-api")();

api.get("/status", async (req, res) => {
  return { status: "ok" };
});

exports.router = async (event, context, callback) => {
  return await api.run(event, context);
};
