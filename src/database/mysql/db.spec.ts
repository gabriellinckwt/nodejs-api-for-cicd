import AWS from "aws-sdk";

async function checkTableExists(tableName: string): Promise<boolean> {
  const dynamoDb = new AWS.DynamoDB();
  try {
    await dynamoDb.describeTable({ TableName: tableName }).promise();
    return true;
  } catch (error: any) {
    if (error.code === "ResourceNotFoundException") {
      return false;
    }
    throw error;
  }
}

// Mock do AWS SDK
const mockDescribeTable = jest.fn();
jest.mock("aws-sdk", () => {
  return {
    DynamoDB: jest.fn(() => ({
      describeTable: mockDescribeTable,
    })),
  };
});

describe("checkTableExists", () => {
  beforeEach(() => {
    mockDescribeTable.mockClear();
  });

  it("should return true if the table exists", async () => {
    mockDescribeTable.mockImplementation(() => ({
      promise: () => Promise.resolve(),
    }));

    const result = await checkTableExists("existing-table");
    expect(result).toBe(true);
    expect(mockDescribeTable).toHaveBeenCalledWith({
      TableName: "existing-table",
    });
  });

  it("should return false if the table does not exist", async () => {
    mockDescribeTable.mockImplementation(() => ({
      promise: () => Promise.reject({ code: "ResourceNotFoundException" }),
    }));

    const result = await checkTableExists("non-existing-table");
    expect(result).toBe(false);
    expect(mockDescribeTable).toHaveBeenCalledWith({
      TableName: "non-existing-table",
    });
  });

  it("should throw an error if describeTable fails with an unexpected error", async () => {
    const error = new Error("Unexpected error");
    mockDescribeTable.mockImplementation(() => ({
      promise: () => Promise.reject(error),
    }));

    await expect(checkTableExists("table")).rejects.toThrow(error);
    expect(mockDescribeTable).toHaveBeenCalledWith({ TableName: "table" });
  });
});
