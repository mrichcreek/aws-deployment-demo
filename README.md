# AWS Deployment Demo

This repository demonstrates automated deployment to AWS Amplify and Lambda using GitHub Actions.

## Repository Structure

```
├── amplify/                 # Files deployed to AWS Amplify
│   └── src/
│       └── index.html      # Demo web page
├── lambda/                  # Files deployed to AWS Lambda
│   └── functions/
│       └── demo-function/  # Demo Lambda function
├── .github/
│   └── workflows/
│       ├── amplify-deploy.yml   # Deploys to Amplify on merge
│       └── lambda-deploy.yml    # Deploys to Lambda on merge
└── README.md
```

## Workflow

1. **Developers** create feature branches and push code changes
2. **Pull Requests** are opened to merge changes into `main`
3. **Reviewer (you)** reviews and approves the changes
4. **On merge to main**, GitHub Actions automatically deploys:
   - Files in `amplify/` → AWS Amplify
   - Files in `lambda/` → AWS Lambda

## For Developers

### Making Changes

1. Clone the repository:
   ```bash
   git clone https://github.com/mrichcreek/aws-deployment-demo.git
   cd aws-deployment-demo
   ```

2. Create a feature branch:
   ```bash
   git checkout -b feature/my-changes
   ```

3. Make your changes to files in `amplify/` or `lambda/`

4. Commit and push:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin feature/my-changes
   ```

5. Open a Pull Request on GitHub and request review

### File Locations

- **Web/Frontend changes**: Edit files in `amplify/src/`
- **Lambda function changes**: Edit files in `lambda/functions/demo-function/`

## AWS Resources

- **Amplify App ID**: `d2fvm8rz4epfm2`
- **Amplify URL**: https://main.d2fvm8rz4epfm2.amplifyapp.com
- **Lambda Function**: `demo-deployment-function`
- **Region**: us-east-1
