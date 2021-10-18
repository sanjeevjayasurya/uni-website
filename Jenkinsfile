pipeline {
    agent any

    environment {
        NEXT_PUBLIC_GTM_TAG='GTM-PTKQT6N'
        NEXT_PUBLIC_VERCEL_ANALYTICS_ID=''
        NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN='HDJajNQP18D4ZyQuOxaHDwtt'
        NEXT_PUBLIC_LEADSQUARE_API='https://3535h0536j.execute-api.ap-south-1.amazonaws.com/web-backend/v1/lead'
    }

    stages{
        stage('Check Version '){
            steps{
                sh "node --version"
                sh "npm --version"
            }
        }
        stage('install depenencies'){
            steps{
                sh "npm install"
            }
        }
        stage('Build code'){
            steps{
                sh "npm run build"
            }
        }
        stage('Deploy to s3'){
             steps{
                 withAWS(role:'JenkinsRole', roleAccount:'986400110857',  duration: 900, roleSessionName: 'web-stage'){
                     sh "aws s3 sync --delete out s3://uni-website-stage --acl bucket-owner-full-control --cache-control 'max-age=31536000, public'"
                     sh "aws s3 cp s3://uni-website-stage s3://uni-website-stage --recursive --exclude '*' --include '*.html' --metadata-directive REPLACE --cache-control max-age:3600 --content-type text/html"
                }
            }
        }
        stage('Cloudfront Invalidation'){
            steps{
                withAWS(role:'JenkinsRole', roleAccount:'986400110857',  duration: 900, roleSessionName: 'web-stage'){
                    sh 'aws cloudfront create-invalidation --distribution-id E3HCEM16CDNRS3 --paths "/*" '
                }
            }
        }

    }
}