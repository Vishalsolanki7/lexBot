# Chat bot using Amazon Lex

1. Create an Amazon Lex Bot (Console)

2. Create a Lambda Function (Console/Terminal)

a. ~npm axios

b. ~aws configure (create IAM user and give correct priviledges)


c. ~sls deploy 	(handler.js)

*Remmeber to add the below permissions specifically (AWSLambdaBasicExecutionRole and AWSXRayDaemonWriteAccess).

~aws iam create-role --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'

3. Add the Lambda Function as Code Hook (Console)

