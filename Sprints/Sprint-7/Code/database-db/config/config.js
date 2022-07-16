// configuración de base de datos nueva
module.exports =
{
  "development": {
    "username": "admin_fence",
    "password": '1Peatonal',
    "database": "fence_db",
    "host": "db4free.net",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
