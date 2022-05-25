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
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Samsung'),(2,'Apple'),(3,'Xiaomi'),(4,'Vivo'),(5,'Oppo'),(6,'Huawei'),(7,'Motorola'),(8,'LG');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Main'),(2,'MostViewed'),(3,'InSale');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Azul'),(2,'Rojo'),(3,'Negro'),(4,'Amarillo'),(5,'Blanco'),(6,'Gris'),(7,'Rosa'),(8,'Dorado'),(9,'Otro');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `details`
--

LOCK TABLES `details` WRITE;
/*!40000 ALTER TABLE `details` DISABLE KEYS */;
/*!40000 ALTER TABLE `details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `memories`
--

LOCK TABLES `memories` WRITE;
/*!40000 ALTER TABLE `memories` DISABLE KEYS */;
INSERT INTO `memories` VALUES (4,'4GB'),(5,'8GB'),(6,'16GB'),(7,'32GB'),(8,'64GB'),(9,'128GB'),(10,'256GB');
/*!40000 ALTER TABLE `memories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 8 Plus',1500000,NULL,'iPhone8Plus.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'iPhone 12 mini',2700000,NULL,'iph12minihorizontal.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'iPhone 12 pro max',5000000,2,'12promaxhorizontal.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'Samsung Galaxy Note 10 lite',1300000,2,'GalaxyNote10Lite.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Huawei Y7',350000,2,'HuaweiY7.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'iPhone 13 ',3100000,1,'ip.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'iPhone 12 pro',3800000,2,'ip12pro.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'LG k10 ',375000,2,'LGK10Lte.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'Motorola Nexus 6',700000,NULL,'MotorolaNexus6.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'Nokia 1100 ',20000000,NULL,'nokia.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'Oppo A54',900000,3,'OppoA54.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'Realme GT 5G',1100000,3,'RealmeGt5g.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'Sony Xperia Gen 1',2800000,3,'SonyXperia.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,'Xiaomi 12',3000000,3,'45461231654654654.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'Poco F4 GT',1850000,3,'5646542313456.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'Xiaomi Redmi 10',790000,NULL,'8875123185465465.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'LG Flex 2 ',500000,NULL,'33221545748.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'Sony Ericsson Xperia Neo V',290000,NULL,'456465456456231231321.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'Sony Ericsson W580',315000,NULL,'88979875423123156456.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'Nokia X2-00',190000,NULL,'54648974654321231.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rams`
--

LOCK TABLES `rams` WRITE;
/*!40000 ALTER TABLE `rams` DISABLE KEYS */;
INSERT INTO `rams` VALUES (1,'2GB'),(2,'4GB'),(3,'8GB'),(4,'16GB'),(5,'32GB'),(6,'64GB'),(7,'128GB');
/*!40000 ALTER TABLE `rams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'Admin'),(2,'Client'),(3,'Employee');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2022-05-24 19:46:37
