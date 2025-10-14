@echo off
echo ========================================
echo FinGuard Frontend - Windows Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo Then: npm install
    exit /b 1
)

REM Check if pnpm is installed
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo pnpm not found. Installing pnpm globally...
    npm install -g pnpm
    if %errorlevel% neq 0 (
        echo Failed to install pnpm
        echo Falling back to npm...
        goto npm_install
    )
)

echo Installing dependencies with pnpm...
pnpm install
if %errorlevel% neq 0 (
    echo.
    echo pnpm install failed. Trying npm...
    goto npm_install
)
goto setup_complete

:npm_install
echo Installing dependencies with npm...
npm install
if %errorlevel% neq 0 (
    echo.
    echo npm install failed!
    echo.
    echo Try deleting node_modules and package-lock.json, then run again.
    exit /b 1
)

:setup_complete
echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Or double-click: start-dev.bat
echo.
echo The app will open at http://localhost:5173
echo.
pause
