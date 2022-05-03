cmake_minimum_required(VERSION 3.12)

project(
    TinCan
    VERSION 1.0
    LANGUAGES CXX)

set_property(DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}
    PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME})

set(MY_SRCS
    src/main.cc
    src/shader_s.h
)

add_executable(${PROJECT_NAME} ${MY_SRCS})

find_package(glfw3 CONFIG REQUIRED)
target_link_libraries(${PROJECT_NAME} PRIVATE glfw)

find_package(glad CONFIG REQUIRED)
target_link_libraries(${PROJECT_NAME} PRIVATE glad::glad)
