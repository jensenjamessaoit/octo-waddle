const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "orangeoctopuspenguins";
const expiration = "2h";

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),

  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("invalid token sucka");
      return res.status(400).json({ message: "INVALID TOKEN" });
    }

    return req;
  },

  signToken: function ({ email, username, _id }) {
    const paylaod = { email, username, _id };
    return jwt.sign({ data: paylaod }, secret, { expiresIn: expiration });
  },
};
