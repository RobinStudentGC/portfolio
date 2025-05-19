$(document).ready(function () {
    $("#hiddenSelection").hide();
    $("#hiddenStrategems").hide();
    $("#strategemBalanced").hide();
    $("#strategemHelldive").hide();
    $(".rouletteContainer").hide();
    $(".images").hide();

    let mode = "none";

    let images = [
        "./images/50px-AM-23_EMS_Mortar_Sentry_Stratagem_Icongreen.webp",
        "./images/50px-Anti-Materiel_Rifle_Stratagem_Iconblue.webp",
        "./images/50px-Anti-Personnel_Minefield_Stratagem_Icongreen.webp",
        "./images/50px-Arc_Thrower_Stratagem_Iconblue.webp",
        "./images/50px-Autocannon_Sentry_Stratagem_Icongreen.webp",
        "./images/50px-Autocannon_Stratagem_Iconblue.webp",
        "./images/50px-Ballistic_Shield_Backpack_Stratagem_Iconblue.webp",
        "./images/50px-Commando_Stratagem_Iconblue.webp",
        "./images/50px-Eagle_110mm_Rocket_Pods_Stratagem_Icon.webp",
        "./images/50px-Eagle_500kg_Bomb_Stratagem_Icon.webp",
        "./images/50px-Eagle_Airstrike_Stratagem_Icon.webp",
        "./images/50px-Eagle_Cluster_Bomb_Stratagem_Icon.webp",
        "./images/50px-Eagle_Napalm_Airstrike_Stratagem_Icon.webp",
        "./images/50px-Eagle_Smoke_Strike_Stratagem_Icon.webp",
        "./images/50px-Eagle_Strafing_Run_Stratagem_Icon.webp",
        "./images/50px-EXO-45_Patriot_Exosuit_Stratagem_Iconblue.webp",
        "./images/50px-EXO-49_Emancipator_Exosuit_Stratagem_Iconblue.webp",
        "./images/50px-Expendable_Anti-Tank_Stratagem_Iconblue.webp",
        "./images/50px-Flamethrower_Stratagem_Iconblue.webp",
        "./images/50px-Gas_Minefield_Stratagem_Icongreen.webp",
        "./images/50px-Gatling_Sentry_Stratagem_Icongreen.webp",
        "./images/50px-GL-21_Grenadier_Battlement_Stratagem_Icongreen.webp",
        "./images/50px-Grenade_Launcher_Stratagem_Iconblue.webp",
        "./images/50px-Guard_Dog_Rover_Stratagem_Iconblue.webp",
        "./images/50px-Guard_Dog_Stratagem_Iconblue.webp",
        "./images/50px-Heavy_Machine_Gun_Stratagem_Iconblue.webp",
        "./images/50px-HMG_Emplacement_Stratagem_Icongreen.webp",
        "./images/50px-Incendiary_Mines_Stratagem_Icongreen.webp",
        "./images/50px-Jump_Pack_Stratagem_Iconblue.webp",
        "./images/50px-Laser_Cannon_Stratagem_Iconblue.webp",
        "./images/50px-M-102_Fast_Recon_Vehicle_Stratagem_Iconblue.webp",
        "./images/50px-Machine_Gun_Sentry_Stratagem_Icongreen.webp",
        "./images/50px-Machine_Gun_Stratagem_Iconblue.webp",
        "./images/50px-MD-17_Anti-Tank_Mines_Stratagem_Icongreen.webp",
        "./images/50px-Mortar_Sentry_Stratagem_Icongreen.webp",
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
        "./images/50px-Railgun_Stratagem_Iconblue.webp",
        "./images/50px-Recoilless_Rifle_Stratagem_Iconblue.webp",
        "./images/50px-RL-77_Airburst_Rocket_Launcher_Stratagem_Iconblue.webp",
        "./images/50px-Rocket_Sentry_Stratagem_Icongreen.webp",
        "./images/50px-Shield_Generator_Pack_Stratagem_Iconblue.webp",
        "./images/50px-Shield_Generator_Relay_Stratagem_Icongreen.webp",
        "./images/50px-Spear_Stratagem_Iconblue.webp",
        "./images/50px-StA-X3_Wblue.webp",
        "./images/50px-Stalwart_Stratagem_Iconblue.webp",
        "./images/50px-Supply_Pack_Stratagem_Iconblue.webp",
        "./images/50px-Tesla_Tower_Stratagem_Icongreen.webp"
    ];

    $("#startButton").on("click", function () {
        $(".start").fadeOut(500, function () {
            $("#hiddenSelection").fadeIn(500);
        });
    });
    $("#strategems").on("click", function () {
        $("#hiddenSelection").fadeOut(500, function () {
            $("#hiddenStrategems").fadeIn(500);
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
        $("#hiddenStrategems").fadeOut(500, function () {
            $(".rouletteContainer").fadeIn(500);
        });
        mode = "balanced";
    });

    $(".HelldiveBtn").on("click", function () {
        $("#hiddenStrategems").fadeOut(500, function () {
            $(".rouletteContainer").fadeIn(500);
        });
        mode = "helldive";
    });

    $("#spinButton").on("click", function () {
        $(".images").show();
        // Ensure all image elements are visible before updating
        for (let inList = 1; inList <= 4; inList++) {
            $("#img" + inList).hide();
        }
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
                    .replace(/(_Stratagem_Icon|_Icon)?(green|blue)?\.webp$/, "")
                    .replace(/_/g, " ")
                    .trim();
                let nameId = "#name" + inList;
                $(itemId).show();
                $(nameId).text(strategemName);
            }
        }
        if (mode === "balanced") {
            // Get green images
            let greenImages = images.filter(img => img.match(/green\.webp$/));
            // Get blue images
            let blueImages = images.filter(img => img.match(/blue\.webp$/));
            // Get red images (not green or blue at end)
            let redImages = images.filter(img => !img.match(/(green|blue)\.webp$/));

            let usedIndexes = [];

            // 1 green
            let greenIndex = Math.floor(Math.random() * greenImages.length);
            let greenImage = greenImages[greenIndex];
            usedIndexes.push(greenImage);

            // 1 blue
            let blueIndex = Math.floor(Math.random() * blueImages.length);
            let blueImage = blueImages[blueIndex];
            usedIndexes.push(blueImage);

            // 2 red (no green/blue at end), ensure no duplicates
            let redIndexes = [];
            while (redIndexes.length < 2) {
                let idx = Math.floor(Math.random() * redImages.length);
                let img = redImages[idx];
                if (!usedIndexes.includes(img) && !redIndexes.includes(idx)) {
                    redIndexes.push(idx);
                    usedIndexes.push(img);
                }
            }
            let redImage1 = redImages[redIndexes[0]];
            let redImage2 = redImages[redIndexes[1]];

            let selectedImages = [greenImage, blueImage, redImage1, redImage2];

            for (let inList = 1; inList <= 4; inList++) {
                let selectedImage = selectedImages[inList - 1];
                let itemId = "#img" + inList;
                $(itemId).attr("src", selectedImage);
                let strategemName = selectedImage.split("/").pop()
                    .replace(/^50px-/, "")
                    .replace(/(_Stratagem_Icon|_Icon)?(green|blue)?\.webp$/, "")
                    .replace(/_/g, " ")
                    .trim();
                let nameId = "#name" + inList;
                $(itemId).show();
                $(nameId).text(strategemName);
            }
        }
    });

    $("#backToStart").on("click", function () {
        $(".rouletteContainer").fadeOut(500, function () {
            $(".start").fadeIn(500);
        });
        $(".images").hide();
        for (let inList = 1; inList <= 4; inList++) {
            let itemId = "#img" + inList;
            $(itemId).hide();
        }
        for (let inList = 1; inList <= 4; inList++) {
            let nameId = "#name" + inList;
            $(nameId).text("");
        }
        mode = "none";

    });
});