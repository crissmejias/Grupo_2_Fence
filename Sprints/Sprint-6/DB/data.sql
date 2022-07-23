CREATE DATABASE  IF NOT EXISTS `1xiMF7UOCa` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `1xiMF7UOCa`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: remotemysql.com    Database: 1xiMF7UOCa
-- ------------------------------------------------------
-- Server version	8.0.13-4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_products` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  `descripcion` text,
  `imagen` text,
  PRIMARY KEY (`id_products`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Valla plástica vial naranja',23000,'Delimitadora Light Reflect','/images-multer/valla-1656637792791.PNG'),(2,'Valla plástica vial amarilla',20000,'Delimitadora Light Reflect','/images-multer/valla-1656637859501.PNG'),(3,'Valla plástica vial roja',31000,'Delimitadora Light Reflect','/images-multer/valla-1656637880767.PNG'),(4,'Valla plástica amarilla publicitaria',18000,'Delimitadora Light Reflect','/images-multer/valla-1656637902832.PNG'),(5,'Valla plástica vial celeste',24000,'Delimitadora Light Reflect','/images-multer/valla-1656637978052.PNG'),(6,'Valla peatonal amarilla',19000,'Prueba','/images-multer/valla-1656638186726.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_users` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `categoria` text,
  `imagen` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_users`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (40,'Cristhian','Mejias','cristhianmejias@msn.com','$2a$10$0gM6RPiXx7HiYKuq1byGyeYm3Uq9vsqNfq7PpsUdlzEuI5EQ6mpte','PRUEBA','/images-multer/avatar-1656635391254.JPG'),(41,'Saul','Goodman','yyy@gmail.com','$2a$10$yWsQ.ZwYcg3zNeLRGzk8ZOiLiY6i/xAVslcJ4LAJyAxtWNf612fBa','Prueba','/images-multer/avatar-1656636704871.webp'),(42,'Walter','White','yyy@gmail.com','$2a$10$H.xRMKWFzIqDhzRBDxw41OeOQn1q1oro3yp4GsVfbJHP4sY9OlNK2','Prueba','/images-multer/avatar-1656636857601.webp'),(43,'Rick','Sanchez','yyy@gmail.com','$2a$10$x9Gcs3ycA5TdtOUYmuy7Buo/5adHS6QL1RqHk9ga0Kf.sLIOau3ZC','Prueba','/images-multer/avatar-1656636895767.png'),(44,'Daenetis','Targerian','yyy@gmail.com','$2a$10$InPa4ub/pnYvtU3xjg0J3.uQG2BCMfwKsSUDJmBjWgINV8eiQCwke','Prueba','/images-multer/avatar-1656636990992.jpg'),(45,'Kenny','McKormic','aaa@aa.com','$2a$10$FlsKK8N4k3E3ZhlLjI1/r.W1XsFGtzIIQm8mgSXey6MTdwoL5THca','Prueba','/images-multer/avatar-1656637036618.jpg'),(46,'Butters','Stoch','vvv@aaa.com','$2a$10$WfM6zEuh8to.PIpu9YJlK.0Rr2mCpa1t14.Vy/sObWEFIcQdQhHey','Prueba','/images-multer/avatar-1656637071718.jpg'),(47,'Erik','Cartman','prueba4@gmail.com','$2a$10$EMLw3o9naAF3sjcM0Le1Z.0RVjjbbRL3mFOfwaKWMh8TpJd1n/gqG','Prueba','/images-multer/avatar-1656637255319.webp');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-23 15:16:52
