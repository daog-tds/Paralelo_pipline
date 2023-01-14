const { defineConfig } = require("cypress");



module.exports = defineConfig({
  projectId: 'y2pccf',
      //aumentar el ancho y largo de la pagina en cypress
      viewportWidth: 1500,
      viewportHeight: 900,
      
      //desbloquear paginas no seguras
      chromeWebSecurity: false,

      //Tiempo que tiene para cargar la pagina de inicio
      pageLoadTimeout: 9000,

      //Tiempo de espera del comando
      defaultCommandTimeout: 15000,

      //iniciar el sistemas se vean los archivos tipo feature en Cucumber
      
      //specPattern: '**/*.feature',
      
      
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      
    },
    
  },
});
