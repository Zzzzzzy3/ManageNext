-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: testz
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `app01_inventory`
--

DROP TABLE IF EXISTS `app01_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app01_inventory` (
  `inventory_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `expiration_data` varchar(255) DEFAULT NULL,
  `warehouse_loc` varchar(255) DEFAULT NULL,
  `batch_no` varchar(50) DEFAULT NULL,
  `category` varchar(10) DEFAULT NULL,
  `dish_id` bigint DEFAULT NULL,
  `amount` int NOT NULL,
  PRIMARY KEY (`inventory_id`),
  KEY `app01_inventory_dish_id_0b53a6af_fk_app01_dishtable_id` (`dish_id`),
  CONSTRAINT `app01_inventory_dish_id_0b53a6af_fk_app01_dishtable_id` FOREIGN KEY (`dish_id`) REFERENCES `app01_dishtable` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app01_inventory`
--

LOCK TABLES `app01_inventory` WRITE;
/*!40000 ALTER TABLE `app01_inventory` DISABLE KEYS */;
INSERT INTO `app01_inventory` VALUES (11,'茄子','2','1','1','蔬菜',1,1),(30,'大蒜','2','3','4','蔬菜',44,10),(31,'玉米','10','3','4','蔬菜',99,16),(32,'木瓜','7','3','4','水果',104,20),(33,'牛肉','7','3','4','肉类',114,25),(34,'土豆','7','3','4','蔬菜',115,30),(35,'韭菜','7','3','4','蔬菜',116,19),(36,'虾仁','7','3','4','海鲜',117,19),(37,'虾仁','7','3','4','海鲜',117,20),(39,'茄子','7','3','4','蔬菜',1,30),(40,'胡萝卜','7','3','4','蔬菜',118,29),(41,'生姜','7','3','4','蔬菜',119,30),(42,'鱼','7','3','4','肉类',120,30),(43,'西瓜','1','3','1','水果',121,20),(55,'鱿鱼','13','2','1','肉类',122,15);
/*!40000 ALTER TABLE `app01_inventory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-09 13:05:29
