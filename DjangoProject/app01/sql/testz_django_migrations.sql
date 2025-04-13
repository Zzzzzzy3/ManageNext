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
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'app01','0001_initial','2025-03-29 04:05:35.582625'),(2,'contenttypes','0001_initial','2025-03-29 04:05:35.731611'),(3,'contenttypes','0002_remove_content_type_name','2025-03-29 04:05:35.958394'),(4,'auth','0001_initial','2025-03-29 04:05:36.616029'),(5,'auth','0002_alter_permission_name_max_length','2025-03-29 04:05:36.678953'),(6,'auth','0003_alter_user_email_max_length','2025-03-29 04:05:36.703421'),(7,'auth','0004_alter_user_username_opts','2025-03-29 04:05:36.711544'),(8,'auth','0005_alter_user_last_login_null','2025-03-29 04:05:36.781303'),(9,'auth','0006_require_contenttypes_0002','2025-03-29 04:05:36.785767'),(10,'auth','0007_alter_validators_add_error_messages','2025-03-29 04:05:36.795557'),(11,'auth','0008_alter_user_username_max_length','2025-03-29 04:05:36.861098'),(12,'auth','0009_alter_user_last_name_max_length','2025-03-29 04:05:36.924424'),(13,'auth','0010_alter_group_name_max_length','2025-03-29 04:05:36.944257'),(14,'auth','0011_update_proxy_permissions','2025-03-29 04:05:36.954341'),(15,'auth','0012_alter_user_first_name_max_length','2025-03-29 04:05:37.021288'),(16,'sessions','0001_initial','2025-03-29 04:05:37.067026'),(17,'app01','0002_department_role','2025-03-29 04:14:49.254473'),(18,'app01','0003_user_delete_role_delete_student_and_more','2025-04-03 11:02:40.624860'),(19,'app01','0004_dishtable','2025-04-03 12:15:19.520653'),(20,'app01','0005_alter_dishtable_dish_name','2025-04-04 01:56:41.315398'),(21,'app01','0006_alter_dishtable_dish_amount','2025-04-04 01:56:41.330632'),(22,'app01','0007_alter_dishtable_dish_price','2025-04-04 01:56:41.418509'),(23,'app01','0008_alter_dishtable_dish_price','2025-04-04 01:56:41.502970'),(24,'app01','0009_alter_dishtable_dish_name','2025-04-04 01:56:41.709448'),(25,'app01','0010_supplier_delete_department','2025-04-09 14:14:31.283490'),(26,'app01','0011_userinfo','2025-04-10 10:37:06.262179'),(27,'app01','0012_user_password','2025-04-10 14:19:28.073957'),(28,'app01','0013_inventory','2025-04-11 04:06:11.649630'),(29,'app01','0014_alter_inventory_category','2025-04-11 04:13:47.389167'),(30,'app01','0015_alter_inventory_product_name','2025-04-12 01:20:13.421015'),(31,'app01','0016_inventory_amount','2025-04-12 01:21:40.346584');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-13 11:54:17
