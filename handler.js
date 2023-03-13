exports.router = async (event, context, callback) => {
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ message: "hello world" }),
  };
};
