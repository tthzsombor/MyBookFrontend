-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 24. 09:22
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `mybook`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `bookname` varchar(191) NOT NULL,
  `release` int(11) NOT NULL,
  `writer` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `books`
--

INSERT INTO `books` (`id`, `bookname`, `release`, `writer`) VALUES
(1, 'Bűn és Bűnhődés', 1866, 'Fjodor Mihajlovics Dosztojevszkij'),
(2, 'Fehér Éjszakák', 1848, 'Fjodor Mihajlovics Dosztojevszkij'),
(3, 'Ördögök', 1872, 'Fjodor Mihajlovics Dosztojevszkij'),
(4, 'A Karamazov testvérek', 1880, 'Fjodor Mihajlovics Dosztojevszkij'),
(6, 'Feljegyzések az egérlyukból', 1864, 'Fjodor Mihajlovics Dosztojevszkij'),
(7, 'Közöny', 1942, 'Albert Camus'),
(9, 'Sziszüphosz Mítosza', 1942, 'Albert Camus');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `genrename` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `genres`
--

INSERT INTO `genres` (`id`, `genrename`) VALUES
(18, 'Abszurdizmus'),
(17, 'Egzisztencializmus'),
(12, 'Életrajz'),
(1, 'Fantasy'),
(8, 'Filozófia'),
(3, 'Horror'),
(7, 'Kaland'),
(5, 'Komédia'),
(4, 'Krimi'),
(13, 'Mese'),
(14, 'Novella'),
(6, 'Realizmus'),
(2, 'Romantikus'),
(9, 'Sci-fi'),
(11, 'Szép Irodalom'),
(10, 'Történelem'),
(16, 'Tragédia'),
(15, 'Vers');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `statusname` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `status`
--

INSERT INTO `status` (`id`, `statusname`) VALUES
(1, 'Tervben van'),
(2, 'Kiolvasva'),
(3, 'Most olvasom'),
(4, 'Szüneteltetem'),
(5, 'Abbahagytam');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `token`
--

CREATE TABLE `token` (
  `token` varchar(191) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- Hiba a(z) mybook.token tábla adatainak olvasásakor: #2006 - MySQL server has gone away
<div class="alert alert-danger" role="alert"><h1>Hiba</h1><p><strong>SQL lekérdezés:</strong>  <a href="#" class="copyQueryBtn" data-text="SET SQL_QUOTE_SHOW_CREATE = 1">Másolás</a>
<a href="index.php?route=/database/sql&sql_query=SET+SQL_QUOTE_SHOW_CREATE+%3D+1&show_query=1&db=mybook"><span class="text-nowrap"><img src="themes/dot.gif" title="Módosítás" alt="Módosítás" class="icon ic_b_edit">&nbsp;Módosítás</span></a>    </p>
<p>
<code class="sql"><pre>
SET SQL_QUOTE_SHOW_CREATE = 1
</pre></code>
</p>
<p>
    <strong>A MySQL mondta: </strong><a href="./url.php?url=https%3A%2F%2Fdev.mysql.com%2Fdoc%2Frefman%2F8.0%2Fen%2Fserver-error-reference.html" target="mysql_doc"><img src="themes/dot.gif" title="Dokumentáció" alt="Dokumentáció" class="icon ic_b_help"></a>
</p>
<code>#2006 - MySQL server has gone away</code><br></div>