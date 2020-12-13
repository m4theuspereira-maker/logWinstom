const winston = require('winston')

const logger = winston.createLogger({
    level:'info', 
    format:winston.format.json(),
    transports:[
        new winston.transports.Console()
    ]
})


logger.info(console.log('bem-vindo ao mundo da AIDS'))