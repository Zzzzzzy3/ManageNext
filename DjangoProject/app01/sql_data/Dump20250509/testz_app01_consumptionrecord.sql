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
-- Table structure for table `app01_consumptionrecord`
--

DROP TABLE IF EXISTS `app01_consumptionrecord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app01_consumptionrecord` (
  `consumption_id` int NOT NULL AUTO_INCREMENT,
  `consumption_name` varchar(80) DEFAULT NULL,
  `price` varchar(45) NOT NULL,
  `time` datetime(6) DEFAULT NULL,
  `dish_id` bigint DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  PRIMARY KEY (`consumption_id`),
  KEY `app01_consumptionrecord_dish_id_bc2856a4_fk_app01_dishtable_id` (`dish_id`),
  KEY `app01_consumptionrec_customer_id_8e18c5cc_fk_app01_cus` (`customer_id`),
  CONSTRAINT `app01_consumptionrec_customer_id_8e18c5cc_fk_app01_cus` FOREIGN KEY (`customer_id`) REFERENCES `app01_customer` (`customer_id`),
  CONSTRAINT `app01_consumptionrecord_dish_id_bc2856a4_fk_app01_dishtable_id` FOREIGN KEY (`dish_id`) REFERENCES `app01_dishtable` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app01_consumptionrecord`
--

LOCK TABLES `app01_consumptionrecord` WRITE;
/*!40000 ALTER TABLE `app01_consumptionrecord` DISABLE KEYS */;
INSERT INTO `app01_consumptionrecord` VALUES (1,'周振宇','15','2025-04-16 11:20:39.080491',1,1),(2,'zzy','16','2025-03-28 11:20:39.080491',99,3);
/*!40000 ALTER TABLE `app01_consumptionrecord` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-09 13:05:30
