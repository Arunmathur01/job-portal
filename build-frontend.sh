#!/bin/bash
cd Frontend
npm install
npm run build
echo "Frontend build completed successfully"
ls -la dist/
