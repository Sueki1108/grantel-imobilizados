@echo off
chcp 65001 >nul
setlocal
set GITHUB_USER=thiagosueki
set REPO_NAME=grantel-imobilizados
echo.
echo =========================================================
echo   🔧 VERIFICANDO GIT...
echo =========================================================
where git >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Git nao encontrado! Instale: https://git-scm.com/download/win
    pause & exit /b 1
)
echo [OK] Git instalado.
echo.
if not exist ".git" (
    git init >nul
    git config user.name  "%GITHUB_USER%"
    git config user.email "deploy@local"
    echo [OK] Repositorio inicializado.
) else ( echo [OK] Repositorio ja existia. )
echo.
git add -A
git commit -m "Deploy automatico em %date% %time%" >nul 2>&1
git branch -M main >nul
echo [OK] Arquivos comitados.
echo.
echo =========================================================
echo   PASSO 1: Abra https://github.com/new
echo   Owner: %GITHUB_USER%   Repo: %REPO_NAME%   Tipo: Public
echo   NAO marque README / .gitignore / License
echo =========================================================
echo.
set /p URL_REPO=Copie a URL HTTPS do repo novo e cole aqui: 
if "%URL_REPO%"=="" (echo URL vazia & pause & exit /b 1)
echo.
git remote remove origin >nul 2>&1
git remote add origin "%URL_REPO%"
git push -u origin main
if errorlevel 1 ( echo [ERRO] Falha no push! Verifique URL, autenticacao ou repo Publico. & pause & exit /b 1 )
echo.
echo =========================================================
echo   PASSO 2: Abra Settings  ^> Pages
echo   Branch: main  ^|  Folder: / (root)  ^|  Salve
echo   Aguarde ~2min e acesse:
echo   https://%GITHUB_USER%.github.io/%REPO_NAME%/
echo =========================================================
pause
