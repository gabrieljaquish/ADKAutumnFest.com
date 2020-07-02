# Adirondack Autumn Festival Website
v2020.1

## Summary
This repository hosts the source code for the Adirondack Autumn Festival Website located at https://adkautumnfestival.com
The annual festival will celebrate its 5th year in 2020 and all RSVP, Ticketing, and Donations are processed thru this website in conjunction with EventBrite hosted attendee managment and payment processing.  Traffic to this site is generally driven via MailChimp email campaigns to prior attendees and those that have shown intrest in the past and traffic source is tracked via Google Analytics and Mail Chimp integrations. 


## Architecture & Deployment Information
### Deployment Pipeline
Public deployments to the production website are automatic from the Master branch.  As a result all master branch Pull requests must be reviewed and approved my the ADK Autumn Festival team prior to being merged. 

Once a merge on the Master Branch takes place, a webhook integration will trigger an AWS CodePipeline test and deployment. Upon passing the required deployment checks the sourcecode will be packaged and pushed to an Amazon S3 bucket which hosts the static content for the site. 

If a deployment fails, Site administrators are notified via email thru Amazon Simple Notification Service (SNS) subscriptions and the build will fail back to its previous state.  The Master branch must be brought back into a passing state before any future deployments will take place.  Upon being rolled back or brought into a complainat state, the CodePipeline will run as usual and deploy the code to S3. 

### Hosting
Production: 
The production code is hosted via https from a restricted Amazon S3 Bucket.
All public requests are served via Amazon CloudFront CDN from AWS Edge Locations throughout the Americas for reduced latency and improved performance. 
Inbound http requests are 301 re-directed to https at the edge location and served from the local cloudfront cache unless an origin change has occured, at which time CloudFront will request updated code from the Origin S3 Bucket. 

Amazon Route53 Hosts the zone file for this site and intellegently geo-routes requests to the nearest Cloudfront Edge Location based upon latency. 

### Security
The site is currently static and serverless thru the help of Amazon S3 and Amazon CloudFront and all animation is performed client side thru Javascript.
All Code changes are approved via GitHub Pull request before pasisng thru an AWS CodePipeline that performs static code analysis. 

If code analysis passes, the pipeline will deploy the source code to a restricted S3 Bucket with webhosting enabled.  This S3 Bucket is NOT accessable from the publc internet directly.  Cloudfront is permitted to perform GET requests against this S3 bucket and uses a restricted origin configuration to limit all public requests to the site, funneling all requests thru CloudFront. 

Cloudfront 301 redirects all public http requests to https with enforcment of TLS 1.0 or later.  If the client browser supports it, TLS 1.3 will be used for transmision. 

Public Https certificates are generated and automatically renewed using Amazon Certificate Manager (ACM) and attached to the Cloudfront Distrobution automatically.  

## Support
If you care to support the festival or this project please reach out to us via 
