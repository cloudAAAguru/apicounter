# Welcome to API Counter CDK TypeScript project

This CDK app with an instance of a stack that contains an AWS API Gateway, Lambda function and a L3 counter using Lambda and DynamoDB table.  

rest API -> AWS API Gateway -> Lambda Function -> Counter Construct (Lambda, DynamoDB) -> DynamodDB Table Viewer

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
