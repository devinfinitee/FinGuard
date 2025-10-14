@echo off
echo ========================================
echo Reinstalling Dependencies
echo ========================================
echo.

echo Removing old node_modules...
if exist "node_modules" (
    rmdir /s /q "node_modules"
    echo ✓ node_modules removed
)

echo Removing package-lock.json...
if exist "package-lock.json" (
    del /f /q "package-lock.json"
    echo ✓ package-lock.json removed
)

echo.
echo Installing fresh dependencies...
npm install

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ Dependencies installed successfully!
    echo ========================================
    echo.
    echo You can now run: npm run dev
    echo Or double-click: start-dev.bat
    echo.
) else (
    echo.
    echo ========================================
    echo ❌ Installation failed
    echo ========================================
    echo.
    echo Try running: npm install manually
    echo.
)

pause
