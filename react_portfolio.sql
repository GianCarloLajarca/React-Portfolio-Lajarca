-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2024 at 10:19 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `about_aid` int(11) NOT NULL,
  `about_title` varchar(50) NOT NULL,
  `about_image` varchar(50) NOT NULL,
  `about_is_active` tinyint(1) NOT NULL,
  `about_publish_date` varchar(20) NOT NULL,
  `about_description` text NOT NULL,
  `about_detail` text NOT NULL,
  `about_name` varchar(50) NOT NULL,
  `about_email` varchar(50) NOT NULL,
  `about_phone` varchar(50) NOT NULL,
  `about_birthday` varchar(50) NOT NULL,
  `about_nationality` varchar(50) NOT NULL,
  `about_address` varchar(50) NOT NULL,
  `about_created` varchar(20) NOT NULL,
  `about_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`about_aid`, `about_title`, `about_image`, `about_is_active`, `about_publish_date`, `about_description`, `about_detail`, `about_name`, `about_email`, `about_phone`, `about_birthday`, `about_nationality`, `about_address`, `about_created`, `about_datetime`) VALUES
(1, 'ABOUT ME', '../../img/home/Profile-aboutme.png', 1, '5/12/2024', 'Hello! Im Gian Carlo Lajarca, a fourth-year college student at De La Salle Lipa pursuing a Bachelor of Science in Information Technology. Throughout my academic journey, I have consistently demonstrated a passion for excellence and a dedication to learning.', 'As a Deans Lister from my first year to my current fourth year, I have maintained high academic standards while actively engaging in various courses and projects.\nMy time at De La Salle Lipa has not only equipped me with technical skills and knowledge but also instilled in me a strong work ethic and a commitment to continuous improvement. I am eager to apply my expertise in Information Technology to real-world challenges and contribute positively to the field. Thank you for visiting my portfolio. I invite you to explore my projects and experiences to learn more about my journey and accomplishments', 'Gian Carlo Lajarca', 'gianlajarca14@gmail.com', '09286889888', 'March 20,2001', 'Filipino', 'Brgy. Anilao-Labac Lipa City, Batangas', '2024-05-12 20:22:40', '2024-05-13 21:09:27');

-- --------------------------------------------------------

--
-- Table structure for table `certificate`
--

CREATE TABLE `certificate` (
  `certificate_aid` int(11) NOT NULL,
  `certificate_title` varchar(50) NOT NULL,
  `certificate_image` varchar(50) NOT NULL,
  `certificate_is_active` tinyint(1) NOT NULL,
  `certificate_publish_date` varchar(20) NOT NULL,
  `certificate_date` varchar(50) NOT NULL,
  `certificate_organization` varchar(100) NOT NULL,
  `certificate_created` varchar(20) NOT NULL,
  `certificate_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `certificate`
--

