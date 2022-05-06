-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bd_project_sprints
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bd_project_sprints
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bd_project_sprints` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bd_project_sprints` ;

-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fristName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `nick` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` TEXT NULL,
  `address` VARCHAR(60) NULL,
  `image` VARCHAR(60) NULL,
  `types_id` INT NOT NULL,
  `createdAt` DATE NULL,
  `updateAt` DATE NULL,
  `deletedAt` DATE NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `nick_UNIQUE` (`nick` ASC) VISIBLE,
  INDEX `fk_Users_types_idx` (`types_id` ASC) VISIBLE,
  CONSTRAINT `fk_Users_types`
    FOREIGN KEY (`types_id`)
    REFERENCES `bd_project_sprints`.`Types` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Memory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Memory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Ram`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Ram` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Bills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Bills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NULL,
  `price` INT NOT NULL,
  `category_id` INT NOT NULL,
  `image` VARCHAR(60) NULL,
  `color_id` INT NOT NULL,
  `brand_id` INT NOT NULL,
  `memory_id1` INT NOT NULL,
  `ram_id` INT NOT NULL,
  `bill_id` INT NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  `deletedAt` DATE NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Products_Categories1_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_Products_Color1_idx` (`color_id` ASC) VISIBLE,
  INDEX `fk_Products_Brands1_idx` (`brand_id` ASC) VISIBLE,
  INDEX `fk_Products_memory1_idx` (`memory_id1` ASC) VISIBLE,
  INDEX `fk_Products_Ram1_idx` (`ram_id` ASC) VISIBLE,
  INDEX `fk_Products_Bills1_idx` (`bill_id` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Categories1`
    FOREIGN KEY (`category_id`)
    REFERENCES `bd_project_sprints`.`Categories` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_Color1`
    FOREIGN KEY (`color_id`)
    REFERENCES `bd_project_sprints`.`Colors` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_Brands1`
    FOREIGN KEY (`brand_id`)
    REFERENCES `bd_project_sprints`.`Brands` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_memory1`
    FOREIGN KEY (`memory_id1`)
    REFERENCES `bd_project_sprints`.`Memory` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_Ram1`
    FOREIGN KEY (`ram_id`)
    REFERENCES `bd_project_sprints`.`Ram` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Products_Bills1`
    FOREIGN KEY (`bill_id`)
    REFERENCES `bd_project_sprints`.`Bills` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`ShoppingCarts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`ShoppingCarts` (
  `id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ShoppingCarts_Users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_ShoppingCarts_Users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `bd_project_sprints`.`Users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`ShoppingCart_has_Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`ShoppingCart_has_Products` (
  `ShoppingCart_id` INT NOT NULL,
  `Products_id` INT NOT NULL,
  PRIMARY KEY (`ShoppingCart_id`, `Products_id`),
  INDEX `fk_ShoppingCart_has_Products_Products1_idx` (`Products_id` ASC) VISIBLE,
  INDEX `fk_ShoppingCart_has_Products_ShoppingCart1_idx` (`ShoppingCart_id` ASC) VISIBLE,
  CONSTRAINT `fk_ShoppingCart_has_Products_ShoppingCart1`
    FOREIGN KEY (`ShoppingCart_id`)
    REFERENCES `bd_project_sprints`.`ShoppingCarts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ShoppingCart_has_Products_Products1`
    FOREIGN KEY (`Products_id`)
    REFERENCES `bd_project_sprints`.`Products` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_project_sprints`.`Users_has_Bills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_project_sprints`.`Users_has_Bills` (
  `Users_id` INT NOT NULL,
  `Bills_id` INT NOT NULL,
  PRIMARY KEY (`Users_id`, `Bills_id`),
  INDEX `fk_Users_has_Bills_Bills1_idx` (`Bills_id` ASC) VISIBLE,
  INDEX `fk_Users_has_Bills_Users1_idx` (`Users_id` ASC) VISIBLE,
  CONSTRAINT `fk_Users_has_Bills_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `bd_project_sprints`.`Users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Users_has_Bills_Bills1`
    FOREIGN KEY (`Bills_id`)
    REFERENCES `bd_project_sprints`.`Bills` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
