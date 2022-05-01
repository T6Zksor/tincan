cmake_minimum_required(VERSION 3.12)

project(
    TinCan
    VERSION 1.0
    LANGUAGES CXX)

set(MY_SRCS
    src/main.cc
)

add_executable(TinCan ${MY_SRCS})