INSERT INTO `certificate` (`certificate_aid`, `certificate_title`, `certificate_image`, `certificate_is_active`, `certificate_publish_date`, `certificate_date`, `certificate_organization`, `certificate_created`, `certificate_datetime`) VALUES
(1, 'CompTIA IT Fundamentals ITF+ Certification', '../../img/home/cert-1.jpg', 1, '5/13/2024', 'July 2022', 'CompTIA', '2024-05-13 22:11:36', '2024-05-13 22:11:36'),
(2, 'SAP Certified Application Associate - SAP Business', '../../img/home/cert-2.jpg', 1, '5/13/2024', 'December 2022', 'FIT Academy', '2024-05-13 22:12:38', '2024-05-13 22:12:38'),
(3, 'Skills To Succeed Academy Certificate of Achieveme', '../../img/home/cert-3.jpg', 1, '5/13/2024', 'March 2023', 'Accenture', '2024-05-13 22:13:20', '2024-05-13 22:13:34'),
(4, 'Gotta Catch-Em All: Introduction to Digital Forens', '../../img/home/cert-4.jpg', 1, '5/13/2024', 'March 2023', 'Junior Philippine Computer Society - Mapúa University', '2024-05-13 22:14:03', '2024-05-13 22:21:13'),
(5, 'MasterClass 101', '../../img/home/cert-6.jpg', 1, '5/13/2024', 'June 2023', 'Junior Philippine Computer Society - De La Salle Lipa', '2024-05-13 22:14:53', '2024-05-13 22:21:21'),
(6, 'Campus DEVCON', '../../img/home/cert-5.jpg', 1, '5/13/2024', 'April 2023', 'Junior Philippine Computer Society - De La Salle Lipa', '2024-05-13 22:15:57', '2024-05-13 22:21:26');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `experience_aid` int(11) NOT NULL,
  `experience_title` varchar(50) NOT NULL,
  `experience_image` varchar(50) NOT NULL,
  `experience_is_active` tinyint(1) NOT NULL,
  `experience_description` text NOT NULL,
  `experience_date` varchar(50) NOT NULL,
  `experience_job` varchar(50) NOT NULL,
  `experience_publish_date` varchar(20) NOT NULL,
  `experience_datetime` varchar(20) NOT NULL,
  `experience_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`experience_aid`, `experience_title`, `experience_image`, `experience_is_active`, `experience_description`, `experience_date`, `experience_job`, `experience_publish_date`, `experience_datetime`, `experience_created`) VALUES
(2, 'Frontline Business Solutions, Inc.', '../../img/home/fbs-experience.png', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non asperiores facere eveniet itaque porro aperiam quae harum.', 'February 19, 2024 - Present', 'Web Development Intern', '5/13/2024', '2024-05-13 21:09:53', '2024-05-13 20:11:37');

-- --------------------------------------------------------

--
-- Table structure for table `honor`
--

CREATE TABLE `honor` (
  `honor_aid` int(11) NOT NULL,
  `honor_title` varchar(50) NOT NULL,
  `honor_image` varchar(50) NOT NULL,
  `honor_is_active` tinyint(1) NOT NULL,
  `honor_publish_date` varchar(20) NOT NULL,
  `honor_date` varchar(50) NOT NULL,
  `honor_giver` varchar(50) NOT NULL,
  `honor_created` varchar(20) NOT NULL,
  `honor_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `honor`
--

