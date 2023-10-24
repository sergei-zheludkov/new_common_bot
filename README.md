## Build and Run

### Project build
1. `yarn`
2. `yarn build:packages`
3. `yarn build:project`

### Project run
1. `yarn start_server:dev`
2. `yarn start_bot:dev`

---

### Start on the server

#### Start all applications
`pm2 start ecosystem.config.js`

#### Stop all
`pm2 stop ecosystem.config.js`

#### Restart all
`pm2 restart ecosystem.config.js`

#### Reload all
`pm2 reload ecosystem.config.js`

#### Delete all
`pm2 delete ecosystem.config.js`
