# 2019 Autumn Festival Website
2019 Autumn Festival Registration Website

## Hosting
The production side of AdkAutumnfest.com is hosted on Amazon AWS S3 in conjunction with Amazon CloudFront CDN and Amazon Route 53 Intellegent DNS Resolution. 

The current Master Branch of this repository is published to all Amazon CloudFront Edge Locations each time a new Push is performed.

## Deployment
Code Deployments to the Amazon CloudFront Edge locations is performed via Webhooks between AWS and GitHub. 
A webhook is an HTTP notification that detects events, in this case Git Push events to our GitHub Master Branch. These webhooks trigger a code deployment via AWS CodePipeline which then packages and publishes the code to an S3 bucket.  CloudFront then senses a change in the S3 Bucket and deploys the contents to all Edge Locations globally. 

## Routing
DNS and geo-location load balancing is handled by Amazon AWS Route 53.  This uses localized DNS resolution to point requests to the nearest AWS Cloud Front Edge Data Center location. 

