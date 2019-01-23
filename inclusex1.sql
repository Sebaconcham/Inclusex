-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-01-2019 a las 23:19:48
-- Versión del servidor: 5.7.23
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inclusex1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenido`
--

DROP TABLE IF EXISTS `contenido`;
CREATE TABLE IF NOT EXISTS `contenido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut_creador` varchar(20) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `resumen` varchar(400) NOT NULL,
  `texto` text NOT NULL,
  `tipo_lesion` varchar(10) NOT NULL,
  `nivel_lesion` varchar(10) NOT NULL,
  `fecha_cre` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `visitas` int(5) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `rut_creador` (`rut_creador`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialista`
--

DROP TABLE IF EXISTS `especialista`;
CREATE TABLE IF NOT EXISTS `especialista` (
  `rut` varchar(15) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `genero` enum('M','F','O') NOT NULL,
  `fecha_nac` date NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  PRIMARY KEY (`rut`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `especialista`
--

INSERT INTO `especialista` (`rut`, `nombre`, `correo`, `genero`, `fecha_nac`, `contrasena`) VALUES
('11', 'Especialista prueba', '1', 'M', '0000-00-00', '1'),
('11111111', 'dsla', 'ljñl', '', '2019-01-21', '1'),
('123021', 'lkj', 'lkj', '', '2019-01-21', '1'),
('rut especialist', 'nombre', 'asdkoas', '', '2019-01-21', '11'),
('137804875', 'Carlos', 'cbecerra', '', '2019-01-21', '12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
CREATE TABLE IF NOT EXISTS `mensaje` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `asunto` varchar(50) NOT NULL,
  `rut_e` varchar(30) NOT NULL,
  `pregunta` text NOT NULL,
  `fecha_p` datetime NOT NULL,
  `visto_p` tinyint(1) DEFAULT NULL,
  `rut_r` varchar(30) DEFAULT NULL,
  `respuesta` text,
  `fecha_r` datetime DEFAULT NULL,
  `visto_r` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mensaje`
--

INSERT INTO `mensaje` (`id`, `asunto`, `rut_e`, `pregunta`, `fecha_p`, `visto_p`, `rut_r`, `respuesta`, `fecha_r`, `visto_r`) VALUES
(1, '1', '1', 'pregunta prueba', '2019-01-08 00:00:00', 0, NULL, 'respuesta app', '2019-01-14 12:54:59', 1),
(2, '2', '1', 'pregunta prueba', '2019-01-08 19:01:56', NULL, '11', 'respusta app 2', '2019-01-14 12:57:06', 1),
(3, '3', '1', 'pregunta prueba', '2019-01-08 17:01:01', NULL, '11', 'respuesta app 5', '2019-01-14 13:03:07', 1),
(4, 'asunto prueba', '18925797k', 'pregunta prueba 2', '2019-01-08 17:01:40', 1, '0', 'asdasd', NULL, NULL),
(5, 'asunto', '1', 'pregunta prueba 2', '2019-01-08 17:15:12', NULL, '11', 'respuesta app 7', '2019-01-14 13:04:09', 1),
(6, 'enviar mensaje prueba', '18925797k', 'enviar mensaje prueba', '2019-01-14 02:03:18', 1, '11', 'respuesta prueba 4', '2019-01-14 12:58:46', 1),
(7, '12312312', '18925797k', '21312312', '2019-01-14 02:04:35', 1, '11', 'respuesta 10', '2019-01-14 13:04:35', 1),
(8, 'dasd', '18925797k', 'asdsa', '2019-01-14 11:19:37', 1, '11', 'asd', '2019-01-14 13:06:06', 1),
(9, 'mensaje con app', '18925797k', 'mensaje con app', '2019-01-14 11:19:51', 1, 'false', 'respuesta con app', '2019-01-14 13:35:04', 1),
(10, 'Pregunta creada 1', '18925797k', 'pregunta ', '2019-01-14 13:22:07', 1, 'false', 'soy una respuesta 2', '2019-01-14 13:40:25', 1),
(11, 'soy un asunto', '18925797k', 'soy un mensaje', '2019-01-14 13:39:38', 1, 'false', 'soy una respuesta', '2019-01-14 13:40:14', 1),
(12, 'pregunta prueba TDA', '18925797k', 'ASUNTOTDA', '2019-01-14 14:46:12', 1, 'false', 'respuesta TDA', '2019-01-14 14:46:36', 1),
(13, 'mensaje nuevo', '18925797k', 'aopdjaspodjaospdjpasjdpoasjda nuevo', '2019-01-18 19:54:09', 1, '11', 'aposjdsapd', '2019-01-21 14:34:56', 1),
(14, 'prueba final', '18925797k', '1234', '2019-01-21 14:31:10', 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

DROP TABLE IF EXISTS `pregunta`;
CREATE TABLE IF NOT EXISTS `pregunta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_trivia` varchar(50) NOT NULL,
  `pregunta` varchar(50) NOT NULL,
  `alternativa_c` varchar(30) NOT NULL,
  `alternativa_i1` varchar(30) NOT NULL,
  `alternativa_i2` varchar(30) NOT NULL,
  `alternativa_i3` varchar(30) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_trivia` (`nombre_trivia`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`id`, `nombre_trivia`, `pregunta`, `alternativa_c`, `alternativa_i1`, `alternativa_i2`, `alternativa_i3`, `fecha_creacion`) VALUES
(29, 'trivia nueva final final', 'pregunta 2', 'a', 'b', 'c', 'd', '2019-01-19 20:47:17'),
(28, 'trivia nueva final final', 'pregunta 1 ', 'a', 'b', 'c', 'd', '2019-01-19 20:47:16'),
(27, 'spdas', 'pregutna 2', 'a', 'b', 'c', 'd', '2019-01-19 16:41:19'),
(26, 'spdas', 'pregunta 1', 'a', 'b', 'c', 'd', '2019-01-19 16:41:19'),
(25, 'trivia creada final', 'pregutna 2', 'a', 'b', 'c', 'd', '2019-01-19 16:31:03'),
(24, 'trivia creada final', 'pregunta 1', 'a', 'b', 'c', 'd', '2019-01-19 16:31:03'),
(23, 'trivia creada final', 'pregutna 2', 'a', 'b', 'c', 'd', '2019-01-19 16:30:05'),
(22, 'trivia creada final', 'pregunta 1', 'a', 'b', 'c', 'd', '2019-01-19 16:30:05'),
(60, 'trivia buena', 'pregunta 1', '1', '2', '3', '4', '2019-01-20 22:51:15'),
(59, 'dapsdjasd', 'sdp´k', '´dk', '´dk´p', 'asd', '	dk', '2019-01-20 02:04:41'),
(58, 'hola hola', 'pregunta 1', 'a', 'b', 'c', 'd', '2019-01-20 01:55:39'),
(30, 'ahora si', 'we', 'ñlk', 'lñkñl', 'ñlk', 'ñ', '2019-01-19 20:49:10'),
(31, 'ahora si', 'we', 'ñlk', 'lñkñl', 'ñlk', 'ñ', '2019-01-19 20:50:41'),
(61, 'trivia buena', 'pregunta 2', '1', '2', '3', '4', '2019-01-20 22:51:15'),
(45, 'ewe', 'qpowek', 'pkewpow', 'opekop', 'weo', 'pe', '2019-01-19 21:17:42'),
(47, 'weadsa', 'asp´dk', 'dkp´wd', '´dkpd', '´dk', 'dk´p', '2019-01-19 21:26:51'),
(57, 'hola', 'pregunta 1', 'a', 'b', 'c', 'd', '2019-01-20 01:55:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta_trivia`
--

DROP TABLE IF EXISTS `respuesta_trivia`;
CREATE TABLE IF NOT EXISTS `respuesta_trivia` (
  `id_pregunta` int(15) NOT NULL,
  `respuesta` varchar(10) NOT NULL,
  `id_usuario` int(15) NOT NULL,
  PRIMARY KEY (`id_pregunta`,`id_usuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trivia`
--

DROP TABLE IF EXISTS `trivia`;
CREATE TABLE IF NOT EXISTS `trivia` (
  `nombre` varchar(50) NOT NULL,
  `texto_com` int(11) NOT NULL,
  `rut_creador` varchar(30) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`nombre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `trivia`
--

INSERT INTO `trivia` (`nombre`, `texto_com`, `rut_creador`, `fecha_creacion`) VALUES
('qewqeq', 3213, '12', '2019-01-19 06:02:53'),
('wqeqle', 3213, '12', '2019-01-19 06:00:42'),
('dapsdjasd', 0, '', '2019-01-20 02:04:42'),
('hola', 0, '', '2019-01-20 01:55:17'),
('ñññwewe', 3213, '12', '2019-01-19 06:10:26'),
('trivia creada final', 0, '', '2019-01-19 16:30:05'),
('spdas', 0, '', '2019-01-19 16:41:19'),
('trivia nueva final final', 0, '', '2019-01-19 20:47:17'),
('ewe', 0, '', '2019-01-19 21:17:42'),
('qwewqe', 0, '', '2019-01-19 21:20:28'),
('weadsa', 0, '', '2019-01-19 21:26:51'),
('hola hola', 0, '', '2019-01-20 01:55:39'),
('trivia buena', 37, '', '2019-01-20 22:51:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `rut` varchar(15) NOT NULL,
  `tipo` enum('1','2') NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `genero` enum('M','F','O') NOT NULL,
  `fecha_nac` date NOT NULL,
  `tipo_lesion` varchar(10) NOT NULL,
  `nivel_lesion` varchar(10) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  PRIMARY KEY (`rut`,`tipo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`rut`, `tipo`, `nombre`, `correo`, `genero`, `fecha_nac`, `tipo_lesion`, `nivel_lesion`, `contrasena`) VALUES
('187852412', '1', 'deago', 'asjdoasd@jajd.com', 'M', '2018-12-26', 'completa', '3', '1234'),
('12323', '1', 'sodpjasopd', 'jdfposfjd', 'M', '2018-12-24', 'completa', '6', '123'),
('18925797k', '', 'franco piña osorio', 'franco.pina@alumnos.uv.cl', 'O', '2019-01-21', 'completa', '5', '1234'),
('wqwq', '1', 'asdasd', 'asdsa', 'M', '0000-00-00', '', '', ''),
('190677303', '1', 'constanza', 'fra@dpkdsf.com', '', '0000-00-00', '', '', ''),
('1', '2', 'asd', 'asda', 'O', '2018-12-27', 'completa', '5', '1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
