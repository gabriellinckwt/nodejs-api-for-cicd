const dbConfig = {
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY as string,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY as string,
  AWS_REGION: process.env.AWS_REGION as string,
};

export default dbConfig;
