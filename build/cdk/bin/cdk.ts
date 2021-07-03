#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import CdkStack from '../lib/cdk-stack';
import ApiRootStack from '../lib/ApiRootStack';

const app = new cdk.App();

/* Uncomment the next line if you know exactly what Account and Region you
 * want to deploy the stack to. */
// env: { account: '123456789012', region: 'us-east-1' },
/* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

// フロント関連のデプロイを行うStack
new CdkStack(app, CdkStack.name, { env });
// backEndApi関連をDeployするStack
new ApiRootStack(app, ApiRootStack.name, { env });
