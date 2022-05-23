CREATE DATABASE  IF NOT EXISTS `bd_project_sprints` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_project_sprints`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_project_sprints
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Main'),(2,'MostViewed'),(3,'InSale');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `status` varchar(30) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `upatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Cart_users1_idx` (`user_id`),
  CONSTRAINT `fk_Cart_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Main'),(2,'MostViewed'),(3,'InSale');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `details`
--

DROP TABLE IF EXISTS `details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `details` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `carts_id` int NOT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_details_products1_idx` (`product_id`),
  KEY `fk_details_Carts1_idx` (`carts_id`),
  CONSTRAINT `fk_details_Carts1` FOREIGN KEY (`carts_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_details_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `details`
--

LOCK TABLES `details` WRITE;
/*!40000 ALTER TABLE `details` DISABLE KEYS */;
/*!40000 ALTER TABLE `details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memory`
--

DROP TABLE IF EXISTS `memory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memory`
--

LOCK TABLES `memory` WRITE;
/*!40000 ALTER TABLE `memory` DISABLE KEYS */;
/*!40000 ALTER TABLE `memory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `price` int NOT NULL,
  `category_id` int DEFAULT NULL,
  `image` varchar(60) NOT NULL,
  `color_id` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  `memory_id` int DEFAULT NULL,
  `ram_id` int DEFAULT NULL,
  `bill_id` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Products_Categories1_idx` (`category_id`),
  KEY `fk_Products_Color1_idx` (`color_id`),
  KEY `fk_Products_Brands1_idx` (`brand_id`),
  KEY `fk_Products_memory1_idx` (`memory_id`),
  KEY `fk_Products_Ram1_idx` (`ram_id`),
  CONSTRAINT `fk_Products_Brands1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_Categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_Color1` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_memory1` FOREIGN KEY (`memory_id`) REFERENCES `memory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_Ram1` FOREIGN KEY (`ram_id`) REFERENCES `ram` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 8 Plus',1500000,NULL,'iPhone8Plus.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'iPhone 12 mini',2700000,NULL,'iph12minihorizontal.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'iPhone 12 pro max',5000000,2,'12promaxhorizontal.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'Samsung Galaxy Note 10 lite',1300000,2,'GalaxyNote10Lite.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Huawei Y7',350000,2,'HuaweiY7.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'iPhone 13 ',3100000,1,'ip.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'iPhone 12 pro',3800000,2,'ip12pro.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'LG k10 ',375000,2,'LGK10Lte.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'Motorola Nexus 6',700000,NULL,'MotorolaNexus6.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'Nokia 1100 ',20000000,NULL,'nokia.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'Oppo A54',900000,3,'OppoA54.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'Realme GT 5G',1100000,3,'RealmeGt5g.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'Sony Xperia Gen 1',2800000,3,'SonyXperia.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,'Xiaomi 12',3000000,3,'45461231654654654.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'Poco F4 GT',1850000,3,'5646542313456.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'Xiaomi Redmi 10',790000,NULL,'8875123185465465.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'LG Flex 2 ',500000,NULL,'33221545748.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'Sony Ericsson Xperia Neo V',290000,NULL,'456465456456231231321.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'Sony Ericsson W580',315000,NULL,'88979875423123156456.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'Nokia X2-00',190000,NULL,'54648974654321231.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,'ejemplo666',444,NULL,'1652753661315.png',NULL,NULL,NULL,NULL,NULL,'2022-05-17','2022-05-17',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram`
--

DROP TABLE IF EXISTS `ram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ram` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram`
--

LOCK TABLES `ram` WRITE;
/*!40000 ALTER TABLE `ram` DISABLE KEYS */;
/*!40000 ALTER TABLE `ram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'Admin'),(2,'Client'),(3,'Employee');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `nick` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` text NOT NULL,
  `address` varchar(60) DEFAULT NULL,
  `image` varchar(60) DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nick_UNIQUE` (`nick`),
  KEY `fk_Users_types_idx` (`type_id`),
  CONSTRAINT `fk_Users_types` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,NULL,'Lola','lola@correo.com','12345',NULL,'default.jpg',1,NULL,NULL,NULL),(2,NULL,NULL,'Ernesto Pérez','ernestino@correo.com','12345',NULL,'1650313517466.png',NULL,NULL,NULL,NULL),(4,'Pepito','Pérez','Pepito','pepito@gmail.com','12345','calle123','default.jpg',NULL,NULL,NULL,NULL),(5,'User One','ningunooooo','usuario1','usuario1@email.com','$2a$10$D4l56.k/u15M85G0aXkyquOWvdWOA/XZuTUFbmbpPs0D8Jk3jIc1K','calle falsa 1235555','default.png',1,'2022-05-17','2022-05-19',NULL);
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

-- Dump completed on 2022-05-23 18:26:38
