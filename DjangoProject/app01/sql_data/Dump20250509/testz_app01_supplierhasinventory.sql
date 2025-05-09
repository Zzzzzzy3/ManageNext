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
-- Table structure for table `app01_supplierhasinventory`
--

DROP TABLE IF EXISTS `app01_supplierhasinventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app01_supplierhasinventory` (
  `app01_supplier_supplier_id` int NOT NULL,
  `app01_inventory_inventory_id` int NOT NULL,
  PRIMARY KEY (`app01_supplier_supplier_id`),
  KEY `app01_app01supplierh_app01_inventory_inve_275fe3c2_fk_app01_inv` (`app01_inventory_inventory_id`),
  CONSTRAINT `app01_app01supplierh_app01_inventory_inve_275fe3c2_fk_app01_inv` FOREIGN KEY (`app01_inventory_inventory_id`) REFERENCES `app01_inventory` (`inventory_id`),
  CONSTRAINT `app01_app01supplierh_app01_supplier_suppl_12c6cfba_fk_app01_sup` FOREIGN KEY (`app01_supplier_supplier_id`) REFERENCES `app01_supplier` (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app01_supplierhasinventory`
--

LOCK TABLES `app01_supplierhasinventory` WRITE;
/*!40000 ALTER TABLE `app01_supplierhasinventory` DISABLE KEYS */;
INSERT INTO `app01_supplierhasinventory` VALUES (20,11),(22,31);
/*!40000 ALTER TABLE `app01_supplierhasinventory` ENABLE KEYS */;
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
