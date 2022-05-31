# Welcome to API Counter CDK TypeScript project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkTypescriptStack`)
which contains an AWS API Gateway, Lambda funcation and a L3 counter using Lambda and DynamoDB table.  

rest API -> AWS API Gateway -> Lambda Function -> Counter Construct -> DynamodDB Table Viewer

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
