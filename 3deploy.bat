REM delete previous files
cd ../../../idealful.github.io
rmdir /s /q assets
del /q favicon.ico index.html

REM copy files
xcopy /e /y "../private-study/myself/app4/dist" .
copy index.html 404.html

REM deployment
git add .
git commit -m 'deploy'
git push

REM return current folder
cd ../private-study/myself/app4
