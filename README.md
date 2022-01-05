# Chat bot using Amazon Lex




Create an Amazon Lex Bot (Console)
Create a Lambda Function (Console/Terminal)
~npm axios
~aws configure (create IAM user and give correct priviledges)
~sls deploy 	(handler.js) 	
Remmeber to add the below permissions specifically.
(AWSLambdaBasicExecutionRole and AWSXRayDaemonWriteAccess)

~aws iam create-role --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'

Add the Lambda Function as Code Hook (Console)

![image](https://user-images.githubusercontent.com/62815760/148304389-ecca85d6-0e6d-42c0-a8eb-ba9c8822bd8c.png)
