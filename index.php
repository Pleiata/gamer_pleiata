<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameR_Pleiata Website</title>
    <style>
        body {
            margin: 0;
            background-color: #000;
            color: #325EA8;
            font-family: Arial, sans-serif;
        }

        header {
            background-color: #000;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 10;
            box-shadow: 0 0 15px #325EA8;
        }

        .logo {
            display: flex;
            align-items: center;
            color: #325EA8;
            font-size: 24px;
            font-family: 'Roboto', sans-serif;
        }

        .logo img {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-right: 10px;
        }

        .menu {
            display: flex;
            gap: 20px;
        }

        .menu a {
            color: #325EA8;
            text-decoration: none;
            font-size: 18px;
            padding: 10px 20px;
            border-radius: 5px;
            transition: 0.3s;
            font-family: 'Roboto', sans-serif;
        }

        .menu a:hover {
            color: #FFF;
            box-shadow: 0 0 8px #325EA8, 0 0 15px #325EA8;
            transform: scale(1.1);
        }

        .profile-section {
            text-align: center;
            margin-top: 100px;
        }

        .profile-section img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 20px;
        }

        .profile-name {
            color: #325EA8;
            font-size: 18px;
            font-weight: bold;
            text-shadow: 0 0 8px #325EA8;
        }

        .videos-container {
            margin-top: 50px;
            padding: 20px;
        }

        .game-container {
            background-color: #111;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 40px;
            color: #325EA8;
            box-shadow: 0 0 15px rgba(50, 94, 168, 0.5);
        }

        .game-title {
            font-size: 24px;
            color: #325EA8;
            margin-bottom: 15px;
            text-shadow: 0 0 5px #325EA8;
        }

        #division-2-videos-container, #gta-v-videos-container, #nfs-heat-videos-container, #warface-videos-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }

        .container {
            width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            box-shadow: 0 0 15px #325EA8;
            border-radius: 10px;
            transition: transform 0.3s ease;
        }

        .container:hover {
            transform: scale(1.05);
        }

        .video iframe {
            width: 100%;
            height: 300px;
            border-radius: 10px;
        }

        .video-details {
            color: #325EA8;
            font-size: 14px;
            text-align: center;
            margin-top: 5px;
        }

        /* Reszponzív design */
        @media (max-width: 768px) {
            header {
                flex-direction: column;
                align-items: flex-start;
            }
            .menu {
                flex-direction: column;
                gap: 10px;
                margin-top: 20px;
            }
            .container {
                width: 100%;
                max-width: 300px;
            }
        }
    </style>
</head>
<body>

<header>
    <div class="logo">
        <img src="gamer_pleiata.png" alt="Logo">
        <span style="font-family: 'Roboto', sans-serif; color: #325EA8; font-size: 30px; text-shadow: 0 0 8px #325EA8;">GameR_Pleiata Website</span>
    </div>
    <nav class="menu">
        <a href="index.php">Kezdőlap</a>
        <a href="ismerteto.php">Ismertető</a>
        <a href="pc_konfigok.php">PC Konfiguráció</a>
    </nav>
</header>

<div class="profile-section">
    <img src="gamer_pleiata.jpg" alt="GameR_Pleiata">
    <img src="sanchez_commandr.jpg" alt="Sanchez_CommandR">
    <div>
        <span class="profile-name">GameR_Pleiata</span>
        <span class="profile-name">Sanchez_CommandR</span>
    </div>
</div>

<div class="videos-container">

    <div class="game-container">
        <h2 class="game-title">GTA V Online</h2>
        <div id="gta-v-videos-container">
            <!-- Videók betöltése a gta_v.js-ből -->
        </div>
    </div>

    <div class="game-container">
        <h2 class="game-title">NFS Heat</h2>
        <div id="nfs-heat-videos-container">
            <!-- Videók betöltése a nfs_heat.js-ből -->
        </div>
    </div>

    <div class="game-container">
        <h2 class="game-title">Tom Clancy's The Division 2</h2>
        <div id="division-2-videos-container">
            <!-- Videók betöltése a division_2.js-ből -->
        </div>
    </div>

    <div class="game-container">
        <h2 class="game-title">Warface</h2>
        <div id="warface-videos-container">
            <!-- Videók betöltése a warface.js-ből -->
        </div>
    </div>

</div>

<script src="videos/gta_v.js"></script>
<script src="videos/nfs_heat.js"></script>
<script src="videos/division_2.js"></script>
<script src="videos/warface.js"></script>

</body>
</html>
