# Stages Of Deployment

This diagram outlines the development workflow for updating and deploying code, from coding to successful deployment.

Steps:
1. Code: Modify code in HTML, CSS, and JavaScript.

2. Preview: Review changes to ensure correctness.

3. Format & Lint: Use Bash for formatting and linting.

4. Push to Git: Commit changes to the Git repository.

5. CI/CD Pipeline: GitHub Actions triggers:

    - Rechecks formatting

    - Identifies any general errors

    - Runs build, test, and deployment processes.

```mermaid
flowchart TB

    %% Code update flow
    A[Code] --> B[HTML]
    A[Code] --> C[CSS]
    A[Code] --> D[JavaScript]
    B --> E[Preview]
    C --> E[Preview]
    D --> E[Preview]
    E -.-> F[Format Using Prettier with Bash Scripting]
    F -- HTML, CSS & JavaScript --> G[Lint with Bash Scripting]
    G --> H[HTML]
    G --> I[CSS]
    G --> J[JavaScript]
    H --> K[Git Push]  
    I --> K[Git Push]
    J --> K[Git Push]
    K -.-> L[GitHub Actions - CI/CD Pipeline]
    L -- Automate Formatting & Linting, then Build/Test/Deploy --> M[Job Success]

```