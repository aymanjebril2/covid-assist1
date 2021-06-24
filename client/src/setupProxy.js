const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
         
            createProxyMiddleware({
          target: 'http://localhost:8080',
          secure:false,
          changeOrigin: true,
        }))
        app.use(
            '/daily.json',
             
                createProxyMiddleware({
              target: "https://api.covidtracking.com/v1/states/ny/",
              secure:true,
              changeOrigin: true,
            }))
           

   
}


