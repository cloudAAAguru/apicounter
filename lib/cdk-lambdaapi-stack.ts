import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as _apigw from 'aws-cdk-lib/aws-apigateway';
import { HitCounter } from './hitcounter';
import { TableViewer } from 'cdk-dynamo-table-viewer';

export class CdkLambdaApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const lambdaapi = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    const apiWithCounter = new HitCounter(this, 'ApiHitCounter',{
      downstream: lambdaapi
    })
    new _apigw.LambdaRestApi(this, 'Endpoint', {
      handler: apiWithCounter.handler
    });

    new TableViewer(this, 'ViewHitCounter',{
      title: 'Hello Hits',
      table: apiWithCounter.table
    })
  }
}
