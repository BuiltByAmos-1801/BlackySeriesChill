@echo off
cd /d "%~dp0"

:loop
git add .
git commit -m "Added Code In Index.html"
git push origin main

timeout /t 10 /nobreak >nul
goto loop