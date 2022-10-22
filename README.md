## Запуск и сборка проекта

Project build
```
yarn

yarn build:packages
yarn build:project
```

Start on the server
```
# Start all applications
pm2 start ecosystem.config.js

# Stop all
pm2 stop ecosystem.config.js

# Restart all
pm2 restart ecosystem.config.js

# Reload all
pm2 reload ecosystem.config.js

# Delete all
pm2 delete ecosystem.config.js
```