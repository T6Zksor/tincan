$BuildOut = 'builds'
if (!(Test-Path -Path $BuildOut)) {
    New-Item -ItemType Directory -Force -Path $BuildOut
}

Push-Location -Path $BuildOut
Write-Host "current directory $BuildOut"

rm CMakeCache.txt

cmake .. -A Win32 -DCMAKE_TOOLCHAIN_FILE=D:/vcpkg/scripts/buildsystems/vcpkg.cmake
#cmake --build .

Pop-Location
