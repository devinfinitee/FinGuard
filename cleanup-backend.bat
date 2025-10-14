@echo off
echo ========================================
echo Cleaning up backend and Replit files...
echo ========================================
echo.

REM Remove server folder
if exist "server" (
    echo Removing server folder...
    rmdir /s /q "server"
    echo ✓ Server folder removed
)

REM Remove Replit files
if exist ".replit" (
    echo Removing .replit file...
    del /f /q ".replit"
    echo ✓ .replit file removed
)

if exist "replit.md" (
    echo Removing replit.md file...
    del /f /q "replit.md"
    echo ✓ replit.md file removed
)

REM Remove drizzle config (database related)
if exist "drizzle.config.ts" (
    echo Removing drizzle.config.ts...
    del /f /q "drizzle.config.ts"
    echo ✓ drizzle.config.ts removed
)

REM Remove Docker files (optional - uncomment if you want to remove them)
REM if exist "Dockerfile" (
REM     echo Removing Dockerfile...
REM     del /f /q "Dockerfile"
REM     echo ✓ Dockerfile removed
REM )
REM 
REM if exist "docker-compose.yml" (
REM     echo Removing docker-compose.yml...
REM     del /f /q "docker-compose.yml"
REM     echo ✓ docker-compose.yml removed
REM )

echo.
echo ========================================
echo Cleanup complete!
echo ========================================
echo.
echo Next steps:
echo 1. Delete node_modules folder
echo 2. Run: npm install
echo 3. Run: npm run dev
echo.
pause
