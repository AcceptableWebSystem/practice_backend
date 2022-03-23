#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
// import { PracticeBackendStack } from '../lib/practice_backend-stack';
import { WorkshopPipelineStack } from "../lib/pipeline-stack";

const app = new cdk.App();
new WorkshopPipelineStack(app, "PracticeBackendStack");
