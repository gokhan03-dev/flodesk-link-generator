# Global Investments Flodesk Link Generator

A simple web application for generating custom Flodesk links with campaign parameters.

## Features

- Generate custom Flodesk links with campaign details
- Preserve `{{subscriber.email}}` variable in URLs
- Default redirect URL to `https://globalinvestsinc.com/thank-you/`
- Default date to today (editable)
- Copy to clipboard functionality
- Responsive design with shadcn/ui components
- Ready for Vercel deployment

## Deployment Instructions

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Web Interface

1. **Push to GitHub**:
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Click "Deploy"

### Option 3: One-Click Deploy

1. **Install Vercel CLI locally**:
   ```bash
   npx vercel
   ```

2. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main application page
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   └── lib/
├── public/
├── package.json
├── next.config.js
└── tailwind.config.js
```

## Usage

1. Enter your campaign title
2. Select campaign date (defaults to today)
3. Add CTA text
4. Modify redirect URL if needed
5. Click "Generate Link"
6. Copy the generated link

## Environment Variables

No environment variables required for this application.

## Technologies Used

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide icons

## License

MIT