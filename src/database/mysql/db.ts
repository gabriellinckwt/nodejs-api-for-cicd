import dynamoose from "dynamoose";
import dbConfig from "../../config/database";

function connectToDB() {
  try {
    new dynamoose.aws.ddb.DynamoDB({
      credentials: {
        accessKeyId: dbConfig.AWS_ACCESS_KEY_ID,
        secretAccessKey: dbConfig.AWS_SECRET_ACCESS_KEY,
      },
      region: dbConfig.AWS_REGION,
    });

    console.log("Conectado ao DynamoDB");
  } catch (error) {
    console.error("Erro ao conectar ao DynamoDB:", error);
  }
}

export default connectToDB;
