#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { LambdaNodeCdkStack } from '../lib/aws-cdk-stack';

const app = new cdk.App();
new LambdaNodeCdkStack(app, 'LambdaNodeCdkStack');
