# FinGuard Frontend - Windows Setup Guide

## Quick Start

### Option 1: Automated Setup (Recommended)
1. Double-click `setup-windows.bat`
2. Wait for dependencies to install
3. Run `npm run dev` or double-click `start-dev.bat`
4. Open http://localhost:5173 in your browser

### Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Features
- ✅ Auto-install predev script checks dependencies before running
- ✅ Windows-compatible scripts using `cross-env`
- ✅ Vite configured with `server.host = true` for Windows/Docker compatibility
- ✅ Environment variables pattern in `client/.env`
- ✅ Runs on http://localhost:5173
- ✅ Frontend-only (no backend dependencies)

## Troubleshooting

### If npm install fails
1. **Try pnpm instead:**
   ```bash
   npm install -g pnpm
   pnpm install
   ```

2. **Or use Docker for frictionless dev:**
   ```bash
   docker-compose up
   ```

### Prefer Command Prompt or PowerShell
- Avoid Git Bash for npm installs on Windows
- Use Command Prompt (cmd) or PowerShell for best compatibility

## Project Structure
```
FinGuard/
├── client/              # React frontend
│   ├── src/
│   └── .env            # Environment variables (VITE_*)
├── shared/             # Shared types/schemas
├── scripts/
│   └── ensure-install.cts  # Auto-install script
├── setup-windows.bat   # Windows setup automation
├── start-dev.bat       # Quick start script
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server (auto-installs deps if needed)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with TypeScript

## Environment Variables

Edit `client/.env` to configure:
```
VITE_WEBSRV_API_KEY=your_key
```

Use `VITE_*` prefix for any browser-accessible environment variables.

## Development Server

The app runs on:
- **Local:** http://localhost:5173
- **Network:** http://[your-ip]:5173 (accessible from other devices)

The Vite dev server is configured with:
- `host: true` - Listen on all network interfaces
- `port: 5173` - Default Vite port
- `open: true` - Auto-open browser

## Next Steps

1. ✅ Run `setup-windows.bat` to install dependencies
2. ✅ Start dev server with `npm run dev`
3. ✅ Open http://localhost:5173
4. 🚀 Start building your financial app!

## Support

For issues or questions, check:
- Main README.md for project documentation
- design_guidelines.md for UI/UX guidelines