INSERT INTO `honor` (`honor_aid`, `honor_title`, `honor_image`, `honor_is_active`, `honor_publish_date`, `honor_date`, `honor_giver`, `honor_created`, `honor_datetime`) VALUES
(1, 'Third Honor Awardee - Second Semester of A.Y. 2022', '../../img/home/honor-1.jpg', 1, '5/13/2024', 'November 2023', 'De La Salle Lipa', '2024-05-13 20:55:14', '2024-05-13 20:55:14'),
(2, 'Second Honor Awardee - First Semester of A.Y. 2022', '../../img/home/honor-2.jpg', 1, '5/13/2024', 'April 2021', 'De La Salle Lipa', '2024-05-13 20:57:20', '2024-05-13 21:12:30'),
(3, 'First Honor Awardee - Second Semester of A.Y. 2021', '../../img/home/honor-3.png', 1, '5/13/2024', 'December 2021', 'De La Salle Lipa', '2024-05-13 20:58:19', '2024-05-13 20:58:19'),
(4, 'First Honor Awardee - First Semester of A.Y. 2021-', '../../img/home/honor-4.png', 1, '5/13/2024', 'May 2022', 'De La Salle Lipa', '2024-05-13 20:59:26', '2024-05-13 20:59:26'),
(5, 'First Honor Awardee - Second Semester of A.Y. 2020', '../../img/home/honor-5.png', 1, '5/13/2024', 'November 2021', 'De La Salle Lipa', '2024-05-13 21:00:07', '2024-05-13 21:00:07'),
(6, 'Dean’s List - Third Honor for the 1st Semester A.Y', '../../img/home/honor-6.jpg', 1, '5/13/2024', 'May 2022', 'De La Salle Lipa', '2024-05-13 21:01:01', '2024-05-13 21:01:01');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_aid` int(11) NOT NULL,
  `project_thumbnail` varchar(100) NOT NULL,
  `project_category` varchar(20) NOT NULL,
  `project_is_active` tinyint(1) NOT NULL,
  `project_publish_date` varchar(20) NOT NULL,
  `project_description` text NOT NULL,
  `project_button` varchar(50) NOT NULL,
  `project_image_1` varchar(50) NOT NULL,
  `project_image_2` varchar(50) NOT NULL,
  `project_image_3` varchar(50) NOT NULL,
  `project_image_4` varchar(50) NOT NULL,
  `project_image_5` varchar(50) NOT NULL,
  `project_image_6` varchar(50) NOT NULL,
  `project_created` varchar(20) NOT NULL,
  `project_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `service_aid` int(11) NOT NULL,
  `service_title` varchar(50) NOT NULL,
  `service_image` varchar(100) NOT NULL,
  `service_is_active` tinyint(1) NOT NULL,
  `service_publish_date` varchar(20) NOT NULL,
  `service_datetime` varchar(20) NOT NULL,
  `service_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`service_aid`, `service_title`, `service_image`, `service_is_active`, `service_publish_date`, `service_datetime`, `service_created`) VALUES
(1, 'UI / UX', '../../img/home/service-1.png', 1, '5/12/2024', '2024-05-12 10:33:36', '2024-05-12 10:33:36'),
(2, 'Web Development', '../../img/home/service-2.jpg', 1, '5/12/2024', '2024-05-12 10:42:13', '2024-05-12 10:42:13'),
(3, 'Application Development', '../../img/home/service-3.png', 1, '5/12/2024', '2024-05-12 10:42:45', '2024-05-12 10:42:45');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `skill_aid` int(11) NOT NULL,
  `skill_title` varchar(50) NOT NULL,
  `skill_image` varchar(50) NOT NULL,
  `skill_is_active` tinyint(1) NOT NULL,
  `skill_description` text NOT NULL,
  `skill_publish_date` varchar(20) NOT NULL,
  `skill_datetime` varchar(20) NOT NULL,
  `skill_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`skill_aid`, `skill_title`, `skill_image`, `skill_is_active`, `skill_description`, `skill_publish_date`, `skill_datetime`, `skill_created`) VALUES
