#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PracticeBackendStack } from '../lib/practice_backend-stack';

const app = new cdk.App();
new PracticeBackendStack(app, 'PracticeBackendStack');
