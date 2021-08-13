module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "pbokhari@oneims.com",
      defaultReplyTo: "pbokhari@oneims.com",
    },
  },
});
