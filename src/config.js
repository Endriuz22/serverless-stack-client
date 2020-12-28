const config = {
  s3: {
    REGION: "eu-north-1",
    BUCKET: "notes-app-upload4",
  },
  apiGateway: {
    REGION: "eu-north-1",
    URL: "https://vw64w3due3.execute-api.eu-north-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-north-1",
    USER_POOL_ID: "eu-north-1_uWdbB0V1k",
    APP_CLIENT_ID: "6arqsst6nh028thmug4t74abhu",
    IDENTITY_POOL_ID: "eu-north-1:5aa6fdcb-e30f-42dd-8f23-dc518eaa6057",
  },
};
