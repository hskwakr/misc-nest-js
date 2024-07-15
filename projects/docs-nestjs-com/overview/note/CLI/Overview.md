# Overview

The Nest CLI is a command-line interface tool that helps you to initialize, develop, and maintain your Nest applications. It assists in multiple ways, including scaffolding the project, serving it in development mode, and building and bundling the application for production distribution. It embodies best-practice architectural patterns to encourage well-structured apps.

## Installation

NOTE: In this guide we describe using npm to install packages, including the Nest CLI. Other package managers may be used at your discretion. With npm, you have several options available for managing how your OS command line resolves the location of the nest CLI binary file. Here, we describe installing the nest binary globally using the -g option. This provides a measure of convenience, and is the approach we assume throughout the documentation. Note that installing any npm package globally leaves the responsibility of ensuring they're running the correct version up to the user. It also means that if you have different projects, each will run the same version of the CLI. A resonable alternative is to use the npx program, built into the npm cli (or similar features with other package managers) to ensure that you run a managed version of the Nest CLI. We recommend you consult the npx documentation and/or you DevOps support staff for more information.

Install the CLI globally using the npm install -g command (see the Note above for details about global installs).

> Hint

Alternatively, you can use this command npx @nestjs/cli@latest with out installing the cli globally.

## Basic workflow

Once installed, you can invoke CLI commands directly from your OS command line through the nest executable. See the available nest commands by entering the following:

nest --help

Get help on an individual command using the following construct. Substitute any command, like new, add, etc.., where you see genete in the example below to get detailed help on that command:

nest generate --help

To create, build and run a new basic Nest project in development mode, go to the folder that should be the parent of your new project, and run the following command:

nest new project-name
cd project-name
npm run start:dev

In your browser, open http://localhost:3000 to see the new application running. The app will automaticaly recompile and reload when you change any of the source files.

> Hint

We recommend using the SWC builder for faster builds (10x more performant than the default TypeScript compiler).

## Project structure

