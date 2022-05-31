cmake_minimum_required(VERSION 3.12)

project(
    TinCan
    VERSION 1.0
    LANGUAGES CXX)

set_property(DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}
    PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME})

FILE(GLOB MY_SRCS
    src/*.cc
    src/*.h

    src/*.vs
    src/*.fs
    src/*.gs
    )

add_executable(${PROJECT_NAME} ${MY_SRCS})

find_package(glfw3 CONFIG REQUIRED)
target_link_libraries(${PROJECT_NAME} PRIVATE glfw)

find_package(glad CONFIG REQUIRED)
target_link_libraries(${PROJECT_NAME} PRIVATE glad::glad)

find_path(STB_INCLUDE_DIRS "stb.h")
target_include_directories(${PROJECT_NAME} PRIVATE ${STB_INCLUDE_DIRS})

find_package(glm CONFIG REQUIRED)
target_link_libraries(${PROJECT_NAME} PRIVATE glm::glm)

find_package(assimp CONFIG REQUIRED)
target_link_libraries(${PROJECT_NAME} PRIVATE assimp::assimp)
