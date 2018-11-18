
# AWS

## AWS

[https://docs.aws.amazon.com/cli/latest/reference/](https://docs.aws.amazon.com/cli/latest/reference/)

    aws [options] <command> <subcommand> [parameters]

### S3 

## Setup New Website

Here is what to do when making new static website

1.) Create web app locally

    create-react-app droneblog
    cd droneblog
    npm start

2.) Build when ready to deploy new version

    npm run build

3.) Create new bucket

    aws s3 mb s3://droneblog

4.) Setup bucket as website

    aws s3 website s3://droneblog/ --index-document index.html --error-document error.html

    Write *policy.json* file with content that looks like this:

        {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::droneblog/*"
            }
        ]
        }

    Update bucket policy like so:

    cd ..
    aws s3api put-bucket-policy --bucket droneblog --policy file://policy.json

5.) Sync local files to S3 bucket

    cd build
    aws s3 sync . s3://droneblog

    /* List files in bucket*/
    aws s3://droneblog ls


