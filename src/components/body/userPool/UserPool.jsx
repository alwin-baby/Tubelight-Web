import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = 
{
    UserPoolId : "ap-south-1_220R9Jumx",
    ClientId : "2pu0fjsu2mivut4pst4468o22n ",

}

export default new CognitoUserPool(poolData);