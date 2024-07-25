import dynamoose from "dynamoose";
import dbConfig from "../../config/database";

function connectToDB() {
  try {
    new dynamoose.aws.ddb.DynamoDB({
      credentials: {
        accessKeyId: dbConfig.AWS_ACCESS_KEY,
        secretAccessKey: dbConfig.AWS_SECRET_KEY,
      },
      region: dbConfig.AWS_REGION,
    });

    console.log("Conectado ao DynamoDB");
  } catch (error) {
    console.error("Erro ao conectar ao DynamoDB:", error);
  }
}

export default connectToDB;
