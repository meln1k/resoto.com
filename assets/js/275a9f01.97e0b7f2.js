"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[5333],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(t),p=a,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||s;return t?i.createElement(g,r(r({ref:n},m),{},{components:t})):i.createElement(g,r({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9567:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var i=t(7462),a=t(3366),s=(t(7294),t(3905)),r=["components"],o={},c="Access Permissions",l={unversionedId:"reference/access-permissions",id:"reference/access-permissions",title:"Access Permissions",description:"To use Resoto with all it's features - including cleanup - it requires wide permissions. It needs to collect all the resources, do tag validations and updates as well as deleting resources.",source:"@site/docs/reference/access-permissions.md",sourceDirName:"reference",slug:"/reference/access-permissions",permalink:"/docs/reference/access-permissions",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/access-permissions.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1642810816,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/docs/reference"},next:{title:"Command-Line Interface (CLI)",permalink:"/docs/reference/cli/"}},m=[{value:"AWS Permissions",id:"aws-permissions",children:[{value:"Discovery only",id:"discovery-only",children:[],level:3},{value:"Full capabilities",id:"full-capabilities",children:[],level:3}],level:2}],d={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"access-permissions"},"Access Permissions"),(0,s.kt)("p",null,"To use Resoto with all it's features - including cleanup - it requires wide permissions. It needs to collect all the resources, do tag validations and updates as well as deleting resources."),(0,s.kt)("p",null,"To use Resoto in a read-only capacity you can limit access to your cloud provider accordingly."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Resoto will ",(0,s.kt)("em",{parentName:"p"},"NOT")," delete resources marked for deletion by default, even with the neccessary permissions."))),(0,s.kt)("p",null,"Resoto will ",(0,s.kt)("strong",{parentName:"p"},"silently ignore")," collecting specific resources if it does not have the required permissions."),(0,s.kt)("h2",{id:"aws-permissions"},"AWS Permissions"),(0,s.kt)("p",null,"To enable the full capabilities of Resoto it needs a PowerUser like role and then deny the ones we don't want it to have."),(0,s.kt)("h3",{id:"discovery-only"},"Discovery only"),(0,s.kt)("p",null,"To use Resoto in a read-only capacity it needs the following IAM role permissions."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Read-only permissions"',title:'"Read-only','permissions"':!0},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "acm:Describe*",\n        "acm:Get*",\n        "acm:List*",\n        "apigateway:GET",\n        "application-autoscaling:Describe*",\n        "appstream:Describe*",\n        "appstream:Get*",\n        "appstream:List*",\n        "athena:List*",\n        "athena:Batch*",\n        "athena:Get*",\n        "autoscaling:Describe*",\n        "batch:List*",\n        "batch:Describe*",\n        "clouddirectory:List*",\n        "clouddirectory:BatchRead",\n        "clouddirectory:Get*",\n        "clouddirectory:LookupPolicy",\n        "cloudformation:Describe*",\n        "cloudformation:Get*",\n        "cloudformation:List*",\n        "cloudformation:Estimate*",\n        "cloudformation:Detect*",\n        "cloudformation:Validate*",\n        "cloudfront:Get*",\n        "cloudfront:List*",\n        "cloudhsm:List*",\n        "cloudhsm:Describe*",\n        "cloudhsm:Get*",\n        "cloudsearch:Describe*",\n        "cloudsearch:List*",\n        "cloudtrail:LookupEvents",\n        "cloudtrail:ListPublicKeys",\n        "cloudtrail:ListTags",\n        "cloudtrail:GetTrailStatus",\n        "cloudtrail:GetEventSelectors",\n        "cloudtrail:DescribeTrails",\n        "cloudwatch:Describe*",\n        "cloudwatch:Get*",\n        "cloudwatch:List*",\n        "codebuild:BatchGet*",\n        "codebuild:List*",\n        "codecommit:BatchGet*",\n        "codecommit:Get*",\n        "codecommit:GitPull",\n        "codecommit:List*",\n        "codedeploy:BatchGet*",\n        "codedeploy:Get*",\n        "codedeploy:List*",\n        "codepipeline:List*",\n        "codepipeline:Get*",\n        "codestar:List*",\n        "codestar:Describe*",\n        "codestar:Get*",\n        "cognito-identity:List*",\n        "cognito-identity:Describe*",\n        "cognito-identity:Lookup*",\n        "cognito-sync:List*",\n        "cognito-sync:Describe*",\n        "cognito-sync:Get*",\n        "cognito-sync:QueryRecords",\n        "cognito-idp:AdminList*",\n        "cognito-idp:List*",\n        "cognito-idp:Describe*",\n        "cognito-idp:Get*",\n        "config:Deliver*",\n        "config:Describe*",\n        "config:Get*",\n        "config:List*",\n        "connect:List*",\n        "connect:Describe*",\n        "connect:Get*",\n        "compute-optimizer:Get*",\n        "datapipeline:Describe*",\n        "datapipeline:EvaluateExpression",\n        "datapipeline:Get*",\n        "datapipeline:List*",\n        "datapipeline:QueryObjects",\n        "datapipeline:Validate*",\n        "datasync:Describe*",\n        "datasync:List*",\n        "directconnect:Describe*",\n        "directconnect:Confirm*",\n        "devicefarm:List*",\n        "devicefarm:Get*",\n        "discovery:Describe*",\n        "discovery:List*",\n        "discovery:Get*",\n        "dms:Describe*",\n        "dms:List*",\n        "dms:Test*",\n        "ds:Check*",\n        "ds:Describe*",\n        "ds:Get*",\n        "ds:List*",\n        "ds:Verify*",\n        "dynamodb:BatchGet*",\n        "dynamodb:Describe*",\n        "dynamodb:Get*",\n        "dynamodb:List*",\n        "dynamodb:Query",\n        "dynamodb:Scan",\n        "ec2:Describe*",\n        "ec2:Get*",\n        "ec2messages:Get*",\n        "ecr:BatchCheck*",\n        "ecr:BatchGet*",\n        "ecr:Describe*",\n        "ecr:Get*",\n        "ecr:List*",\n        "ecs:Describe*",\n        "ecs:List*",\n        "ecr:GetAuthorizationToken",\n        "ecr:BatchCheckLayerAvailability",\n        "ecr:GetDownloadUrlForLayer",\n        "ecr:GetRepositoryPolicy",\n        "ecr:DescribeRepositories",\n        "ecr:ListImages",\n        "ecr:DescribeImages",\n        "ecr:BatchGetImage",\n        "eks:List*",\n        "eks:Describe*",\n        "elasticache:Describe*",\n        "elasticache:List*",\n        "elasticbeanstalk:Check*",\n        "elasticbeanstalk:Describe*",\n        "elasticbeanstalk:List*",\n        "elasticbeanstalk:Request*",\n        "elasticbeanstalk:Retrieve*",\n        "elasticbeanstalk:Validate*",\n        "elasticfilesystem:Describe*",\n        "elasticloadbalancing:Describe*",\n        "elasticmapreduce:Describe*",\n        "elasticmapreduce:List*",\n        "elasticmapreduce:View*",\n        "elastictranscoder:List*",\n        "elastictranscoder:Read*",\n        "es:Describe*",\n        "es:List*",\n        "es:ESHttpGet",\n        "es:ESHttpHead",\n        "events:Describe*",\n        "events:List*",\n        "events:Test*",\n        "firehose:Describe*",\n        "firehose:List*",\n        "gamelift:List*",\n        "gamelift:Get*",\n        "gamelift:Describe*",\n        "gamelift:RequestUploadCredentials",\n        "gamelift:ResolveAlias",\n        "gamelift:Search*",\n        "glacier:List*",\n        "glacier:Describe*",\n        "glacier:Get*",\n        "globalaccelerator:List*",\n        "globalaccelerator:Describe*",\n        "health:Describe*",\n        "iam:Generate*",\n        "iam:Get*",\n        "iam:List*",\n        "iam:Simulate*",\n        "importexport:Get*",\n        "importexport:List*",\n        "inspector:Describe*",\n        "inspector:Get*",\n        "inspector:List*",\n        "inspector:Preview*",\n        "iot:Describe*",\n        "iot:Get*",\n        "iot:List*",\n        "kinesisanalytics:Describe*",\n        "kinesisanalytics:Discover*",\n        "kinesisanalytics:List*",\n        "kinesis:Describe*",\n        "kinesis:Get*",\n        "kinesis:List*",\n        "kms:Describe*",\n        "kms:Get*",\n        "kms:List*",\n        "lambda:List*",\n        "lambda:Get*",\n        "lex:Get*",\n        "lightsail:Get*",\n        "lightsail:Is*",\n        "lightsail:Download*",\n        "logs:Describe*",\n        "logs:Get*",\n        "logs:FilterLogEvents",\n        "logs:ListTagsLogGroup",\n        "logs:TestMetricFilter",\n        "machinelearning:Describe*",\n        "machinelearning:Get*",\n        "mobileanalytics:Get*",\n        "mobilehub:Get*",\n        "mobilehub:List*",\n        "mobilehub:Validate*",\n        "mobilehub:Verify*",\n        "mobiletargeting:Get*",\n        "opsworks:Describe*",\n        "opsworks:Get*",\n        "opsworks-cm:Describe*",\n        "organizations:Describe*",\n        "organizations:List*",\n        "polly:Describe*",\n        "polly:Get*",\n        "polly:List*",\n        "polly:SynthesizeSpeech",\n        "pricing:Describe*",\n        "pricing:Get*",\n        "rekognition:CompareFaces",\n        "rekognition:Detect*",\n        "rekognition:List*",\n        "rekognition:Search*",\n        "rds:Describe*",\n        "rds:List*",\n        "rds:Download*",\n        "redshift:Describe*",\n        "redshift:View*",\n        "redshift:Get*",\n        "resource-explorer:List*",\n        "resource-groups:Get*",\n        "resource-groups:List*",\n        "resource-groups:Search*",\n        "route53:Get*",\n        "route53:List*",\n        "route53:Test*",\n        "route53domains:Check*",\n        "route53domains:Get*",\n        "route53domains:List*",\n        "route53domains:View*",\n        "s3:Get*",\n        "s3:List*",\n        "s3:Head*",\n        "sagemaker:DescribeTrainingJob",\n        "sagemaker:ListTags",\n        "sagemaker:DescribeNotebookInstance",\n        "sagemaker:DescribeModel",\n        "sagemaker:ListTrainingJobs",\n        "sagemaker:ListEndpointConfigs",\n        "sagemaker:DescribeEndpointConfig",\n        "sagemaker:CreatePresignedNotebookInstanceUrl",\n        "sagemaker:ListModels",\n        "sagemaker:DescribeEndpoint",\n        "sagemaker:ListNotebookInstances",\n        "sagemaker:ListEndpoints",\n        "sagemaker:InvokeEndpoint",\n        "sdb:Get*",\n        "sdb:List*",\n        "sdb:Select*",\n        "secretsmanager:List*",\n        "secretsmanager:Describe*",\n        "servicecatalog:List*",\n        "servicecatalog:Scan*",\n        "servicecatalog:Search*",\n        "servicecatalog:Describe*",\n        "servicequotas:Get*",\n        "servicequotas:List*",\n        "ses:Get*",\n        "ses:List*",\n        "shield:Describe*",\n        "shield:List*",\n        "sns:Get*",\n        "sns:List*",\n        "sns:Check*",\n        "sqs:Get*",\n        "sqs:List*",\n        "sqs:Receive*",\n        "ssm:Describe*",\n        "ssm:Get*",\n        "ssm:List*",\n        "states:List*",\n        "states:Describe*",\n        "states:GetExecutionHistory",\n        "storagegateway:Describe*",\n        "storagegateway:List*",\n        "sts:Get*",\n        "support:*",\n        "swf:Count*",\n        "swf:Describe*",\n        "swf:Get*",\n        "swf:List*",\n        "tag:Describe*",\n        "tag:Get*",\n        "trustedadvisor:Describe*",\n        "waf:Get*",\n        "waf:List*",\n        "waf-regional:List*",\n        "waf-regional:Get*",\n        "workdocs:Describe*",\n        "workdocs:Get*",\n        "workdocs:CheckAlias",\n        "workmail:Describe*",\n        "workmail:Get*",\n        "workmail:List*",\n        "workmail:Search*",\n        "workspaces:Describe*",\n        "xray:BatchGet*",\n        "xray:Get*"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,s.kt)("h3",{id:"full-capabilities"},"Full capabilities"),(0,s.kt)("p",null,"For production use - where Resoto also clean-up and validate tags - the needed permission role is a PowerUser that is locked down to not be able to create any resources or modify IAM settings."),(0,s.kt)("p",null,"The following three policies are needed for Resoto to run with full capabilities."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Resoto allow"',title:'"Resoto','allow"':!0},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "ResotoAllow",\n      "Effect": "Allow",\n      "Action": "*",\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Resoto deny"',title:'"Resoto','deny"':!0},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "ResotoDeny",\n      "Effect": "Deny",\n      "Action": [\n        "support:Create*",\n        "storagegateway:Create*",\n        "states:Create*",\n        "ssm:Create*",\n        "sqs:Create*",\n        "sns:Create*",\n        "ses:Create*",\n        "servicequotas:Request*",\n        "servicequotas:Put*",\n        "servicequotas:Disassociate*",\n        "servicequotas:Delete*",\n        "servicequotas:Associate*",\n        "servicecatalog:Create*",\n        "sagemaker:Create*",\n        "s3:Create*",\n        "route53domains:UpdateDomainNameservers",\n        "route53domains:UpdateDomainContactPrivacy",\n        "route53domains:UpdateDomainContact",\n        "route53domains:TransferDomain",\n        "route53domains:RetrieveDomainAuthCode",\n        "route53domains:ResendContactReachabilityEmail",\n        "route53domains:RenewDomain",\n        "route53domains:RegisterDomain",\n        "route53domains:EnableDomainTransferLock",\n        "route53domains:EnableDomainAutoRenew",\n        "route53:Create*",\n        "redshift:Create*",\n        "rds:Create*",\n        "logs:Create*",\n        "lambda:Create*",\n        "kms:Create*",\n        "kinesis:Create*",\n        "iotsitewise:Create*",\n        "iotevents:Create*",\n        "iotanalytics:Create*",\n        "iot:Create*",\n        "iot1click:Create*",\n        "importexport:Create*",\n        "glue:Create*",\n        "globalaccelerator:Create*",\n        "glacier:Create*",\n        "events:TagResource",\n        "events:PutTargets",\n        "events:PutRule",\n        "events:PutPermission",\n        "events:PutEvents",\n        "events:EnableRule",\n        "es:Create*",\n        "elasticmapreduce:Create*",\n        "elasticloadbalancing:Create*",\n        "elasticfilesystem:Create*",\n        "elasticache:Create*",\n        "eks:Create*",\n        "ecr:Create*",\n        "ec2messages:SendReply",\n        "ec2messages:FailMessage",\n        "ec2messages:AcknowledgeMessage",\n        "ec2:CreateVpnGateway",\n        "ec2:CreateVpnConnectionRoute",\n        "ec2:CreateVpnConnection",\n        "ec2:CreateVpcPeeringConnection",\n        "ec2:CreateVpcEndpoint",\n        "ec2:CreateVpc",\n        "ec2:CreateVolume",\n        "ec2:CreateSubnet",\n        "ec2:CreateSpotDatafeedSubscription",\n        "ec2:CreateSnapshot",\n        "ec2:CreateSecurityGroup",\n        "ec2:CreateRouteTable",\n        "ec2:CreateRoute",\n        "ec2:CreateReservedInstancesListing",\n        "ec2:CreatePlacementGroup",\n        "ec2:CreateNetworkInterface",\n        "ec2:CreateNetworkAclEntry",\n        "ec2:CreateNetworkAcl",\n        "ec2:CreateNatGateway",\n        "ec2:CreateKeyPair",\n        "ec2:CreateInternetGateway",\n        "ec2:CreateInstanceExportTask",\n        "ec2:CreateImage",\n        "ec2:CreateFlowLogs",\n        "ec2:CreateDhcpOptions",\n        "ec2:CreateCustomerGateway",\n        "dynamodb:Create*",\n        "ds:Create*",\n        "cognito-idp:Create*",\n        "cloudwatch:SetAlarmState",\n        "cloudwatch:PutMetricData",\n        "cloudwatch:PutMetricAlarm",\n        "cloudwatch:PutDashboard",\n        "cloudwatch:EnableAlarmActions",\n        "cloudtrail:Create*",\n        "cloudsearch:Create*",\n        "cloudfront:Create*",\n        "cloudformation:Create*",\n        "budgets:ViewBudget",\n        "batch:Create*",\n        "aws-portal:Modify*",\n        "aws-marketplace-management:uploadFiles",\n        "autoscaling:Create*",\n        "athena:Create*",\n        "application-autoscaling:RegisterScalableTarget",\n        "application-autoscaling:PutScheduledAction",\n        "application-autoscaling:PutScalingPolicy",\n        "apigateway:UpdateRestApiPolicy",\n        "apigateway:PUT",\n        "apigateway:POST",\n        "apigateway:PATCH",\n        "acm:UpdateCertificateOptions",\n        "acm:ResendValidationEmail",\n        "acm:RequestCertificate",\n        "acm:RenewCertificate",\n        "acm:ImportCertificate",\n        "acm:AddTagsToCertificate"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Resoto deny IAM"',title:'"Resoto',deny:!0,'IAM"':!0},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "ResotoDenyIAM",\n      "Effect": "Deny",\n      "Action": [\n        "iam:UploadSigningCertificate",\n        "iam:UploadServerCertificate",\n        "iam:UploadSSHPublicKey",\n        "iam:UpdateUser",\n        "iam:UpdateSigningCertificate",\n        "iam:UpdateServiceSpecificCredential",\n        "iam:UpdateServerCertificate",\n        "iam:UpdateSSHPublicKey",\n        "iam:UpdateSAMLProvider",\n        "iam:UpdateRoleDescription",\n        "iam:UpdateOpenIDConnectProviderThumbprint",\n        "iam:UpdateLoginProfile",\n        "iam:UpdateGroup",\n        "iam:UpdateAssumeRolePolicy",\n        "iam:UpdateAccountPasswordPolicy",\n        "iam:UpdateAccessKey",\n        "iam:SimulatePrincipalPolicy",\n        "iam:SimulateCustomPolicy",\n        "iam:SetSecurityTokenServicePreferences",\n        "iam:SetDefaultPolicyVersion",\n        "iam:ResyncMFADevice",\n        "iam:ResetServiceSpecificCredential",\n        "iam:RemoveUserFromGroup",\n        "iam:RemoveClientIDFromOpenIDConnectProvider",\n        "iam:PutUserPolicy",\n        "iam:PutUserPermissionsBoundary",\n        "iam:PutRolePolicy",\n        "iam:PutRolePermissionsBoundary",\n        "iam:PutGroupPolicy",\n        "iam:PassRole",\n        "iam:GenerateServiceLastAccessedDetails",\n        "iam:GenerateCredentialReport",\n        "iam:EnableMFADevice",\n        "iam:DetachUserPolicy",\n        "iam:DetachGroupPolicy",\n        "iam:DeleteVirtualMFADevice",\n        "iam:DeleteUserPolicy",\n        "iam:DeleteUserPermissionsBoundary",\n        "iam:DeleteUser",\n        "iam:DeleteSigningCertificate",\n        "iam:DeleteServiceSpecificCredential",\n        "iam:DeleteServiceLinkedRole",\n        "iam:DeleteServerCertificate",\n        "iam:DeleteSSHPublicKey",\n        "iam:DeleteSAMLProvider",\n        "iam:DeleteOpenIDConnectProvider",\n        "iam:DeleteLoginProfile",\n        "iam:DeleteGroupPolicy",\n        "iam:DeleteGroup",\n        "iam:DeleteAccountPasswordPolicy",\n        "iam:DeleteAccountAlias",\n        "iam:DeleteAccessKey",\n        "iam:DeactivateMFADevice",\n        "iam:CreateVirtualMFADevice",\n        "iam:CreateUser",\n        "iam:CreateServiceSpecificCredential",\n        "iam:CreateServiceLinkedRole",\n        "iam:CreateSAMLProvider",\n        "iam:CreateRole",\n        "iam:CreatePolicyVersion",\n        "iam:CreatePolicy",\n        "iam:CreateOpenIDConnectProvider",\n        "iam:CreateLoginProfile",\n        "iam:CreateInstanceProfile",\n        "iam:CreateGroup",\n        "iam:CreateAccountAlias",\n        "iam:CreateAccessKey",\n        "iam:ChangePassword",\n        "iam:AttachUserPolicy",\n        "iam:AttachRolePolicy",\n        "iam:AttachGroupPolicy",\n        "iam:AddUserToGroup",\n        "iam:AddRoleToInstanceProfile",\n        "iam:AddClientIDToOpenIDConnectProvider"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Sid": "ResotoDenyIAMPredefinedRoles",\n      "Effect": "Deny",\n      "Action": [\n        "iam:UpdateRole",\n        "iam:UntagRole",\n        "iam:TagRole",\n        "iam:RemoveRoleFromInstanceProfile",\n        "iam:DetachRolePolicy",\n        "iam:DeleteRolePolicy",\n        "iam:DeleteRolePermissionsBoundary",\n        "iam:DeleteRole",\n        "iam:DeleteInstanceProfile"\n      ],\n      "Resource": [\n        "arn:aws:iam::*:role/aws-service-role/organizations.amazonaws.com/AWSServiceRoleForOrganizations",\n        "arn:aws:iam::*:role/TeamCity/TeamCity-PowerUser",\n        "arn:aws:iam::*:role/TeamCity/TeamCity-Agent",\n        "arn:aws:iam::*:role/OrganizationAccountAccessRole",\n        "arn:aws:iam::*:role/Mesosphere-ReadOnly",\n        "arn:aws:iam::*:role/Mesosphere-PowerUser",\n        "arn:aws:iam::*:role/Mesosphere-OneloginAccess",\n        "arn:aws:iam::*:role/Mesosphere-Admin",\n        "arn:aws:iam::*:role/Jenkins/Jenkins-S3-DOCS-Staging",\n        "arn:aws:iam::*:role/Jenkins/Jenkins-S3-DOCS-Production",\n        "arn:aws:iam::*:role/Jenkins/Jenkins-S3-DOCS-Development",\n        "arn:aws:iam::*:role/Jenkins/Jenkins-PowerUser"\n      ]\n    },\n    {\n      "Sid": "ResotoDenyIAMPredefinedPolicies",\n      "Effect": "Deny",\n      "Action": [\n        "iam:SetDefaultPolicyVersion",\n        "iam:DeletePolicyVersion",\n        "iam:DeletePolicy"\n      ],\n      "Resource": [\n        "arn:aws:iam::*:policy/OneLoginAccess",\n        "arn:aws:iam::*:policy/MesosphereReadOnlyPolicy",\n        "arn:aws:iam::*:policy/MesospherePowerUserPolicy"\n      ]\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);