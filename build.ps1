$BuildOut = 'builds'
if (!(Test-Path -Path $BuildOut)) {
    New-Item -ItemType Directory -Force -Path $BuildOut
}

Push-Location -Path $BuildOut
Write-Host "current directory $BuildOut"

cmake .. -A Win32
cmake --build .

Pop-Location
