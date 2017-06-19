'use strict';

/**
 *  Se define el identificador del cliente de la aplicación y la frase secreta.
 * Se esta utilizando un "trusted" así que no mostrará la pantalla de decisión de usuario para dar acceso
 */
exports.client = {
  clientID     : 'client_xx',
  clientSecret : 'secret_yy',
};

// TODO Compact this more

/**
 * Se configura la ubicación del servidor de autorizacion, número de puerto, y los end point´s para tener acceso
 */
exports.authorization = {
  host         : 'localhost',
  port         : '3000',
  url          : 'https://localhost:3000/',
  tokenURL     : 'oauth/token',
  authorizeURL : 'https://localhost:3000/dialog/authorize',
  tokeninfoURL : 'https://localhost:3000/api/tokeninfo?access_token=',
  redirectURL  : 'https://localhost:4000/receivetoken',
};

/**
 * Configuración de la base de datos para manejo de la expiración de tokens.
 *
 * timeToCheckExpiredTokens - Es el tiempo en segundos para poder decirle al servidor que un token esta expirado.
 *  En este caso se tiene que esperar una hora
 *  para verificar la expiración de los tokens de acceso.
 * @type {{timeToCheckExpiredTokens: number}}
 */
exports.db = {
  timeToCheckExpiredTokens : 3600,
};

/**
 * Configuración de la sesión
 *
 * secret - Clave secreta que encripta la sesión del usuario
 */
exports.session = {
  // TODO You need to change this secret to something that you choose for your secret
  secret : 'b53f53e2e669873bb8ae840bae250f72b49e925d', // TODO: Define Secret -- GRS@S3CR3T_4pp -- Encriptado sha1
};

/**
 * Configuración de Base de datos SAP
 *
 * Se establece la cadena de conexión a utilizar para poder conectarse a la base de datos de SAP.
 **/

exports.databaseSAP={
  host     : '192.168.10.20',
  port     :  30015,
  user     : 'USERSAP',
  password : 'Grs-2016'
};

/**
 * Configuración de Base de datos GRSAuth
 *
 * Se establece la cadena de conexión a utilizar para poder conectarse a la base de datos de GRSAuth.
 **/

exports.databaseAuth='mongodb://localhost:27017/grsauth';

/**
 * Configuración de Base de datos GRSAuth
 *
 * Se establece la cadena de conexión a utilizar para poder conectarse a la base de datos de GRSAuth.
 **/

exports.databaseWMS='mongodb://localhost:27017/grswms';
