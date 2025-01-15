# Full-Stack Developer Interview Task (1 Hour)

## Overview

You are provided with a full-stack application that includes:

- Frontend (React + TypeScript)
- Backend (NestJS)
- PostgreSQL Database
- Docker configuration

The application is a Task Management System that allows users to create, view, and manage tasks. However, it contains several intentional issues that need to be fixed.

## Current Issues

1. **Docker Configuration Issues**

   - The application fails to start due to configuration errors in docker-compose.yml
   - Services have conflicting ports and incorrect environment variables
   - Database connection is misconfigured

2. **Backend Issues**

   - Missing database migration for the new `priority` field in Task entity
   - API validation is not properly implemented
   - Incorrect error handling in TaskService
   - Missing API documentation (Swagger)

3. **Frontend Issues**
   - Task creation form doesn't handle the new `priority` field
   - API requests are using incorrect endpoints
   - Date formatting issues in task display
   - Form validation is not implemented

## Your Tasks

### 1. Fix Docker Configuration

- Debug and correct the docker-compose.yml file

### 2. Fix Backend Issues

- Implement proper API validation using class-validator
- Add Swagger documentation for all endpoints
- Fix error handling in TaskService
- Ensure proper typing for all responses

### 3. Fix Frontend Issues

- Update task creation form to include priority field
- Implement proper form validation
- Fix API integration
- Add proper error handling and user feedback

### 4. Add Unit Tests

- Write unit tests for TaskService
- Test the priority field validation
- Test error handling

## Success Criteria

1. Running `docker-compose up` successfully starts all services
2. Backend API is properly documented with Swagger
3. Frontend can create and display tasks with priority
4. All unit tests pass
5. Proper error handling throughout the application

## Evaluation Criteria

- Code quality and organization
- Problem-solving approach
- Understanding of full-stack concepts
- Testing implementation
- Error handling
- Documentation
