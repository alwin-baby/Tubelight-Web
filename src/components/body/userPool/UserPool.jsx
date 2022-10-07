import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_220R9Jumx",
    ClientId: "n74c7bulq7mu2o3t1da43qik5",
};

export default new CognitoUserPool(poolData);