(2, 'C++ Programming', '../../img/home/skills-1.png', 1, 'Proficient in C++ programming, I excel in developing efficient and robust software solutions. With a strong grasp of object-oriented programming principles, I leverage C++ to create high-performance applications across various domains. Lorem ipsum dolor sit amet consectetur adipisicing elit.', '5/11/2024', '2024-05-11 19:29:15', '2024-05-11 19:26:02'),
(3, 'Information Security', '../../img/home/skills-2.png', 1, 'Skilled in information security, I specialize in safeguarding digital assets and mitigating cybersecurity risks. From implementing encryption protocols to conducting vulnerability assessments, I ensure the confidentiality, integrity, and availability of data.', '5/11/2024', '2024-05-11 19:29:10', '2024-05-11 19:27:32'),
(4, 'MS Access', '../../img/home//skills-3.png', 1, 'Experienced in database management, I proficiently design, optimize, and maintain relational databases using MySQL and MS Access. With expertise in SQL querying and database administration, I ensure efficient data storage, retrieval, and management.', '5/11/2024', '2024-05-11 19:30:18', '2024-05-11 19:29:03'),
(5, 'MySQL', '../../img/home/skills-4.png', 1, 'Experienced in database management, I proficiently design, optimize, and maintain relational databases using MySQL and MS Access. With expertise in SQL querying and database administration, I ensure efficient data storage, retrieval, and management.', '5/11/2024', '2024-05-11 19:31:03', '2024-05-11 19:31:03'),
(6, 'Networking', '../../img/home/skills-5.png', 1, 'Knowledgeable in networking principles, I design and configure network infrastructures to facilitate seamless communication and connectivity. From setting up routers and switches to troubleshooting network issues, I ensure reliable and secure network operations', '5/11/2024', '2024-05-11 19:53:53', '2024-05-11 19:35:41'),
(7, 'ReactJS', '../../img/home/skills-6.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:36:45', '2024-05-11 19:36:45'),
(8, 'HTML', '../../img/home/skills-7.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:37:27', '2024-05-11 19:37:27'),
(9, 'Tailwind CSS', '../../img/home/skills-8.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:38:28', '2024-05-11 19:38:28'),
(10, 'SASS', '../../img/home/skills-9.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:39:51', '2024-05-11 19:39:51'),
(11, 'Javascript', '../../img/home/skills-10.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:40:34', '2024-05-11 19:40:34'),
(12, 'Ui Path Robotic Process Automation', '../../img/home/skills-11.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:42:23', '2024-05-11 19:42:23'),
(13, 'Cisco Packet Tracer', '../../img/home/skills-13.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:44:06', '2024-05-11 19:44:06'),
(14, 'Ettercap', '../../img/home/skills-14.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:44:34', '2024-05-11 19:44:34'),
(15, 'Windows Server 2012', '../../img/home/skills-15.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:45:03', '2024-05-11 19:45:03'),
(16, 'Kali Linux', '../../img/home/skills-12.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:46:26', '2024-05-11 19:46:26'),
(17, 'SAP Business One', '../../img/home/skills-16.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:47:36', '2024-05-11 19:47:36'),
(18, 'SAP S/4 HANA', '../../img/home/skills-17.png', 1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?', '5/11/2024', '2024-05-11 19:48:15', '2024-05-11 19:48:15');

-- --------------------------------------------------------

--
-- Table structure for table `top`
--

CREATE TABLE `top` (
  `top_aid` int(11) NOT NULL,
  `top_title` varchar(50) NOT NULL,
  `top_image` varchar(50) NOT NULL,
  `top_is_active` tinyint(1) NOT NULL,
  `top_publish_date` varchar(20) NOT NULL,
  `top_date` varchar(50) NOT NULL,
  `top_giver` varchar(100) NOT NULL,
  `top_created` varchar(20) NOT NULL,
  `top_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `top`
--

INSERT INTO `top` (`top_aid`, `top_title`, `top_image`, `top_is_active`, `top_publish_date`, `top_date`, `top_giver`, `top_created`, `top_datetime`) VALUES
(1, 'Top Student in Data Structure and Algorithms', '../../img/home/topperforming-1.jpg', 1, '5/13/2024', 'May 2022', 'De La Salle Lipa Junior Philippine Computer Society', '2024-05-13 21:37:20', '2024-05-13 22:23:26'),
(2, 'Top Student in IT Elective 2 Information Security', '../../img/home/topperforming-2.png', 1, '5/13/2024', 'June 2023', 'De La Salle Lipa Junior Philippine Computer Society', '2024-05-13 21:38:28', '2024-05-13 22:23:31'),
(3, 'Top Student in Fundamentals of Database Systems', '../../img/home/topperforming-3.png', 1, '5/13/2024', 'June 2023', 'De La Salle Lipa Junior Philippine Computer Society', '2024-05-13 21:39:32', '2024-05-13 22:23:36'),
(4, 'Top Student in Applications Development and Emergi', '../../img/home/topperforming-4.png', 1, '5/13/2024', 'June 2023', 'De La Salle Lipa Junior Philippine Computer Society', '2024-05-13 21:40:31', '2024-05-13 22:23:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`about_aid`);

--
-- Indexes for table `certificate`
--
ALTER TABLE `certificate`
  ADD PRIMARY KEY (`certificate_aid`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`experience_aid`);

--
-- Indexes for table `honor`
--
ALTER TABLE `honor`
  ADD PRIMARY KEY (`honor_aid`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_aid`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`service_aid`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`skill_aid`);

--
-- Indexes for table `top`
--
ALTER TABLE `top`
  ADD PRIMARY KEY (`top_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `certificate`
--
ALTER TABLE `certificate`
  MODIFY `certificate_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `experience_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `honor`
--
ALTER TABLE `honor`
  MODIFY `honor_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `service_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `skill_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `top`
--
ALTER TABLE `top`
  MODIFY `top_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
