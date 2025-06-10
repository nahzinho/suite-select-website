# SuiteSelect Website

Premium vending solutions - Information platform for property owners and managers.

## Features

- Modern responsive design
- Information about SuiteSelect vending solutions
- Product portfolio showcase
- Benefits and guarantees section
- Contact information and inquiry form
- Built with React, TypeScript, and Tailwind CSS

## Deployment Workflow (For Non-Technical Users)

This website uses an automated deployment system that ensures all changes are tested before going live. Here's how it works:

### 🔄 How Updates Get Published

**Step 1: Create a Pull Request (PR)**
- When someone wants to make changes to the website, they create what's called a "Pull Request"
- Think of this as proposing changes before they go live
- The changes are submitted for review but not yet visible to visitors

**Step 2: Automatic Preview Creation**
- As soon as a Pull Request is created, Cloudflare Workers automatically creates a **preview version** of the website
- This preview has a special temporary URL (like `https://abc123.suiteselect-website.workers.dev`)
- You can visit this preview URL to see exactly how the changes will look
- The preview is completely separate from the live website, so visitors won't see these changes yet

**Step 3: Review and Testing**
- Team members can review the changes using the preview link
- They can test that everything works correctly
- Any feedback or requested changes can be made before going live

**Step 4: Merge and Go Live**
- Once the changes are approved, the Pull Request gets "merged"
- This automatically triggers deployment to the **production website**
- The changes become visible to all visitors within a few minutes
- The preview version is no longer needed and gets cleaned up

### 🛡️ Safety Features

- **No direct changes to production**: All changes must go through the Pull Request process
- **Preview before publish**: Every change can be tested on a preview version first
- **Automatic rollback**: If something goes wrong, we can quickly revert to the previous version
- **Zero downtime**: Updates happen seamlessly without the website going offline

### 📱 What This Means for You

- **Peace of mind**: You can always preview changes before they go live
- **Fast updates**: Once approved, changes appear on the live site within minutes
- **No technical knowledge required**: The process is automated - you just need to approve or request changes
- **Always available**: The website stays online during updates

For technical deployment details, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Development

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To run for production:

```bash
bun start
```

## About SuiteSelect

SuiteSelect provides premium AI-based vending machines that enhance the guest experience in hotels and residential properties. We offer:

- Attractive addition to your property without additional effort or risk
- Enhanced customer experience
- Flexible branding options
- Complete maintenance and restocking services
- Wide range of snacks, beverages, and convenience items

Contact: jakob.petersdorff@suiteselect.de

This project was built using Bun, React, and modern web technologies.
