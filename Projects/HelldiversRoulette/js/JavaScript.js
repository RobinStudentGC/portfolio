$(document).ready(function () {
    $("#hiddenSelection").hide();
    $("#hiddenStrategems").hide();
    $("#strategemBalanced").hide();
    $("#strategemHelldive").hide();
    $(".rouletteContainer").hide();

    let mode = "none";

    let images = [
        "./images/50px-AM-23_EMS_Mortar_Sentry_Stratagem_Icon.webp",
        "./images/50px-Anti-Materiel_Rifle_Stratagem_Icon.webp",
        "./images/50px-Anti-Personnel_Minefield_Stratagem_Icon.webp",
        "./images/50px-Arc_Thrower_Stratagem_Icon.webp",
        "./images/50px-Autocannon_Sentry_Stratagem_Icon.webp",
        "./images/50px-Autocannon_Stratagem_Icon.webp",
        "./images/50px-Ballistic_Shield_Backpack_Stratagem_Icon.webp",
        "./images/50px-Commando_Stratagem_Icon.webp",
        "./images/50px-Eagle_110mm_Rocket_Pods_Stratagem_Icon.webp",
        "./images/50px-Eagle_500kg_Bomb_Stratagem_Icon.webp",
        "./images/50px-Eagle_Airstrike_Stratagem_Icon.webp",
        "./images/50px-Eagle_Cluster_Bomb_Stratagem_Icon.webp",
        "./images/50px-Eagle_Napalm_Airstrike_Stratagem_Icon.webp",
        "./images/50px-Eagle_Smoke_Strike_Stratagem_Icon.webp",
        "./images/50px-Eagle_Strafing_Run_Stratagem_Icon.webp",
        "./images/50px-EXO-45_Patriot_Exosuit_Stratagem_Icon.webp",
        "./images/50px-EXO-49_Emancipator_Exosuit_Stratagem_Icon.webp",
        "./images/50px-Expendable_Anti-Tank_Stratagem_Icon.webp",
        "./images/50px-Flamethrower_Stratagem_Icon.webp",
        "./images/50px-Gas_Minefield_Stratagem_Icon.webp",
        "./images/50px-Gatling_Sentry_Stratagem_Icon.webp",
        "./images/50px-GL-21_Grenadier_Battlement_Stratagem_Icon.webp",
        "./images/50px-Grenade_Launcher_Stratagem_Icon.webp",
        "./images/50px-Guard_Dog_Rover_Stratagem_Icon.webp",
        "./images/50px-Guard_Dog_Stratagem_Icon.webp",
        "./images/50px-Heavy_Machine_Gun_Stratagem_Icon.webp",
        "./images/50px-HMG_Emplacement_Stratagem_Icon.webp",
        "./images/50px-Incendiary_Mines_Stratagem_Icon.webp",
        "./images/50px-Jump_Pack_Stratagem_Icon.webp",
        "./images/50px-Laser_Cannon_Stratagem_Icon.webp",
        "./images/50px-M-102_Fast_Recon_Vehicle_Stratagem_Icon.webp",
        "./images/50px-Machine_Gun_Sentry_Stratagem_Icon.webp",
        "./images/50px-Machine_Gun_Stratagem_Icon.webp",
        "./images/50px-MD-17_Anti-Tank_Mines_Stratagem_Icon.webp",
        "./images/50px-Mortar_Sentry_Stratagem_Icon.webp",
        "./images/50px-Orbital_120mm_HE_Barrage_Stratagem_Icon.webp",
        "./images/50px-Orbital_380mm_HE_Barrage_Stratagem_Icon.webp",
        "./images/50px-Orbital_Airburst_Strike_Stratagem_Icon.webp",
        "./images/50px-Orbital_EMS_Strike_Stratagem_Icon.webp",
        "./images/50px-Orbital_Gas_Strike_Stratagem_Icon.webp",
        "./images/50px-Orbital_Gatling_Barrage_Stratagem_Icon.webp",
        "./images/50px-Orbital_Laser_Stratagem_Icon.webp",
        "./images/50px-Orbital_Napalm_Barrage_Stratagem_Icon.webp",
        "./images/50px-Orbital_Precision_Strike_Stratagem_Icon.webp",
        "./images/50px-Orbital_Railcannon_Strike_Stratagem_Icon.webp",
        "./images/50px-Orbital_Smoke_Strike_Stratagem_Icon.webp",
        "./images/50px-Orbital_Walking_Barrage_Stratagem_Icon.webp",
        "./images/50px-Railgun_Stratagem_Icon.webp",
        "./images/50px-Recoilless_Rifle_Stratagem_Icon.webp",
        "./images/50px-RL-77_Airburst_Rocket_Launcher_Stratagem_Icon.webp",
        "./images/50px-Rocket_Sentry_Stratagem_Icon.webp",
        "./images/50px-Shield_Generator_Pack_Stratagem_Icon.webp",
        "./images/50px-Shield_Generator_Relay_Stratagem_Icon.webp",
        "./images/50px-Spear_Stratagem_Icon.webp",
        "./images/50px-StA-X3_W.webp",
        "./images/50px-Stalwart_Stratagem_Icon.webp",
        "./images/50px-Supply_Pack_Stratagem_Icon.webp",
        "./images/50px-Tesla_Tower_Stratagem_Icon.webp"
    ];

    $("#startButton").on("click", function () {
        $(".start").fadeOut(1000, function () {
            $("#hiddenSelection").fadeIn(1000);
        });
    });
    $("#strategems").on("click", function () {
        $("#hiddenSelection").fadeOut(1000, function () {
            $("#hiddenStrategems").fadeIn(1000);
        });
    });
    $(".BalancedBtn").on("mouseenter", function () {
        $("#strategemBalanced").fadeIn(300);
    }).on("mouseleave", function () {
        $("#strategemBalanced").fadeOut(200);
    });
    $(".HelldiveBtn").on("mouseenter", function () {
        $("#strategemHelldive").fadeIn(300);
    }).on("mouseleave", function () {
        $("#strategemHelldive").fadeOut(200);
    });

    $(".BalancedBtn").on("click", function () {
        $("#hiddenStrategems").fadeOut(1000, function () {
            $(".rouletteContainer").fadeIn(1000);
        });
        mode = "balanced";
    });

    $(".HelldiveBtn").on("click", function () {
        $("#hiddenStrategems").fadeOut(1000, function () {
            $(".rouletteContainer").fadeIn(1000);
        });
        mode = "helldive";
    });

    $("#spinButton").on("click", function () {
        if (mode === "helldive") {
            let usedIndexes = [];
            for (let inList = 1; inList <= 4; inList++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * images.length);
                } while (usedIndexes.includes(randomIndex) && usedIndexes.length < images.length);
                usedIndexes.push(randomIndex);
                let selectedImage = images[randomIndex];
                let itemId = "#img" + inList;
                $(itemId).attr("src", selectedImage);
                let strategemName = selectedImage.split("/").pop()
                    .replace(/^50px-/, "")
                    .replace(/(_Stratagem_Icon|_Icon)?\.webp$/, "")
                    .replace(/_/g, " ");
                let nameId = "#name" + inList;
                $(nameId).text(strategemName);
                $(itemId).fadeIn(1000);
            }
        }
    });
});