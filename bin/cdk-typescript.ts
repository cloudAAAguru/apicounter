#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkLambdaApiStack } from '../lib/cdk-lambdaapi-stack';

const app = new cdk.App();
new CdkLambdaApiStack(app, 'CdkLamdbaApiStack');
