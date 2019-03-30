module.exports = {
  apps: [{
    name: 'reviews',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: ''ec2-54-224-251-247.compute-1.amazonaws.com,
      key: '~/.ssh/FEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/threetexansandacanadian/reviews.git',
      path: '/home/ubuntu/reviews',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
