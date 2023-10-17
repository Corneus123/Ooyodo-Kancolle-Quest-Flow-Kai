const EQUIPMENT_TYPE = {
  "Radar": "Radar",
  "Type 13 Air Radar": "Radar",
  "Type 13 Air Radar Kai": "Radar",
  "Type 22 Surface Radar": "Radar",
  "Type 22 Surface RADAR Kai 4": "Radar",
  "Prototype 35.6cm Triple Gun Mount": "Heavy gun",
  "Searchlight": "Searchlight",
  "Skilled Carrier-based Aircraft Maintenance Personnel": "SCAMP",
  "Night Operation Aviation Personnel": "SCAMP",
  "Night Operation Aviation Personnel + Skilled Deckhands": "SCAMP",
  "Type 1 AP Shell": "AP Shell",
  "Type 91 AP Shell": "AP Shell",
  "Type 93 Passive Sonar": "Sonar",
  "Type 4 Passive Sonar": "Sonar",
  "Type 3 Active Sonar": "Sonar",
  "Type 3 Sonar": "Sonar",
  "Type124 ASDIC": "Sonar",
  "Type 3 Shell": "T3 Shell",
  "25mm Triple Autocannon Mount": "Anti-air gun",
  "25mm Triple Autocannon Mount (Concentrated Deployment)": "Anti-air gun",
  "Daihatsu Landing Craft": "Daihatsu",
  "53cm Submarine Bow Torpedo Mount (8 tubes)": "Torpedo",
  "Prototype 61cm Sextuple (Oxygen) Torpedo Mount": "Torpedo",
  "Late Model Bow Torpedo Mount (6 tubes)": "Torpedo",
  "Type 91 Anti-Aircraft Fire Director": "Anti-air fire director",
  "Special Type 2 Amphibious Tank": "Amphibious tank",
  "Drum Canister (Transport Use)": "Drum Canister",
  "Drum Canister": "Drum Canister",
  "New Kanhon Design Anti-torpedo Bulge (Large)": "Armor bulge",
  "8cm High-angle Gun Kai + Additional Machine Guns": "High-angle gun",
  "New Kanhon Design Anti-torpedo Bulge (Medium)": "Armor bulge",
  "Improved Kanhon Type Turbine": "Engine",
  "Enhanced Kanhon Type Boiler": "Engine",
  "12.7mm Single Machine Gun Mount": "High-angle gun",
  "12.7cm Twin Gun Mount Model C Kai 2 ★+3": "High-angle gun",
  "7.7mm Machine Gun": "Anti-air gun",
  "7.7mm AA Gun": "Anti-air gun",
  "61cm Quintuple (Oxygen) Torpedo Mount": "Torpedo",
  "61cm Quadruple (Oxygen) Torpedo Mount": "Torpedo",
  "61cm Triple (Oxygen) Torpedo Mount": "Torpedo",
  "61cm Triple Torpedo Mount": "Torpedo",
  "25mm Twin Autocannon Mount": "Anti-air gun",
  "25mm Single Autocannon Mount": "Anti-air gun",
  "14cm Single Gun Mount": "Medium gun",
  "12.7cm Twin High-angle Gun Mount": "High-angle gun",
  "15.2cm Single Gun Mount": "Medium gun",
  "12.7cm Twin Gun Mount": "Small gun",
  "12.7cm Twin Gun Mount Model C Kai 2": "Small gun",
  "12.7cm Twin Gun Mount Model B Kai 2": "Small gun",
  "Secondary gun": "Secondary gun",
  "Medium gun": "Medium gun",
  "Heavy gun": "Heavy gun",
  "Anti-Air gun": "Anti-air gun",
  "12cm 30-tube Rocket Launcher": "Anti-air gun",
  "12cm 30-tube Rocket Launcher Kai Ni": "Anti-air gun",
  "Small gun": "Small gun",
  "Torpedo": "Torpedo",
  "WG42 (Wurfgerät 42)": "Anti-Ground Rocket",
  "Type 95 Depth Charge": "Depth Charge",
  "Type 2 Depth Charge": "Depth Charge",
  "Fleet Command Facility": "Fleet Command Facility",
  "Striking Force Fleet Command Facility": "Fleet Command Facility",
  "Ju 87C Kai": "Dive bomber",
  "Zuiun (631 Air Group)": "Seaplane",
  "Zuiun (634 Air Group)": "Seaplane",
  "Zuiun": "Seaplane",
  "Seiran (631 Air Group)": "Seaplane",
  "Type 2 Seaplane Fighter Kai (Skilled)": "Seaplane fighter",
  "Kikka Kai": "Jet",
  "Prototype Keiun (Carrier-based Reconnaissance Model)": "Reconnaissance plane",
  "Type 1 Land-based Attack Aircraft Model 22A": "Land-based attack aircraft",
  "Type 1 Land-based Attack Aircraft": "Land-based attack aircraft",
  "Type 96 Land-based Attack Aircraft": "Land-based attack aircraft",
  "Type 0 Fighter Model 53 (Iwamoto Squadron)": "Fighter",
  "Zero Fighter Model 52A (w/ Iwamoto Flight)": "Fighter",
  "Zero Fighter Model 21 (w/ Iwamoto Flight)": "Fighter",
  "Zero Fighter Model 62 (Fighter-bomber / Iwai Squadron)": "Dive bomber",
  "Zero Fighter Model 52C (w/ Iwai Flight)": "Fighter",
  "Type 0 Fighter Model 52 (Skilled)": "Fighter",
  "Type 0 Fighter Model 21 (Skilled)": "Fighter",
  "Type 97 Torpedo Bomber (Murata Squadron)": "Bomber",
  "Reppuu (601 Air Group)": "Fighter",
  "Suisei (Egusa Squadron)": "Dive bomber",
  "Tenzan Model 12 (Tomonaga Squadron)": "Bomber",
  "Type 0 Fighter Model 63 (Fighter-bomber)": "Dive bomber",
  "Tenzan Model 12 (Murata Squadron)": "Bomber",
  "Kyoufuu Kai": "Seaplane fighter",
  "Type 2 Seaplane Fighter Kai": "Seaplane fighter",
  "PBY-5A Catalina": "Flying boat",
  "Type 97 Torpedo Bomber (Tomonaga Squadron)": "Bomber",
  "Tenzan": "Bomber",
  "Type 99 Dive Bomber (Egusa Squadron)": "Dive bomber",
  "Suisei": "Dive bomber",
  "Zero Fighter Model 52C (601 Air Group)": "Fighter",
  "Reppuu": "Fighter",
  "Type 97 Torpedo Bomber": "Bomber",
  "Type 0 Fighter Model 21": "Fighter",
  "Type 0 Fighter Model 52": "Fighter",
  "Type 0 Fighter Model 62 (Fighter-bomber)": "Dive bomber",
  "Saiun": "Reconnaissance plane",
  "Type 96 Fighter": "Fighter",
  "Type 99 Dive Bomber": "Dive bomber",
  "Type 0 Reconnaissance Seaplane": "Seaplane",
  "Shiden Kai 2": "Fighter",
  "Prototype Seiran": "Seaplane",
  "Ryuusei": "Bomber",
  "Zuiun (634 Air Group/Skilled)": "Seaplane",
  "F6F-3": "Fighter",
  "F4U-1D": "Dive bomber",
  "TBF": "Bomber",
  "F6F-3N": "Night plane",
  "F6F-5N": "Night plane",
  "TBM-3D": "Night plane",
  "Swordfish": "Bomber",
  "Type 1 Fighter Hayabusa Model II": "Fighter",
  "Shiden Model 11": "Land-based Fighter",
  "Fighter": "Fighter",
  "Raiden": "Land-based Fighter",
  "Recon Seaplane": "Seaplane",
  "10cm Twin High-angle Gun Mount": "High-angle gun",
  "Machine gun": "Anti-air gun",
  "10cm Twin High-angle Gun Mount Kai + Additional Machine Guns": "High-angle gun",
  "Type 95 Depth Charge★+5": "Depth Charge",
  "12.7cm Twin Gun Mount Model C Kai 2★+5": "Small gun",
  "Type 2 Large Flying Boat": "Flying boat",
  "Toku Daihatsu Landing Craft": "Daihatsu",
  "61cm Triple (Oxygen) Torpedo Mount Late Model": "Torpedo",
  "Skilled Lookouts": "Skilled Lookouts",
  "61cm Quadruple (Oxygen) Torpedo Mount Late Model": "Torpedo",
  "Type 3 Depth Charge Projector (Concentrated Deployment)": "Depth Charge",
  "Prototype 15cm 9-tube ASW Rocket Launcher": "Depth Charge",
  "12.7cm Twin Gun Mount Model D Kai 2": "Small gun",
  "Suisei Model 22 (634 Air Group)": "Dive bomber",
  "Type 2 Reconnaissance Aircraft": "Reconnaissance plane",
  "41cm Triple Gun Mount Kai Ni": "Heavy gun",
  "Prototype 41cm Triple Gun Mount": "Heavy gun",
  "41cm Twin Gun Mount": "Heavy gun",
  "Suisei Model 22 (634 Air Group Skilled)": "Dive bomber",
  "12.7cm Twin Gun Mount Model B Kai 4 (Wartime Modification) + Anti-Aircraft Fire Director": "High-angle gun",
  "12.7cm Twin Gun Mount Model A Kai 2": "High-angle gun",
  "Type 94 Anti-Aircraft Fire Director": "Anti-air fire director",
  "12.7cm Twin High-angle Gun Mount (Late Model)": "High-angle gun",
  "Type 3 Depth Charge Projector": "Depth Charge",
  "12.7cm Single High-angle Gun Mount (Late Model)": "High-angle gun",
  "Type 0 Passive Sonar": "Sonar",
  "Type 0 Fighter Model 32 (Skilled)": "Fighter",
  "Dive bomber": "Dive bomber",
  "Torpedo bomber": "Bomber",
  "Reppu Kai": "Fighter",
  "Type 3 Fighter Hien": "Land-based Fighter",
  "Spitfire Mk.1": "Land-based Fighter",
  "Reconnaissance plane": "Reconnaissance plane",
  "Prototype Toukai": "Land-based patrol aircraft",
  "Type 0 Fighter Model 32": "Fighter",
  "Zuiun Model 12": "Seaplane",
  "Shiun": "Seaplane",
  "Re.2001 OR Kai": "Fighter",
  "Type 96 150cm Searchlight": "Searchlight",
  "Type 3 Shell Kai": "T3 Shell",
  "Prototype 46cm Twin Gun Mount": "Heavy gun",
  "Prototype Nanzan": "Dive bomber",
  "41cm Twin Gun Mount Kai Ni": "Heavy gun",
  "Anti-torpedo Bulge (Medium)": "Armor bulge",
  "Anti-torpedo Bulge (Large)": "Armor bulge",
  "Zuiun Kai Ni (634 Air Group)": "Seaplane",
  "S-51J": "autogyro",
  "Suisei Model 12A": "Dive bomber",
  "O Type Observation Autogyro Kai": "autogyro",
  "Suisei Model 12 (634 Air Group w/ Type 3 Cluster Bombs)": "Dive bomber",
  "Prototype Reppuu Late Model": "Fighter",
  "Zuiun Kai Ni (634 Air Group/Skilled)": "Seaplane",
  "35.6cm Twin Gun Mount Kai Ni": "Heavy gun",
  "Type 0 Reconnaissance Seaplane Model 11B": "Seaplane",
  "Ryuusei Kai (CarDiv 1)": "Bomber",
  "Saiun★+2": "Reconnaissance plane",
  "Tenzan★+2": "Bomber",
  "Ryuusei Kai (CarDiv 1/Skilled)": "Bomber",
  "Ryuusei Kai": "Bomber",
  "Type 94 Depth Charge Projector": "Depth Charge",
  "Type 2 12cm Mortar Kai": "Depth Charge",
  "Shipborne Model Type 4 20cm Anti-ground Rocket Launcher": "Anti-Ground Rocket",
  "14cm Twin Gun Mount Kai": "Medium gun",
  "Type D Kouhyouteki Kai (Kouryuu Kai)": "Torpedo",
  "Type 0 Reconnaissance Seaplane Model 11B★+2": "Seaplane",
  "New Kanhon Design Anti-torpedo Bulge (Large)★+2": "Armor bulge",
  "Swordfish (Seaplane Model)": "Seaplane",
  "Swordfish Mk.III Kai (Seaplane Model)": "Seaplane",
  "S9 Osprey": "Seaplane",
  "Fairey Seafox Kai": "Seaplane"
  "OS2U": "Seaplane"
  "F4F-3★+3": "Fighter"
  "TBD★+3": "Bomber"

};

const ICONS_LINK = {
  "Ranking points": "files/webpage/game_icons/files/webpage/game_icons/Ranking_point.png",
  "Improvement Material": "files/webpage/game_icons/Improvement_Material.png",
  "Development Material": "files/webpage/game_icons/Development_Material.png",
  "Instant Construction": "files/webpage/game_icons/Instant_construction.png",
  "Instant Repair": "files/webpage/game_icons/Instant_repair.png",
  "Fuel": "files/webpage/game_icons/Fuel.png",
  "Ammo": "files/webpage/game_icons/Ammo.png",
  "Steel": "files/webpage/game_icons/Steel.png",
  "Bauxite": "files/webpage/game_icons/Bauxite.png",
  "Repair Team": "files/webpage/game_icons/Emergency_repair.png",
  "Repair Goddess": "files/webpage/game_icons/Emergency_repair.png",
  "Mamiya": "files/webpage/game_icons/Mamiya.png",
  "Furniture box small": "files/webpage/game_icons/Furniture_box_small.png",
  "Furniture box medium": "files/webpage/game_icons/Furniture_box_medium.png",
  "Large furniture box": "files/webpage/game_icons/Furniture_box_large.png",
  "Skilled Crew Member": "files/webpage/game_icons/Skilled_Crew_Member.png",
  "Irako": "files/webpage/game_icons/Irako.png",
  "Combat Ration": "files/webpage/game_icons/Combat_Ration.png",
  "Combat Ration (Special Onigiri)": "files/webpage/game_icons/Combat_Ration.png",
  "Furniture Fairy": "files/webpage/game_icons/Furniture_fairy.png",
  "Medal": "files/webpage/game_icons/Medal.png",
  "Present box": "files/webpage/game_icons/Present_box.png",
  "Combat provision": "files/webpage/game_icons/Combat_Provisions.png",
  "New Model Gun Mount Improvement Material": "files/webpage/game_icons/New_Model_Gun_Mount_Improvement_Material.png",
  "Underway Replenishment": "files/webpage/game_icons/Underway_Replenishment.png",
  "Construction Corps": "files/webpage/game_icons/Construction_Corps.png",
  "Reinforcement Expansion": "files/webpage/game_icons/Reinforcement_expansion.png",
  "Headquarters Personnel": "files/webpage/game_icons/Headquarters_Personnel.png",
  "New Technology Aircraft Blueprint": "files/webpage/game_icons/New_Technology_Aircraft_Blueprint.png",
  "Ne Type Engine": "files/webpage/game_icons/Ne_Type_Engine.png",
  "Prototype Flight Deck Catapult": "files/webpage/game_icons/Prototype_Deck_Catapult.png",
  "Marriage Ring and Documents": "files/webpage/game_icons/Marriage_Papers.png",
  "New Model Aerial Armament Materials": "files/webpage/game_icons/New_Model_Aerial_Armament_Materials.png",
  "Action Report": "files/webpage/game_icons/Action_Report.png",
  "Rice": "files/webpage/game_icons/Rice.png",
  "Umeboshi": "files/webpage/game_icons/Umeboshi.png",
  "Nori": "files/webpage/game_icons/Nori.png",
  "Tea": "files/webpage/game_icons/Tea.png",
  "Canned Mackerel": "files/webpage/game_icons/Canned_Mackerel.png",
  "valentine chocolate": "files/webpage/game_icons/valentine_chocolate.png",
  "Radar": "files/webpage/game_icons/Radar.png",
  "Heavy gun": "files/webpage/game_icons/RedGunHeavy.png",
  "Medium gun": "files/webpage/game_icons/RedGunMedium.png",
  "Secondary gun": "files/webpage/game_icons/YellowGun.png",
  "Small gun": "files/webpage/game_icons/RedGunSmall.png",
  "SCAMP": "files/webpage/game_icons/SCAMP.png",
  "AP Shell": "files/webpage/game_icons/AP_Shell.png",
  "Sonar": "files/webpage/game_icons/Sonar.png",
  "T3 Shell": "files/webpage/game_icons/T3_Shell.png",
  "Anti-air gun": "files/webpage/game_icons/AA_gun.png",
  "Daihatsu": "files/webpage/game_icons/LandingCraft.png",
  "Torpedo": "files/webpage/game_icons/Torpedo.png",
  "Anti-air fire director": "files/webpage/game_icons/Aafd.png",
  "Amphibious tank": "files/webpage/game_icons/Special_Amphibious_Tank.png",
  "Drum Canister": "files/webpage/game_icons/Drum.png",
  "Armor bulge": "files/webpage/game_icons/Armor_Bulge.png",
  "High-angle gun": "files/webpage/game_icons/GreenGun.png",
  "Engine": "files/webpage/game_icons/Engine.png",
  "Dive bomber": "files/webpage/game_icons/RedPlane.png",
  "Seaplane": "files/webpage/game_icons/Seaplane.png",
  "Seaplane fighter": "files/webpage/game_icons/Seaplane_Fighter.png",
  "Jet": "files/webpage/game_icons/Jet-powered_Fighter-Bomber.png",
  "Reconnaissance plane": "files/webpage/game_icons/YellowPlane.png",
  "Land-based attack aircraft": "files/webpage/game_icons/Land-based_Attack_Aircraft.png",
  "Fighter": "files/webpage/game_icons/GreenPlane.png",
  "Bomber": "files/webpage/game_icons/BluePlane.png",
  "Flying boat": "files/webpage/game_icons/Large_Flying_Boat.png",
  "Searchlight": "files/webpage/game_icons/Searchlight.png",
  "Night plane": "files/webpage/game_icons/Night_Fighter_Aircraft_Icon.png",
  "Anti-Ground Rocket": "files/webpage/game_icons/Anti_Ground.png",
  "Depth Charge": "files/webpage/game_icons/DepthCharge.png",
  "Fleet Command Facility": "files/webpage/game_icons/FleetCommandFacility.png",
  "Land-based Fighter": "files/webpage/game_icons/Interceptor_Fighter.png",
  "Skilled Lookouts": "files/webpage/game_icons/Skilled_lookouts.png",
  "Land-based patrol aircraft": "files/webpage/game_icons/Land-based_patrol_aircraft.png",
  "autogyro": "files/webpage/game_icons/autogyro.png",
  "New Model Rocket Development Material": "files/webpage/game_icons/New_Model_Rocket_Development_Material.png"
};
// C =Development Material, Instant Construction, Instant Repair, Improvement Material
// I = Furniture Box Medium , Large Furniture Box, Furniture box small, Skilled Crew Member, Repair Team, Irako, Combat Ration, New Model Aerial Armament Materials, Furniture Fairy, New Model Gun Mount Improvement Material, Combat Ration (Special Onigiri), Repair Goddess, Reinforcement Expansion, Medal
const ALL_QUESTS_LIST = {

// COMPOSITION QUEST A00
  "A1": {
    "Jp": "はじめての「編成」！",
    "En": "The First Organization",
    "content": "Have 2 ships in your main fleet.",
    "tips": "",
    "resources": {
      "F": "20",
      "A": "20",
      "S": "0",
      "B": "0"
    },
    "requires": [],
    "unlocks": ["A2"],
    "period": "once",
    "needs": {},
    "reward": [
      ["S","Shirayuki",1]
    ]
  },
  "A2": {
    "Jp": "「駆逐隊」を編成せよ！",
    "En": "Organize a Destroyer Division",
    "content": "Have 4 DD in your fleet",
    "tips": "",
    "resources": {
      "F": "30",
      "A": "30",
      "S": "30",
      "B": "0"
    },
    "requires": ["A1"],
    "unlocks": ["A3"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1]
    ]
  },
  "A3": {
    "Jp": "「水雷戦隊」を編成せよ！",
    "En": "Organize a Torpedo Squadron",
    "content": "Consists of a CL as your flagship and 3 DD",
    "tips": "",
    "resources": {
      "F": "40",
      "A": "40",
      "S": "0",
      "B": "40"
    },
    "requires": ["A2"],
    "unlocks": ["A4","A5"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "A4": {
    "Jp": "6隻編成の艦隊を編成せよ！",
    "En": "Organize a Fleet of 6 Ships",
    "content": "Have 6 ships in your fleet",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "0",
      "S": "50",
      "B": "0"
    },
    "requires": ["A3"],
    "unlocks": ["A6","A9"],
    "period": "once",
    "needs": {},
    "reward": [
      ["A","Unlocks the second fleet",1],
      ["A","Unlocks the expeditions tab",1]
    ]
  },
  "A5": {
    "Jp": "軽巡2隻を擁する隊を編成せよ！",
    "En": "Organize a Fleet of 2 Light Cruisers",
    "content": "Have 2 CL in your fleet",
    "tips": "",
    "resources": {
      "F": "60",
      "A": "60",
      "S": "0",
      "B": "0"
    },
    "requires": ["A3"],
    "unlocks": ["A7","A8","B29","D1","B67","F11"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "A6": {
    "Jp": "第2艦隊を編成せよ！",
    "En": "Organize the Second Fleet",
    "content": "Have a flagship in your second fleet",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "50",
      "S": "100",
      "B": "0"
    },
    "requires": ["A4"],
    "unlocks": ["B3"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1]
    ]
  },
  "A7": {
    "Jp": "「重巡戦隊」を編成せよ！",
    "En": "Organize a Heavy Cruiser Division",
    "content": "Have 2 CA in your fleet (CAV don't count)",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "70",
      "S": "0",
      "B": "30"
    },
    "requires": ["A5"],
    "unlocks": ["A14","A12"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1]
    ]
  },
  "A8": {
    "Jp": "「天龍」型軽巡姉妹の全2艦を編成せよ！",
    "En": "Organize both Sisters of the Tenryuu-class Light Cruisers",
    "content": "Have Tenryuu and Tatsuta in your main fleet",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "100",
      "S": "100",
      "B": "50"
    },
    "requires": ["A5"],
    "unlocks": ["A17"],
    "period": "once",
    "needs": {
      "S": ["Tenryuu","Tatsuta"]
    },
    "reward": [
      ["C","Instant Construction",2]
    ]
  },
  "A9": {
    "Jp": "「水上機母艦」を配備せよ！",
    "En": "Deploy a Seaplane Tender",
    "content": "Have an AV in your fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "200"
    },
    "requires": ["A4"],
    "unlocks": ["A10","A45","B87","A69"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "A10": {
    "Jp": "「第六駆逐隊」を編成せよ！",
    "En": "Organize the 6th Destroyer Division",
    "content": "Have ONLY Akatsuki, Hibiki, Ikazuchi and Inazuma in your second fleet",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "requires": ["A9"],
    "unlocks": ["A28","B12","B42"],
    "period": "once",
    "needs": {
      "S": ["Akatsuki","Hibiki","Ikazuchi","Inazuma"]
    },
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "A11": {
    "Jp": "第2艦隊で空母機動部隊を編成せよ！",
    "En": "Organize a Carrier Task Force in Your Second Fleet",
    "content": "Have an CV / CVL and 3 DD in your SECOND fleet",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["B3"],
    "unlocks": ["B10"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Construction",2]
    ]
  },
  "A12": {
    "Jp": "「空母機動部隊」を編成せよ！",
    "En": "Organize a Carrier Task Force",
    "content": "Have an CV / CVL and 3 DD in your main fleet",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["A7"],
    "unlocks": ["A13"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "A13": {
    "Jp": "戦艦と重巡による主力艦隊を編成せよ！",
    "En": "Organize the Main Fleet with a Battleship and Heavy Cruisers",
    "content": "Have a BB and 2 CA in your main fleet(BBV don't count)",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "requires": ["A12"],
    "unlocks": ["A19","A20","F32"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Construction",2]
    ]
  },
  "A14": {
    "Jp": "「川内」型軽巡姉妹の全3艦を編成せよ！",
    "En": "Organize All 3 Sisters of the Sendai-class Light Cruisers",
    "content": "Have Sendai, Jintsuu, and Naka in your main fleet",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "100",
      "B": "0"
    },
    "requires": ["A7"],
    "unlocks": ["A15","G4"],
    "period": "once",
    "needs": {
      "S": ["Sendai","Jintsuu","Naka"]
    },
    "reward": [
      ["A","Unlocks the third fleet",1]
    ]
  },
  "A15": {
    "Jp": "「妙高」型重巡姉妹の全4隻を編成せよ！",
    "En": "Organize All 4 Sisters of the Myoukou-class Heavy Cruisers",
    "content": "Have Myoukou, Nachi, Ashigara and Haguro in your main fleet",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "100",
      "S": "150",
      "B": "100"
    },
    "requires": ["A14"],
    "unlocks": ["A16"],
    "period": "once",
    "needs": {
      "S": ["Myoukou","Nachi","Ashigara","Haguro"]
    },
    "reward": [
      ["C","Instant Repair",1],
      ["C","Development Material",1]
    ]
  },
  "A16": {
    "Jp": "「金剛」型による高速戦艦部隊を編成せよ！",
    "En": "Organize a Fast Battleship Force with the Kongou-class",
    "content": "Have Kongou, Hiei, Haruna and Kirishima in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["A15"],
    "unlocks": ["WF01"],
    "period": "once",
    "needs": {
      "S": ["Kongou","Haruna","Hiei","Kirishima"]
    },
    "reward": [
      ["A","Unlocks the fourth fleet",1]
    ]
  },
  "A17": {
    "Jp": "「扶桑」型戦艦姉妹の全2隻を編成せよ！",
    "En": "Organize Both Sisters of the Fusou-class Battleships",
    "content": "Have Fusou and Yamashiro in your main fleet",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "200",
      "B": "200"
    },
    "requires": ["A8"],
    "unlocks": ["A18"],
    "period": "once",
    "needs": {
      "S": ["Fusou","Yamashiro"]
    },
    "reward": [
      ["C","Instant Repair",1],
      ["C","Development Material",1]
    ]
  },
  "A18": {
    "Jp": "「伊勢」型戦艦姉妹の全2隻を編成せよ！",
    "En": "Organize Both Sisters of the Ise-class Battleships",
    "content": "Have Ise and Hyuuga in your main fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "200",
      "S": "300",
      "B": "200"
    },
    "requires": ["A17"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Ise","Hyuuga"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["C","Development Material",2]
    ]
  },
  "A19": {
    "Jp": "「南雲機動部隊」を編成せよ！",
    "En": "Organize the Nagumo Carrier Task Force",
    "content": "Have ONLY Akagi, Kaga, Hiryuu and Souryuu in your main fleet",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "500",
      "S": "500",
      "B": "500"
    },
    "requires": ["A13"],
    "unlocks": ["Fm1"],
    "period": "once",
    "needs": {
      "S": ["Akagi","Kaga","Hiryuu","Souryuu"]
    },
    "reward": [
      ["C","Instant Construction",2],
      ["C","Development Material",4]
    ]
  },
  "A20": {
    "Jp": "「三川艦隊」を編成せよ！",
    "En": "Organize the Mikawa Fleet",
    "content": "Have Choukai, Aoba, Kako,Furutaka,and Tenryuu in your main fleet,with one additional FAST ship",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "200",
      "B": "0"
    },
    "requires": ["A13"],
    "unlocks": ["A21","B11"],
    "period": "once",
    "needs": {
      "S": ["Choukai","Aoba","Kako","Furutaka","Tenryuu"]
    },
    "reward": [
      ["C","Instant Repair",3]
    ]
  },
  "A21": {
    "Jp": "「第四戦隊」を編成せよ！",
    "En": "Organize the 4th Cruiser Division",
    "content": "Have Takao, Atago, Choukai, and Maya in your main fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "requires": ["A20"],
    "unlocks": ["A22","A24","A25","A27","A29","B13"],
    "period": "once",
    "needs": {
      "S": ["Takao","Atago","Choukai","Maya"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["C","Development Material",1]
    ]
  },
  "A22": {
    "Jp": "「西村艦隊」を編成せよ！",
    "En": "Organize the Nishimura Fleet",
    "content": "Have Fusou, Yamashiro, Mogami, and Shigure in your main fleet",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "200",
      "B": "0"
    },
    "requires": ["A21"],
    "unlocks": ["A23","A26","B14"],
    "period": "once",
    "needs": {
      "S": ["Fusou","Yamashiro","Mogami","Shigure"]
    },
    "reward": [
      ["I","Mamiya",1]
    ]
  },
  "A23": {
    "Jp": "「第五航空戦隊」を編成せよ！",
    "En": "Organize the 5th Carrier Division",
    "content": "Have both Shoukaku, Zuikaku, and 2 DD in your main fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["A22"],
    "unlocks": ["A41","A46","A56","B15"],
    "period": "once",
    "needs": {
      "S": ["Shoukaku","Zuikaku"]
    },
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "A24": {
    "Jp": "新「三川艦隊」を編成せよ！",
    "En": "Organize the New Mikawa Fleet",
    "content": "Have Choukai, Aoba, Kinugasa, Kako, Furutaka, and Tenryuu in your main fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["A21"],
    "unlocks": ["B16"],
    "period": "once",
    "needs": {
      "S": ["Choukai","Aoba","Kinugasa","Kako","Furutaka","Tenryuu"]
    },
    "reward": [
      ["I","Mamiya",1]
    ]
  },
  "A25": {
    "Jp": "潜水艦隊を編成せよ！",
    "En": "Organize a Submarine Fleet",
    "content": "Have 2 SS in any one of your fleets",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "requires": ["A21"],
    "unlocks": ["A31","B17"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "A26": {
    "Jp": "航空水上打撃艦隊を編成せよ！",
    "En": "Organize an Aviation Surface Attack Fleet",
    "content": "Have ONLY 2 BBV and 2 CAV in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "200",
      "B": "200"
    },
    "requires": ["A22"],
    "unlocks": ["B18"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2]
    ]
  },
  "A27": {
    "Jp": "中規模潜水艦隊を編成せよ！",
    "En": "Organize a Medium-sized Submarine Fleet",
    "content": "Have 3 SS in any one of your fleets",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "requires": ["A21"],
    "unlocks": ["A37","D5"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Mamiya",1]
    ]
  },
  "A28": {
    "Jp": "「第六戦隊」を編成せよ！",
    "En": "Organize the 6th Cruiser Division",
    "content": "Have Furutaka, Kako, Kinugasa, and Aoba in your main fleet",
    "tips": "",
    "resources": {
      "F": "250",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["A10"],
    "unlocks": ["A36","B19"],
    "period": "once",
    "needs": {
      "S": ["Kinugasa","Aoba","Kako","Furutaka"]
    },
    "reward": [
      ["I","Mamiya",1]
    ]
  },
  "A29": {
    "Jp": "「第五艦隊」を編成せよ！",
    "En": "Organize the 5th Fleet",
    "content": "Have Nachi, Ashigara, Tama, and Kiso in your main fleet",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["A21"],
    "unlocks": ["A30"],
    "period": "once",
    "needs": {
      "S": ["Nachi","Ashigara","Tama","Kiso"]
    },
    "reward": [
      ["C","Instant Repair",3]
    ]
  },
  "A30": {
    "Jp": "「第一水雷戦隊」を編成せよ！",
    "En": "Organize the 1st Torpedo Squadron",
    "content": "Have Abukuma, Akebono, Ushio, Kasumi, and Shiranui in your main fleet",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["A29"],
    "unlocks": ["Dw2"],
    "period": "once",
    "needs": {
      "S": ["Abukuma","Akebono","Ushio","Kasumi","Shiranui"]
    },
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "A31": {
    "Jp": "「第八駆逐隊」を編成せよ！",
    "En": "Organize the 8th Destroyer Division",
    "content": "Have ONLY Asashio, Michishio, Ooshio, and Arashio in your main fleet",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "requires": ["A25"],
    "unlocks": ["A33","B20","A67"],
    "period": "once",
    "needs": {
      "S": ["Asashio","Michishio","Ooshio","Arashio"]
    },
    "reward": [
      ["C","Development Material",3]
    ]
  },
  "A32": {
    "Jp": "「第十八駆逐隊」を編成せよ！",
    "En": "Organize the 18th Destroyer Division",
    "content": "Have ONLY Kasumi, Arare, Kagerou, and Shiranui in your main fleet",
    "tips": "",
    "resources": {
      "F": "180",
      "A": "180",
      "S": "0",
      "B": "0"
    },
    "requires": ["B20"],
    "unlocks": ["A42","A47","B21","B58"],
    "period": "once",
    "needs": {
      "S": ["Kasumi","Arare","Kagerou","Shiranui"]
    },
    "reward": [
      ["C","Development Material",1],
      ["I","Repair Team",1]
    ]
  },
  "A33": {
    "Jp": "「第三十駆逐隊（第一次）」を編成せよ！",
    "En": "Organize the 30th Destroyer Division (First Generation)",
    "content": "Have ONLY Mutsuki, Kisaragi, Yayoi, and Mochizuki in your main fleet",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["A31"],
    "unlocks": ["A34","B22"],
    "period": "once",
    "needs": {
      "S": ["Mutsuki","Kisaragi","Yayoi","Mochizuki"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Repair Team",1]
    ]
  },
  "A34": {
    "Jp": "「第三十駆逐隊(第二次)」を編成せよ！",
    "En": "Organize the 30th Destroyer Division (Second Generation)",
    "content": "Have ONLY Mutsuki, Yayoi, Uzuki, and Mochizuki in your main fleet",
    "tips": "",
    "resources": {
      "F": "220",
      "A": "220",
      "S": "0",
      "B": "0"
    },
    "requires": ["A33"],
    "unlocks": ["A50","B24"],
    "period": "once",
    "needs": {
      "S": ["Mutsuki","Kisaragi","Yayoi","Uzuki","Mochizuki"]
    },
    "reward": [
      ["C","Development Material",3]
    ]
  },
  "A35": {
    "Jp": "「第五戦隊」を編成せよ！",
    "En": "Organize the 5th Cruiser Division",
    "content": "Have Myoukou, Nachi, and Haguro in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["B24"],
    "unlocks": ["A38","A44","Bm1","D17"],
    "period": "once",
    "needs": {
      "S": ["Myoukou","Nachi","Haguro"]
    },
    "reward": [
      ["C","Development Material",5]
    ]
  },
  "A36": {
    "Jp": "新編「第二航空戦隊」を編成せよ！",
    "En": "Organize the New 2nd Carrier Division",
    "content": "Have Hiryuu Kai Ni as flagship, Souryuu and 2 DD in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "400"
    },
    "requires": ["A28"],
    "unlocks": ["B25"],
    "period": "once",
    "needs": {
      "S": ["Hiryuu Kai Ni","Souryuu"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["C","Development Material",2]
    ]
  },
  "A37": {
    "Jp": "潜水艦隊「第六艦隊」を編成せよ！",
    "En": "Organize the Submarine Fleet: \"6th Fleet\"",
    "content": "Have 1 AS as flagship and 4 SS or more in your main fleet",
    "tips": "",
    "resources": {
      "F": "250",
      "A": "250",
      "S": "0",
      "B": "0"
    },
    "requires": ["A27"],
    "unlocks": ["D13"],
    "period": "once",
    "needs": {
      "S": ["Taigei"]
    },
    "reward": [
      ["C","Development Material",3]
    ]
  },
  "A38": {
    "Jp": "新型電探を配備せよ！",
    "En": "Deploy the New Radar Type",
    "content": "Have Myoukou Kai Ni as flagship",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["A35"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Myoukou Kai Ni"]
    },
    "reward": [
      ["E","Type 22 Surface RADAR Kai 4",1]
    ]
  },
  "A39": {
    "Jp": "再編成「第二航空戦隊」を強化せよ！",
    "En": "Strengthen the Reorganized 2nd Carrier Division",
    "content": "Have Souryuu Kai Ni as flagship with Hiryuu Kai Ni and 2 DD in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "450"
    },
    "requires": ["B25"],
    "unlocks": ["B26"],
    "period": "once",
    "needs": {
      "S": ["Souryuu Kai Ni"]
    },
    "reward": [
      ["C","Development Material",2],
      ["C","Instant Construction",2]
    ]
  },
  "A40": {
    "Jp": "精鋭「第三戦隊」全艦集結せよ！",
    "En": "Gather All of the Elite 3rd Battleship Division",
    "content": "Have Kongou Kai Ni, Hiei Kai Ni, Haruna Kai Ni, and Kirishima Kai Ni in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["WB02"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Kongou Kai Ni","Hiei Kai Ni","Haruna Kai Ni","Kirishima Kai Ni"]
    },
    "reward": [
      ["E","Prototype 35.6cm Triple Gun Mount",1]
    ]
  },
  "A41": {
    "Jp": "「新型正規空母」を配備せよ！",
    "En": "Deploy the New Standard Aircraft Carrier Class",
    "content": "Have Unryuu in your fleet as flagship",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "100",
      "S": "100",
      "B": "300"
    },
    "requires": ["A23"],
    "unlocks": ["B28"],
    "period": "once",
    "needs": {
      "S": ["Unryuu"]
    },
    "reward": [
      ["C","Development Material",2]
    ]
  },
  "A42": {
    "Jp": "主力戦艦部隊「第二戦隊」を編成せよ！",
    "En": "Organize the Main Battleship Force: \"The 2nd Squadron\"",
    "content": "Have Nagato, Mutsu, Fusou, and Yamashiro in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "250",
      "S": "250",
      "B": "0"
    },
    "requires": ["A32"],
    "unlocks": ["B31"],
    "period": "once",
    "needs": {
      "S": ["Nagato","Mutsu","Fusou","Yamashiro"]
    },
    "reward": [
      ["C","Instant Repair",2]
    ]
  },
  "A43": {
    "Jp": "戦艦を主力とした水上打撃部隊を編成せよ！",
    "En": "Organize a Surface Task Force with Battleships Comprising the Main Force",
    "content": "Have 3 of any ship from either the Nagato,Ise,Fusou, or Yamato classes and 1 CL in your main fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["B31"],
    "unlocks": ["Bm4"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",3]
    ]
  },
  "A44": {
    "Jp": "「西村艦隊」を再編成せよ！",
    "En": "Reorganize the Nishimura Fleet",
    "content": "Have Fusou, Yamashiro, Mogami, Shigure, and Michishio in your main fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["A35","B14"],
    "unlocks": ["B33"],
    "period": "once",
    "needs": {
      "S": ["Fusou","Yamashiro","Mogami","Shigure","Michishio"]
    },
    "reward": [
      ["C","Development Material",3],
      ["C","Improvement Material",3]
    ]
  },
  "A45": {
    "Jp": "改修工廠を準備せよ！",
    "En": "Prepare the Improvement Arsenal",
    "content": "Have Akashi as flagship in your main fleet",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "100",
      "B": "0"
    },
    "requires": ["A9"],
    "unlocks": ["Bw10","F17","F54"],
    "period": "once",
    "needs": {
      "S": ["Akashi"]
    },
    "reward": [
      ["C","Improvement Material",5]
    ]
  },
  "A46": {
    "Jp": "軽快な「水上反撃部隊」を編成せよ！",
    "En": "Organize a Light Surface Counterattack Fleet",
    "content": "Have Kasumi as flagship, Ashigara, 1 CL, and 3 DD in your main fleet",
    "tips": "",
    "resources": {
      "F": "250",
      "A": "250",
      "S": "0",
      "B": "50"
    },
    "requires": ["A23"],
    "unlocks": ["Bm7","A65"],
    "period": "once",
    "needs": {
      "S": ["Kasumi","Ashigara"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["C","Development Material",2]
    ]
  },
  "A47": {
    "Jp": "「第十一駆逐隊」を編成せよ！",
    "En": "Organize the 11th Destroyer Division",
    "content": "Have ONLY Fubuki, Shirayuki, Hatsuyuki, and Murakumo in your main fleet",
    "tips": "",
    "resources": {
      "F": "110",
      "A": "110",
      "S": "110",
      "B": "0"
    },
    "requires": ["A32"],
    "unlocks": ["B35","B36"],
    "period": "once",
    "needs": {
      "S": ["Fubuki","Shirayuki","Hatsuyuki","Murakumo"]
    },
    "reward": [
      ["C","Development Material",3]
    ]
  },
  "A48": {
    "Jp": "「第二一駆逐隊」を編成せよ！",
    "En": "Organize the 21st Destroyer Division",
    "content": "Have ONLY Hatsuharu, Hatsushimo, Nenohi, and Wakaba in your main fleet",
    "tips": "",
    "resources": {
      "F": "210",
      "A": "210",
      "S": "0",
      "B": "0"
    },
    "requires": ["B35"],
    "unlocks": ["B37"],
    "period": "once",
    "needs": {
      "S": ["Hatsuharu","Hatsushimo","Nenohi","Wakaba"]
    },
    "reward": [
      ["C","Instant Repair",3]
    ]
  },
  "A49": {
    "Jp": "「第二二駆逐隊」を編成せよ！",
    "En": "Organize the 22nd Destroyer Division",
    "content": "Have ONLY Satsuki, Fumizuki, Nagatsuki, and 1 more DD in your main fleet",
    "tips": "",
    "resources": {
      "F": "220",
      "A": "220",
      "S": "0",
      "B": "0"
    },
    "requires": ["B38"],
    "unlocks": ["B39"],
    "period": "once",
    "needs": {
      "S": ["Satsuki","Fumizuki","Nagatsuki"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["C","Improvement Material",2]
    ]
  },
  "A50": {
    "Jp": "「三川艦隊」を新編、突入準備せよ！",
    "En": "Reorganize the Mikawa Fleet and Prepare to Rush in",
    "content": "Have Choukai Kai Ni as flagship and fill the rest of the fleet with any combination of Furutaka, Kako, Aoba, Kinugasa, Yuubari, or Tenryuu for a total of 6 ships.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["A34","B16"],
    "unlocks": ["A57","C5"],
    "period": "once",
    "needs": {
      "S": ["Choukai Kai Ni","Aoba","Kako","Furutaka","Kinugasa","Yuubari","Tenryuu"]
    },
    "reward": [
      ["C","Instant Repair",2]
    ]
  },
  "A51": {
    "Jp": "「第十八戦隊」を新編成せよ！",
    "En": "Reorganize the 18th Squadron",
    "content": "Have Tenryuu, Tatsuta, and at least two other ships in your fleet",
    "tips": "",
    "resources": {
      "F": "180",
      "A": "180",
      "S": "0",
      "B": "180"
    },
    "requires": ["B42"],
    "unlocks": ["B43"],
    "period": "once",
    "needs": {
      "S": ["Tenryuu","Tatsuta"]
    },
    "reward": [
      ["C","Development Material",2]
    ]
  },
  "A52": {
    "Jp": "海上突入部隊を編成せよ！",
    "En": "Organize the Marine Rush Fleet",
    "content": "Have Hiei, Kirishima, Nagara, Akatsuki, Ikazuchi, and Inazuma in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["B16"],
    "unlocks": ["B44"],
    "period": "once",
    "needs": {
      "S": ["Hiei","Kirishima","Nagara","Akatsuki","Ikazuchi","Inazuma"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["C","Development Material",2]
    ]
  },
  "A53": {
    "Jp": "新編「第六駆逐隊」を編成せよ！",
    "En": "Organize the New 6th Destroyer Division",
    "content": "Have only Akatsuki Kai Ni as flagship with Hibiki (Верный is ok), Ikazuchi, and Inazuma in your main fleet",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "requires": ["B14"],
    "unlocks": ["B45"],
    "period": "once",
    "needs": {
      "S": ["Akatsuki","Hibiki","Ikazuchi","Inazuma"]
    },
    "reward": [
      ["E","Searchlight",1]
    ]
  },
  "A54": {
    "Jp": "「第一水雷戦隊」北方突入準備！",
    "En": "1st Torpedo Squadron, Prepare for a Rush to the Northern Sea",
    "content": "Have Abukuma as flagship with Hibiki (Верный is ok), Hatsushimo, Wakaba, Samidare and Shimakaze in your main fleet",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "requires": ["B21","Bd1"],
    "unlocks": ["B46","A78"],
    "period": "once",
    "needs": {
      "S": ["Abukuma","Hibiki","Hatsushimo","Wakaba","Samidare","Shimakaze"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Furniture box medium",1]
    ]
  },
  "A55": {
    "Jp": "「第一水雷戦隊」北方再突入準備！",
    "En": "1st Torpedo Squadron, Prepare for Another Rush to the Northern Sea",
    "content": "Have Abukuma Kai Ni as flagship with Hibiki (Верный is ok), Yuugumo, Naganami, Akigumo and Shimakaze in your main fleet",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["C7"],
    "unlocks": ["B47"],
    "period": "once",
    "needs": {
      "S": ["Abukuma Kai Ni","Hibiki","Yuugumo","Naganami","Akigumo","Shimakaze"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Large furniture box",1]
    ]
  },
  "A56": {
    "Jp": "「第五航空戦隊」を再編成せよ！",
    "En": "Reorganize the 5th Carrier Division",
    "content": "Have Shoukaku, Zuikaku, Oboro and Akigumo in your main fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["A23","Bm6"],
    "unlocks": ["B50"],
    "period": "once",
    "needs": {
      "S": ["Shoukaku","Zuikaku","Oboro","Akigumo"]
    },
    "reward": [
      ["C","Development Material",3]
    ]
  },
  "A57": {
    "Jp": "新編「第二一戦隊」出撃準備！",
    "En": "Prepare the New 21st Squadron for Sortie",
    "content": "Have Nachi Kai Ni, Ashigara Kai Ni, Tama and Kiso in your main fleet",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "150",
      "B": "0"
    },
    "requires": ["A50","B34"],
    "unlocks": ["B51"],
    "period": "once",
    "needs": {
      "S": ["Nachi Kai Ni","Ashigara Kai Ni","Tama","Kiso"]
    },
    "reward": [
      ["C","Development Material",2],
      ["C","Improvement Material",2]
    ]
  },
  "A58": {
    "Jp": "「第十六戦隊(第一次)」を編成せよ！",
    "En": "Organize the 16th Squadron (First Generation)",
    "content": "Have Ashigara as flagship with Kuma and Nagara in your main fleet",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "150",
      "B": "0"
    },
    "requires": ["Bd2"],
    "unlocks": ["B52"],
    "period": "once",
    "needs": {
      "S": ["Ashigara","Kuma","Nagara"]
    },
    "reward": [
      ["C","Development Material",2],
      ["C","Instant Repair",2]
    ]
  },
  "A59": {
    "Jp": "「第三航空戦隊」を編成せよ！",
    "En": "Organize the 3rd Carrier Division",
    "content": "Have Zuikaku Kai as flagship, Zuihou, Chitose Carrier and Chiyoda Carrier (both as CVL, not AV) in your main fleet",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "0",
      "B": "200"
    },
    "requires": ["Bm6","F21"],
    "unlocks": ["B53","F24","F23"],
    "period": "once",
    "needs": {
      "S": ["Zuikaku","Zuihou","Chitose Carrier","Chiyoda Carrier"]
    },
    "reward": [
      ["C","Development Material",2],
      ["I","Skilled Crew Member",1]
    ]
  },
  "A60": {
    "Jp": "「第四航空戦隊」を編成せよ！",
    "En": "Organize the 4th Carrier Division",
    "content": "Have Ise Kai and Hyuuga Kai in your main fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "200"
    },
    "requires": ["B53"],
    "unlocks": ["A61","A77"],
    "period": "once",
    "needs": {
      "S": ["Ise Kai","Hyuuga Kai"]
    },
    "reward": [
      ["C","Improvement Material",2],
      ["E","Zuiun (634 Air Group)",1]
    ]
  },
  "A61": {
    "Jp": "「小沢艦隊」を編成せよ！",
    "En": "Organize Ozawa's Fleet",
    "content": "Have Zuikaku Kai as flagship, Zuihou Kai, Chitose Carrier, Chiyoda Carrier, Ise Kai and Hyuuga Kai in your main fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["Bm7","A60"],
    "unlocks": ["B54","F28"],
    "period": "once",
    "needs": {
      "S": ["Zuikaku Kai","Zuihou","Chitose Carrier","Chiyoda Carrier","Ise Kai","Hyuuga Kai"]
    },
    "reward": [
      ["C","Development Material",2],
      ["I","Repair Team",1]
    ]
  },
  "A62": {
    "Jp": "新航空戦隊を編成せよ！",
    "En": "Organize the New Carrier Division",
    "content": "Have Zuikaku Kai Ni, Shoukaku Kai Ni and two DD in your fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "300",
      "B": "300"
    },
    "requires": ["F29","F23"],
    "unlocks": ["F30","F45"],
    "period": "once",
    "needs": {
      "S": ["Zuikaku Kai Ni","Shoukaku Kai Ni"]
    },
    "reward": [
      ["I","Skilled Crew Member",1],
      ["I","Irako",1]
    ]
  },
  "A63": {
    "Jp": "「第十六戦隊(第二次)」を編成せよ！",
    "En": "Organize the 16th Squadron (Second Generation)",
    "content": "Have Natori as flagship, Isuzu and Kinu in your fleet",
    "tips": "",
    "resources": {
      "F": "160",
      "A": "160",
      "S": "160",
      "B": "0"
    },
    "requires": ["B52"],
    "unlocks": ["B55"],
    "period": "once",
    "needs": {
      "S": ["Natori","Isuzu","Kinu"]
    },
    "reward": [
      ["C","Development Material",2],
      ["C","Instant Repair",2]
    ]
  },
  "A64": {
    "Jp": "「新編成航空戦隊」を編成せよ！",
    "En": "Organize the New Carrier Division",
    "content": "Have 2 CV / CVL, 2 BBV / CAV and 2 DD in your fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "200"
    },
    "requires": ["B50","B55"],
    "unlocks": ["B56"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Improvement Material",2],
      ["C","Development Material",2]
    ]
  },
  "A65": {
    "Jp": "精強な「水上反撃部隊」を再編成せよ！",
    "En": "Reorganize the Strengthened Surface Counterattack Fleet",
    "content": "Have Kasumi as flagship, Ashigara, Ooyodo, Asashimo and Kiyoshimo in your fleet",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["B56","A46"],
    "unlocks": ["B57"],
    "period": "once",
    "needs": {
      "S": ["Kasumi","Ashigara","Ooyodo","Asashimo","Kiyoshimo"]
    },
    "reward": [
      ["C","Instant Repair",3]
    ]
  },
  "A66": {
    "Jp": "「第三十一戦隊(第一次)」を編成せよ！",
    "En": "Organize the 31st Division (First Generation)",
    "content": "Have Isuzu Kai Ni as flagship, Satsuki Kai Ni and Uzuki Kai in your fleet",
    "tips": "",
    "resources": {
      "F": "310",
      "A": "310",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bd2","B55"],
    "unlocks": ["B60","B72"],
    "period": "once",
    "needs": {
      "S": ["Isuzu Kai Ni","Satsuki Kai Ni","Uzuki Kai"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Irako",1]
    ]
  },
  "A67": {
    "Jp": "「第二七駆逐隊」を編成せよ！",
    "En": "Organize the 27th Destroyer Division",
    "content": "Have ONLY Shiratsuyu Kai, Shigure, Harusame and Samidare in your fleet, with Shiratsuyu set as the flagship.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "270",
      "S": "270",
      "B": "0"
    },
    "requires": ["A31","Bd2"],
    "unlocks": ["B61"],
    "period": "once",
    "needs": {
      "S": ["Shiratsuyu Kai","Shigure","Harusame","Samidare"]
    },
    "reward": [
      ["C","Development Material",2],
      ["C","Instant Repair",2]
    ]
  },
  "A68": {
    "Jp": "強行高速輸送部隊を編成せよ！",
    "En": "Organise a Forced High-speed Transport Fleet!",
    "content": "Have Sendai Kai Ni as flagship, Kawakaze Kai Ni, Shigure Kai Ni and two other DD in your fleet.",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "100",
      "S": "100",
      "B": "0"
    },
    "requires": ["B53"],
    "unlocks": ["B68"],
    "period": "once",
    "needs": {
      "S": ["Sendai Kai Ni","Kawakaze Kai Ni","Shigure Kai Ni"]
    },
    "reward": [
      ["C","Instant Repair",2]
    ]
  },
  "A69": {
    "Jp": "新編「水雷戦隊」を含む艦隊を再編成せよ！",
    "En": "Organise a New Torpedo Squadron!",
    "content": "Have a CL/CLT/CT as the flagship and 4 DD in any of your fleets.",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["A9"],
    "unlocks": ["B70"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2]
    ]
  },
  "A70": {
    "Jp": "新編「第八駆逐隊」を再編成せよ！",
    "En": "Reorganise the New 8th Destroyer Division!",
    "content": "Have ONLY Asashio Kai Ni/Asashio Kai Ni D as flagship, Michishio, Ooshio and Arashio in your fleet.",
    "tips": " If you put Asashio into your fleet, remodel her and then activate the quest you can't clear it for some reason. Either remove her from the fleet and put her back in, or turn the quest off and on again.",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["B20"],
    "unlocks": ["B73"],
    "period": "once",
    "needs": {
      "S": ["Asashio Kai Ni","Michishio","Ooshio","Arashio"]
    },
    "reward": [
      ["C","Development Material",3]
    ]
  },
  "A71": {
    "Jp": "精鋭！八駆第一小隊！",
    "En": "Elite! DesDiv 8, 1st platoon!",
    "content": "Have Asashio Kai Ni D and Ooshio Kai Ni in your fleet.",
    "tips": "",
    "resources": {
      "F": "250",
      "A": "250",
      "S": "0",
      "B": "0"
    },
    "requires": ["B72"],
    "unlocks": ["B74"],
    "period": "once",
    "needs": {
      "S": ["Asashio Kai Ni D","Ooshio Kai Ni"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["I","Irako",1]
    ]
  },
  "A72": {
    "Jp": "「第十九駆逐隊」を編成せよ！",
    "En": "Organise the 19th Destroyer Division!",
    "content": "Have Isonami, Uranami, Ayanami and Shikinami in your fleet.",
    "tips": "",
    "resources": {
      "F": "190",
      "A": "190",
      "S": "190",
      "B": "0"
    },
    "requires": ["B21","Bd1"],
    "unlocks": ["B78"],
    "period": "once",
    "needs": {
      "S": ["Isonami","Uranami","Ayanami","Shikinami"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Combat Ration",1]
    ]
  },
  "A73": {
    "Jp": "「第十六戦隊(第三次)」を編成せよ！",
    "En": "Form the 16th Cruiser Division (Third Generation)!",
    "content": "Have Kinu, Aoba, Kitakami and Ooi in your fleet.",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "200",
      "B": "0"
    },
    "requires": ["B55"],
    "unlocks": ["B84"],
    "period": "once",
    "needs": {
      "S": ["Kinu","Aoba","Kitakami","Ooi"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["C","Development Material",2]
    ]
  },
  "A74": {
    "Jp": "精鋭「第十六戦隊」を再編成せよ！",
    "En": "Reorganise the Elite 16th Cruiser Division!",
    "content": "Have Kinu Kai Ni as flagship, Kitakami Kai Ni, Ooi Kai Ni, Kuma Kai, Aoba Kai, Uranami Kai, Shikinami Kai.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["B84"],
    "unlocks": ["B85"],
    "period": "once",
    "needs": {
      "S": ["Kinu Kai Ni","Kitakami Kai Ni","Ooi Kai Ni","Kuma Kai","Aoba Kai","Uranami Kai","Shikinami Kai"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Repair Team",1]
    ]
  },
  "A75": {
    "Jp": "新編「第一戦隊」を編成せよ！",
    "En": "Organize the New First Squadron!",
    "content": "Have Nagato Kai Ni as flagship and Mutsu Kai as second ship in your main fleet.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "880",
      "S": "0",
      "B": "0"
    },
    "requires": ["B31","B52"],
    "unlocks": ["B99"],
    "period": "once",
    "needs": {
      "S": ["Nagato Kai Ni","Mutsu Kai"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Irako",1]
    ]
  },
  "A76": {
    "Jp": "新編「第七戦隊」を編成せよ！",
    "En": "Organize the New Seventh Squadron!",
    "content": "Have Kumano Kai Ni as flagship, Suzuya Kai Ni as second ship, Mogami Kai and Mikuma Kai in your main fleet.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "700"
    },
    "requires": ["B95","Cd1"],
    "unlocks": ["B101"],
    "period": "once",
    "needs": {
      "S": ["Kumano Kai Ni","Suzuya Kai Ni","Mogami Kai","Mikuma Kai"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Irako",1]
    ]
  },
  "A77": {
    "Jp": "精鋭「第四航空戦隊」を再編成せよ！",
    "En": "Reorganize the Elite \"Fourth Carrier Division\"!",
    "content": "Have Ise and Hyuuga both above level 50 as flagship and 2nd ship along with 1CL + 2 DD and 1 additional ship in your main fleet.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "400"
    },
    "requires": ["A60","B14"],
    "unlocks": ["B102"],
    "period": "once",
    "needs": {
      "S": ["Ise","Hyuuga"]
    },
    "reward": [
      ["C","Development Material",4],
      ["I","Skilled Crew Member",1]
    ]
  },
  "A78": {
    "Jp": "新編「第四水雷戦隊」を編成せよ！",
    "En": "Organize the New 4th Torpedo Squadron!",
    "content": "Have Yura Kai Ni as flagship, Murasame, Yuudachi, Harusame, Samidare and 1 DD in your main fleet.",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["A54","B15"],
    "unlocks": ["B103"],
    "period": "once",
    "needs": {
      "S": ["Yura Kai Ni","Murasame","Yuudachi","Harusame","Samidare"]
    },
    "reward": [
      ["C","Instant Repair",4],
      ["I","Repair Team",1]
    ]
  },
  "A79": {
    "Jp": "精鋭「第二二駆逐隊」を再編成せよ！",
    "En": "Reorganize the Elite 22th Destroyer Squadron!",
    "content": "Have Fumizuki Kai Ni, Satsuki Kai Ni, Minazuki Kai and Nagatsuki Kai in your first fleet.",
    "tips": "",
    "resources": {
      "F": "220",
      "A": "0",
      "S": "220",
      "B": "0"
    },
    "requires": ["B39"],
    "unlocks": ["B104","A91"],
    "period": "once",
    "needs": {
      "S": ["Fumizuki Kai Ni","Satsuki Kai Ni","Nagatsuki Kai","Minazuki Kai"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Combat Ration",2]
    ]
  },
  "A80": {
    "Jp": "精強「任務部隊」を編成せよ！",
    "En": "Organize a Powerful Task Force!",
    "content": "Have Saratoga Mk.II or Saratoga Mk.II Mod.2 as flagship with 1 CL and 2 DD in your main fleet.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "300"
    },
    "requires": ["Bd1"],
    "unlocks": ["B105","F61"],
    "period": "once",
    "needs": {
      "S": ["Saratoga Mk.II"]
    },
    "reward": [
      ["E","Fd2F-3",1,"Choose one: "],
      ["E","F4U-1D",1,"or "],
      ["E","TBF",1,"Choose one: "],
      ["I","New Model Aerial Armament Materials",1,"or "]
    ]
  },
  "A81": {
    "Jp": "最精鋭「第八駆逐隊」を編成せよ！",
    "En": "Form the New Elite 8th Destroyer Division!",
    "content": "Have Michishio Kai Ni, Asashio Kai Ni/Asashio Kai Ni D, Ooshio Kai Ni and Arashio Kai Ni in the fleet.",
    "tips": "Play line on completion.",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["B108","B74"],
    "unlocks": ["B109"],
    "period": "once",
    "needs": {
      "S": ["Michishio Kai Ni","Asashio Kai Ni","Ooshio Kai Ni","Arashio Kai Ni"]
    },
    "reward": [
      ["I","Combat Ration",1],
      ["I","Irako",1]
    ]
  },
  "A82": {
    "Jp": "「西村艦隊」第二戦隊随伴部隊、集結せよ！",
    "En": "2nd Naval Assault Squadron Nishimura Fleet, Gather!",
    "content": "Have Mogami, Michishio, Shigure, Asagumo and Yamagumo in the third fleet.",
    "tips": "Play line on completion.",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "300",
      "B": "0"
    },
    "requires": ["D27"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Mogami","Michishio","Shigure","Asagumo","Yamagumo"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Irako",2,"Choose one: "],
      ["I","Furniture Fairy",1,"or "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
  "A83": {
    "Jp": "精銳「三一駆」第一小隊、抜錨準備!",
    "En": "Elite 31st Destroyer Division 1st Squadron, Prepare for Launch！",
    "content": "Have Naganami Kai Ni as flagship, then put only one of the following ships into your fleet as escort: Takanami Kai, Okinami Kai, Asashimo Kai.",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd7","B20"],
    "unlocks": ["Bq6"],
    "period": "once",
    "needs": {
      "S": ["Naganami Kai Ni","Takanami Kai","Okinami Kai","Asashimo Kai"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Combat Ration (Special Onigiri)",2,"Choose one: "],
      ["I","Furniture Fairy",1,"or "]
    ]
  },
  "A84": {
    "Jp": "精鋭「四水戦」抜錨準備！",
    "En": "Elite 4th Torpedo Squadron, Prepare for Sortie!",
    "content": "Form a Fleet with Murasame Kai Ni as Flagship along with at least 3 of the following ships: Yura Kai Ni, Yuudachi Kai Ni, Harusame Kai, Samidare Kai, Akizuki Kai, and two additional ships of your choice.",
    "tips": "Play line on completion.",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "0"
    },
    "requires": ["B34"],
    "unlocks": ["B112"],
    "period": "once",
    "needs": {
      "S": ["Murasame Kai Ni","Yura Kai Ni","Yuudachi Kai Ni","Harusame Kai","Samidare Kai","Akizuki Kai"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Repair Goddess",1]
    ]
  },
  "A85": {
    "Jp": "精鋭「第二一駆逐隊」、抜錨準備！",
    "En": "Elite 21st Destroyer Division, Prepare for Sortie!",
    "content": "Form a Fleet including Wakaba Kai, Hatsuharu Kai Ni, Hatsushimo Kai Ni and up to one additional ship.",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["B37"],
    "unlocks": ["C16"],
    "period": "once",
    "needs": {
      "S": ["Wakaba Kai","Hatsuharu Kai Ni","Hatsushimo Kai Ni"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Combat Ration",1]
    ]
  },
  "A86": {
    "Jp": "改装「第十七駆逐隊」、再編始め！",
    "En": "Reorganize the Remodeled 17th Destroyer Division!",
    "content": "Form a Fleet including Isokaze B Kai, Hamakaze B Kai, Urakaze Kai and Tanikaze Kai .",
    "tips": "",
    "period": "once",
    "requires": ["Fq6","B61","A90"],
    "unlocks": [],
    "resources": {
      "F": "170",
      "A": "170",
      "S": "170",
      "B": "0"
    },
    "needs": {
      "S": ["Isokaze B Kai","Hamakaze B Kai","Urakaze Kai","Tanikaze Kai"]
    },
    "reward": [
      ["I","Reinforcement Expansion",1],
      ["I","Irako",1]
    ]
  },
  "A87": {
    "Jp": "精鋭「第十八駆逐隊」を編成せよ！",
    "En": "Organise the Elite \"18th Destroyer Division\"!",
    "content": "Form a Fleet including Arare Kai Ni, Kasumi Kai Ni/Kasumi Kai Ni B, Kagerou Kai and Shiranui Kai .",
    "tips": "",
    "period": "once",
    "requires": ["B58"],
    "unlocks": ["B116"],
    "resources": {
      "F": "180",
      "A": "0",
      "S": "180",
      "B": "0"
    },
    "needs": {
      "S": ["Arare Kai Ni","Kagerou Kai","Kasumi Kai Ni","Shiranui Kai"]
    },
    "reward": [
      ["I","Reinforcement Expansion",1,"Choose one: "],
      ["I","Furniture Fairy",1,"or "]
    ]
  },
  "A88": {
    "Jp": "最精銳甲型駆逐艦、集結せよ！",
    "En": "Elite Type-A Destroyers, Assemble!",
    "content": "Form a Fleet including Kagerou Kai Ni, Shiranui Kai Ni, Kuroshio Kai Ni and three level 70 or above Kagerou/Yuugumo class destroyers",
    "tips": "※ On completion plays ",
    "period": "once",
    "requires": ["B109"],
    "unlocks": ["C18","C18"],
    "resources": {
      "F": "150",
      "A": "150",
      "S": "150",
      "B": "0"
    },
    "needs": {
      "S": ["Kagerou Kai Ni","Shiranui Kai Ni","Kuroshio Kai Ni"]
    },
    "reward": [
      ["I","Medal",1,"Choose one: "],
      ["E","12.7cm Twin Gun Mount Model C Kai 2",1,"or "]
    ]
  },
  "A89": {
    "Jp": "精鋭「第十八戦隊」を再編せよ！",
    "En": "Organize the Elite 18th Cruiser Division!",
    "content": "Form a Fleet including ONLY Tenryuu Kai Ni and Tatsuta Kai Ni",
    "tips": "",
    "period": "once",
    "requires": ["B43"],
    "unlocks": ["B120"],
    "resources": {
      "F": "180",
      "A": "0",
      "S": "180",
      "B": "0"
    },
    "needs": {
      "S": ["Tatsuta Kai Ni","Tenryuu Kai Ni"]
    },
    "reward": [
      ["C","Development Material",5,"Choose one: "],
      ["I","Furniture Fairy",1,"or "]
    ]
  },
  "A90": {
    "Jp": "精強「第十七駆逐隊」を編成せよ！",
    "En": "Organize the Elite 17th Destroyer Division!",
    "content": "Have Isokaze B Kai, Hamakaze B Kai, Urakaze D Kai, and Tanikaze D Kai in your fleet.",
    "tips": "",
    "period": "once",
    "requires": ["A86","F3"],
    "unlocks": ["B123","C27"],
    "resources": {
      "F": "170",
      "A": "170",
      "S": "0",
      "B": "170"
    },
    "needs": {
      "S": ["Isokaze B Kai","Hamakaze B Kai","Urakaze D Kai","Tanikaze D Kai"]
    },
    "reward": [
      ["I","Irako",1],
      ["I","Combat provision",2,"Choose one: "],
      ["C","Instant Repair",3,"or "]
    ]
  },  
  "A91": {
    "Jp": "精銳「第十駆逐隊」、拔錨準備！",
    "En": "Elite '10th Destroyer Division', prepare for sortie!",
    "content": "Have Yuugumo Kai Ni & Makigumo Kai Ni in your fleet.",
    "tips": "",
    "period": "once",
    "requires": ["A79"],
    "unlocks": ["B126"],
    "resources": {
      "F": "200",
      "A": "0",
      "S": "200",
      "B": "0"
    },
    "needs": {
      "S": ["Yuugumo Kai Ni","Makigumo Kai Ni"]
    },
    "reward": [
      ["I","Combat Ration",1],
      ["C","Instant Repair",5,"Choose one: "],
      ["I","Furniture Fairy",1,"or "]
    ]
  },
  "A92": {
    "Jp": "精鋭無比「第一戦隊」抜錨準備！",
    "En": "Unrivaled \"1st Squadron\", Ready to Set Sail!",
    "content": "Have Nagato Kai Ni as flagship and Mutsu Kai Ni as second ship in your fleet.",
    "tips": "※ On completion plays",
    "unlocks": ["B129"],
    "requires": ["B99"],
    "period": "once",
    "needs": {
      "S": ["Mutsu Kai Ni","Nagato Kai Ni"]
    },
    "resources": {
      "F": "0",
      "A": "800",
      "S": "800",
      "B": "0"
    },
    "reward": [
      ["E","Type 3 Shell Kai","1"],
      ["E","41cm Twin Gun Mount","2","Choose one: "],
      ["I","New Model Gun Mount Improvement Material","1","or "],
      ["C","Development Material","8","or "]
    ]
  },
  "A93": {
    "Jp": "主力オブ主力、精強「十駆」出撃準備ヨシ！",
    "En": "Main Force Of The Main Force, Powerful \"DesDiv 10\", Ready To Sortie!",
    "content": "Assemble a fleet containing only Yuugumo Kai Ni, Makigumo Kai Ni, Kazagumo Kai Ni, and Akigumo Kai Ni.",
    "tips": "",
    "unlocks": ["B157","Cy2"],
    "requires": ["B126"],
    "period": "once",
    "needs": {
      "S": ["Yuugumo Kai Ni","Makigumo Kai Ni","Kazagumo Kai Ni","Akigumo Kai Ni"]
    },
    "resources": {
      "F": "0",
      "A": "800",
      "S": "800",
      "B": "0"
    },
    "reward": [
      ["E","Type 3 Shell Kai","1"],
      ["E","41cm Twin Gun Mount","2","Choose one: "],
      ["I","New Model Gun Mount Improvement Material","1","or "],
      ["C","Development Material","8","or "]
    ]
  },



// SORTIE QUest before 100 B00
  "B1": {
    "Jp": "はじめての「出撃」！",
    "En": "The First Sortie",
    "content": "Sortie your main fleet",
    "tips": "",
    "resources": {
      "F": "20",
      "A": "20",
      "S": "0",
      "B": "0"
    },
    "requires": [],
    "unlocks": ["B2"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1]
    ]
  },
  "B2": {
    "Jp": "鎮守府正面海域を護れ！",
    "En": "Guard the Sea in Front of the Naval Base",
    "content": "Sortie to World 1-1 and clear the stage",
    "tips": "",
    "resources": {
      "F": "30",
      "A": "30",
      "S": "30",
      "B": "0"
    },
    "requires": ["B1"],
    "unlocks": ["E1","E2","B4","F16"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1]
    ]
  },
  "B3": {
    "Jp": "第2艦隊、出撃せよ！",
    "En": "Sortie The 2nd Fleet",
    "content": "Sortie your second fleet",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "200",
      "B": "200"
    },
    "requires": ["A6"],
    "unlocks": ["A11"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "B4": {
    "Jp": "南西諸島沖に出撃せよ！",
    "En": "Sortie to World 1-2 and clear the stage",
    "content": "Sortie to World 1-2, defeat the boss and clear the stage",
    "tips": "",
    "resources": {
      "F": "40",
      "A": "40",
      "S": "0",
      "B": "0"
    },
    "requires": ["B2"],
    "unlocks": ["Bd1","B5","F80"],
    "period": "once",
    "needs": {
      "M": ["1-2"]
    },
    "reward": [
      ["C","Instant Repair",1]
    ]
  },
  "B5": {
    "Jp": "接近する「敵前衛艦隊」を迎撃せよ！",
    "En": "Intercept the Approaching Enemy Vanguard Fleet",
    "content": "Sortie to World 1-2 AGAIN and clear the stage",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "0",
      "S": "50",
      "B": "0"
    },
    "requires": ["B4"],
    "unlocks": ["B6","B48"],
    "period": "once",
    "needs": {
      "M": ["1-2"]
    },
    "reward": [
      ["C","Development Material",1],
      ["S","Miyuki",1]
    ]
  },
  "B6": {
    "Jp": "「水雷戦隊」で出撃せよ！",
    "En": "Sortie a Torpedo Squadron",
    "content": "Sortie a CL as flagship and 3 DD",
    "tips": "",
    "resources": {
      "F": "60",
      "A": "60",
      "S": "0",
      "B": "60"
    },
    "requires": ["B5"],
    "unlocks": ["B7","B30","B67"],
    "period": "once",
    "needs": {},
    "reward": [
      ["S","Tatsuta",1]
    ]
  },
  "B7": {
    "Jp": "「重巡洋艦」を出撃させよ！",
    "En": "Sortie a Heavy Cruiser",
    "content": "Sortie a fleet with a CA as flagship",
    "tips": "",
    "resources": {
      "F": "70",
      "A": "0",
      "S": "70",
      "B": "0"
    },
    "requires": ["B6"],
    "unlocks": ["B8","D15"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "B8": {
    "Jp": "「戦艦」を出撃させよ！",
    "En": "Sortie a Battleship",
    "content": "Sortie a fleet with a BB as flagship. BBV (BBVs) don't count",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "150",
      "S": "150",
      "B": "0"
    },
    "requires": ["B7"],
    "unlocks": ["B9","B88"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "B9": {
    "Jp": "「空母機動部隊」出撃せよ！",
    "En": "Sortie a Carrier Task Force",
    "content": "Sortie a Light or Standard Carrier flagship and 5 CL, DD, or AV",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["B8"],
    "unlocks": ["Fq1","B76"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "B10": {
    "Jp": "敵空母を撃沈せよ！",
    "En": "Sink an Enemy Carrier",
    "content": "Sink an enemy CV / CVL.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["A11"],
    "unlocks": ["Bq3"],
    "period": "once",
    "needs": {},
    "reward": [
      ["S","Akagi",1]
    ]
  },
  "B11": {
    "Jp": "「三川艦隊」出撃せよ！",
    "En": "Sortie the Mikawa Fleet",
    "content": "Sortie Choukai, Aoba, Kako, Furutaka and Tenryuu, with one additional fast ship to any map",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["A20"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Choukai","Aoba","Kako","Furutaka","Tenryuu"]
    },
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "B12": {
    "Jp": "「第六駆逐隊」出撃せよ！",
    "En": "Sortie the 6th Destroyer Division",
    "content": "Sortie ONLY Akatsuki, Hibiki, Ikazuchi, and Inazuma to any map",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["A10","Bw3"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Akatsuki","Hibiki","Ikazuchi","Inazuma"]
    },
    "reward": [
      ["C","Instant Repair",1]
    ]
  },
  "B13": {
    "Jp": "「第四戦隊」出撃せよ！",
    "En": "Sortie the 4th Cruiser Division",
    "content": "Sortie Takao, Atago, Maya, Choukai and 2 additional ships to World 2-2 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "100",
      "S": "150",
      "B": "100"
    },
    "requires": ["A21"],
    "unlocks": ["B122"],
    "period": "once",
    "needs": {
      "M": ["2-2"],
      "S": ["Takao","Atago","Maya","Choukai"]
    },
    "reward": [
      ["C","Instant Repair",1]
    ]
  },
  "B14": {
    "Jp": "「西村艦隊」出撃せよ！",
    "En": "Sortie the Nishimura Fleet",
    "content": "Sortie Fusou, Yamashiro, Mogami, Shigure and 2 additional ships to World 2-3 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "400",
      "B": "0"
    },
    "requires": ["A22"],
    "unlocks": ["A44","A53","A77"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Fusou","Yamashiro","Mogami","Shigure"]
    },
    "reward": [
      ["I","Furniture box small",1],
      ["C","Instant Repair",2]
    ]
  },
  "B15": {
    "Jp": "「第五航空戦隊」出撃せよ！",
    "En": "Sortie the 5th Carrier Division",
    "content": "Sortie Shoukaku, Zuikaku, and 4 additional ships to World 3-1 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "0",
      "B": "700"
    },
    "requires": ["A23"],
    "unlocks": ["A78","F80"],
    "period": "once",
    "needs": {
      "M": ["3-1"],
      "S": ["Shoukaku","Zuikaku"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["C","Instant Repair",2]
    ]
  },
  "B16": {
    "Jp": "新「三川艦隊」出撃せよ！",
    "En": "Sortie the New Mikawa Fleet",
    "content": "Sortie Choukai, Furutaka, Kako, Aoba, Kinugasa, and Tenryuu to World 2-3 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "150",
      "S": "100",
      "B": "150"
    },
    "requires": ["A24"],
    "unlocks": ["A50","A52"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Choukai","Furutaka","Kako","Aoba","Kinugasa","Tenryuu"]
    },
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "B17": {
    "Jp": "「潜水艦隊」出撃せよ！?",
    "En": "Sortie a Submarine Fleet",
    "content": "Sortie 2 SS and 4 additional ships to World 2-3 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["A25"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["2-3"]
    },
    "reward": [
      ["I","Furniture Fairy",1]
    ]
  },
  "B18": {
    "Jp": "「航空水上打撃艦隊」出撃せよ！",
    "En": "Sortie an Aviation Surface Attack Fleet",
    "content": "Sortie 2 CAV, 2 BBV, and 2 additional ships to World 4-2 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "150",
      "S": "0",
      "B": "300"
    },
    "requires": ["A26"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["4-2"]
    },
    "reward": [
      ["I","Mamiya",1]
    ]
  },
  "B19": {
    "Jp": "「第六戦隊」出撃せよ！",
    "En": "Sortie the 6th Cruiser Division",
    "content": "Sortie Aoba, Furutaka, Kako, Kinugasa and 2 additional ships to World 2-3 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "150",
      "S": "0",
      "B": "300"
    },
    "requires": ["A28"],
    "unlocks": ["B34","Bq1","B89"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Aoba","Furutaka","Kako","Kinugasa"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["I","Repair Team",1]
    ]
  },
  "B20": {
    "Jp": "「第八駆逐隊」出撃せよ！",
    "En": "Sortie the 8th Destroyer Division",
    "content": "Sortie Arashio, Asashio, Michishio, Ooshio and 2 additional ships to World 2-3 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "400",
      "B": "0"
    },
    "requires": ["A31"],
    "unlocks": ["A32","A70","B65","Bm6","D10","B108","A83"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Arashio","Asashio","Michishio","Ooshio"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["C","Development Material",1]
    ]
  },
  "B21": {
    "Jp": "「第十八駆逐隊」出撃せよ！",
    "En": "Sortie the 18th Destroyer Division",
    "content": "Sortie Arare, Kagerou, Kasumi, Shiranui and 2 additional ships to World 3-1 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "400"
    },
    "requires": ["A32"],
    "unlocks": ["Bm5","A54","A72"],
    "period": "once",
    "needs": {
      "M": ["3-1"],
      "S": ["Arare","Kagerou","Kasumi","Shiranui"]
    },
    "reward": [
      ["I","Large furniture box",1],
      ["C","Development Material",2]
    ]
  },
  "B22": {
    "Jp": "「第三十駆逐隊(第一次)」出撃せよ！",
    "En": "Sortie the 30th Destroyer Division (First Generation)",
    "content": "Sortie Mutsuki, Kisaragi, Mochizuki, Yayoi and 2 additional DD (or 1 CL flagship and  1 DD) to World 3-2 and obtain a C-Rank or better at the boss",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "100",
      "S": "100",
      "B": "500"
    },
    "requires": ["A33"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["3-2"],
      "S": ["Mutsuki","Kisaragi","Mochizuki","Yayoi"]
    },
    "reward": [
      ["I","Mamiya",1]
    ]
  },
  "B23": {
    "Jp": "「航空戦艦」抜錨せよ！",
    "En": "Sortie an Aviation Battleship",
    "content": "Sortie a fleet with at least 2 BBV to World 4-4 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "300",
      "B": "900"
    },
    "requires": ["D10"],
    "unlocks": ["B114"],
    "period": "once",
    "needs": {
      "M": ["4-4"]
    },
    "reward": [
      ["I","Large furniture box",1],
      ["C","Instant Repair",3]
    ]
  },
  "B24": {
    "Jp": "「第三十駆逐隊」対潜哨戒！",
    "En": "The 30th Destroyer Division Anti-Submarine Patrol",
    "content": "Sortie Mutsuki, Mochizuki, Uzuki and Yayoi to World 1-5 and obtain a C-Rank or better at the boss",
    "tips": "",
    "resources": {
      "F": "330",
      "A": "330",
      "S": "330",
      "B": "0"
    },
    "requires": ["A34"],
    "unlocks": ["A35","B27"],
    "period": "once",
    "needs": {
      "M": ["1-5"],
      "S": ["Mutsuki","Mochizuki","Uzuki","Yayoi"]
    },
    "reward": [
      ["I","Furniture Fairy",1]
    ]
  },
  "B25": {
    "Jp": "新編「第二航空戦隊」出撃せよ！",
    "En": "Sortie the New 2nd Carrier Division",
    "content": "Sortie Hiryuu Kai Ni as flagship, Souryuu (Kai or Kai-2 is ok), and 2 DD (you may add additional ships) to World 5-2 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "500",
      "S": "0",
      "B": "500"
    },
    "requires": ["A36"],
    "unlocks": ["A39","F13","F14"],
    "period": "once",
    "needs": {
      "M": ["5-2"],
      "S": ["Hiryuu Kai Ni","Souryuu"]
    },
    "reward": [
      ["I","Mamiya",1]
    ]
  },
  "B26": {
    "Jp": "精鋭「第二航空戦隊」抜錨せよ！",
    "En": "Sortie the Elite 2nd Carrier Division",
    "content": "Sortie Souryuu Kai Ni as flagship, Hiryuu Kai Ni, 2 DD and 2 additional ship to World 4-3 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "500",
      "B": "0"
    },
    "requires": ["A39"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["4-3"],
      "S": ["Souryuu Kai Ni","Hiryuu Kai Ni"]
    },
    "reward": [
      ["I","Furniture Fairy",1]
    ]
  },
  "B27": {
    "Jp": "戦艦「榛名」出撃せよ！",
    "En": "Sortie the Battleship: \"Haruna\"",
    "content": "Sortie Haruna Kai Ni and 5 additional ships to World 5-1 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B24"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["5-1"],
      "S": ["Haruna Kai Ni"]
    },
    "reward": [
      ["E","Prototype 35.6cm Triple Gun Mount",1]
    ]
  },
  "B28": {
    "Jp": "「第六〇一航空隊」出撃せよ！",
    "En": "Sortie the 601st Naval Air Group",
    "content": "Sortie Unryuu Kai and 5 additional ships to World 5-2 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "300"
    },
    "requires": ["A41"],
    "unlocks": ["F15"],
    "period": "once",
    "needs": {
      "M": ["5-2"],
      "S": ["Unryuu Kai"]
    },
    "reward": [
      ["E","Skilled Carrier-based Aircraft Maintenance Personnel",1]
    ]
  },
  "B29": {
    "Jp": "「軽空母」戦隊、出撃せよ！",
    "En": "Sortie a Light Carrier Squadron",
    "content": "Sortie 1-2 CVL, 1 CL, and 3-4 DD to World 2-1 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "300"
    },
    "requires": ["A5"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["2-1"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Repair Team",1]
    ]
  },
  "B30": {
    "Jp": "「水雷戦隊」バシー島沖緊急展開",
    "En": "The Torpedo Squadron Bashi Island Emergency Deployment",
    "content": "Sortie 1-2 CL, which one of must be the flagship, and 4-5 DD to World 2-2 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["B6"],
    "unlocks": ["Bm2","B111"],
    "period": "once",
    "needs": {
      "M": ["2-2"]
    },
    "reward": [
      ["I","Large furniture box",1],
      ["I","Furniture Fairy",1]
    ]
  },
  "B31": {
    "Jp": "「第二戦隊」抜錨！",
    "En": "Sortie the 2nd Squadron",
    "content": "Sortie Fusou, Mutsu, Nagato, Yamashiro and 2 additional ships to World 4-2 and obtain two S-Rank victories at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "0"
    },
    "requires": ["A42"],
    "unlocks": ["A43","A75"],
    "period": "once",
    "needs": {
      "M": ["4-2"],
      "S": ["Fusou","Mutsu","Nagato","Yamashiro"]
    },
    "reward": [
      ["E","Type 1 AP Shell",1]
    ]
  },
  "B32": {
    "Jp": "「戦艦部隊」北方海域に突入せよ！",
    "En": "Rush the Battleship Force to the Northern Sea",
    "content": "Sortie 2 BB (BBV do not count), 1 CVL, and 3 additional ships to World 3-5 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "500",
      "S": "0",
      "B": "250"
    },
    "requires": ["Bm4"],
    "unlocks": ["B49"],
    "period": "once",
    "needs": {
      "M": ["3-5"]
    },
    "reward": [
      ["C","Development Material",2],
      ["E","Type 1 AP Shell",1]
    ]
  },
  "B33": {
    "Jp": "「西村艦隊」南方海域へ進出せよ！",
    "En": "Advance the Nishimura Fleet to the Southern Sea",
    "content": "Sortie Fusou, Yamashiro, Mogami, Shigure, Michishio and 1 additional ship to World 5-1, and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "500",
      "B": "300"
    },
    "requires": ["A44"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["5-1"],
      "S": ["Fusou","Yamashiro","Mogami","Shigure","Michishio"]
    },
    "reward": [
      ["C","Improvement Material",5],
      ["I","Medal",1]
    ]
  },
  "B34": {
    "Jp": "「第六戦隊」南西海域へ出撃せよ！",
    "En": "Sortie the 6th Squadron to the Southwestern Sea",
    "content": "Sortie Furutaka, Kako, Aoba, Kinugasa and 2 additional ships to World 2-5 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "400"
    },
    "requires": ["B19"],
    "unlocks": ["A57","A84"],
    "period": "once",
    "needs": {
      "M": ["2-5"],
      "S": ["Furutaka","Kako","Aoba","Kinugasa"]
    },
    "reward": [
      ["I","Large furniture box",1],
      ["I","Furniture Fairy",1]
    ]
  },
  "B35": {
    "Jp": "「第十一駆逐隊」 出撃せよ！",
    "En": "Sortie the 11th Destroyer Division",
    "content": "Sortie Fubuki, Shirayuki, Hatsuyuki, Murakumo, and 2 additional ships to World 2-3 and defeat the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "300",
      "B": "0"
    },
    "requires": ["A47"],
    "unlocks": ["A48"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Fubuki","Shirayuki","Hatsuyuki","Murakumo"]
    },
    "reward": [
      ["I","Mamiya",1]
    ]
  },
  "B36": {
    "Jp": "「第十一駆逐隊」対潜哨戒!",
    "En": "The 11th Destroyer Division Anti-Submarine Patrol",
    "content": "Sortie Fubuki, Shirayuki, Hatsuyuki, and Murakumo to World 1-5 and obtain at least a C or above Rank at the boss",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "0",
      "B": "200"
    },
    "requires": ["A47"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-5"],
      "S": ["Fubuki","Shirayuki","Hatsuyuki","Murakumo"]
    },
    "reward": [
      ["C","Development Material",2],
      ["E","Type 3 Sonar",1]
    ]
  },
  "B37": {
    "Jp": "「第二一駆逐隊」出撃せよ！",
    "En": "Sortie the 21st Destroyer Division",
    "content": "Sortie Hatsuharu, Nenohi, Wakaba, Hatsushimo, and 2 additional ships to World 3-1 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "300",
      "B": "0"
    },
    "requires": ["A48"],
    "unlocks": ["B38","A85"],
    "period": "once",
    "needs": {
      "M": ["3-1"],
      "S": ["Hatsuharu","Nenohi","Wakaba","Hatsushimo"]
    },
    "reward": [
      ["I","Present box",1]
    ]
  },
  "B38": {
    "Jp": "「那智戦隊」抜錨せよ！",
    "En": "Sortie the Nachi Squadron",
    "content": "Sortie Nachi as flagship, Hatsushimo, Kasumi, Ushio, Akebono, and 1 other ship to World 2-2 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["B37","Bm1"],
    "unlocks": ["A49"],
    "period": "once",
    "needs": {
      "M": ["2-2"],
      "S": ["Nachi","Hatsushimo","Kasumi","Ushio","Akebono"]
    },
    "reward": [
      ["I","Large furniture box",1],
      ["C","Improvement Material",2]
    ]
  },
  "B39": {
    "Jp": "「第二二駆逐隊」出撃せよ！",
    "En": "Sortie the 22nd Destroyer Division",
    "content": "Sortie Satsuki, Fumizuki, Nagatsuki, 1 other DD, and 2 other additional ships to World 1-4 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "400"
    },
    "requires": ["A49"],
    "unlocks": ["A79"],
    "period": "once",
    "needs": {
      "M": ["1-4"],
      "S": ["Satsuki","Fumizuki","Nagatsuki"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["I","Irako",1]
    ]
  },
  "B40": {
    "Jp": "「改装防空重巡」出撃せよ！",
    "En": "Sortie the Remodeled Anti-Air Heavy Cruiser",
    "content": "Sortie Maya (Kai or Kai-2), 1 CL, and 2 DD (you may add additional ships) to World 2-3 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["D15"],
    "unlocks": ["D16"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Maya Kai"]
    },
    "reward": [
      ["E","25mm Triple Autocannon Mount",1],
      ["E","Type 3 Shell",1]
    ]
  },
  "B41": {
    "Jp": "新編「三川艦隊」ソロモン方面へ！",
    "En": "Sortie the New Mikawa Fleet to the Solomon Waters",
    "content": "Sortie Choukai Kai Ni as flagship and any combination of Furutaka, Kako, Aoba, Kinugasa, Yuubari, or Tenryuu to World 5-1 and obtain an S-Rank at the boss (One of them will have to be left out)",
    "tips": "",
    "resources": {
      "F": "480",
      "A": "480",
      "S": "0",
      "B": "0"
    },
    "requires": ["C5"],
    "unlocks": ["B80","Bq7"],
    "period": "once",
    "needs": {
      "M": ["5-1"],
      "S": ["Choukai Kai Ni","Furutaka","Kako","Aoba","Kinugasa","Yuubari","Tenryuu"]
    },
    "reward": [
      ["C","Development Material",3],
      ["C","Improvement Material",3]
    ]
  },
  "B42": {
    "Jp": "「第六駆逐隊」対潜哨戒なのです！",
    "En": "The 6th Destroyer Division Anti-Submarine Patrol nanodesu",
    "content": "Sortie Akatsuki, Hibiki (Верный is ok), Ikazuchi, and Inazuma to World 1-5 and obtain a C-Rank or better at the boss",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "200",
      "B": "0"
    },
    "requires": ["A10"],
    "unlocks": ["A51","B45"],
    "period": "once",
    "needs": {
      "M": ["1-5"],
      "S": ["Akatsuki","Hibiki","Ikazuchi","Inazuma"]
    },
    "reward": [
      ["C","Development Material",3],
      ["E","Type 93 Passive Sonar",1]
    ]
  },
  "B43": {
    "Jp": "抜錨！「第十八戦隊」",
    "En": "Set Sail! The 18th Squadron",
    "content": "Sortie Tenryuu, Tatsuta, and at least two other ships to World 2-3 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "350",
      "A": "0",
      "S": "0",
      "B": "250"
    },
    "requires": ["A51"],
    "unlocks": ["A89"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Tenryuu","Tatsuta"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Furniture Fairy",1]
    ]
  },
  "B44": {
    "Jp": "海上突入部隊、進発せよ！",
    "En": "Deploy the Marine Rush Fleet",
    "content": "Sortie Hiei, Kirishima, Nagara, Akatsuki, Ikazuchi, and Inazuma to World 5-1 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "500",
      "B": "0"
    },
    "requires": ["A52","Bw9"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["5-1"],
      "S": ["Hiei","Kirishima","Nagara","Akatsuki","Ikazuchi","Inazuma"]
    },
    "reward": [
      ["C","Development Material",5],
      ["C","Improvement Material",2]
    ]
  },
  "B45": {
    "Jp": "「第六駆逐隊」対潜哨戒を徹底なのです！",
    "En": "A Thorough 6th Destroyer Division Anti-Submarine Patrol nanodesu",
    "content": "Sortie Akatsuki Kai Ni, Hibiki (Верный is ok), Ikazuchi, and Inazuma to World 1-5 and obtain an A-Rank or better at the boss",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["A53","B42"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-5"],
      "S": ["Akatsuki Kai Ni","Hibiki","Ikazuchi","Inazuma"]
    },
    "reward": [
      ["C","Improvement Material",2],
      ["E","Type 93 Passive Sonar",1]
    ]
  },
  "B46": {
    "Jp": "「第一水雷戦隊」ケ号作戦、突入せよ！",
    "En": "Rush the 1st Torpedo Squadron to OpeRation KE",
    "content": "Sortie Abukuma as flagship with Hibiki (Верный is ok), Hatsushimo, Wakaba, Samidare and Shimakaze to World 3-2 and obtain a victory (B-Rank or better) at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "400"
    },
    "requires": ["A54"],
    "unlocks": ["C7","F33"],
    "period": "once",
    "needs": {
      "M": ["3-2"],
      "S": ["Abukuma","Hibiki","Hatsushimo","Wakaba","Samidare","Shimakaze"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Furniture Fairy",1]
    ]
  },
  "B47": {
    "Jp": "「第一水雷戦隊」北方ケ号作戦、再突入！",
    "En": "Rush the 1st Torpedo Squadron to OpeRation KE Again",
    "content": "Sortie Abukuma Kai Ni as flagship with Hibiki (Верный is ok), Yuugumo, Naganami, Akigumo and Shimakaze to World 3-2 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "500"
    },
    "requires": ["A55","C7"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["3-2"],
      "S": ["Abukuma Kai Ni","Hibiki","Yuugumo","Naganami","Akigumo","Shimakaze"]
    },
    "reward": [
      ["C","Development Material",4],
      ["C","Improvement Material",4]
    ]
  },
  "B48": {
    "Jp": "鎮守府正面の対潜哨戒を強化せよ！",
    "En": "Strengthen the Anti-Submarine Patrol in Front of the Naval Base!",
    "content": "Sortie to World 1-5 and obtain four A-Ranks (or better) at the boss.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bd2","B5"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-5"]
    },
    "reward": [
      ["I","Furniture Fairy",1]
    ]
  },
  "B49": {
    "Jp": "「空母機動部隊」北方海域に進出せよ！",
    "En": "\"Carrier Task Force\", advance to the Northern Sea!",
    "content": "Sortie a fleet with an CV as flagship to World 3-5 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "500",
      "B": "0"
    },
    "requires": ["Bd8","B32"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["3-5"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["I","Combat provision",2]
    ]
  },
  "B50": {
    "Jp": "「第五航空戦隊」珊瑚諸島沖に出撃せよ！",
    "En": "Sortie the 5th Carrier Division to the Southern Sea Coral Islands",
    "content": "Sortie Shoukaku, Zuikaku, Oboro, Akigumo and up to 2 additional ships to World 5-2 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "500",
      "S": "0",
      "B": "0"
    },
    "requires": ["A56"],
    "unlocks": ["A64","F19","F20","D19","B95"],
    "period": "once",
    "needs": {
      "M": ["5-2"],
      "S": ["Shoukaku","Zuikaku","Oboro","Akigumo"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Irako",1]
    ]
  },
  "B51": {
    "Jp": "新編「第二一戦隊」北方へ出撃せよ！",
    "En": "Sortie the New 21st Squadron to the North",
    "content": "Sortie Nachi Kai Ni, Ashigara Kai Ni, Tama, Kiso and up to 2 additional ships to World 3-1 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["A57"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["3-1"],
      "S": ["Nachi Kai Ni","Ashigara Kai Ni","Tama","Kiso"]
    },
    "reward": [
      ["I","Combat provision",1],
      ["I","Present box",1]
    ]
  },
  "B52": {
    "Jp": "「第十六戦隊(第一次)」出撃せよ！",
    "En": "Sortie the 16th Squadron (First Generation)",
    "content": "Sortie Ashigara as flagship, Kuma, Nagara and up to 3 additional ships to World 2-2 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "0",
      "S": "200",
      "B": "0"
    },
    "requires": ["A58"],
    "unlocks": ["A63","A75"],
    "period": "once",
    "needs": {
      "M": ["2-2"],
      "S": ["Ashigara","Kuma","Nagara"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["I","Present box",1]
    ]
  },
  "B53": {
    "Jp": "「第三航空戦隊」南西諸島防衛線に出撃！",
    "En": "3rd Carrier Division: defend the Nansei Islands",
    "content": "Sortie Zuikaku Kai as flagship, Zuihou, Chitose Carrier and Chiyoda Carrier (both as CVL) (you can add 2 more ships) to World 1-4 and score an S-rank victory at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["A59"],
    "unlocks": ["A60","A68","F26"],
    "period": "once",
    "needs": {
      "M": ["1-4"],
      "S": ["Zuikaku Kai","Zuihou","Chitose Carrier","Chiyoda Carrier"]
    },
    "reward": [
      ["C","Instant Repair",2],
      ["I","Irako",1]
    ]
  },
  "B54": {
    "Jp": "「小沢艦隊」出撃せよ！",
    "En": "Sortie the Ozawa's fleet",
    "content": "Sortie Zuikaku Kai(Kai Ni is OK) as flagship, Zuihou Kai, Chitose Carrier, Chiyoda Carrier, Ise Kai and Hyuuga Kai to World 2-4 and score an S-rank victory at the boss",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "300",
      "B": "300"
    },
    "requires": ["A61"],
    "unlocks": ["F23","F27","Fm3"],
    "period": "once",
    "needs": {
      "M": ["2-4"],
      "S": ["Zuikaku Kai","Zuihou Kai","Chitose Carrier","Chiyoda Carrier","Ise Kai","Hyuuga Kai"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["E","Zero Fighter Model 52C (601 Air Group)",1]
    ]
  },
  "B55": {
    "Jp": "「第十六戦隊(第二次)」出撃せよ！",
    "En": "Sortie the 16th Squadron (Second Generation)",
    "content": "Sortie Natori as flagship, Isuzu, Kinu and up to 3 additional ships to World 2-3 and score an S-rank victory at the boss",
    "tips": "",
    "resources": {
      "F": "320",
      "A": "0",
      "S": "320",
      "B": "0"
    },
    "requires": ["A63"],
    "unlocks": ["A64","A73","A66"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Natori","Isuzu","Kinu"]
    },
    "reward": [
      ["I","Large furniture box",1]
    ]
  },
  "B56": {
    "Jp": "新編成航空戦隊、北方へ進出せよ！",
    "En": "Sortie the New Carrier Division to the North",
    "content": "Sortie 2 CV / CVL, 2 BBV / CAV and 2 DD to World 3-3 and score an S-rank victory at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "400"
    },
    "requires": ["A64"],
    "unlocks": ["A65","F37"],
    "period": "once",
    "needs": {
      "M": ["3-3"]
    },
    "reward": [
      ["C","Improvement Material",2],
      ["I","Furniture Fairy",1]
    ]
  },
  "B57": {
    "Jp": "「礼号作戦」実施せよ！",
    "En": "Carry Out OpeRation Rei-go",
    "content": "Sortie Kasumi as flagship, Ashigara, Ooyodo, Asashimo, Kiyoshimo and up to one additional ship to World 2-5 and score an S-rank victory at the boss",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "700",
      "S": "0",
      "B": "0"
    },
    "requires": ["A65","Bm5"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["2-5"],
      "S": ["Kasumi","Ashigara","Ooyodo","Asashimo","Kiyoshimo"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["I","Present box",1]
    ]
  },
  "B58": {
    "Jp": "旗艦「霞」北方海域を哨戒せよ！",
    "En": "Send the Flagship Kasumi to Patrol the Northern Sea",
    "content": "Sortie a fleet with Kasumi Kai Ni as flagship, 3 DD and up to 2 additional ships to World 3-1 and score a victory at the boss node.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["A32","Cd1"],
    "unlocks": ["B59","A87"],
    "period": "once",
    "needs": {
      "M": ["3-1"],
      "S": ["Kasumi Kai Ni"]
    },
    "reward": [
      ["E","Type 13 Air Radar Kai",1],
      ["I","Combat provision",1]
    ]
  },
  "B59": {
    "Jp": "旗艦「霞」出撃！敵艦隊を撃滅せよ！",
    "En": "Flagship Kasumi, Sortieing! Destroy the Enemy Fleet",
    "content": "Sortie a fleet with Kasumi Kai Ni as flagship, 2 DD and up to 3 additional ships to World 2-5 and score an S rank victory at the boss node.",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "500",
      "S": "0",
      "B": "0"
    },
    "requires": ["B58","Dd1"],
    "unlocks": ["B66"],
    "period": "once",
    "needs": {
      "M": ["2-5"],
      "S": ["Kasumi Kai Ni"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["E","25mm Triple Autocannon Mount (Concentrated Deployment)",1]
    ]
  },
  "B60": {
    "Jp": "「第三十一戦隊」出撃せよ！",
    "En": "Sortie the 31st Division",
    "content": "Sortie Isuzu Kai Ni as flagship, Satsuki Kai Ni, Uzuki Kai and up to 3 additional ships to World 1-6 and reach the end node",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "600",
      "B": "0"
    },
    "requires": ["A66","Bd1"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-6"],
      "S": ["Isuzu Kai Ni","Satsuki Kai Ni","Uzuki Kai"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["I","Hishimochi",1]
    ]
  },
  "B61": {
    "Jp": "「第二七駆逐隊」出撃せよ！",
    "En": "Sortie the 27th Destroyer Division",
    "content": "Sortie Shiratsuyu Kai as flagship, Shigure, Harusame and Samidare and up to 2 additional ships to World 2-3 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "500",
      "B": "0"
    },
    "requires": ["A67"],
    "unlocks": ["A86"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Shiratsuyu Kai","Shigure","Harusame","Samidare"]
    },
    "reward": [
      ["F","\"Spring is number 1\" scroll",1]
    ]
  },
  "B62": {
    "Jp": "強襲上陸作戦用戦力を増強せよ！",
    "En": "Bolster the Capability for Amphibious Assault OpeRations!",
    "content": "Sortie to World 6-3 and obtain an B-Rank or better at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "600",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bw9","D19"],
    "unlocks": ["B80","F43"],
    "period": "once",
    "needs": {
      "M": ["6-3"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["E","Daihatsu Landing Craft",1]
    ]
  },
  "B63": {
    "Jp": "製油所地帯を防衛せよ！",
    "En": "Defend the Oil Refinery Zone!",
    "content": "Sortie a torpedo squadron (1 CL 5 DD) to World 1-3 and obtain three S-Ranks at the boss",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bd2"],
    "unlocks": ["B64","Dq1"],
    "period": "once",
    "needs": {
      "M": ["1-3"]
    },
    "reward": [
      ["I","Combat Ration",1],
      ["I","Medal",1]
    ]
  },
  "B64": {
    "Jp": "南西諸島防衛線を強化せよ！",
    "En": "Reinforce the Nansei Islands Defence Line!",
    "content": "Sortie to World 1-4 and obtain five S-Ranks at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "400",
      "B": "0"
    },
    "requires": ["B63","F31"],
    "unlocks": ["B65"],
    "period": "once",
    "needs": {
      "M": ["1-4"]
    },
    "reward": [
      ["I","Combat Ration",1],
      ["I","Furniture Fairy",1]
    ]
  },
  "B65": {
    "Jp": "オリョール海の制海権を確保せよ！",
    "En": "Secure Control of the Orel Sea!",
    "content": "Sortie a fleet with Ooshio (model doesn't matter) as flagship to World 2-3 and obtain six S-Ranks at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "200"
    },
    "requires": ["B20","B64"],
    "unlocks": ["B66"],
    "period": "once",
    "needs": {
      "M": ["2-3"],
      "S": ["Ooshio"]
    },
    "reward": [
      ["I","Medal",1],
      ["I","Irako",2]
    ]
  },
  "B66": {
    "Jp": "旗艦「大潮」出撃せよ！",
    "En": "Sortie the flagship \"Ooshio\"!",
    "content": "Sortie a fleet with Ooshio Kai Ni as flagship to World 3-5 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "500",
      "S": "0",
      "B": "0"
    },
    "requires": ["B59","B65"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["3-5"],
      "S": ["Ooshio Kai Ni"]
    },
    "reward": [
      ["I","Combat Ration",1],
      ["C","Improvement Material",3]
    ]
  },
  "B67": {
    "Jp": "艦隊、三周年！",
    "En": "Fleet, Third Anniversary!",
    "content": "Sortie a fleet to World 2-2 and World 2-3 and obtain an S-Rank at both bosses.",
    "tips": "",
    "resources": {
      "F": "1000",
      "A": "1000",
      "S": "1000",
      "B": "0"
    },
    "requires": ["B6","A5"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["2-2","2-3"]
    },
    "reward": [
      ["F","3rd Anniversary wallscroll",1]
    ]
  },
  "B68": {
    "Jp": "強行高速輸送部隊、出撃せよ！",
    "En": "Forced High-speed Transport Fleet, sortie!",
    "content": "Sortie a fleet with Sendai Kai Ni (she doesn't have to be the flagship), Kawakaze Kai Ni, Shigure Kai Ni, two other DD and up to one wildcard to World 4-1 and obtain at least an A-Rank at the boss.",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "500",
      "B": "0"
    },
    "requires": ["A68"],
    "unlocks": ["B69"],
    "period": "once",
    "needs": {
      "M": ["4-1"],
      "S": ["Sendai Kai Ni","Kawakaze Kai Ni","Shigure Kai Ni"]
    },
    "reward": [
      ["C","Improvement Material",2],
      ["I","Irako",1]
    ]
  },
  "B69": {
    "Jp": "「第一航空戦隊」西へ！",
    "En": "\"1st Carrier Division\", into the West!",
    "content": "Sortie a fleet with Akagi as flagship, Kaga and up to four wildcards to World 4-5 and obtain an S-Rank at the boss.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "800",
      "S": "0",
      "B": "800"
    },
    "requires": ["B68","F33"],
    "unlocks": ["B91"],
    "period": "once",
    "needs": {
      "M": ["4-5"],
      "S": ["Akagi","Kaga"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["I","Skilled Crew Member",1]
    ]
  },
  "B70": {
    "Jp": "新編艦隊、南西諸島防衛線へ急行せよ！",
    "En": "Set Sail Towards the Nansei Islands Defence Line",
    "content": "Sortie a fleet with a CL/CLT/CT flagship, 4 DD, and up to 1 additional ship to World 1-4 and obtain at least an A-rank at the boss.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "300",
      "B": "0"
    },
    "requires": ["A69"],
    "unlocks": ["B71","B75"],
    "period": "once",
    "needs": {
      "M": ["1-4"]
    },
    "reward": [
      ["I","Mamiya",1],
      ["C","Instant Repair",3]
    ]
  },
  "B71": {
    "Jp": "鎮守府近海航路の安全確保を強化せよ！",
    "En": "Ensure the Safety of the Naval Base's Nearby Routes",
    "content": "Sortie a fleet with a CL flagship, 4 DD, and up to 1 additional ship to World 1-6 and complete the map.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "900",
      "S": "900",
      "B": "900"
    },
    "requires": ["B70"],
    "unlocks": ["F36"],
    "period": "once",
    "needs": {
      "M": ["1-6"]
    },
    "reward": [
      ["C","Development Material",4],
      ["I","Furniture Fairy",1]
    ]
  },
  "B72": {
    "Jp": "「第三十一戦隊」敵潜を制圧せよ！",
    "En": "31st Cruiser Division, suppress the enemy submarines!",
    "content": "Sortie a fleet with Isuzu Kai Ni as flagship, Satsuki Kai Ni, Uzuki Kai, and three wildcards to World 1-6 and reach the goal point twice.",
    "tips": "",
    "resources": {
      "F": "310",
      "A": "310",
      "S": "0",
      "B": "310"
    },
    "requires": ["Bw5","A66"],
    "unlocks": ["A71"],
    "period": "once",
    "needs": {
      "M": ["1-6"],
      "S": ["Isuzu Kai Ni","Satsuki Kai Ni","Uzuki Kai"]
    },
    "reward": [
      ["C","Improvement Material",2],
      ["E","Type 3 Active Sonar",1]
    ]
  },
  "B73": {
    "Jp": "新編「第八駆逐隊」出撃せよ！",
    "En": "New 8th Destroyer Division, sortie!",
    "content": "Sortie a fleet with Asashio Kai Ni/Asashio Kai Ni D as flagship, Michishio, Ooshio, Arashio, and two wildcards to World 1-6 and reach the goal point.",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "400",
      "S": "0",
      "B": "0"
    },
    "requires": ["A70"],
    "unlocks": ["B90"],
    "period": "once",
    "needs": {
      "M": ["1-6"],
      "S": ["Asashio Kai Ni","Michishio","Ooshio","Arashio"]
    },
    "reward": [
      ["E","Searchlight",1],
      ["E","Daihatsu Landing Craft",1]
    ]
  },
  "B74": {
    "Jp": "精鋭「八駆第一小隊」対潜哨戒！",
    "En": "Elite 8th Destroyer Division on ASW patrol!",
    "content": "Sortie a fleet that includes Asashio Kai Ni D and Ooshio Kai Ni to World 1-5 and score two S-Ranks at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "800",
      "S": "0",
      "B": "200"
    },
    "requires": ["A71"],
    "unlocks": ["A81"],
    "period": "once",
    "needs": {
      "M": ["1-5"],
      "S": ["Asashio Kai Ni D","Ooshio Kai Ni"]
    },
    "reward": [
      ["C","Improvement Material",4],
      ["E","Type 4 Passive Sonar",1]
    ]
  },
  "B75": {
    "Jp": "水雷戦隊,南西諸島防衛線に反復出撃せよ！",
    "En": "Torpedo Squadron, repeatedly sortie to the Nansei Islands defence line!",
    "content": "Sortie a fleet with CL type (i.e. CL/CLT/CT) as flagship, four DD and a wildcard to World 1-4 and score two S-Ranks at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "350",
      "S": "0",
      "B": "350"
    },
    "requires": ["B70"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-4"]
    },
    "reward": [
      ["C","Instant Repair",4],
      ["I","Irako",1]
    ]
  },
  "B76": {
    "Jp": "製油所地帯沿岸の哨戒を実施せよ！",
    "En": "Patrol the Coastal Refinery Zone!",
    "content": "Sortie a fleet with a CVL as flagship, three DD and two wildcards to World 1-3 and score an S-Rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "600",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B9"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-3"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["I","Furniture Fairy",1]
    ]
  },
  "B77": {
    "Jp": "水雷戦隊、南西諸島海域を哨戒せよ！",
    "En": "Torpedo Squadron, patrol the Nansei Islands area!",
    "content": "Sortie a fleet with a CL as flagship, four DD and one wildcard to both World 2-2 and World 2-3, and score an S-Rank at each boss node.",
    "tips": "",
    "resources": {
      "F": "600",
      "A": "600",
      "S": "0",
      "B": "0"
    },
    "requires": ["Cd1"],
    "unlocks": ["F38"],
    "period": "once",
    "needs": {
      "M": ["2-2","2-3"]
    },
    "reward": [
      ["I","Furniture Fairy",1],
      ["I","Irako",1]
    ]
  },
  "B78": {
    "Jp": "「第十九駆逐隊」出撃せよ！",
    "En": "19th Destroyer Division, sortie!",
    "content": "Sortie a fleet with Isonami, Uranami, Ayanami and Shikinami to World 1-5, and score at least an A-Rank at the boss node.",
    "tips": "※Because of the branching rules you can have only these four in your fleet. Enjoy the pre-boss compass trolling.",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "300",
      "B": "0"
    },
    "requires": ["A72"],
    "unlocks": ["B79"],
    "period": "once",
    "needs": {
      "M": ["1-5"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["I","Irako",1]
    ]
  },
  "B79": {
    "Jp": "「第十九駆逐隊」敵主力に突入せよ！",
    "En": "19th Destroyer Division, engage the enemy main forces!",
    "content": "Sortie a fleet with Isonami, Uranami, Ayanami, Shikinami and up to two wildcards to World 2-5, and score at least an A-Rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "600",
      "A": "600",
      "S": "0",
      "B": "300"
    },
    "requires": ["B78"],
    "unlocks": ["B86"],
    "period": "once",
    "needs": {
      "M": ["2-5"],
      "S": ["Isonami","Uranami","Ayanami","Shikinami"]
    },
    "reward": [
      ["C","Improvement Material",4],
      ["I","Underway Replenishment",1]
    ]
  },
  "B80": {
    "Jp": "飛行場設営の準備を実施せよ！",
    "En": "Prepare for the Construction of the Land-Base!",
    "content": "Sortie to World 6-3 and obtain an S-rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B41","B62"],
    "unlocks": ["B81","F49","B139"],
    "period": "once",
    "needs": {
      "M": ["6-3"]
    },
    "reward": [
      ["I","Construction Corps",1]
    ]
  },
  "B81": {
    "Jp": "夜間突入！敵上陸部隊を叩け！",
    "En": "Rush into Night Battle! Attack the Enemy Landing Forces!",
    "content": "Sortie to World 5-3 and obtain at least an A-rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B80"],
    "unlocks": ["B90"],
    "period": "once",
    "needs": {
      "M": ["5-3"]
    },
    "reward": [
      ["I","Construction Corps",1]
    ]
  },
  "B82": {
    "Jp": "夜の海を照らす「灯り」を入手せよ！",
    "En": "Obtain the Searchlight that brightens the Dark Sea!",
    "content": "Sortie to World 2-1 and obtain an S-rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bm1"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["2-1"]
    },
    "reward": [
      ["E","Searchlight",1],
      ["I","Combat Ration",1]
    ]
  },
  "B83": {
    "Jp": "南西諸島防衛線を増強せよ！",
    "En": "Reinforce the Nansei Islands Defense Line!",
    "content": "Sortie a fleet with an AV or CAV as flagship and up to five wildcards to World 1-4 and obtain an S-rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["B6"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-4"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["I","Furniture Fairy",1]
    ]
  },
  "B84": {
    "Jp": "「第十六戦隊(第三次)」出撃せよ！",
    "En": "16th Cruiser Division (3rd Generation), sortie!",
    "content": "Sortie a fleet with Kinu, Aoba, Kitakami, Ooi and up to two wildcards to World 2-4 and obtain at least an A-Rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "0",
      "B": "400"
    },
    "requires": ["A73"],
    "unlocks": ["A74"],
    "period": "once",
    "needs": {
      "M": ["2-4"],
      "S": ["Kinu","Aoba","Kitakami","Ooi"]
    },
    "reward": [
      ["I","Irako",1],
      ["F","Furniture: \"Ship Girl Cushion Floor\"",1]
    ]
  },
  "B85": {
    "Jp": "精鋭「第十六戦隊」突入せよ！",
    "En": "Elite 16th Cruiser Division, engage the enemy!",
    "content": "Sortie a fleet with Kinu Kai Ni as flagship and any combination of Kitakami Kai Ni, Ooi Kai Ni, Kuma Kai, Aoba Kai, Uranami Kai or Shikinami Kai to World 2-5 and obtain an S-Rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "600",
      "A": "600",
      "S": "0",
      "B": "0"
    },
    "requires": ["A74"],
    "unlocks": ["B86"],
    "period": "once",
    "needs": {
      "M": ["2-5"],
      "S": ["Kinu Kai Ni","Kitakami Kai Ni","Ooi Kai Ni","Kuma Kai","Aoba Kai","Uranami Kai","Shikinami Kai"]
    },
    "reward": [
      ["E","Toku Daihatsu Landing Craft",1]
    ]
  },
  "B86": {
    "Jp": "輸送作戦を成功させ、帰還せよ！",
    "En": "Complete a transport mission and return!",
    "content": "Sortie a fleet with Kinu Kai Ni as flagship, Uranami Kai, exactly three other DD, and up to one wildcard (not a DD) to World 2-2 and obtain an S-Rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "1000",
      "A": "0",
      "S": "1000",
      "B": "3000"
    },
    "requires": ["B79","B85"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["2-2"],
      "S": ["Kinu Kai Ni","Uranami Kai"]
    },
    "reward": [
      ["C","Improvement Material",5],
      ["I","Underway Replenishment",1]
    ]
  },
  "B87": {
    "Jp": "重巡戦隊、抜錨せよ！",
    "En": "Heavy Cruiser Division, Set Sail!",
    "content": "Sortie a CA(V) as flagship, three other CA(V), and two additional ships to World 2-3 and obtain an S-Rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "400",
      "S": "0",
      "B": "0"
    },
    "requires": ["A9"],
    "unlocks": ["B88","B95","G5"],
    "period": "once",
    "needs": {
      "M": ["2-3"]
    },
    "reward": [
      ["I","Irako",1],
      ["F","Furniture: \"Knit and Flooring\"",1]
    ]
  },
  "B88": {
    "Jp": "戦艦戦隊、出撃せよ！",
    "En": "Sortie a Battleship Division!",
    "content": "Sortie a (F)BB(V) as flagship, 1 other (F)BB(V) and up to 4 additional ships to World 3-3 and obtain an S-Rank at the boss node.",
    "tips": "※Due to the branching rules you're required to bring at least 2 CV(L).※You will be prompted to choose between one of the two equipment rewards, so choose wisely.",
    "resources": {
      "F": "0",
      "A": "800",
      "S": "0",
      "B": "200"
    },
    "requires": ["B8","B87"],
    "unlocks": ["F51","D21"],
    "period": "once",
    "needs": {
      "M": ["3-3"]
    },
    "reward": [
      ["C","Improvement Material",2],
      ["E","PBY-5A Catalina",1,"Choose one: "],
      ["E","Type 2 Seaplane Fighter Kai",1,"or "]
    ]
  },
  "B89": {
    "Jp": "主力戦艦戦隊、抜錨せよ！",
    "En": "Main BB Fleet, Sortie out!",
    "content": "Sortie a fleet which includes 2 or more slow BB/BBV Obtain S-Rank Victory at the Boss node of World 2-4",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "800",
      "S": "400",
      "B": "0"
    },
    "requires": ["B19"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["2-4"]
    },
    "reward": [
      ["I","Irako",1],
      ["E","Improved Kanhon Type Turbine",1,"Choose one: "],
      ["E","Enhanced Kanhon Type Boiler",1,"or "]
    ]
  },
  "B90": {
    "Jp": "精鋭「第八駆逐隊」突入せよ！",
    "En": "Elite 8th DD Division, Sortie!",
    "content": "Sortie a Fleet with Arashio Kai Ni as Flagship, which includes at least one of either Asashio, Ooshio or Michishio as well.Sortie to World 5-5 and obtain 2 A-rank or higher victories!",
    "tips": "",
    "resources": {
      "F": "800",
      "A": "800",
      "S": "0",
      "B": "800"
    },
    "requires": ["B73","B81"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["5-5"],
      "S": ["Arashio Kai Ni","Asashio","Ooshio","Michishio"]
    },
    "reward": [
      ["I","Reinforcement Expansion",1],
      ["C","Improvement Material",4]
    ]
  },
  "B91": {
    "Jp": "潜水艦隊、中部海域の哨戒を実施せよ！",
    "En": "Submarine Fleet, patrol the Central Waters!",
    "content": "Sortie a Fleet consisting of 4 SS(V) with an SS(V) as flagship and 2 additional ships.Sortie to World 6-1 and score a victory at the boss node.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "300",
      "B": "0"
    },
    "requires": ["B69","Bd5"],
    "unlocks": ["B92","Bq2","B94","F49","F50","Bq4"],
    "period": "once",
    "needs": {
      "M": ["6-1"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["I","Irako",1]
    ]
  },
  "B92": {
    "Jp": "重装甲巡洋艦、鉄底海峡に突入せよ！",
    "En": "Heavy Armored Cruiser, Embark into the Iron Bottom Sound!",
    "content": "Sortie Zara due as Flagship with 5 additional ships.Sortie to World 5-3 and score an A-rank or higher victory at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "700",
      "B": "0"
    },
    "requires": ["B91"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["5-3"],
      "S": ["Zara due"]
    },
    "reward": [
      ["E","New Kanhon Design Anti-torpedo Bulge (Medium)",1]
    ]
  },
  "B93": {
    "Jp": "南西諸島方面の敵艦隊を撃破せよ！",
    "En": "Defeat the Enemy Fleet at the Nansei Islands!",
    "content": "Sortie a Fleet with a CL as flagship and 5 additional ships.Sortie to World 1-4, 2-2, 2-3 and score S rank victories at the boss nodes.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "300",
      "B": "300"
    },
    "requires": ["B7"],
    "unlocks": ["B94"],
    "period": "once",
    "needs": {
      "M": ["1-4","2-3","2-2"]
    },
    "reward": [
      ["I","Irako",1],
      ["I","Mamiya",1]
    ]
  },
  "B94": {
    "Jp": "洋上航空戦力を拡充せよ！",
    "En": "Expand the Offshore Aviation Forces!",
    "content": "Sortie a Fleet with an AV/CV/CVL/CVB as Flagship and 5 additional ships.Sortie to World 3-5, 4-4, 6-2 and score S-rank victories at the boss nodes.",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "500",
      "S": "0",
      "B": "1000"
    },
    "requires": ["B93","B91"],
    "unlocks": ["F52"],
    "period": "once",
    "needs": {
      "M": ["3-5","4-4","6-2"]
    },
    "reward": [
      ["C","Development Material",5],
      ["I","Skilled Crew Member",1]
    ]
  },
  "B95": {
    "Jp": "改装航空巡洋艦、出撃！",
    "En": "Remodeled Aviation Cruiser, Sortie!",
    "content": "Sortie a Fleet with Suzuya Kai Ni as the flagship.Sortie to World 5-1, 5-3 and obtain A rank or higher victories at the boss nodes.",
    "tips": "※The CVL version cannot complete the quest. Must be CAV.",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "300",
      "B": "700"
    },
    "requires": ["B87","B50"],
    "unlocks": ["B96","A76"],
    "period": "once",
    "needs": {
      "M": ["5-1","5-3"],
      "S": ["Suzuya Kai Ni"]
    },
    "reward": [
      ["C","Improvement Material",4],
      ["E","Kyoufuu Kai",1,"Choose one: "],
      ["E","New Kanhon Design Anti-torpedo Bulge (Medium)",1,"or "]
    ]
  },
  "B96": {
    "Jp": "改装攻撃型軽空母、前線展開せよ！",
    "En": "Remodeled Attack Light Aircraft Carrier, Deploy to the Frontlines!",
    "content": "Sortie a Fleet with Suzuya Carrier Kai Ni as the flagship. Sortie to World 6-2, 6-5 and obtain S-rank victories at the Boss nodes.",
    "tips": "※The CAV version cannot complete the quest. Must be CVL.",
    "resources": {
      "F": "0",
      "A": "1000",
      "S": "0",
      "B": "1000"
    },
    "requires": ["B95"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["6-2","6-5"],
      "S": ["Suzuya Carrier Kai Ni"]
    },
    "reward": [
      ["E"," Type 0 Fighter Model 63 (Fighter-bomber)",1],
      ["E","8cm High-angle Gun Kai + Extra Machine Guns",1]
    ]
  },
  "B97": {
    "Jp": "鎮守府海域警戒を厳とせよ！",
    "En": "Patrol the Naval Base Ocean Areas Vigilantly!",
    "content": "Sortie a fleet with a Cruiser as the flagship, with at least 2 DD. Sortie to World 1-2, 1-3, 1-4, 1-5 and obtain S-rank victories at the Boss nodes.",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "400",
      "S": "400",
      "B": "0"
    },
    "requires": ["B50","B88"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-2","1-3","1-4","1-5"]
    },
    "reward": [
      ["I","Irako",2],
      ["I","Furniture Fairy",1]
    ]
  },
  "B98": {
    "Jp": "海上護衛体制の強化に努めよ！",
    "En": "Focus the Strengthening of the Maritime Escort !",
    "content": "Sortie a fleet with at least 3 DD or Coastal Defense Ships to world 1-3, 1-4, 1-5, S rank the boss nodes. Sortie to world 1-6 and reqch node N.",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "0",
      "B": "400"
    },
    "requires": ["Bd2"],
    "unlocks": ["B99","B100"],
    "period": "once",
    "needs": {
      "M": ["1-6","1-3","1-4","1-5"]
    },
    "reward": [
      ["C","Development Material",4],
      ["I","Furniture Fairy",1]
    ]
  },
  "B99": {
    "Jp": "新編「第一戦隊」、抜錨せよ！",
    "En": "Sortie the New First Squadron!",
    "content": "Sortie a fleet with Nagato Kai Ni as flagship, Mutsu Kai as second ship and up to 4 additional ships to world 4-5 and 5-5. S rank the boss nodes.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "880",
      "S": "880",
      "B": "0"
    },
    "requires": ["A75","B98"],
    "unlocks": ["A92"],
    "period": "once",
    "needs": {
      "M": ["4-5","5-5"],
      "S": ["Nagato Kai Ni","Mutsu Kai"]
    },
    "reward": [
      ["C","Improvement Material",4],
      ["E","New Kanhon Design Anti-torpedo Bulge (Large)",1]
    ]
  },
  "B100": {
    "Jp": "増強海上護衛総隊、抜錨せよ！",
    "En": "Enhanced Maritime Escort Fleet, Sortie!",
    "content": "Sortie a fleet with 1 CL, 2 DD or Coastal Defense Ships, 1 CAV or CVL, up to 2 additional ships to world 2-2, 2-3, 2-4, 2-5 and obtain A rank victories at the boss nodes.",
    "tips": "",
    "resources": {
      "F": "700",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bw5","B98"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["2-2","2-3","2-4","2-5"]
    },
    "reward": [
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
  
  
  
  
// Sortie Quest 101 and beyond B101
  "B101": {
    "Jp": "新編「第七戦隊」、出撃せよ！",
    "En": "New Seventh Squadron, Sortie!",
    "content": "Sortie a fleet with Kumano Kai Ni/Kumano Carrier Kai Ni as flagship, Suzuya Kai Ni/Suzuya Carrier Kai Ni as second ship, Mogami Kai, Mikuma Kai, up to 2 additional ships to world 4-5, 6-2 and obtain S rank victories at the boss nodes.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "1000",
      "B": "500"
    },
    "requires": ["A76","Cd1"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Kumano Kai Ni","Suzuya Kai Ni","Mogami Kai","Mikuma Kai"],
      "M": ["4-5","6-2"]
    },
    "reward": [
      ["C","Improvement Material",4],
      ["I","Medal",1],
      ["I","New Model Gun Mount Improvement Material",1],
      ["E","Type 0 Fighter Model 63 (Fighter-bomber)",1]
    ]
  },
  "B102": {
    "Jp": "精鋭「第四航空戦隊」、抜錨せよ！",
    "En": "Elite \"Fourth Carrier Division\", set sail!",
    "content": "Sortie Ise and Hyuuga both above level 50 as flagship and 2nd ship along with 1CL + 2 DD and 1 additional ship to World 2-5, 3-5 and obatain at least A rank victory at the boss node.",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "500",
      "B": "0"
    },
    "requires": ["A77"],
    "unlocks": ["F58"],
    "period": "once",
    "needs": {
      "S": ["Ise","Hyuuga"],
      "M": ["2-5","3-5"]
    },
    "reward": [
      ["C","Improvement Material",4],
      ["I","Medal",1,"Choose one: "],
      ["I","Skilled Crew Member",1,"or "]
    ]
  },
  "B103": {
    "Jp": "旗艦「由良」、抜錨！",
    "En": "Flagship Yura, set sail!",
    "content": "Sortie Yura Kai Ni as flagship, with at least 2 of the following ships: Murasame, Yuudachi, Harusame, Samidare, Akizuki, up to 3 additional ships to World 2-3, 5-1 and obtain A rank or above victory at the boss node.",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "400",
      "S": "0",
      "B": "400"
    },
    "requires": ["A78"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Yura Kai Ni","Murasame","Yuudachi","Harusame","Samidare","Akizuki"],
      "M": ["2-3","5-1"]
    },
    "reward": [
      ["I","Skilled Crew Member",1],
      ["I","Reinforcement Expansion",1,"Choose one: "],
      ["E","Daihatsu Landing Craft",1,"or "]
    ]
  },
  "B104": {
    "Jp": "精鋭「第二二駆逐隊」出撃せよ!",
    "En": "Sortie the Elite 22th Destroyer Squadron!",
    "content": "Sortie a torpedo squadron consists of Fumizuki Kai Ni, Satsuki Kai Ni, Minazuki Kai and Nagatsuki Kai to world 3-2 and obtain an S-rank victory at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "700",
      "S": "0",
      "B": "100"
    },
    "requires": ["A79","Cd1"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Fumizuki Kai Ni","Satsuki Kai Ni","Minazuki Kai","Nagatsuki Kai"],
      "M": ["3-2"]
    },
    "reward": [
      ["I","Reinforcement Expansion",1,"Choose one: "],
      ["E","Daihatsu Landing Craft",1,"or "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
  "B105": {
    "Jp": "精強大型航空母艦、抜錨！",
    "En": "Large Powerful Aircraft Carrier, Setting Sail!",
    "content": "Sortie Saratoga Mk.II or Saratoga Mk.II Mod.2 as flagship, 1 CL, 2 DD with 2 additional ships to world 5-5, 6-2 and obtain S-rank victories at the boss nodes.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "700",
      "B": "700"
    },
    "requires": ["A80","Bd2"],
    "unlocks": ["B106"],
    "period": "once",
    "needs": {
      "S": ["Saratoga Mk.II"],
      "M": ["5-5","6-2"]
    },
    "reward": [
      ["E","Fd2F-3",1,"Choose one: "],
      ["I","Skilled Crew Member",1,"or "],
      ["I","New Model Aerial Armament Materials",1,"or "],
      ["E","TBF",1,"Choose one: "],
      ["E","Night Operation Aviation Personnel",1,"or "]
    ]
  },
  "B106": {
    "Jp": "夜間作戦空母、前線に出撃せよ！",
    "En": "Night Carrier, to the Front Lines!",
    "content": "Sortie Saratoga Mk.II as flagship to world 6-5 and obtain S-rank at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "1000"
    },
    "requires": ["B105"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Saratoga Mk.II"],
      "M": ["6-5"]
    },
    "reward": [
      ["E","TBF",1,"Choose one: "],
      ["E","Night Operation Aviation Personnel + Skilled Deckhands",1,"or "],
      ["I","New Model Aerial Armament Materials",1,"or "],
      ["I","Reinforcement Expansion",1,"Choose one: "],
      ["I","New Model Aerial Armament Materials",1,"or "],
      ["I","Skilled Crew Member",1,"or "]
    ]
  },
  "B107": {
    "Jp": "補給線の安全を確保せよ！",
    "En": "Secure the Safety of the Transportation Route!",
    "content": "Sortie a fleet with CL as flagship, 2 or more DD / DE. You may bring up to 3 additional ships. Sortie to World 1-3, 1-4, 1-5 and obtain at least A-rank victories at the boss node.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["D1","F11"],
    "unlocks": ["D25"],
    "period": "once",
    "needs": {
      "M": ["1-3","1-4","1-5"]
    },
    "reward": [
      ["I","Irako",1],
      ["I","Underway Replenishment",1]
    ]
  },
  "B108": {
    "Jp": "「第八駆逐隊」、南西へ！",
    "En": "8th Destroyer Division, to the Southwestern Area!",
    "content": "Sortie a fleet with Asashio, Ooshio, Arashio, Michishio, up to 2 additional ships to world 1-2, 2-2 and obtain S-rank victories at the boss nodes.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "250",
      "S": "250",
      "B": "250"
    },
    "requires": ["B20"],
    "unlocks": ["A81","D27"],
    "period": "once",
    "needs": {
      "S": ["Asashio","Ooshio","Arashio","Michishio"],
      "M": ["1-2","2-2"]
    },
    "reward": [
      ["C","Development Material",3],
      ["I","Mamiya",1]
    ]
  },
  "B109": {
    "Jp": "最精鋭「第八駆逐隊」、全力出撃！",
    "En": "New Elite 8th Destroyer Division, Sortie Out!",
    "content": "Sortie a fleet including Michishio Kai Ni, Asashio Kai Ni/Asashio Kai Ni D, Ooshio Kai Ni, Arashio Kai Ni, up to 2 additional ships to 3-2, 5-4 and obtain S-rank(?) victories at the boss nodes.",
    "tips": "Plays line on completion.",
    "resources": {
      "F": "800",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["D27","A81"],
    "unlocks": ["A88"],
    "period": "once",
    "needs": {
      "S": ["Michishio Kai Ni","Asashio Kai Ni","Ooshio Kai Ni","Arashio Kai Ni"],
      "M": ["3-2","5-4"]
    },
    "reward": [
      ["C","Improvement Material",4],
      ["E","12.7cm Twin Gun Mount Model C Kai 2",1,"Choose one: "],
      ["E","Daihatsu Landing Craft",1,"or "],
      ["E","Type 22 Surface Radar",2,"or "]
    ]
  },
  "B110": {
    "Jp": "北方海域戦闘哨戒を実施せよ！",
    "En": "Provide combat patrols in the northern sea!",
    "content": "Sortie a fleet with 1 CL, 1 AV, 1 CVL, 3 additional ships to world 3-5 and obtain 2 S-rank victories at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "1000",
      "S": "0",
      "B": "700"
    },
    "requires": ["Bq5"],
    "unlocks": ["F83"],
    "period": "once",
    "needs": {
      "M": ["3-5"]
    },
    "reward": [
      ["I","Present box",1],
      ["E","Shiden Kai 2",1,"Choose one: "],
      ["C","Improvement Material",4,"or "],
      ["I","New Model Aerial Armament Materials",1,"or "]
    ]
  },
  "B111": {
    "Jp": "松輸送作戦、開始せよ！",
    "En": "Start the Matsu Transport Operation!",
    "content": "Sortie a Fleet with Tatsuta Kai or Tatsuta Kai Ni as Flagship, with at least 3 or more DD/DEs to World 1-4, 1-6 and clear the boss node with at least an A rank or reach the goal twice on both maps.",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "200",
      "B": "0"
    },
    "requires": ["Fd7","B30"],
    "unlocks": ["B113"],
    "period": "once",
    "needs": {
      "M": ["1-4","1-6"],
      "S": ["Tatsuta Kai"]
    },
    "reward": [
      ["I","New Model Gun Mount Improvement Material",1,"Choose one: "],
      ["I","New Model Aerial Armament Materials",1,"or "],
      ["I","Furniture Fairy",1,"Choose one: "],
      ["E","Daihatsu Landing Craft",1,"or "],
      ["I","Action Report",1,"or "]
    ]
  },
  "B112": {
    "Jp": "精鋭「四水戦」、南方海域に展開せよ！",
    "En": "Elite 4th Torpedo Squadron, Sortie to the Southern Ocean Area!",
    "content": "Sortie a Fleet with Murasame Kai Ni as Flagship along with at least 3 of the following ships: Yura Kai Ni, Yuudachi Kai Ni, Harusame Kai, Samidare Kai, Akizuki Kai, two additional ships of your choice to World 5-1, 5-3, 5-4 and obtain at least A-rank victories at the boss nodes.",
    "tips": "Plays line on completion.",
    "resources": {
      "F": "400",
      "A": "400",
      "S": "0",
      "B": "400"
    },
    "requires": ["A84"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["5-1","5-2","5-4"],
      "S": ["Murasame Kai Ni","Yura Kai Ni","Yuudachi Kai Ni","Harusame Kai","Samidare Kai","Akizuki Kai"]
    },
    "reward": [
      ["E","12.7cm Twin Gun Mount Model C Kai 2",1,"Choose one: "],
      ["E","Type 22 Surface Radar",2,"or "],
      ["E","12.7cm Twin Gun Mount Model B Kai 2",1,"or "],
      ["I","Underway Replenishment",2,"Choose one: "],
      ["E","Drum Canister",3,"or "],
      ["C","Improvement Material",4,"or "]
    ]
  },
  "B113": {
    "Jp": "松輸送作戦、継続実施せよ！",
    "En": "Continue the Matsu-Transport Operation Further!",
    "content": "Sortie a Fleet with a CL/DD as Flagship, with at least 3 or more DD/DE to World 1-4, 1-6 and clear the boss node with at least an A rank or reach the goal three times on both maps.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "300"
    },
    "requires": ["B111"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["1-4","1-6"]
    },
    "reward": [
      ["E","Daihatsu Landing Craft",1,"Choose one: "],
      ["C","Improvement Material",4,"or "],
      ["I","New Model Gun Mount Improvement Material",1,"Choose one: "],
      ["E","12cm 30-tube Rocket Launcher",2,"or "],
      ["I","Furniture Fairy",1,"or "]
    ]
  },
  "B114": {
    "Jp": "新編「四航戦」、全力出撃！",
    "En": "New 4th Aviation Fleet, Sortie Out!",
    "content": "Sortie a fleet including Ise Kai, Hyuuga Kai, Ooyodo Kai, one DD and up to two additional ships to 1-6, 2-5, 3-5, 4-5 and clear the boss node with at least an A rank or reach the goal node on each map.",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "400",
      "S": "400",
      "B": "400"
    },
    "requires": ["B23"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Ise Kai","Hyuuga Kai","Ooyodo Kai"],
      "M": ["1-6","2-5","3-5","4-5"]
    },
    "reward": [
      ["E","12cm 30-tube Rocket Launcher Kai Ni",1],
      ["I","Action Report",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
  "B115": {
    "Jp": "精鋭駆逐隊、獅子奮迅！",
    "En": "Elite Destroyer Squadron, Go Furious!",
    "content": "Sortie a fleet including at least 4 Destroyers and up to two additional ships to 1-6, 2-3, 3-2, 4-2 and clear the boss node with at least an S(?) rank or reach the goal node on each map.",
    "tips": "",
    "period": "once",
    "requires": ["C17","Fq6"],
    "unlocks": ["B121","B117"],
    "resources": {
      "F": "480",
      "A": "480",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "M": ["1-6","2-3","3-2","4-2"]
    },
    "reward": [
      ["I","Furniture Fairy",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "],
      ["I","Action Report",1,"Choose one: "],
      ["I","Medal",1,"or "]
    ]
  },  
  "B116": {
    "Jp": "「十八駆」、北方海域キス島へ！",
    "En": "\"DesDiv 18\", To Kis Island In the Northern Sea!",
    "content": "Sortie a Fleet including Arare Kai Ni, Kasumi Kai Ni/Kasumi Kai Ni B, Kagerou Kai, Shiranui Kai and up to two additional ships to world 3-2 and clear the boss node with at least an S rank twice.",
    "tips": "",
    "period": "once",
    "requires": ["A87","Bd8"],
    "unlocks": [],
    "resources": {
      "F": "0",
      "A": "0",
      "S": "480",
      "B": "480"
    },
    "needs": {
      "S": ["Arare Kai Ni","Kagerou Kai","Kasumi Kai Ni","Shiranui Kai"],
      "M": ["3-2"]
    },
    "reward": [
      ["E","Daihatsu Landing Craft",1,"Choose one: "],
      ["E","10cm Twin High-angle Gun Mount Kai + Additional Machine Guns",1,"or "],
      ["C","Improvement Material",5,"or "]
    ]
  },
  "B117": {
    "Jp": "最精鋭甲型駆逐艦、突入！敵中突破！",
    "En": "Elite Type-A Destroyers, Charging Through Enemy Territory!",
    "content": "Sortie a fleet with Kagerou Kai Ni or Shiranui Kai Ni or Kuroshio Kai Ni as flagship together with two level 75 or above Kagerou/Yuugumo class destroyers to world 3-2, 4-2, 5-3 and obtain S-rank victories at the Boss Nodes of each Map Twice each.",
    "tips": "",
    "period": "once",
    "requires": ["C17","B115"],
    "unlocks": [],
    "resources": {
      "F": "0",
      "A": "1000",
      "S": "0",
      "B": "500"
    },
    "needs": {
      "S": ["Kagerou Kai Ni","Shiranui Kai Ni","Kuroshio Kai Ni"],
      "M": ["3-2","4-2","5-3"]
    },
    "reward": [
      ["I","Furniture Fairy",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "],
      ["I","Action Report",1,"or "],
      ["I","Medal",2,"Choose one: "],
      ["I","Prototype Flight Deck Catapult",1,"or "],
      ["E","12.7cm Twin Gun Mount Model D Kai 2",1,"or "]
    ]
  },
  "B118": {
    "Jp": "戦闘航空母艦、出撃せよ！",
    "En": "Battle Carrier, Sortie! (?))",
    "content": "Sortie a Fleet with Ise Kai Ni as Flagship to world 3-5, 4-5, 6-4 and obtain S-rank victories at the boss nodes.",
    "tips": "",
    "period": "once",
    "requires": ["C22"],
    "unlocks": [],
    "resources": {
      "F": "1000",
      "A": "0",
      "S": "634",
      "B": "634"
    },
    "needs": {
      "S": ["Ise Kai Ni"],
      "M": ["3-5","4-5","6-4"]
    },
    "reward": [
      ["I","Skilled Crew Member",1,"Choose one: "],
      ["I","New Model Aerial Armament Materials",1,"or "],
      ["C","Improvement Material",4,"or "],
      ["E","Zuiun (634 Air Group)",1,"Choose one: "],
      ["E","Suisei Model 22 (634 Air Group)",1,"or "],
      ["I","New Model Gun Mount Improvement Material",2,"or "]
    ]
  },
  "B119": {
    "Jp": "「伊勢改二」、敵機動部隊を迎擊せよ！",
    "En": "Ise Kai Ni, Intercept the Enemy Task Force!",
    "content": "Sortie a Fleet with Ise Kai Ni as Flagship together with at least two Destroyers to world 6-5 and obtain 3 S-rank victories at the boss node",
    "tips": "",
    "period": "once",
    "requires": ["C22"],
    "unlocks": ["F75"],
    "resources": {
      "F": "634",
      "A": "0",
      "S": "1000",
      "B": "0"
    },
    "needs": {
      "S": ["Ise Kai Ni"],
      "M": ["6-5"]
    },
    "reward": [
      ["E","Type 96 Fighter",3,"Choose one: "],
      ["E","Type 99 Dive Bomber",3,"or "],
      ["E","Type 0 Fighter Model 21",2,"or "],
      ["E","Shiden Kai 2",2,"Choose one: "],
      ["I","Medal",1,"or "],
      ["I","Action Report",1,"or "]
    ]
  },  
  "B120": {
    "Jp": "精鋭「第十八戦隊」、展開せよ！",
    "En": "Expand the Elite 18th Cruiser Division!",
    "content": "Sortie a fleet including Tenryuu Kai Ni, Tatsuta Kai Ni, and two destroyers to world 1-2, 1-4, 1-5, 1-6 and obtain one S-rank victory at the boss nodes or reach the goal node once.",
    "tips": "",
    "period": "once",
    "requires": ["A89"],
    "unlocks": [],
    "resources": {
      "F": "0",
      "A": "1000",
      "S": "0",
      "B": "800"
    },
    "needs": {
      "S": ["Tatsuta Kai Ni","Tenryuu Kai Ni"],
      "M": ["1-2","1-4","1-5","1-6"]
    },
    "reward": [
      ["C","Instant Repair",5,"Choose one: "],
      ["I","Action Report",1,"or "],
      ["E","Type 22 Surface Radar",2,"Choose one: "],
      ["C","Improvement Material",4,"or "]
    ]
  },
  "B121": {
    "Jp": "精鋭「二七駆」第一小隊、出撃せよ！",
    "En": "First platoon of the Elite 27th Destroyer Division, Sortie!",
    "content": "Sortie a fleet including Shiratsuyu Kai Ni and Shigure Kai Ni to world 2-3, 4-1, 5-5, 6-5 and obtain a S-rank victory at each boss node.",
    "tips": "",
    "period": "once",
    "requires": ["B115"],
    "unlocks": [],
    "resources": {
      "F": "1000",
      "A": "0",
      "S": "1000",
      "B": "0"
    },
    "needs": {
      "S": ["Shigure Kai Ni","Shiratsuyu Kai Ni"],
      "M": ["2-3","4-1","5-5","6-5"]
    },
    "reward": [
      ["E","12.7cm Twin Gun Mount Model B Kai 4 (Wartime Modification) + Anti-Aircraft Fire Director",1],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "],
      ["C","Instant Repair",8,"or "]
    ]
  },  
  "B122": {
    "Jp": "精鋭「四戦隊」第二小隊、抜錨せよ！",
    "En": "Elite \"CruDiv 4\", 2nd Platoon, Set Sail!",
    "content": "Sortie a Fleet with Choukai Kai Ni, Maya Kai Ni and 4 additional ships to world 1-4, 2-3, 3-3, 4-5 and obtain S-rank? victories at the boss nodes.",
    "tips": "",
    "period": "once",
    "requires": ["B13","Cd1"],
    "unlocks": [],
    "resources": {
      "F": "400",
      "A": "400",
      "S": "0",
      "B": "400"
    },
    "needs": {
      "S": ["Choukai Kai Ni","Maya Kai Ni"],
      "M": ["1-4","2-3","3-3","4-5"]
    },
    "reward": [
      ["E","12.7cm Twin High-angle Gun Mount (Late Model)",2,"Choose one: "],
      ["C","Instant Repair",8,"or "],
      ["I","Medal",1,"or "]
    ]
  },  
  "B123": {
    "Jp": "精強「十七駆」、北へ、南へ！",
    "En": "Elite 17th Destroyer Division, to the North, and the West!",
    "content": "Sortie a fleet including Isokaze B Kai, Hamakaze B Kai, Urakaze D Kai, Tanikaze D Kai, and two additional ships to worlds 1-5, 3-2, 7-1, 5-1 and obtain an A-rank at each boss node.",
    "tips": "",
    "period": "once",
    "requires": ["A90"],
    "unlocks": [],
    "resources": {
      "F": "1000",
      "A": "1000",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "S": ["Isokaze B Kai","Hamakaze B Kai","Urakaze D Kai","Tanikaze D Kai"],
      "M": ["1-5","3-2","5-1","7-1"]
    },
    "reward": [
      ["E","Type 3 Active Sonar",1,"Choose one: "],
      ["E","12.7cm Single High-angle Gun Mount (Late Model)",1,"or "],
      ["I","Furniture Fairy",1,"or "],
      ["I","Action Report",1,"Choose one: "],
      ["E","12.7cm Twin Gun Mount Model C Kai 2",1,"or "],
      ["E","61cm Quadruple (Oxygen) Torpedo Mount Late Model",1,"or "]
    ]
  },
  "B124": {
    "Jp": "「第七駆逐隊」、南西諸島を駆ける！",
    "En": "7th Destroyer Division, sail to the Southwestern Waters!",
    "content": "Sortie a fleet including two of Akebono, Ushio, Sazanami, and Oboro along with 4 additional ships to worlds 2-1, 2-2, 2-3, 2-4 and obtain a S-rank at each boss node.",
    "tips": "",
    "period": "once",
    "requires": ["Fd8"],
    "unlocks": [],
    "resources": {
      "F": "700",
      "A": "700",
      "S": "700",
      "B": "0"
    },
    "needs": {
      "S": ["Akebono","Oboro","Ushio","Sazanami"],
      "M": ["2-1","2-2","2-3","2-4"]
    },
    "reward": [
      ["I","Furniture Fairy",1,"Choose one: "],
      ["E","12.7cm Twin Gun Mount Model B Kai 2",3,"or "],
      ["E","Daihatsu Landing Craft",1,"or "],
      ["C","Development Material",8,"Choose one: "],
      ["C","Improvement Material",5,"or "],
      ["E","Type 0 Passive Sonar",1,"or "]
    ]
  },  
  "B125": {
    "Jp": "近海の警戒監視と哨戒活動を強化せよ！",
    "En": "Improve Guard Surveillance and Patrol Activities in the Coastal Waters!",
    "content": "Sortie a fleet including a CL flagship, 2 DD or DE, and 3 additional ships to Worlds 1-2, 1-3, 1-4, 2-1, 2-2 and obtain a S-rank at each boss node.",
    "tips": "",
    "period": "once",
    "requires": ["Cd1"],
    "unlocks": ["Bq8"],
    "resources": {
      "F": "800",
      "A": "800",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "M": ["1-2","1-3","1-4","2-1","2-2"]
    },
    "reward": [
      ["I","Medal",1,"Choose one: "],
      ["I","Reinforcement Expansion",1,"or "],
      ["I","New Model Gun Mount Improvement Material",2,"Choose one: "],
      ["E","Searchlight",2,"or "],
      ["I","Action Report",1,"or "]
    ]
  },
  "B126": {
    "Jp": "主力オブ主力、拔錨開始！",
    "En": "Mainstay of Mainstay, initiate sortie!",
    "content": "Sortie a fleet including Yuugumo Kai Ni and Makigumo Kai Ni along with 4 additional ships to Worlds 5-3, 5-4, 5-5 and obtain a S-rank at each boss node.",
    "tips": "",
    "period": "once",
    "requires": ["A91","Bd1"],
    "unlocks": [],
    "resources": {
      "F": "500",
      "A": "500",
      "S": "500",
      "B": "1000"
    },
    "needs": {
      "S": ["Yuugumo Kai Ni","Makigumo Kai Ni"],
      "M": ["5-3","5-4","5-5"]
    },
    "reward": [
      ["I","New Model Gun Mount Improvement Material",1,"Choose one: "],
      ["I","New Model Aerial Armament Materials",1,"or "],
      ["E","Daihatsu Landing Craft",1,"or "],
      ["I","Skilled Crew Member",1,"Choose one: "],
      ["C","Improvement Material",4,"or "]
    ]
  },  
  "B127": {
    "Jp": "冬季北方海域作戦",
    "En": "Winter Northern Seas Operation",
    "content": "Sortie a fleet with a CL as flagship and up to 5 additional ships to Worlds 3-1, 3-3, 3-4, and 3-5. Obtain a S-rank at each boss node twice.",
    "tips": "",
    "unlocks": [],
    "requires": ["Bq9"],
    "period": "once",
    "needs": {
      "M": [
        ["3-1",1],
        ["3-3",1],
        ["3-4",1],
        ["3-5",1]
      ]
    },
    "resources": {
      "F": "0",
      "A": "800",
      "S": "0",
      "B": "800"
    },
    "reward": [
      ["E","Type 0 Fighter Model 21","3","Choose one: "],
      ["E","Type 0 Fighter Model 32","2","or "],
      ["I","Furniture Fairy","1","or "],
      ["C","Improvement Material","4","Choose one: "],
      ["E","Type 22 Surface Radar","3","or "],
      ["I","New Model Aerial Armament Materials","2","or "]
    ]
  }, 
  "B128": {
    "Jp": "「比叡」の出撃",
    "En": "Hiei's Sortie",
    "content": "Sortie a fleet with Hiei as flagship to Worlds 5-3 and 5-4. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": ["B133"],
    "requires": ["B50","Fd8"],
    "period": "once",
    "needs": {
      "S": ["Hiei"],
      "M": [
        ["5-3",1],
        ["5-4",1]
      ]
    },
    "resources": {
      "F": "0",
      "A": "1113",
      "S": "1942",
      "B": "0"
    },
    "reward": [
      ["F","Hiei Wallscroll","1"],
      ["I","Action Report","1","Choose one: "],
      ["E","Type 96 150cm Searchlight","1","or "],
      ["I","Medal","1","or "]
    ]
  },   
  "B129": {
    "Jp": "精鋭無比「第一艦隊」まかり通る！",
    "En": "Unrivaled \"1st Squadron\", Coming Through!",
    "content": "Sortie a fleet with Mutsu Kai Ni and Nagato Kai Ni as flagship and second ship and up to 4 additional ships to Worlds 2-2, 3-5, 4-5 and 5-1. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": ["B130"],
    "requires": ["A92"],
    "period": "once",
    "needs": {
      "S": ["Mutsu Kai Ni","Nagato Kai Ni"],
      "M": [
        ["2-2",1],
        ["3-5",1],
        ["4-5",1],
        ["5-1",1]
      ]
    },
    "resources": {
      "F": "800",
      "A": "800",
      "S": "800",
      "B": "0"
    },
    "reward": [
      ["E","Type 91 AP Shell",2,"Choose one: "],
      ["E","41cm Twin Gun Mount","4","or "],
      ["E","Type 3 Shell","2","or "],
      ["E","Prototype 46cm Twin Gun Mount",1,"Choose one: "],
      ["E","Prototype Nanzan",1,"or "],
      ["I","Action Report","1","or "]
    ]
  },
  "B130": {
    "Jp": "精鋭無比「第一艦隊」まかり通る！【拡張作戦】",
    "En": "Unrivaled \"1st Squadron\", Coming Through! (Extra Operation)",
    "content": "Sortie a fleet with Mutsu Kai Ni and Nagato Kai Ni as flagship and second ship and up to 4 additional ships to Worlds 2-5, 5-5 and 6-4. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": [],
    "requires": ["B129"],
    "period": "once",
    "needs": {
      "S": ["Mutsu Kai Ni","Nagato Kai Ni"],
      "M": [
        ["2-5",1],
        ["5-5",1],
        ["6-4",1]
      ]
    },
    "resources": {
      "F": "1000",
      "A": "1000",
      "S": "1000",
      "B": "1000"
    },
    "reward": [
      ["E","41cm Twin Gun Mount Kai Ni","1"],
      ["I","New Model Gun Mount Improvement Material","1","Choose one: "],
      ["C","Improvement Material","5","or "],
      ["E","Prototype 46cm Twin Gun Mount","1","or "]
    ]
  }, 
  "B131": {
    "Jp": "航空戦艦戦隊、戦闘哨戒！",
    "En": "Aviation Battleship Division, Scout and Engage!",
    "content": "Sortie a fleet with 2 BBV and up to 4 additional ships to Worlds 1-4, 1-5, 2-3, and 7-2. Obtain a S-rank at the boss of 1-4, 1-5, and 2-3. Obtain a S-rank at the second boss of 7-2.",
    "tips": "",
    "unlocks": ["B132"],
    "requires": ["F84"],
    "period": "once",
    "needs": {
      "M": [
        ["1-4",1],
        ["1-5",1],
        ["2-3",1],
        ["7-2",1]
      ]
    },
    "resources": {
      "F": "600",
      "A": "600",
      "S": "0",
      "B": "600"
    },
    "reward": [
      ["I","Medal","1"],
      ["I","Action Report","1","Choose one: "],
      ["I","Medal","2","or "]
    ]
  },
  "B132": {
    "Jp": "最精鋭「第四航空戦隊」、出撃せよ！",
    "En": "Top-class \"CarDiv 4\", Sortie!\"",
    "content": "Sortie a fleet with Ise Kai Ni, Hyuuga Kai Ni, and up to 4 additional ships to Worlds 1-6, 4-5, 5-5, and 6-5. Obtain a S-rank at each boss node once, and reach the anchor node N of 1-6 twice.",
    "tips": "",
    "unlocks": [],
    "requires": ["B131","F85"],
    "period": "once",
    "needs": {
      "S": ["Hyuuga Kai Ni","Ise Kai Ni"],
      "M": [
        ["1-6",1],
        ["4-5",1],
        ["5-5",1],
        ["6-5",1]
      ]
    },
    "resources": {
      "F": "1000",
      "A": "1000",
      "S": "1000",
      "B": "0"
    },
    "reward": [
      ["E","Zuiun Kai Ni (634 Air Group)","1"],
      ["E","S-51J","1","Choose one: "],
      ["I","Medal","2","or "]
    ]
  },
  "B133": {
    "Jp": "重改装高速戦艦「金剛改二丙」、南方突入！",
    "En": "Heavily Refurbished Fast Fattleship \"Kongō K2C\", Head to the South!",
    "content": "Sortie a fleet with Kongou Kai Ni C as flagship, 1 other Kongou-class member, 2 DD, and up to 2 additional ships to Worlds 5-1, 5-3, 5-4, and 5-5. Obtain a S-rank at each boss node twice.",
    "tips": "",
    "unlocks": [],
    "requires": ["B128"],
    "period": "once",
    "needs": {
      "M": [
        ["5-1",1],
        ["5-3",1],
        ["5-4",1],
        ["5-5",1]
      ],
      "S": ["Kongou Kai Ni C","Hiei","Haruna","Kirishima"]
    },
    "resources": {
      "F": "1944",
      "A": "2019",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","35.6cm Twin Gun Mount Kai Ni",1,"or "],
      ["I","Action Report","1","Choose one: "],
      ["I","New Model Gun Mount Improvement Material","2","or "],
      ["I","Medal","1","or "]
    ]
  },
  "B134": {
    "Jp": "艦隊司令部の強化 【実施段階】",
    "En": "Fleet Headquarters Improvements [Implementation Phase]",
    "content": "Sortie a fleet with Ooyodo as flagship, either Akashi or a AV, and up to 4 additional ships to Worlds 2-3, 3-3, and 4-1. Obtain a S-rank at each boss node twice.",
    "tips": "",
    "unlocks": [],
    "requires": ["D29"],
    "period": "once",
    "needs": {
      "S": ["Akashi","Ooyodo"],
      "M": [
        ["2-3",1],
        ["3-3",1],
        ["4-1",1]
      ]
    },
    "resources": {
      "F": "1200",
      "A": "1200",
      "S": "1200",
      "B": "0"
    },
    "reward": [
      ["I","Headquarters Personnel","1"],
      ["I","Medal","1","Choose one: "],
      ["I","Reinforcement Expansion","1","or "],
      ["I","Large furniture box",8,"or "]
    ]
  },
  "B135": {
    "Jp": "近海哨戒を実施せよ！",
    "En": "Patrol the Coastal Waters!",
    "content": "Sortie a fleet with 1 CL, 3 DD/DE, and up to 2 additional ships to Worlds 1-2, 1-3, 2-1, and 2-2. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": ["B136","B138"],
    "requires": ["B6"],
    "period": "once",
    "needs": {
      "M": [
        ["1-2",1],
        ["1-3",1],
        ["2-1",1],
        ["2-2",1]
      ]
    },
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["I","Action Report","1"],
      ["C","Development Material","3","Choose one: "],
      ["C","Instant Repair","3","or "],
      ["E","25mm Triple Autocannon Mount","2","or "]
    ]
  },
  "B136": {
    "Jp": "精鋭「二四駆逐隊」出撃せよ！",
    "En": "Peerless \"DesDiv 24\", Sortie!",
    "content": "Sortie a fleet with Umikaze Kai Ni as flagship, 2 of Yamakaze, Kawakaze, and Suzukaze, and up to 3 additional ships to Worlds 2-3, 2-4, 5-1, and 5-3. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": [],
    "requires": ["B135"],
    "period": "once",
    "needs": {
      "S": ["Kawakaze","Umikaze Kai Ni","Yamakaze","Suzukaze"],
      "M": [
        ["2-3",1],
        ["2-4",1],
        ["5-1",1],
        ["5-3",1]
      ]
    },
    "resources": {
      "F": "800",
      "A": "800",
      "S": "800",
      "B": "0"
    },
    "reward": [
      ["E","12.7cm Twin Gun Mount Model C Kai 2","1"],
      ["I","New Model Gun Mount Improvement Material","1","Choose one: "],
      ["E","Type 13 Air Radar","3","or "],
      ["I","Furniture Fairy","1","or "]
    ]
  },
  "B137": {
    "Jp": "精強！「第一航空戦隊」出撃せよ！",
    "En": "Powerful \"CarDiv 1\", Sortie!",
    "content": "Sortie a fleet with Akagi Kai Ni or Akagi Kai Ni E as flagship, Kaga as second ship, and up to 4 additional ships to Worlds 4-5, 5-2, and 6-5. Obtain a S-rank at the boss node of 4-5 and 5-2 once. Obtain a S-rank at the boss node of 6-5 twice.",
    "tips": "",
    "unlocks": ["F88"],
    "requires": ["C33"],
    "period": "once",
    "needs": {
      "S": ["Akagi Kai Ni","Kaga"],
      "M": [
        ["4-5",1],
        ["5-2",1],
        ["6-5",1]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "1000",
      "B": "1000"
    },
    "reward": [
      ["E","Ryuusei Kai (CarDiv 1)","1"],
      ["C","Improvement Material","5","Choose one: "],
      ["I","New Model Aerial Armament Materials","1","or "],
      ["I","Skilled Crew Member","1","or "]
    ]
  },
  "B138": {
    "Jp": "「羽黒」「神風」、出撃せよ！",
    "En": "Haguro & Kamikaze, Sortie!",
    "content": "Sortie a fleet with Haguro, Kamikaze, and either 1 additional CA(V) and 2 additional DD (for a total of 5 ships) or 4 additional DD to Worlds 2-1, 2-2, and 2-3. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": [],
    "requires": ["B135"],
    "period": "once",
    "needs": {
      "S": ["Haguro","Kamikaze"],
      "M": [
        ["2-1",1],
        ["2-2",1],
        ["2-3",1]
      ]
    },
    "resources": {
      "F": "516",
      "A": "0",
      "S": "1945",
      "B": "0"
    },
    "reward": [
      ["F","Haguro's Protection","1"],
      ["I","New Model Aerial Armament Materials","1","Choose one: "],
      ["I","Reinforcement Expansion","1","or "],
      ["I","Furniture Fairy","1","or "]
    ]
  },
  "B139": {
    "Jp": "陸戦用装備の艦載運用実戦研究",
    "En": "Research of Ship-borne Land Based Equipment in Actual Combat",
    "content": "Sortie a fleet with at least 1 LHA/AV and up to 5 additional ships to Worlds 4-5 and 6-4. Obtain a A-rank or higher at each boss node twice.",
    "tips": "",
    "unlocks": [],
    "requires": ["B80","F89"],
    "period": "once",
    "needs": {
      "M": [
        ["4-5",1],
        ["6-4",1]
      ]
    },
    "resources": {
      "F": "0",
      "A": "500",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","Shipborne Model Type 4 20cm Anti-ground Rocket Launcher",1,"or "],
      ["E","Type 2 12cm Mortar Kai","3","Choose one: "]
    ]
  },
  "B140": {
    "Jp": "「夕張改二」試してみてもいいかしら？",
    "En": "I Wonder If We Should Test Out \"Yuubari Kai Ni\"?",
    "content": "Assemble a fleet containing Yuubari Kai Ni/Toku/D as flagship and up to 5 XX, then S rank the boss nodes of 2-5, 3-3, 5-3, and 6-3.",
    "tips": "",
    "unlocks": ["B141"],
    "requires": ["B11","Fd1"],
    "period": "once",
    "needs": {
	  "S": ["Yuubari Kai Ni"],
      "M": [
        ["2-5",1],		 
		["3-3",1],
        ["5-3",1],
        ["6-3",1]
      ]
    },
    "resources": {
      "F": "0",
      "A": "3000",
      "S": "0",
      "B": "0"
    },
    "reward": [
	  ["E","14cm Twin Gun Mount Kai","1"],
      ["E","Type 2 Depth Charge","2","Choose one: "],
      ["E","Daihatsu Landing Craft","1","or "],
      ["I","Furniture Fairy","1","or "]
    ]
  },
  "B141": {
    "Jp": "新編「六水戦」出撃！後で感想、聞かせてね！",
    "En": "New \"6th Torpedo Squadron\" Sortie! Let Me Know What You Think Afterward!",
    "content": "Assemble a fleet containing Yuubari Kai Ni/Toku/D as flagship, any 3 of: \"Mutsuki, Kisaragi, Yayoi, Uzuki, Kikuzuki, or Mochizuki\"; and up to 2 XX, then S rank the boss nodes of 1-5, 1-6, 2-2, 3-2, and 7-1.",
    "tips": "",
    "unlocks": ["Bq13"],
    "requires": ["B140"],
    "period": "once",
    "needs": {
	  "S": ["Yuubari Kai Ni","Mutsuki","Kisaragi","Yayoi","Uzuki","Kikuzuki","Mochizuki"],
      "M": [
        ["1-5",1],		 
		["1-6",1],
        ["2-2",1],
		["3-2",1],
        ["7-1",1]
      ]
    },
    "resources": {
      "F": "3000",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
	  ["I","Reinforcement Expansion","1"],
      ["C","Development Material","12","Choose one: "],
      ["E","Type D Kouhyouteki Kai (Kouryuu Kai)","1","or "],
      ["C","Improvement Material","6","or "]
    ]
  },
  "B142": {
    "Jp": "再編「第三一駆逐隊」、抜錨せよ！",
    "En": "Reorganized \"DesDiv 31\", Weigh Anchor!",
    "content": "Assemble a fleet containing Naganami, Kishinami, Asashimo, Okinami Kai Ni, and up to 2 XX, then S rank the boss nodes of 1-3, 1-4, 1-5, 2-2, and 2-3.",
    "tips": "",
    "unlocks": [],
    "requires": ["B65","Cd1"],
    "period": "once",
    "needs": {
	  "S": ["Naganami","Kishinami","Asashimo","Okinami Kai Ni"],
      "M": [
        ["1-3",1],		 
		["1-4",1],
        ["1-5",1],
		["2-2",1],
        ["2-3",1]
      ]
    },
    "resources": {
      "F": "880",
      "A": "880",
      "S": "880",
      "B": "500"
    },
    "reward": [
      ["I","Underway Replenishment","3","Choose one: "],
      ["C","Instant Repair","6","or "],
      ["I","Combat Ration (Special Onigiri)","2","or "],
	  ["I","New Model Gun Mount Improvement Material","12","Choose one: "],
      ["I","New Model Rocket Development Material","1","or "],
      ["F","Offshore Waves Hanging Shelf","1","or "]
    ]
  },
  "B143": {
    "Jp": "「第五航空戦隊」、縦横無尽！",
    "En": "\"5th Carrier Division\", Go Wild!",
    "content": "Assemble a fleet containing Shoukaku, Zuikaku, Oboro, Akigumo, and up to 2 XX, then S rank the boss nodes of 3-5, 5-2, 7-2 (Part 2), and 6-5.",
    "tips": "",
    "unlocks": [],
    "requires": ["B15","D21"],
    "period": "once",
    "needs": {
	  "S": ["Shoukaku","Zuikaku","Oboro","Akigumo"],
      "M": [
        ["3-5",1],		 
		["5-2",1],
        ["7-2",1],
        ["6-5",1]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "1000"
    },
    "reward": [
      ["I","Underway Replenishment","2","Choose one: "],
      ["C","Instant Repair","6","or "],
      ["E","25mm Triple Autocannon Mount","2","or "],
	  ["E","Prototype Toukai","1","Choose one: "],
      ["E","Prototype Keiun (Carrier-based Reconnaissance Model)","1","or "]
    ]
  },
  "B144": {
    "Jp": "「比叡改二丙」見参！第三戦隊、南方突入！",
    "En": "\"Hiei Kai Ni C\" Arrives! 3rd Battleship Squadron, To The South!",
    "content": "Assemble a fleet containing Hiei Kai Ni C, 1 Kongou-class, 1 CL, 1 DD, and up to 2 XX, then S rank the boss nodes of 5-1, 5-2, 5-3, 5-4, and 5-5.",
    "tips": "",
    "unlocks": [],
    "requires": ["B133"],
    "period": "once",
    "needs": {
	  "S": ["Hiei Kai Ni C"],
      "M": [
        ["5-1",1],		 
		["5-2",1],
        ["5-3",1],
		["5-4",1],
        ["5-5",1]
      ]
    },
    "resources": {
      "F": "1942",
      "A": "2020",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["I","New Model Gun Mount Improvement Material","2","Choose one: "],
      ["E","35.6cm Twin Gun Mount Kai Ni","1","or "],
	  ["E","Type 0 Reconnaissance Seaplane Model 11B★+2","1","Choose one: "],
	  ["E","New Kanhon Design Anti-torpedo Bulge (Large)★+2","1","or "],
      ["I","Action Report","1","or "]
    ]
  },  
  "B145": {
    "Jp": "改装航空軽巡「Gotland andra」、出撃！",
    "En": "Remodeled Aviation Light Cruiser \"Gotland Andra\", Sortie!",
    "content": "Assemble a fleet containing Gotland Andra as flagship, 1 DD, and up to 4 XX, then S rank the boss nodes of 2-4, 4-2, 4-4, and 4-5.",
    "tips": "",
    "unlocks": [],
    "requires": ["B62","Bd5"],
    "period": "once",
    "needs": {
	  "S": ["Gotland Andra"],
      "M": [
        ["2-4",1],		 
		["4-2",1],
        ["4-4",1],
		["4-5",1]
      ]
    },
    "resources": {
      "F": "700",
      "A": "700",
      "S": "700",
      "B": "1000"
    },
    "reward": [
      ["E","Swordfish (Seaplane Model)","2","Choose one: "],
      ["E","S9 Osprey","2","or "],
      ["E","Swordfish Mk.III Kai (Seaplane Model)","1","or "],
	  ["C","Improvement Material","4","Choose one: "],
	  ["I","New Model Aerial Armament Materials","1","or "],
      ["I","Reinforcement Expansion","1","or "]
    ]
  }, 
  "B146": {
    "Jp": "「Gotland」戦隊、進撃せよ！",
    "En": "\"Gotland\" Squadron, Advance!",
    "content": "Assemble a fleet containing Gotland Andra as flagship, 1 DD, and up to 4 XX, then S rank the boss nodes of 2-5, 6-3, 6-4, and 6-5.",
    "tips": "",
    "unlocks": [],
    "requires": ["B145"],
    "period": "once",
    "needs": {
      "S": ["Gotland Andra"],
      "M": [
        ["2-5",1],
        ["6-3",1],
        ["6-4",1],
        ["6-5",1]
      ]
    },
    "resources": {
      "F": "1000",
      "A": "1000",
      "S": "1000",
      "B": "2020"
    },
    "reward": [
      ["F","Scandinavian Sofa","1"],
      ["I","New Model Aerial Armament Material","2","Choose one: "],
      ["I","New Model Aerial Armament Materials","1","or "],
      ["E","Fairey Seafox Kai","1","or "]
    ]
  },
  "B147": {
    "Jp": "南西諸島海域合同哨戒",
    "En": "Nansei Island Water Combined Patrol",
    "content": "Assemble a fleet containing 2 \"USN ships\" and up to 4 XX, then S rank the boss nodes of 2-2, 2-3, and 2-4.",
    "tips": "",
    "unlocks": [],
    "requires": ["B135"],
    "period": "once",
    "needs": {
      "S": [],
      "M": [
        ["2-2",1],
        ["2-3",1],
        ["2-4",1]
      ]
    },
    "resources": {
      "F": "400",
      "A": "400",
      "S": "0",
      "B": "400"
    },
    "reward": [
      ["C","Improvement Material","2","Choose one: "],
      ["I","Emergency Repair Material","2","or "],
      ["C","Instant Repair Material","4","or "],
      ["E","Tenzan","3","Choose one: "],
      ["E","OS2U","1","or "]
    ]
  },
  "B148": {
    "Jp": "合同艦隊旗艦、改装「Fletcher」、抜錨！",
    "En": "Combined Fleet \"Flagship\", Remodeled Fletcher, Weigh Anchor!",
    "content": "Assemble a fleet containing Fletcher Kai Mod.2 as flagship, any 2 USN/RN/RAN/RNN ships, and up to 3 XX, then S rank the boss nodes of 1-4, 2-5, and 3-5.",
    "tips": "Fletcher Mk.II does not count as Fletcher Kai Mod.2 for this quest.",
    "unlocks": [],
    "requires": ["B30", "B147"],
    "period": "once",
    "needs": {
      "S": [],
      "M": [
        ["1-4",1],
        ["2-5",1],
        ["3-5",1]
      ]
    },
    "resources": {
      "F": "600",
      "A": "600",
      "S": "600",
      "B": "0"
    },
    "reward": [
      ["E","533mm Quintuple Torpedo Mount (Late Model)","1"],
      ["E","F4F-3★+3","2","Choose one: "],
      ["E","TBD★+3","2","or "],
      ["C","Development Material","6","or "]
    ]
  },

 // Daily Sortie Quests Bd00
  "Bd1": {
    "Jp": "敵艦隊を撃破せよ！",
    "En": "Crush the Enemy Fleet",
    "content": "Defeat an enemy fleet",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "50",
      "S": "0",
      "B": "0"
    },
    "requires": ["B4"],
    "unlocks": ["Bd2","Bd4","Bd6","A54","A72","B60","A80","B126","Cq1","C37"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "Bd2": {
    "Jp": "敵艦隊主力を撃滅せよ！",
    "En": "Destroy the Main Force of the Enemy Fleet",
    "content": "Complete a battle.",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "50",
      "S": "50",
      "B": "50"
    },
    "requires": ["Bd1"],
    "unlocks": ["Bd3","Bd5","Bw1","Bw3","A66","A67","B48","B63","Cm1","C9","F31","B98","A58","B105","Fq5"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1],
      ["C","Development Material",1]
    ]
  },
  "Bd3": {
    "Jp": "敵艦隊を10回邀撃せよ！",
    "En": "Ambush the Enemy Fleet 10 Times",
    "content": "Defeat 10 enemy fleets.",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "200",
      "B": "100"
    },
    "requires": ["Bd2"],
    "unlocks": ["C25"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "Bd4": {
    "Jp": "敵空母を3隻撃沈せよ！",
    "En": "Sink 3 Enemy Carriers",
    "content": "Sink 3 enemy CV. CVL are fine too.",
    "tips": "Armored Carrier Princess does not work (Only available on days of the month ending -3, -7, or -0).",
    "resources": {
      "F": "150",
      "A": "150",
      "S": "150",
      "B": "300"
    },
    "requires": ["Bd1"],
    "unlocks": [],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2]
    ]
  },
  "Bd5": {
    "Jp": "敵補給艦を3隻撃沈せよ！",
    "En": "Sink 3 Enemy Transport Ships",
    "content": "Sink 3 enemy Transport Ships",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "50",
      "S": "200",
      "B": "50"
    },
    "requires": ["Bd2"],
    "unlocks": ["Bd7","Bw2","B91","C12","F83"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1],
      ["C","Development Material",1]
    ]
  },
  "Bd6": {
    "Jp": "敵輸送船団を叩け！",
    "En": "Strike the Enemy Transport Group",
    "content": "Sink 5 enemy Transport Ships",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bd1"],
    "unlocks": [],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Development Material",2]
    ]
  },
  "Bd7": {
    "Jp": "南西諸島海域の制海権を握れ！",
    "En": "Seize Control of the Southwestern Archipelago Sea",
    "content": "Defeat 5 boss nodes in World 2: 南西諸島海域",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "0",
      "B": "200"
    },
    "requires": ["Bd5"],
    "unlocks": ["Bd8"],
    "period": "daily",
    "needs": {
      "M": ["2-1","2-2","2-3","2-4","2-5"]
    },
    "reward": [
      ["C","Instant Repair",1],
      ["C","Instant Construction",1]
    ]
  },
  "Bd8": {
    "Jp": "敵潜水艦を制圧せよ！",
    "En": "Suppress the Enemy Submarines",
    "content": "Sink 6 enemy SS",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "30",
      "S": "300",
      "B": "30"
    },
    "requires": ["Bd7"],
    "unlocks": ["B49","B116"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1]
    ]
  },
   
// Weekly Sortie Quests Bw00  
  "Bw1": {
    "Jp": "あ号作戦",
    "En": "OpeRation A-gou",
    "content": "Launch your fleet 36 times, encounter 24 bosses, kill 12 bosses, and get 6 S-Rank victories",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "300",
      "B": "100"
    },
    "requires": ["Bd2"],
    "unlocks": ["Bw4","Bq8"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["C","Instant Construction",2],
      ["C","Development Material",2]
    ]
  },
  "Bw2": {
    "Jp": "い号作戦",
    "En": "OpeRation I-gou",
    "content": "Sink 20 ennemy CV. CVL are fine too",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "500",
      "S": "0",
      "B": "500"
    },
    "requires": ["Bd5"],
    "unlocks": ["Bw5","F32","Bq2"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["C","Development Material",2]
    ]
  },
  "Bw3": {
    "Jp": "海上通商破壊作戦",
    "En": "Maritime Trade Disrupt OpeRation",
    "content": "Sink 20 ennemy Transport Ships",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "400",
      "B": "0"
    },
    "requires": ["Bd2"],
    "unlocks": ["B12"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["C","Development Material",3]
    ]
  },
  "Bw4": {
    "Jp": "ろ号作戦",
    "En": "OpeRation Ro-gou",
    "content": "Sink 50 Transport Ships",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "800",
      "B": "0"
    },
    "requires": ["Bw1"],
    "unlocks": ["Bw10","Bm3","Bm6"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["C","Instant Repair",3]
    ]
  },
  "Bw5": {
    "Jp": "海上護衛戦",
    "En": "Marine Escort Battle",
    "content": "Sink 15 ennemy SS",
    "tips": "",
    "resources": {
      "F": "600",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bw2"],
    "unlocks": ["Bw6","Bw7","Fw1","B72","Fm3","B100"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2],
      ["C","Improvement Material",1]
    ]
  },
  "Bw6": {
    "Jp": "敵東方艦隊を撃滅せよ！",
    "En": "Destroy the Enemy's Eastern Fleet",
    "content": "Defeat 12 bosses in the World 4: 西方海域",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "0",
      "B": "700"
    },
    "requires": ["Bw5"],
    "unlocks": ["Bw8"],
    "period": "weekly",
    "needs": {
      "M": ["4-1","4-2","4-3","4-4","4-5"]
    },
    "reward": [
      ["C","Development Material",2]
    ]
  },
  "Bw7": {
    "Jp": "敵北方艦隊主力を撃滅せよ！",
    "En": "Destroy the Main Force of the Enemy's Northern Fleet",
    "content": "Defeat 5 bosses in the Northern Sea 3-3,  3-4, or 3-5",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "400",
      "B": "300"
    },
    "requires": ["Bw5"],
    "unlocks": [],
    "period": "weekly",
    "needs": {
      "M": ["3-3","3-4","3-5"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["C","Development Material",3],
      ["C","Improvement Material",3]
    ]
  },
  "Bw8": {
    "Jp": "敵東方中枢艦隊を撃破せよ！",
    "En": "Crush the Core of the Enemy's Eastern Fleet",
    "content": "Defeat the boss in 4-4",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "500",
      "B": "0"
    },
    "requires": ["Bw6"],
    "unlocks": ["Bw9"],
    "period": "weekly",
    "needs": {
      "M": ["4-4"]
    },
    "reward": [
      ["C","Instant Repair",1],
      ["C","Development Material",1]
    ]
  },
  "Bw9": {
    "Jp": "南方海域珊瑚諸島沖の制空権を握れ！",
    "En": "Seize Air Superiority on the Southern Sea Coral Islands",
    "content": "Sortie to 5-2 and get an S-Rank at the boss node 2 times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "800"
    },
    "requires": ["Bw8"],
    "unlocks": ["B44","B62","Bq7"],
    "period": "weekly",
    "needs": {
      "M": ["5-2"]
    },
    "reward": [
      ["C","Development Material",2],
      ["C","Improvement Material",2]
    ]
  },
  "Bw10": {
    "Jp": "海上輸送路の安全確保に努めよ！",
    "En": "Strive to Ensure the Security of the Marine Transportation Route",
    "content": "Sortie to 1-5 and get at least an A-rank at the boss node 3 times",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["A45","Bw4"],
    "unlocks": [],
    "period": "weekly",
    "needs": {
      "M": ["1-5"]
    },
    "reward": [
      ["C","Improvement Material",3]
    ]
  }, 
 
// Monthly Sortie Quests Bm00
  "Bm1": {
    "Jp": "「第五戦隊」出撃せよ！",
    "En": "Sortie the 5th Squadron",
    "content": "Sortie Myoukou, Nachi, Haguro and 3 additional ships to World 2-5 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "550",
      "S": "550",
      "B": "0"
    },
    "requires": ["A35"],
    "unlocks": ["B38","Bm5","B82"],
    "period": "monthly",
    "needs": {
      "M": ["2-5"],
      "S": ["Myoukou","Nachi","Haguro"]
    },
    "reward": [
      ["I","Large furniture box",1],
      ["C","Development Material",5]
    ]
  },
  "Bm2": {
    "Jp": "「潜水艦隊」出撃せよ！?",
    "En": "Sortie the Submarine Fleet",
    "content": "Sortie to World 6-1 and obtain an S-Rank at the boss three times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "600",
      "S": "0",
      "B": "0"
    },
    "requires": ["B30"],
    "unlocks": [],
    "period": "monthly",
    "needs": {
      "M": ["6-1"]
    },
    "reward": [
      ["I","Large furniture box",1],
      ["I","Irako",1]
    ]
  },
  "Bm3": {
    "Jp": "「水雷戦隊」南西へ！",
    "En": "Torpedo Squadron, toward Southwest",
    "content": "Sortie 1-3 CL, with one as flagship, and 3-5 DD to World 1-4 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["Bw4"],
    "unlocks": [],
    "period": "monthly",
    "needs": {
      "M": ["1-4"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["I","Irako",1]
    ]
  },
  "Bm4": {
    "Jp": "「水上打撃部隊」南方へ！",
    "En": "Surface Task Force, toward South",
    "content": "Sortie only 3 of the following classes: Yamato-class, Nagato-class, Ise-class and Fusou-class Slow BB, 1 CL and 2 additional ships to World 5-1 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "350",
      "A": "400",
      "S": "350",
      "B": "0"
    },
    "requires": ["A43"],
    "unlocks": ["B32"],
    "period": "monthly",
    "needs": {
      "M": ["5-1"]
    },
    "reward": [
      ["C","Instant Repair",3],
      ["C","Improvement Material",4]
    ]
  },
  "Bm5": {
    "Jp": "海上護衛強化月間",
    "En": "Month-long Strengthening of the Marine Escort",
    "content": "Sortie to World 1-5 and obtain an A-Rank or higher at the boss 10 times",
    "tips": "",
    "resources": {
      "F": "800",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B21","Bm1"],
    "unlocks": ["B57","Fm2","Bm8"],
    "period": "monthly",
    "needs": {
      "M": ["1-5"]
    },
    "reward": [
      ["C","Development Material",5],
      ["C","Improvement Material",3]
    ]
  },
  "Bm6": {
    "Jp": "「空母機動部隊」西へ！",
    "En": "Carrier Task Force, toward West",
    "content": "Sortie 2 CVL/CV/CVB, 2 DD and 2 additional ships to World 4-2 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "600",
      "B": "800"
    },
    "requires": ["B20","Bw4"],
    "unlocks": ["Bm7","Bq1","A56","A59","Fm1"],
    "period": "monthly",
    "needs": {
      "M": ["4-2"]
    },
    "reward": [
      ["I","Large furniture box",2],
      ["C","Improvement Material",2]
    ]
  },
  "Bm7": {
    "Jp": "「水上反撃部隊」突入せよ！",
    "En": "Send in the Surface Counterattack Fleet",
    "content": "Sortie a DD as flagship, 1 CA (CAVs don't count), 1 CL and 3 other DD to World 2-5 and obtain an S-Rank at the boss",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "600",
      "S": "0",
      "B": "200"
    },
    "requires": ["A46","Bm6"],
    "unlocks": ["A61"],
    "period": "monthly",
    "needs": {
      "M": ["2-5"]
    },
    "reward": [
      ["C","Development Material",4],
      ["C","Improvement Material",2]
    ]
  },
  "Bm8": {
    "Jp": "兵站線確保！海上警備を強化実施せよ！",
    "En": "Secure the Supply Lines! Strengthen the Marine Guards!",
    "content": "Sortie a fleet with a CL/CVL, 3 DD/DE, and up to 2 additional ships to Worlds 1-2, 1-3, 1-4 and 2-1. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": ["Bq11"],
    "requires": ["Cm1","Bm5"],
    "period": "monthly",
    "needs": {
      "M": [
        ["1-2",1],
        ["1-3",1],
        ["1-4",1],
        ["2-1",1]
      ]
    },
    "resources": {
      "F": "400",
      "A": "400",
      "S": "0",
      "B": "400"
    },
    "reward": [
      ["C","Development Material","4","Choose one: "],
      ["C","Instant Repair","4","or "],
      ["C","Improvement Material","2","or "],
      ["E","Type 95 Depth Charge","1","Choose one: "],
      ["E","25mm Single Autocannon Mount","2","or "],
      ["I","Irako","1","or "]
    ]
  }, 
 // Quarterly Sortie Quests Bq00  
  "Bq1": {
    "Jp": "沖ノ島海域迎撃戦",
    "En": "Okinoshima Sea Counter Attack",
    "content": "Sortie a fleet to World 2-4 and obtain two S-Ranks at the boss node.",
    "tips": "",
    "resources": {
      "F": "800",
      "A": "800",
      "S": "800",
      "B": "0"
    },
    "requires": ["Bm6","B19"],
    "unlocks": [],
    "period": "quarterly",
    "needs": {
      "M": ["2-4"]
    },
    "reward": [
      ["C","Improvement Material",5],
      ["I","Mamiya",1]
    ]
  },
  "Bq2": {
    "Jp": "戦果拡張任務！「Ｚ作戦」前段作戦",
    "En": "Ranking Expansion Mission: 'OpeRation Z' Frontal OpeRation!",
    "content": "Sortie to World 2-4, 6-1, 6-3 and obtain A-rank or higher victories at the Boss nodes. Sortie to World 6-4 and obtain an S-rank victory at the Boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "2000",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bw2","B91"],
    "unlocks": ["Bq10"],
    "period": "quarterly",
    "needs": {
      "M": ["2-4","6-1","6-3","6-4"]
    },
    "reward": [
      ["I","Irako",3],
      ["C","Improvement Material",4],
      ["A","Ranking points",350]
    ]
  },
  "Bq3": {
    "Jp": "強行輸送艦隊、抜錨！",
    "En": "Transport Fleet Forces, Launch!",
    "content": "Sortie a fleet with either 2 BBV and up to 4 additional ships or 2 AO along with up to 4 additional ships to world 1-6 and reach the goal point twice.",
    "tips": "",
    "resources": {
      "F": "1000",
      "A": "400",
      "S": "400",
      "B": "0"
    },
    "requires": ["B10"],
    "unlocks": ["Bq4"],
    "period": "quarterly",
    "needs": {
      "M": ["1-6"]
    },
    "reward": [
      ["C","Instant Repair",4],
      ["I","Underway Replenishment",1]
    ]
  },
  "Bq4": {
    "Jp": "前線の航空偵察を実施せよ！",
    "En": "Perform aerial reconnaissance on the frontlines!",
    "content": "Sortie a fleet with 1 AV, 2 CL + 3 additional ships to world 6-3 and score 2 A-rank or better victories at the boss node.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "800",
      "S": "0",
      "B": "1000"
    },
    "requires": ["B91","Bq3"],
    "unlocks": [],
    "period": "quarterly",
    "needs": {
      "M": ["6-3"]
    },
    "reward": [
      ["C","Development Material",8],
      ["C","Improvement Material",4]
    ]
  },
  "Bq5": {
    "Jp": "北方海域警備を実施せよ！",
    "En": "Fulfill Security Patrol of the Northern Ocean Area!",
    "content": "Sortie a fleet with 1 CL, up to 5 additional ships to world 3-1, 3-2, 3-3 and obtain A-rank or better victories at the boss nodes.",
    "tips": "",
    "resources": {
      "F": "500",
      "A": "500",
      "S": "0",
      "B": "0"
    },
    "requires": ["Dw3"],
    "unlocks": ["B110","Bq6"],
    "period": "quarterly",
    "needs": {
      "M": ["3-1","3-2","3-3"]
    },
    "reward": [
      ["I","Combat Ration",1],
      ["I","Medal",1,"Choose one: "],
      ["I","Furniture Fairy",1,"or "],
      ["E","12.7cm Twin Gun Mount Model C Kai 2 ★+3",1,"or "]
    ]
  },
  "Bq6": {
    "Jp": "精鋭「三一駆」、鉄底海域に突入せよ！",
    "En": "Elite「31st Destroyer Division」, Rush into the Iron Bottom Ocean Area!",
    "content": "Sortie a Fleet with Naganami Kai Ni as Flagship, with at least one of either Takanami Kai, Okinami Kai or Asashimo Kai to World 5-4 and obtain 2 S-rank victories at the boss node.",
    "tips": "",
    "resources": {
      "F": "310",
      "A": "310",
      "S": "0",
      "B": "310"
    },
    "requires": ["A83","Bq5"],
    "unlocks": ["C23"],
    "period": "quarterly",
    "needs": {
      "S": ["Naganami Kai Ni","Takanami Kai","Okinami Kai","Asashimo Kai"],
      "M": ["5-4"]
    },
    "reward": [
      ["E","Type 13 Air Radar",2,"Choose one: "],
      ["E","Type 22 Surface Radar",2,"or "],
      ["I","Action Report",2,"or "],
      ["I","New Model Gun Mount Improvement Material",1,"Choose one: "],
      ["I","Present box",1,"or "]
    ]
  },
  "Bq7": {
    "Jp": "新編成「三川艦隊」、鉄底海峡に突入せよ！",
    "En": "New Mikawa Fleet, Rush into the Iron Bottom Ocean Area!",
    "content": "Sortie a Fleet with four of Choukai, Aoba, Kinugasa, Kako, Furutaka, Tenryuu, Yuubari and 2 additional ships to world 5-1, 5-3, 5-4 and obtain S-rank victories at the boss nodes.",
    "tips": "",
    "period": "quarterly",
    "requires": ["B41","Bw9"],
    "unlocks": [],
    "resources": {
      "F": "800",
      "A": "800",
      "S": "800",
      "B": "800"
    },
    "needs": {
      "S": ["Aoba","Choukai","Furutaka","Kako","Kinugasa","Tenryuu","Yuubari"],
      "M": ["5-1","5-3","5-4"]
    },
    "reward": [
      ["I","Medal",1,"Choose one: "],
      ["C","Improvement Material",5,"or "],
      ["A","Ranking points",200]
    ]
  },  
  "Bq8": {
    "Jp": "【戦果拡張任務】泊地周辺海域の安全確保を徹底せよ！",
    "En": "Ranking Expansion Quest: Secure the Safety of the Anchorage Area!",
    "content": "Sortie a fleet to Worlds 1-5, 7-1, 7-2. S-rank the boss node of 1-5 and 7-1 three times. S-rank both boss nodes of 7-2 three times.",
    "tips": "",
    "period": "quarterly",
    "requires": ["Bw1","B125"],
    "unlocks": [],
    "resources": {
      "F": "2000",
      "A": "500",
      "S": "0",
      "B": "500"
    },
    "needs": {
      "M": ["1-5","7-1","7-2"]
    },
    "reward": [
      ["E","Skilled Lookouts",1,"Choose one: "],
      ["I","Skilled Crew Member",1,"or "],
      ["I","Underway Replenishment",4,"or "],
      ["A","Ranking points",300]
    ]
  },  
  "Bq9": {
    "Jp": "空母戦力の投入による兵站線戦闘哨戒",
    "En": "Supply Line Combat Patrol for the release of the Aircraft Carrier Strength",
    "content": "Sortie a fleet with at least 1 CV/CVL/CVB and up to 5 additional ships to Worlds 1-3, 1-4, 2-1, 2-2, and 2-3. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": ["B127"],
    "requires": ["Cd1"],
    "period": "quarterly",
    "needs": {
      "M": [
        ["1-3",1],
        ["1-4",1],
        ["2-1",1],
        ["2-2",1],
        ["2-3",1]
      ]
    },
    "resources": {
      "F": "600",
      "A": "0",
      "S": "600",
      "B": "0"
    },
    "reward": [
      ["I","New Model Aerial Armament Materials","1","Choose one: "],
      ["C","Development Material","4","or "],
      ["E","Saiun","1","Choose one: "],
      ["I","Skilled Crew Member","1","or "],
      ["I","Present box","1","or "]
    ]
  },  
  "Bq10": {
    "Jp": "戦果拡張任務！「Z作戦」後段作戦",
    "En": "Military Gains Extra Operation: \"Operation Z\" Latter Operation",
    "content": "Sortie a fleet to Worlds 7-2, 5-5, 6-2, and 6-5. Obtain a S-rank at each boss node (only second boss node required for 7-2).",
    "tips": "",
    "unlocks": [],
    "requires": ["Bq2"],
    "period": "quarterly",
    "needs": {
      "M": [
        ["5-5",1],
        ["6-2",1],
        ["6-5",1],
        ["7-2",1]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "2000",
      "B": "2000"
    },
    "reward": [
      ["A","Ranking points","400"],
      ["C","Improvement Material","4","Choose one: "],
      ["I","Irako","3","or "],
      ["I","Underway Replenishment","4","or "]
    ]
  },
  "Bq11": {
    "Jp": "南西諸島方面「海上警備行動」発令！",
    "En": "\"Surface Security Actions\" around the Nansei Archipelago Annoucement",
    "content": "Sortie a fleet with at least 1 CVL/CL, 3 or more DD/DE, and up to 2 additional ships to Worlds 1-4, 2-1, 2-2, and 2-3. Obtain a S-rank at each boss node.",
    "tips": "",
    "unlocks": [],
    "requires": ["Bm8","Cd1"],
    "period": "quarterly",
    "needs": {
      "M": [
        ["1-4",1],
        ["2-1",1],
        ["2-2",1],
        ["2-3",1]
      ]
    },
    "resources": {
      "F": "0",
      "A": "800",
      "S": "800",
      "B": "0"
    },
    "reward": [
      ["A","Ranking points","80"],
      ["I","Present box","1"],
      ["C","Improvement Material","2","Choose one: "],
      ["E","Type 94 Depth Charge Projector","2","or "],
      ["E","Drum Canister (Transport Use)","2","or "]
    ]
  },  

// Placeholder bq 12-13 here
   
// Excercise Quests C00 
  "C1": {
    "Jp": "はじめての「演習」！",
    "En": "The First Exercise",
    "content": "Challenge another fleet in Exercise",
    "tips": "",
    "resources": {
      "F": "10",
      "A": "10",
      "S": "0",
      "B": "0"
    },
    "requires": [],
    "unlocks": ["Cd1"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "C5": {
    "Jp": "艦隊の練度向上に努めよ！",
    "En": "Strive to Increase the Level of the Fleet's Training",
    "content": "Get 3 victories in Exercises within the same day",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "300",
      "B": "300"
    },
    "requires": ["A50"],
    "unlocks": ["B41"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2]
    ]
  },
  "C6": {
    "Jp": "演習を強化、艦隊の練度向上に努めよ！",
    "En": "Continue Exercising, and Strive to Increase the Level of Fleet's Training",
    "content": "Get 4 victories in Exercises within the same day",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["D17"],
    "unlocks": ["D18"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2],
      ["C","Improvement Material",1]
    ]
  },
  "C7": {
    "Jp": "北方再突入に備え、練度向上に努めよ！",
    "En": "Strive to Increase the Level of Training in PrepaRation for Another Rush to the Northern Sea",
    "content": "Get 4 victories in Exercises within the same day",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B46"],
    "unlocks": ["A55","B47"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2],
      ["C","Improvement Material",1]
    ]
  },
  "C9": {
    "Jp": "上陸部隊演習",
    "En": "Landing Force Practice",
    "content": "Get 4 victories in Exercises within the same day",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "200",
      "B": "0"
    },
    "requires": ["F32","Bd2","Fw1"],
    "unlocks": ["F33","Cq1"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",2],
      ["I","Combat provision",1]
    ]
  },
  "C10": {
    "Jp": "秋季大演習",
    "En": "Large-scale Autumn Season Exercise",
    "content": "Get 8 victories in Exercises within the same day",
    "tips": "",
    "resources": {
      "F": "1000",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "requires": ["Cd1"],
    "unlocks": ["F40"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Mamiya",1],
      ["I","Present box",1]
    ]
  },
  "C11": {
    "Jp": "冬季大演習",
    "En": "Large-scale Winter Season Exercise",
    "content": "Get 8 victories in Exercises within the same day.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "1000",
      "S": "0",
      "B": "0"
    },
    "requires": ["Cd1"],
    "unlocks": [],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Mamiya",1],
      ["C","Instant Repair",3]
    ]
  },
  "C12": {
    "Jp": "輸送部隊の練度向上に務めよ！",
    "En": "Raise the Transport Unit's Experience!",
    "content": "Get 4 victories in Exercises within the same day.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["Bd5"],
    "unlocks": [],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Improvement Material",2],
      ["E","Daihatsu Landing Craft",1,"Choose one: "],
      ["I","Furniture Fairy",1,"or "]
    ]
  },
  "C14": {
    "Jp": "甲型駆逐艦の戦力整備計画",
    "En": "A-Class Destroyer's Strength Maintenance Plan",
    "content": "Get 3 PvP victories using the first fleet with 2 of Kagerou Class/Yuugumo Class Destroyers and then S-Rank the boss nodes on World 2-2, 2-3, 2-4, and 2-5",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "350",
      "S": "0",
      "B": "350"
    },
    "requires": ["Fd7"],
    "unlocks": ["C18"],
    "period": "once",
    "needs": {
      "M": ["2-2","2-3","2-4","2-5"]
    },
    "reward": [
      ["I","Action Report",1,"Choose one: "],
      ["I","Furniture Fairy",1,"or "],
      ["C","Instant Repair",5,"Choose one: "],
      ["I","Combat Ration",2,"or "]
    ]
  },
  "C16": {
    "Jp": "精鋭「第二一駆逐隊」、猛特訓！",
    "En": "Elite 21st Destroyer Division, Sortie!",
    "content": "Use a Fleet including Wakaba Kai, Hatsuharu Kai Ni, Hatsushimo Kai Ni to get 4 PvP victories in the same day.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["A85"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Wakaba Kai","Hatsuharu Kai Ni","Hatsushimo Kai Ni"]
    },
    "reward": [
      ["I","Mamiya",1],
      ["I","Action Report",1,"Choose one: "],
      ["C","Development Material",6,"or "]
    ]
  },
  "C17": {
    "Jp": "駆逐隊、特訓始め！",
    "En": "Destroyer Squadron, Begin the Special Training!",
    "content": "Use a Fleet including at least 4 Destroyers to get 4 PvP victories in the same day.",
    "tips": "",
    "period": "once",
    "requires": ["A85"],
    "unlocks": ["B115","B117"],
    "resources": {
      "F": "100",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "needs": {},
    "reward": [
      ["C","Instant Repair",1],
      ["C","Improvement Material",1,"Choose one: "],
      ["C","Development Material",1,"or "]
    ]
  },
  "C18": {
    "Jp": "最精鋭甲型駆逐艦、特訓始め！",
    "En": "Elite Type-A Destroyers, Commence Special Training!",
    "content": "Use a Fleet including at least four level 70 or above Kagerou/Yuugumo class destroyers to get 4 Exercises victories in the same day.",
    "tips": "",
    "period": "once",
    "requires": ["A88","C14"],
    "unlocks": ["C23"],
    "resources": {
      "F": "400",
      "A": "0",
      "S": "400",
      "B": "0"
    },
    "needs": {},
    "reward": [
      ["C","Instant Repair",4,"Choose one: "],
      ["C","Development Material",4,"or "],
      ["I","Medal",1,"Choose one: "],
      ["I","Action Report",1,"or "]
    ]
  },
  "C22": {
    "Jp": "戦闘航空母艦一番艦、演習始め！",
    "En": "Lead ship of the battle carriers, commence exercises!",
    "content": "Use a Fleet including Ise Kai Ni as flagship along with at least two Destroyers to get 3 Exercises victories in the same day.",
    "tips": "",
    "period": "once",
    "requires": ["B18","B23"],
    "unlocks": ["B118","B119","F74"],
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "500"
    },
    "needs": {
      "S": ["Ise Kai Ni"]
    },
    "reward": [
      ["E","Suisei",2,"Choose one: "],
      ["E","Zuiun",2,"or "],
      ["E","Type 2 Reconnaissance Aircraft",1,"or "],
      ["E","Type 22 Surface Radar",2,"Choose one: "],
      ["E","12cm 30-tube Rocket Launcher",2,"or "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
   "C23": {
    "Jp": "改夕雲型、演習始め！",
    "En": "Remodelled Yuugumo-class, begin training!",
    "content": "Use a Fleet including Yuugumo Kai Ni and Naganami Kai Ni to get 4 Exercise victories in the same day.",
    "tips": "",
    "period": "once",
    "requires": ["Bq6","C18"],
    "unlocks": [],
    "resources": {
      "F": "400",
      "A": "400",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "S": ["Naganami Kai Ni","Yuugumo Kai Ni"]
    },
    "reward": [
      ["I","Irako",3,"Choose one: "],
      ["E","Type 2 Depth Charge",1,"or "],
      ["I","Reinforcement Expansion",1,"Choose one: "],
      ["I","Medal",1,"or "]
    ]
  },
  "C25": {
    "Jp": "朝潮型集合！特訓始め！",
    "En": "Asashio-class, Assemble! Commence Special Training!",
    "content": "Form a Fleet including at least 4 or more Asashio Class and achieve 4 Exercise victiories within the same day.",
    "tips": "",
    "period": "once",
    "requires": ["Bd3"],
    "unlocks": [],
    "resources": {
      "F": "300",
      "A": "0",
      "S": "300",
      "B": "0"
    },
    "needs": {},
    "reward": [
      ["C","Instant Repair",3],
      ["C","Development Material",4,"Choose one: "],
      ["E","Type 3 Depth Charge Projector",1,"or "],
      ["I","Furniture Fairy",1,"or "]
    ]
  },
  "C27": {
    "Jp": "精強「十七駆」、猛特訓！",
    "En": "Elite 17th Destroyer Division, begin the Intense Training!",
    "content": "Use a fleet including Isokaze B Kai, Hamakaze B Kai, Urakaze D Kai, and Tanikaze D Kai to obtain 4 Exercise victories within the same day.",
    "tips": "",
    "period": "once",
    "requires": ["A90"],
    "unlocks": [],
    "resources": {
      "F": "170",
      "A": "170",
      "S": "170",
      "B": "0"
    },
    "needs": {
      "S": ["Isokaze B Kai","Hamakaze B Kai","Urakaze D Kai","Tanikaze D Kai"]
    },
    "reward": [
      ["I","Mamiya",1],
      ["E","Type 2 Depth Charge",1,"Choose one: "],
      ["I","Reinforcement Expansion",1,"or "]
    ]
  },  
   "C31": {
    "Jp": "艦載機演習",
    "En": "Aircraft Exercise",
    "content": "Use a fleet with a CV(B) as flagship, 1 other CV(B), 2 DD, and up to 2 additional ships to obtain a B-rank(or higher) in Exercises 3 times within the same day.",
    "tips": "",
    "unlocks": ["F86"],
    "requires": ["Cq1"],
    "period": "once",
    "needs": {},
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "reward": [
      ["E","Suisei Model 12A","1"],
      ["I","New Model Aerial Armament Materials","1","Choose one: "],
      ["E","Suisei","3","or "],
      ["C","Development Material","6","or "]
    ]
  }, 
   "C33": {
    "Jp": "航空戦隊演習(その壱)",
    "En": "Aviation Squadron Exercises (Part 1)",
    "content": "Use a fleet with 3 CV(L)(B), 2 Destroyers, and up to 1 additional ship to obtain a S-rank in Exercises 3 times within the same day.",
    "tips": "",
    "unlocks": ["B137","C34"],
    "requires": ["B9"],
    "period": "once",
    "needs": {},
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "300"
    },
    "reward": [
      ["C","Development Material","3","Choose one: "],
      ["C","Instant Construction","3","or "],
      ["E","Type 97 Torpedo Bomber","3","Choose one: "],
      ["I","Underway Replenishment","2","or "],
      ["I","New Model Aerial Armament Materials","1","or "]
    ]
  },
  "C34": {
    "Jp": "航空戦隊演習(その弐)",
    "En": "Aviation Squadron Exercises (Part 2)",
    "content": "Use a fleet with 3 CV(L)(B), 2 DD, and up to 1 additional ship to obtain a S-rank in Exercises 6 times within the same day.",
    "tips": "",
    "unlocks": [],
    "requires": ["C33"],
    "period": "once",
    "needs": {},
    "resources": {
      "F": "500",
      "A": "0",
      "S": "0",
      "B": "500"
    },
    "reward": [
      ["E","Type 13 Air Radar","2","Choose one: "],
      ["C","Development Material","4","or "],
      ["E","Saiun★+2","1","Choose one: "],
      ["E","Tenzan★+2","2","or "],
      ["I","Skilled Crew Member","1","or "]
    ]
  },
  "C35": {
    "Jp": "新しき盾",
    "En": "A New Shield",
    "content": "Use a fleet with Maya, Haguro, and up to 4 additional ships to obtain a S-rank in Exercises 3 times within the same day.",
    "tips": "",
    "unlocks": ["C37"],
    "requires": ["C18"],
    "period": "once",
    "needs": {
      "S": ["Haguro","Maya"]
    },
    "resources": {
      "F": "0",
      "A": "179",
      "S": "0",
      "B": "180"
    },
    "reward": [
      ["I","New Model Aerial Armament Materials","1"],
      ["C","Development Material","4","Choose one: "],
      ["E","25mm Triple Autocannon Mount","3","or "],
      ["E","12cm 30-tube Rocket Launcher","2","or "]
    ]
  },
  "C37": {
    "Jp": "輸送船団演習",
    "En": "Transport Fleet Exercise",
    "content": "Use a fleet with 2 LHA/AO/DE and up to 4 additional ships to obtain an A-rank in Exercises 4 times within the same day.",
    "tips": "",
    "unlocks": [],
    "requires": ["Bd1","C35"],
    "period": "once",
    "needs": {},
    "resources": {
      "F": "150",
      "A": "150",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","Type 95 Depth Charge","2"],
      ["E","Type 94 Depth Charge Projector",1,"or "],
      ["E","Type 2 12cm Mortar Kai",1,"or "]
    ]
  },  
// Placeholder C39 C46 - C76
  
// Daily Exercise Quests Cd00
  "Cd1": {
    "Jp": "「演習」で練度向上！",
    "En": "Increase the Level of Training by Exercising",
    "content": "Challenge 3 other fleets in Exercises (defeat is ok) within the same day",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "0",
      "S": "50",
      "B": "0"
    },
    "requires": ["C1"],
    "unlocks": ["Cd2","Cw1","B58","B77","C10","C11","F44","A76","B101","B104","B122","B125","F80","Bq9","F82","Bq11"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1]
    ]
  },
  "Cd2": {
    "Jp": "「演習」で他提督を圧倒せよ！",
    "En": "Overwhelm the Other Admirals through Exercises",
    "content": "Get 5 victories in Exercises within the same day",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "50",
      "S": "0",
      "B": "50"
    },
    "requires": ["Cd1"],
    "unlocks": ["F46"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },

// Weekly Exercise Quests Cw00
  "Cw1": {
    "Jp": "大規模演習",
    "En": "Large-scale Exercises",
    "content": "Get 20 victories in Exercises within the same week",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "200",
      "B": "200"
    },
    "requires": ["Cd1"],
    "unlocks": ["F42"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["C","Development Material",2],
      ["C","Improvement Material",1]
    ]
  },

// Monthly Exercises Quests Cm00  
  "Cm1": {
    "Jp": "精鋭艦隊演習",
    "En": "Elite Fleet Practice",
    "content": "Get 7 victories in Exercises within the same day",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "200"
    },
    "requires": ["Bd2"],
    "unlocks": ["Bm8"],
    "period": "monthly",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2],
      ["I","Combat provision",1]
    ]
  },
  "Cm2": {
    "Jp": "給糧艦「伊良湖」の支援",
    "En": "Supply Ship Irako's Support",
    "content": "Form a Fleet in the 1st Fleet with at least 2 or more Light Cruisers, and obtain 3 Victories in Exercise (PvP), then afterwards equip the 1st Fleet Flagship with 2 Combat Rations.",
    "tips": "※Equipment must be unlocked. ※ Consumes the equipment upon quest completition.",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fw3"],
    "unlocks": [],
    "period": "monthly",
    "needs": {
      "I": [
        ["Combat Ration",2]
      ]
    },
    "reward": [
      ["I","Irako",1],
      ["C","Instant Repair",2,"Choose one: "],
      ["C","Development Material",2,"or "]
    ]
  },

// Quarterly Exercises Quests Cq00
  "Cq1": {
    "Jp": "空母機動部隊、演習始め！",
    "En": "Carrier Task Force, Commence Exercises!",
    "content": "Use a fleet with a CV/CVL/CVB as flagship, 1 other CV/CVL/CVB, 2 DD, and up to 2 additional ships to obtain a B-rank (or higher) in Exercises 4 times within the same day.",
    "tips": "",
    "unlocks": ["C31"],
    "requires": ["Bd1","C9"],
    "period": "quarterly",
    "needs": {},
    "resources": {
      "F": "Use a fleet with a Light Aircraft Carrier",
      "A": "Standard Aircraft Carrier",
      "S": "Armored Aircraft Carrier as flagship, 1 other Light Aircraft Carrier",
      "B": "Standard Aircraft Carrier"
    },
    "reward": [
      ["E","Type 99 Dive Bomber","4","Choose one: "],
      ["E","Suisei","2","or "],
      ["C","Development Material","3","or "],
      ["E","Type 0 Fighter Model 21","3","Choose one: "],
      ["E","Type 0 Fighter Model 52","2","or "],
      ["I","Underway Replenishment","1","or "]
    ]
  },
 
 // Seasonal Exercises Quest Cs00
   "Cs4": {
    "Jp": "夏季大演習",
    "En": "Large-scale Summer Exercise",
    "content": "Get 8 victories in Exercises within the same day",
    "tips": "",
    "period": "once",
    "requires": ["B6","Cs1"],
    "unlocks": [],
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "1000"
    },
    "needs": {},
    "reward": [
      ["I","Mamiya",1],
      ["I","Present box",1]
    ]
  },  

// Expedition Quests D00
  "D1": {
    "Jp": "はじめての「遠征」",
    "En": "The First Expedition",
    "content": "Perform an expedition",
    "tips": "",
    "resources": {
      "F": "30",
      "A": "30",
      "S": "30",
      "B": "30"
    },
    "requires": ["A5"],
    "unlocks": ["Dw1","Dd1"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Furniture box small",1]
    ]
  },

  "D5": {
    "Jp": "第一次潜水艦派遣作戦",
    "En": "The First Submarine Dispatch OpeRation",
    "content": "Complete Expedition 30 for the first time",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "10",
      "B": "10"
    },
    "requires": ["A27"],
    "unlocks": ["D6"],
    "period": "once",
    "needs": {
      "M": ["Exp. 30"]
    },
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "D6": {
    "Jp": "第二次潜水艦派遣作戦",
    "En": "The Second Submarine Dispatch OpeRation",
    "content": "Complete Expedition 30 one more time",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "10",
      "B": "10"
    },
    "requires": ["D5"],
    "unlocks": ["D7","D20"],
    "period": "once",
    "needs": {
      "M": ["Exp. 30"]
    },
    "reward": [
      ["E","Ju 87C Kai",1]
    ]
  },
  "D7": {
    "Jp": "潜水艦派遣作戦による技術入手の継続",
    "En": "Continue to Obtain Technology through Submarine Dispatch OpeRations",
    "content": "Complete Expedition 30 two more times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "800"
    },
    "requires": ["D6"],
    "unlocks": ["D8"],
    "period": "once",
    "needs": {
      "M": ["Exp. 30"]
    },
    "reward": [
      ["E","Ju 87C Kai",1],
      ["I","Furniture Fairy",1]
    ]
  },
  "D8": {
    "Jp": "潜水艦派遣による海外艦との接触作戦",
    "En": "OpeRation Contact Foreign Ship through Submarine Dispatch",
    "content": "Complete Expedition 31",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["D7"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["Exp. 31"]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["S","Z1",1]
    ]
  },
  "D10": {
    "Jp": "航空火力艦の運用を強化せよ！",
    "En": "Enhance the Use of Aviation Firepower",
    "content": "Complete Expedition 23",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["B20"],
    "unlocks": ["B23","D12"],
    "period": "once",
    "needs": {
      "M": ["Exp. 23"]
    },
    "reward": [
      ["E","Zuiun (634 Air Group)",1]
    ]
  },
  "D12": {
    "Jp": "(続)航空火力艦の運用を強化せよ！",
    "En": "(Continuation) Enhance the Use of Aviation Firepower",
    "content": "Complete Expedition 23 four more times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "200"
    },
    "requires": ["D10"],
    "unlocks": ["D29"],
    "period": "once",
    "needs": {
      "M": ["Exp. 23"]
    },
    "reward": [
      ["E","Zuiun (634 Air Group)",1]
    ]
  },
  "D13": {
    "Jp": "遠洋潜水艦作戦を実施せよ！",
    "En": "Carry Out the Deep Sea Submarine OpeRations",
    "content": "Complete Expedition 39",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["A37"],
    "unlocks": ["D14"],
    "period": "once",
    "needs": {
      "M": ["Exp. 39"],
      "S": ["Taigei"]
    },
    "reward": [
      ["E","53cm Submarine Bow Torpedo Mount (8 tubes)",1]
    ]
  },
  "D14": {
    "Jp": "遠洋潜水艦作戦の成果を拡大せよ！",
    "En": "Expand the Result of the Deep Sea Submarine OpeRations",
    "content": "Complete Expedition 39 two more times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "0"
    },
    "requires": ["D13"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["Exp. 39"],
      "S": ["Taigei"]
    },
    "reward": [
      ["E","53cm Submarine Bow Torpedo Mount (8 tubes)",1]
    ]
  },
  "D15": {
    "Jp": "防空射撃演習を実施せよ！",
    "En": "Carry Out Air Defense Exercises",
    "content": "Complete Expedition 6 three times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "200"
    },
    "requires": ["B7"],
    "unlocks": ["B40","D30"],
    "period": "once",
    "needs": {
      "M": ["Exp. 6"]
    },
    "reward": [
      ["E","25mm Triple Autocannon Mount",1],
      ["C","Development Material",2]
    ]
  },
  "D16": {
    "Jp": "囮機動部隊支援作戦を実施せよ！",
    "En": "Carry Out the Decoy Task Force Support OpeRation",
    "content": "Complete Expedition 15",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "0",
      "B": "400"
    },
    "requires": ["B40"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "M": ["Exp. 15"]
    },
    "reward": [
      ["E","Type 91 Anti-Aircraft Fire Director",1],
      ["C","Development Material",2]
    ]
  },
  "D17": {
    "Jp": "観艦式予行を実施せよ！",
    "En": "Carry Out Naval Review Rehearsals",
    "content": "Complete Expedition 7 twice",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "0",
      "S": "0",
      "B": "150"
    },
    "requires": ["A35"],
    "unlocks": ["C6"],
    "period": "once",
    "needs": {
      "M": ["Exp. 7"]
    },
    "reward": [
      ["C","Development Material",2]
    ]
  },
  "D18": {
    "Jp": "観艦式を敢行せよ！",
    "En": "Execute Naval Review",
    "content": "Complete Expedition 8",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "300",
      "B": "0"
    },
    "requires": ["C6"],
    "unlocks": ["Dm1"],
    "period": "once",
    "needs": {
      "M": ["Exp. 8"]
    },
    "reward": [
      ["C","Improvement Material",1],
      ["I","Headquarters Personnel",1]
    ]
  },
  "D19": {
    "Jp": "機動部隊の運用を強化せよ！",
    "En": "Enhance the Use of the Task Force",
    "content": "Complete Expeditions 35 and 26",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "400",
      "B": "0"
    },
    "requires": ["Dw2","B50"],
    "unlocks": ["F21","B62"],
    "period": "once",
    "needs": {
      "M": ["Exp. 35","Exp. 26"]
    },
    "reward": [
      ["C","Improvement Material",2],
      ["I","Large furniture box",1]
    ]
  },
  "D20": {
    "Jp": "潜水艦派遣作戦による航空機技術入手",
    "En": "Submarine Dispatch OpeRation to Acquire Aircraft Technology",
    "content": "Complete Expedition 30 & 31",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "100"
    },
    "requires": ["D6"],
    "unlocks": ["D21"],
    "period": "once",
    "needs": {
      "M": ["Exp. 30","Exp. 31"]
    },
    "reward": [
      ["I","New Technology Aircraft Blueprint",1]
    ]
  },
  "D21": {
    "Jp": "潜水艦派遣作戦による噴式技術の入手",
    "En": "Submarine Dispatch OpeRation to Acquire Jet Engine Technology",
    "content": "Have 5000 steel and 1500 bauxite. Complete Expedition 30 and 31 once each. (The resources will be consumed upon Quest Completion)",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["D20","B88"],
    "unlocks": ["F47","F46"],
    "period": "once",
    "needs": {
      "M": ["Exp. 30","Exp. 31"],
      "R": [
        ["Steel",5000],
        ["Bauxite",1500]
      ]
    },
    "reward": [
      ["I","Ne Type Engine",1],
      ["C","Development Material",2]
    ]
  },
  "D23": {
    "Jp": "海上護衛総隊、遠征開始！",
    "En": "Maritime Escort Squadron, Expedition Start!",
    "content": "Complete expedition 4, 5 and 9.",
    "tips": "",
    "resources": {
      "F": "700",
      "A": "700",
      "S": "0",
      "B": "0"
    },
    "requires": ["Dm1","F54"],
    "unlocks": ["Fq3","D31"],
    "period": "once",
    "needs": {
      "M": ["Exp. 4","Exp. 5","Exp. 9"]
    },
    "reward": [
      ["C","Development Material",2],
      ["C","Instant Repair",2]
    ]
  },
  "D25": {
    "Jp": "遠征「補給」支援体制を強化せよ！",
    "En": "Reinforce the Expedition Resupply Support Regime!",
    "content": "Prepare 800 Steel in your inventory, complete Expedition A1.",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["B107"],
    "unlocks": ["Dq2"],
    "period": "once",
    "needs": {
      "M": ["Exp. A1"]
    },
    "reward": [
      ["I","Provisional Resupply",1],
      ["I","Combat Ration",2]
    ]
  },
  "D27": {
    "Jp": "「捷一号作戦」、発動準備！",
    "En": "Operation Shō-Gō 1, Begin!",
    "content": "Complete Expedition 3, A1, B1.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "600",
      "S": "0",
      "B": "600"
    },
    "requires": ["B108","Dd1"],
    "unlocks": ["B109","A82"],
    "period": "once",
    "needs": {
      "M": ["Exp. 3","Exp. A1","Exp. B1"]
    },
    "reward": [
      ["C","Instant Repair",4],
      ["I","Underway Replenishment",2]
    ]
  },
  "D28": {
    "Jp": "「海防艦」、進発せよ！",
    "En": "Coastal Defense Ships, Head Out!",
    "content": "Complete Expedition 5, 9, A1 and A2.",
    "tips": "",
    "period": "once",
    "requires": ["F73"],
    "unlocks": [],
    "resources": {
      "F": "800",
      "A": "0",
      "S": "0",
      "B": "600"
    },
    "needs": {
      "M": ["1-1","1-1","1-1","1-1"]
    },
    "reward": [
      ["I","Irako",1],
      ["I","Underway Replenishment",2,"Choose one: "],
      ["C","Instant Repair",8,"or "],
      ["C","Development Material",4,"or "]
    ]
  }, 
  "D29": {
    "Jp": "艦隊司令部の強化 【準備段階】",
    "En": "Fleet Headquarters Improvements [Preparation Phase]",
    "content": "Complete Expedition 17, A1, A2, and B1 once each.",
    "tips": "",
    "unlocks": ["B134"],
    "requires": ["D12"],
    "period": "once",
    "needs": {
      "M": ["Exp. 17","Exp. A1","Exp. A2","Exp. B1"]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "500",
      "B": "0"
    },
    "reward": [
      ["C","Improvement Material","3"],
      ["I","Underway Replenishment","5","Choose one: "],
      ["E","Shiun","1","or "],
      ["E","Type 0 Reconnaissance Seaplane Model 11B","1","or "]
    ]
  },
  "D30": {
    "Jp": "警備及び哨戒偵察を強化せよ！",
    "En": "Reinforce our Defences as well as Scout Patrols!",
    "content": "Complete Expeditions 10, A2, and B1.",
    "tips": "",
    "unlocks": ["D31"],
    "requires": ["D15"],
    "period": "once",
    "needs": {
      "M": ["Exp. 10","Exp. A2","Exp. B1"]
    },
    "resources": {
      "F": "500",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["I","Mamiya","1","Choose one: "],
      ["I","Furniture Fairy","1","or "],
      ["C","Development Material","4","Choose one: "],
      ["C","Improvement Material","2","or "],
      ["E","7.7mm Machine Gun","2","or "]
    ]
  },
  "D31": {
    "Jp": "南方戦線遠征を実施せよ！",
    "En": "Carry Out Expeditions to the Southern Front!",
    "content": "Complete Expeditions 35, 36, 37, 38, and 40.",
    "tips": "",
    "unlocks": [],
    "requires": ["D23","D30"],
    "period": "once",
    "needs": {
      "M": ["Exp. 35","Exp. 36","Exp. 37","Exp. 38","Exp. 40"]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "750",
      "B": "750"
    },
    "reward": [
      ["I","Irako","2"],
      ["C","Instant Repair","6","Choose one: "],
      ["E","Daihatsu Landing Craft","2","or "],
      ["E","12.7mm Single Machine Gun Mount","3","or "]
    ]
  },
// Placeholder D39++

 
// Daily Expedition Quests Dd00  
  "Dd1": {
    "Jp": "「遠征」を3回成功させよう！",
    "En": "Complete 3 Expeditions",
    "content": "Perform 3 successful expeditions within the same day.",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "100",
      "S": "100",
      "B": "100"
    },
    "requires": ["D1"],
    "unlocks": ["Dd2","Dm1","B59","D27"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },  
  "Dd2": {
    "Jp": "「遠征」を10回成功させよう！",
    "En": "Complete 10 Expeditions",
    "content": "Perform 10 successful expeditions within the same day.",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "300",
      "S": "300",
      "B": "150"
    },
    "requires": ["Dd1"],
    "unlocks": [],
    "period": "daily",
    "needs": {},
    "reward": [
      ["I","Furniture box small",1],
      ["I","Furniture box medium",1]
    ]
  },  
  
// Weekly Expedition Quests Dw00  
  "Dw1": {
    "Jp": "大規模遠征作戦、発令！",
    "En": "Official Announcement, OpeRation Large-scale Expedition",
    "content": "Perform 30 successful expeditions within the same week.",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "500",
      "S": "500",
      "B": "300"
    },
    "requires": ["D1"],
    "unlocks": [],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["I","Large furniture box",1],
      ["C","Development Material",3]
    ]
  },
  "Dw2": {
    "Jp": "南方への輸送作戦を成功させよ！",
    "En": "Complete the Transport OpeRations towards South",
    "content": "Complete Expedition 37 or 38",
    "tips": "",
    "resources": {
      "F": "150",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["A30"],
    "unlocks": ["Dw3","D19","Fq2"],
    "period": "weekly",
    "needs": {
      "M": ["Exp. 37","Exp. 38"]
    },
    "reward": [
      ["I","Furniture box small",1]
    ]
  },
  "Dw3": {
    "Jp": "南方への鼠輸送を継続実施せよ!",
    "En": "Continue Carrying Out the Rat Transportation (Tokyo Express) towards South",
    "content": "Complete Expedition 37 or 38 a total of 7 times in a week",
    "tips": "",
    "resources": {
      "F": "400",
      "A": "0",
      "S": "0",
      "B": "400"
    },
    "requires": ["Dw2"],
    "unlocks": [],
    "period": "weekly",
    "needs": {
      "M": ["Exp. 37","Exp. 38"]
    },
    "reward": [
      ["C","Development Material",2],
      ["C","Improvement Material",1]
    ]
  },

// Monthly Expedition Quests
  "Dm1": {
    "Jp": "輸送船団護衛を強化せよ！",
    "En": "Reinforce the Transport Escort !",
    "content": "Complete Expedition 5 four times.",
    "tips": "",
    "resources": {
      "F": "1000",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["Dd1","D18"],
    "unlocks": ["D23"],
    "period": "monthly",
    "needs": {
      "M": ["Exp. 5"]
    },
    "reward": [
      ["I","Furniture box medium",2]
    ]
  },
  
// Quarterly Expedition Quests Dq00
  "Dq1": {
    "Jp": "海上通商航路の警戒を厳とせよ！",
    "En": "Stay Alert on the Maritime Routes!",
    "content": "Complete expedition 3, expedition 4, expedition 5, expedition 10 once. ",
    "tips": "",
    "resources": {
      "F": "800",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B63"],
    "unlocks": ["Dq2"],
    "period": "quarterly",
    "needs": {
      "M": ["Exp. 3","Exp. 4","Exp. 5","Exp. 10"]
    },
    "reward": [
      ["C","Development Material",4],
      ["I","Combat Ration",2]
    ]
  },
  "Dq2": {
    "Jp": "近海に侵入する敵潜を制圧せよ！",
    "En": "Suppress the Enemy Ships intruding into the close seas!",
    "content": "Complete Expedition 4, A2, and A3 twice each per Expedition.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "1000",
      "S": "0",
      "B": "300"
    },
    "requires": ["Dq1","D25"],
    "unlocks": [],
    "period": "quarterly",
    "needs": {
      "M": ["Exp. A2","Exp. A3","Exp. 4"]
    },
    "reward": [
      ["C","Improvement Material",3],
      ["E","Type 95 Depth Charge",1]
    ]
  },

// Yearly Expedition Quests Dy00
// Placeholder Dy1-8

// Suppy/Docking Quests E00
  "E1": {
    "Jp": "はじめての「補給」",
    "En": "The First Resupply",
    "content": "Resupply a ship",
    "tips": "",
    "resources": {
      "F": "20",
      "A": "20",
      "S": "0",
      "B": "0"
    },
    "requires": ["B2"],
    "unlocks": [],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1]
    ]
  },
  "E2": {
    "Jp": "はじめての「入渠」！",
    "En": "The First Repair",
    "content": "Repair a ship",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "30",
      "B": "0"
    },
    "requires": ["B2"],
    "unlocks": ["Ed1"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },

// Daily Supply Quests Ed00
  "Ed1": {
    "Jp": "艦隊大整備！",
    "En": "The Fleet's Large Maintenance",
    "content": "Repair 5 ships",
    "tips": "",
    "resources": {
      "F": "30",
      "A": "30",
      "S": "30",
      "B": "30"
    },
    "requires": ["E2"],
    "unlocks": ["Ed2"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2]
    ]
  },
  "Ed2": {
    "Jp": "艦隊酒保祭り！",
    "En": "The Fleet's Canteen Festival",
    "content": "Resupply 15 times (1 time is 1 click of the resupply button)",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "50",
      "S": "50",
      "B": "50"
    },
    "requires": ["Ed1"],
    "unlocks": [],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1],
      ["C","Development Material",1]
    ]
  },
// Factory Quests
// One-time Factory Quests F00
  "F1": {
    "Jp": "はじめての「建造」！",
    "En": "The First Construction",
    "content": "Craft a ship",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "50",
      "S": "50",
      "B": "50"
    },
    "requires": [],
    "unlocks": ["F2"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "F2": {
    "Jp": "はじめての「開発」！",
    "En": "The First Development",
    "content": "Craft a piece of equipment",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "100",
      "S": "100",
      "B": "100"
    },
    "requires": ["F1"],
    "unlocks": ["F3","Fd1"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",2]
    ]
  },
  "F3": {
    "Jp": "はじめての「解体」！",
    "En": "The First Dismantling",
    "content": "Dismantle a ship",
    "tips": "",
    "resources": {
      "F": "60",
      "A": "60",
      "S": "60",
      "B": "60"
    },
    "requires": ["F2"],
    "unlocks": ["F4","A90"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1],
      ["C","Development Material",1]
    ]
  },
  "F4": {
    "Jp": "はじめての「廃棄」！",
    "En": "The First Scrapping",
    "content": "Scrap a piece of equipment",
    "tips": "",
    "resources": {
      "F": "80",
      "A": "80",
      "S": "80",
      "B": "80"
    },
    "requires": ["F3"],
    "unlocks": ["F42","F48"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Instant Repair",2],
      ["C","Development Material",1]
    ]
  },
  "F10": {
    "Jp": "「大型艦建造」の準備！(その弐)",
    "En": "PrepaRation for Large Ship Construction (Part II)",
    "content": "Scrap equipment 4 times",
    "tips": "",
    "resources": {
      "F": "800",
      "A": "800",
      "S": "0",
      "B": "0"
    },
    "requires": ["G4"],
    "unlocks": [],
    "period": "once",
    "needs": {},
    "reward": [
      ["A","Unlocks Large Ship Construction",1]
    ]
  },
  "F11": {
    "Jp": "輸送用ドラム缶の準備",
    "En": "PrepaRation for Transport Use Drum Canister",
    "content": "Scrap equipment 3 times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "30",
      "B": "0"
    },
    "requires": ["A5"],
    "unlocks": [],
    "period": "once",
    "needs": {},
    "reward": [
      ["E","Drum Canister (Transport Use)",3]
    ]
  },

  "F13": {
    "Jp": "機種転換",
    "En": "Model Conversion: Type 97 Torpedo Bomber (Tomonaga Squadron)",
    "content": "Have a Carrier secretary equipped with Type 97 Torpedo Bomber (Tomonaga Squadron), scrap 2 Tenzan.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["B25"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Type 97 Torpedo Bomber (Tomonaga Squadron)",1],
        ["Tenzan",2]
      ]
    },
    "reward": [
      ["E","Tenzan Model 12 (Tomonaga Squadron)",1]
    ]
  },
  "F14": {
    "Jp": "機種転換",
    "En": "Model Conversion: Type 99 Dive Bomber (Egusa Squadron)",
    "content": "Have a Carrier secretary equipped with Type 99 Dive Bomber (Egusa Squadron), then scrap 2 Suisei.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["B25"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Type 99 Dive Bomber (Egusa Squadron)",1],
        ["Suisei",2]
      ]
    },
    "reward": [
      ["E","Suisei (Egusa Squadron)",1]
    ]
  },
  "F15": {
    "Jp": "機種転換",
    "En": "Model Conversion: Zero Fighter Model 52C (601 Air Group)",
    "content": "Have a Carrier secretary equipped with Zero Fighter Model 52C (601 Air Group), then scrap 2 Reppuu.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["B28"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Zero Fighter Model 52C (601 Air Group)",1],
        ["Reppuu",2]
      ]
    },
    "reward": [
      ["E","Reppuu (601 Air Group)",1]
    ]
  },
  "F16": {
    "Jp": "「伊良湖」の準備",
    "En": "PrepaRation for Irako",
    "content": "Scrap equipment 10 times",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd4","B2"],
    "unlocks": [],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Irako",4]
    ]
  },
  "F17": {
    "Jp": "はじめての「装備改修」！",
    "En": "The First Equipment Improvement",
    "content": "Do equipment modernization 1 time",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "100",
      "B": "0"
    },
    "requires": ["A45"],
    "unlocks": ["Fd6","F54"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Improvement Material",7]
    ]
  },
  "F19": {
    "Jp": "機種転換",
    "En": "Model Conversion: Type 97 Torpedo Bomber (Murata Squadron)",
    "content": "Have Shoukaku equipped with Type 97 Torpedo Bomber (Murata Squadron) as secretary, scrap 2 Tenzan.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["B50"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Type 97 Torpedo Bomber (Murata Squadron)",1],
        ["Tenzan",2]
      ],
      "S": ["Shoukaku"]
    },
    "reward": [
      ["E","Tenzan Model 12 (Murata Squadron)",1]
    ]
  },
  "F20": {
    "Jp": "精鋭「九七式艦攻」部隊の編成",
    "En": "Organize the Elite Type 97 Torpedo Bomber Force",
    "content": "Have Shoukaku or Akagi as secretary, scrap 3 Type 97 Torpedo Bomber",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["B50"],
    "unlocks": ["F88"],
    "period": "once",
    "needs": {
      "E": [
        ["Type 97 Torpedo Bomber",3]
      ],
      "S": ["Akagi","Shoukaku"]
    },
    "reward": [
      ["E","Type 97 Torpedo Bomber (Murata Squadron)",1]
    ]
  },
  "F21": {
    "Jp": "試作艤装の準備",
    "En": "PrepaRation of the Prototype Equipment",
    "content": "Scrap equipment 7 times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "100",
      "B": "0"
    },
    "requires": ["D19"],
    "unlocks": ["A59","F26"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Prototype Flight Deck Catapult",1]
    ]
  },

  "F23": {
    "Jp": "試製航空艤装の追加試作",
    "En": "Addition to Prototype Aviation Equipment",
    "content": "Scrap equipment 9 times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "100",
      "B": "50"
    },
    "requires": ["B54","A59"],
    "unlocks": ["F29","A62"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Prototype Flight Deck Catapult",1]
    ]
  },
  "F24": {
    "Jp": "機種転換",
    "En": "Model Conversion: Type 0 Fighter Model 21 (Skilled)",
    "content": "Equip a Type 0 Fighter Model 21 (Skilled) on a Carrier secretary, then scrap 2 Type 0 Fighter Model 52.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["Fm1","A59"],
    "unlocks": ["Fm2","F26"],
    "period": "once",
    "needs": {
      "E": [
        ["Type 0 Fighter Model 21 (Skilled)",1],
        ["Type 0 Fighter Model 52",2]
      ]
    },
    "reward": [
      ["E","Type 0 Fighter Model 52 (Skilled)",1]
    ]
  },

  "F26": {
    "Jp": "「艦戦」隊の再編成",
    "En": "Reorganize the Fighter Force: Type 0 Fighter Model 52 (Skilled)",
    "content": "Equip a rank 7 Type 0 Fighter Model 52 (Skilled) on Zuikaku as secretary, then scrap Zero Fighter Model 52C (601 Air Group).",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["B53","F24","F21"],
    "unlocks": ["F27"],
    "period": "once",
    "needs": {
      "E": [
        ["Type 0 Fighter Model 52 (Skilled)",1],
        ["Zero Fighter Model 52C (601 Air Group)",1]
      ],
      "S": ["Zuikaku"]
    },
    "reward": [
      ["E","Zero Fighter Model 52C (w/ Iwai Flight)",1]
    ]
  },
  "F27": {
    "Jp": "機種転換",
    "En": "Model Conversion & Reorganization: Zero Fighter Model 52C (w/ Iwai Flight)",
    "content": "Equip a rank 7 Zero Fighter Model 52C (w/ Iwai Flight) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 62 (Fighter-bomber).",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["F26","B54"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Zero Fighter Model 52C (w/ Iwai Flight)",1],
        ["Type 0 Fighter Model 62 (Fighter-bomber)",2]
      ],
      "S": ["Zuikaku"]
    },
    "reward": [
      ["E","Zero Fighter Model 62 (Fighter-bomber / Iwai Squadron)",1]
    ]
  },
  "F28": {
    "Jp": "「艦戦」隊の再編成",
    "En": "Reorganize the Fighter Force: Type 0 Fighter Model 21 (Skilled)",
    "content": "Equip a rank 7 Type 0 Fighter Model 21 (Skilled) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 21.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["A61","Fm1"],
    "unlocks": ["F29"],
    "period": "once",
    "needs": {
      "E": [
        ["Type 0 Fighter Model 21 (Skilled)",1],
        ["Type 0 Fighter Model 21",2]
      ]
    },
    "reward": [
      ["E","Zero Fighter Model 21 (w/ Iwamoto Flight)",1]
    ]
  },
  "F29": {
    "Jp": "機種転換",
    "En": "Model Conversion: Zero Fighter Model 21 (w/ Iwamoto Flight)",
    "content": "Equip a rank 7 Zero Fighter Model 21 (w/ Iwamoto Flight) on Zuikaku as secretary, then scrap 2 Type 0 Fighter Model 52.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["F23","F28"],
    "unlocks": ["A62"],
    "period": "once",
    "needs": {
      "E": [
        ["Zero Fighter Model 21 (w/ Iwamoto Flight)",1],
        ["Type 0 Fighter Model 52",2]
      ],
      "S": ["Zuikaku"]
    },
    "reward": [
      ["E","Zero Fighter Model 52A (w/ Iwamoto Flight)",1]
    ]
  },
  "F30": {
    "Jp": "機種転換",
    "En": "Model Conversion & Reorganization: Zero Fighter Model 52A (w/ Iwamoto Flight)",
    "content": "Equip a rank 7 Zero Fighter Model 52A (w/ Iwamoto Flight) on Zuikaku as secretary, then scrap 2 Saiun.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["A62"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Zero Fighter Model 52A (w/ Iwamoto Flight)",1],
        ["Saiun",2]
      ],
      "S": ["Zuikaku"]
    },
    "reward": [
      ["E","Type 0 Fighter Model 53 (Iwamoto Squadron)",1]
    ]
  },
  "F31": {
    "Jp": "新家具の準備",
    "En": "PrepaRations for New Furniture",
    "content": "Scrap 9 pieces of equipment",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "90",
      "B": "0"
    },
    "requires": ["Bd2"],
    "unlocks": ["B64"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Furniture Fairy",1]
    ]
  },
  "F32": {
    "Jp": "新装備の準備",
    "En": "PrepaRations for New Equipment",
    "content": "Scrap 5 pieces of equipment.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "50",
      "B": "0"
    },
    "requires": ["Bw2","A13"],
    "unlocks": ["C9"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Furniture box medium",1]
    ]
  },
  "F33": {
    "Jp": "上陸戦用新装備の調達",
    "En": "Supply of New Landing Force Equipment",
    "content": "Scrap two 7.7mm Machine Gun and two 12.7mm Single Machine Gun Mount",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["C9","B46"],
    "unlocks": ["B69"],
    "period": "once",
    "needs": {
      "E": [
        ["12.7mm Single Machine Gun Mount",2],
        ["7.7mm Machine Gun",2]
      ]
    },
    "reward": [
      ["E","Special Type 2 Amphibious Tank",1]
    ]
  },

  "F36": {
    "Jp": "新型魚雷兵装の開発",
    "En": "Development of a New Torpedo Armament",
    "content": "Have Shimakaze as secretary equipped with a ★max 61cm Quintuple (Oxygen) Torpedo Mount and a ★max 61cm Triple (Oxygen) Torpedo Mount. 2 Medals are consumed in the process.",
    "tips": "※Consumes the equipment.※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "600",
      "S": "0",
      "B": "0"
    },
    "requires": ["B71","Fw2"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["61cm Quintuple (Oxygen) Torpedo Mount",1],
        ["61cm Triple (Oxygen) Torpedo Mount",1]
      ],
      "I": [
        ["Medal",2]
      ]
    },
    "reward": [
      ["E","Prototype 61cm Sextuple (Oxygen) Torpedo Mount",1]
    ]
  },
  "F37": {
    "Jp": "「航空基地設営」事前準備",
    "En": "PrepaRations for the Construction of an Air Base",
    "content": "Have two 7.7mm Machine Guns & two Type 96 Fighters in your inventory, and scrap two Drum Canisters.",
    "tips": "※Equipment must be unlocked.※Consumes the equipment. ※It doesn't matter whether you scrap the drums before or after procuring the other items.",
    "resources": {
      "F": "200",
      "A": "0",
      "S": "0",
      "B": "200"
    },
    "requires": ["B56"],
    "unlocks": ["F38"],
    "period": "once",
    "needs": {
      "E": [
        ["7.7mm Machine Gun",2],
        ["Type 96 Fighter",2],
        ["Drum Canister",2]
      ]
    },
    "reward": [
      ["C","Development Material",3],
      ["E","Type 96 Land-based Attack Aircraft",1]
    ]
  },
  "F38": {
    "Jp": "「陸攻」隊の増勢",
    "En": "Expansion of Land-based Air Groups",
    "content": "Have two 7.7mm Machine Guns & two Type 99 Dive Bombers in your inventory.",
    "tips": "※Equipment must be unlocked.※Consumes the equipment.",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "200"
    },
    "requires": ["F37","B77"],
    "unlocks": ["Fq2","F43"],
    "period": "once",
    "needs": {
      "E": [
        ["7.7mm Machine Gun",2],
        ["Type 99 Dive Bomber",2]
      ]
    },
    "reward": [
      ["E","Type 96 Land-based Attack Aircraft",1]
    ]
  },
  "F40": {
    "Jp": "「一式陸攻」性能向上型の調達",
    "En": "Procurement of the improved Type 1 Land-based Attack Aircraft",
    "content": "Have a Type 1 Land-based Attack Aircraft & two Tenzan in your inventory.",
    "tips": "※Equipment must be unlocked. ※Consumes the equipment. ※The land-based aircraft's proficiency level carries over to the reward.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["Fq2","C10"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Type 1 Land-based Attack Aircraft",1],
        ["Tenzan",2]
      ]
    },
    "reward": [
      ["E","Type 1 Land-based Attack Aircraft Model 22A",1]
    ]
  },
  "F42": {
    "Jp": "「特注家具」の調達",
    "En": "Procurement of Custom-Made Furniture",
    "content": "Have 5000 Furniture Coins, two 25mm Twin Autocannon Mount, two 25mm Triple Autocannon Mount in your inventory, and scrap one 25mm Single Autocannon Mount.",
    "tips": "※Equipment must be unlocked.※Consumes all the resources and equipment. ※It doesn't matter whether you scrap the autocannon before or after procuring the other items.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["F4","Cw1"],
    "unlocks": ["F44"],
    "period": "once",
    "needs": {
      "E": [
        ["25mm Triple Autocannon Mount",2],
        ["25mm Twin Autocannon Mount",2],
        ["25mm Single Autocannon Mount",1]
      ],
      "R": [
        ["Furniture Coins",5000]
      ]
    },
    "reward": [
      ["I","Furniture Fairy",1]
    ]
  },
  "F43": {
    "Jp": "中部海域「基地航空隊」展開！",
    "En": "Launch the LBAS to the Central Ocean Area",
    "content": "Prepare 1200 fuel, 3000 bauxite and a Construction Corps in your inventory, scrap 2 Drum Canister (Transport Use)",
    "tips": "※Consumes all the resources and equipment.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B62","F38"],
    "unlocks": ["F45"],
    "period": "once",
    "needs": {
      "E": [
        ["Drum Canister",2]
      ],
      "I": [
        ["Construction Corps",1]
      ],
      "R": [
        ["Fuel",1200],
        ["Bauxite",3000]
      ]
    },
    "reward": [
      ["A","Unlocks the first LBAS in World 6",1]
    ]
  },
  "F44": {
    "Jp": "「特注家具」の調達",
    "En": "Procurement of Custom-made furniture",
    "content": "Scrap 2 12.7cm Twin High-angle Gun Mount, prepare 5000 furniture coin, 2 14cm Single Gun Mount and 2 15.2cm Single Gun Mount (all are consumed upon Quest completion).",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["F42","Cd1"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["14cm Single Gun Mount",2],
        ["12.7cm Twin High-angle Gun Mount",2],
        ["15.2cm Single Gun Mount",2]
      ],
      "R": [
        ["Furniture Coins",5000]
      ]
    },
    "reward": [
      ["I","Furniture Fairy",1]
    ]
  },
  "F45": {
    "Jp": "新機軸偵察機の開発",
    "En": "Development of a New Reconnaissance Aircraft",
    "content": "Have one Type 1 Land-based Attack Aircraft, two Saiun in your inventory, and scrap two Type 0 Reconnaissance Seaplane.",
    "tips": "※Equipment must be unlocked. ※Consumes all the equipment.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["F43","A62"],
    "unlocks": ["F46","F47"],
    "period": "once",
    "needs": {
      "E": [
        ["Type 1 Land-based Attack Aircraft",1],
        ["Saiun",2],
        ["Type 0 Reconnaissance Seaplane",2]
      ]
    },
    "reward": [
      ["C","Development Material",2],
      ["E","Prototype Keiun (Carrier-based Reconnaissance Model)",1]
    ]
  },
  "F46": {
    "Jp": "噴式戦闘爆撃機の開発",
    "En": "Development of Jet-type Bomber",
    "content": "Scrap 3 Shiden Kai 2, have 2 New Technology Aircraft Blueprint and 1 Ne Type Engine prepared.",
    "tips": "※The New Technology Aircraft Blueprints & Ne Type Engine are consumed upon quest completion.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["Cd2","F45","D21"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Shiden Kai 2",3]
      ],
      "I": [
        ["New Technology Aircraft Blueprint",2],
        ["Ne Type Engine",1]
      ]
    },
    "reward": [
      ["E","Kikka Kai",1],
      ["C","Development Material",2]
    ]
  },
  "F47": {
    "Jp": "ネ式エンジンの増産",
    "En": "Increased Production of the Ne-type Engine",
    "content": "Scrap 3 Type 0 Fighter Model 52. Prepare 2 Reppuu, 2 Ryuusei, and 8000 steel.",
    "tips": "※Equipment must be unlocked.※Consumes the equipment.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["D21","F45"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Type 0 Fighter Model 52",3],
        ["Reppuu",2],
        ["Ryuusei",2]
      ],
      "R": [
        ["Steel",8000]
      ]
    },
    "reward": [
      ["I","Ne Type Engine",1]
    ]
  },
  "F48": {
    "Jp": "「特注家具」の調達",
    "En": "Procurement of Custom made Furniture (Arsenal Quest)",
    "content": "Scrap two 12.7cm Twin Gun Mount, prepare 5000 furniture coins, 2x 7.7mm AA Gun and 2x Type 96 Fighter. The Equipment and Furniture Coins will all be consumed upon quest completion",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["F4"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["7.7mm AA Gun",2],
        ["12.7cm Twin Gun Mount",2],
        ["Type 96 Fighter",2]
      ],
      "R": [
        ["Furniture Coins",5000]
      ]
    },
    "reward": [
      ["I","Furniture Fairy",1]
    ]
  },
  "F49": {
    "Jp": "六三一空「晴嵐」隊の編成",
    "En": "Organize the Seiran 631 Air Group!",
    "content": "Equip a Prototype Seiran in first slot and a Zuiun (631 Air Group) in second slot on either I-401, I-13 or I-14 as secretary.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B91","B80"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Prototype Seiran",1],
        ["Zuiun (631 Air Group)",1]
      ],
      "S": ["I-401","I-13","I-14"]
    },
    "reward": [
      ["E","Seiran (631 Air Group)",1]
    ]
  },
  "F50": {
    "Jp": "潜水艦武装の強化",
    "En": "Enhance Submarine Armaments",
    "content": "Prepare 3x 61cm Quadruple (Oxygen) Torpedo Mount, 3x Type 93 Passive Sonar and 120 development materials in your inventory. Scrap 4x 61cm Triple Torpedo Mount.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd6","B91"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["61cm Quadruple (Oxygen) Torpedo Mount",3],
        ["Type 93 Passive Sonar",3],
        ["61cm Triple Torpedo Mount",4]
      ],
      "C": [
        ["Development Material",120]
      ]
    },
    "reward": [
      ["E","Late Model Bow Torpedo Mount (6 tubes)",1]
    ]
  },
  "F51": {
    "Jp": "精鋭「水戦」隊の新編成",
    "En": "Organize the New Elite Seaplane Group",
    "content": "Prepare one Skilled Crew Member in your inventory, equip a Type 2 Seaplane Fighter Kai that is both rank 7 and ★max in the first slot of your Secretary Ship, then scrap 2 Type 0 Fighter Model 21 and 2 Zuiun.",
    "tips": "※Equipment must be unlocked.※One Skilled Crew Member is consumed in the process.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["Fd3","B88"],
    "unlocks": ["F52"],
    "period": "once",
    "needs": {
      "E": [
        ["Type 2 Seaplane Fighter Kai",1],
        ["Type 0 Fighter Model 21",2],
        ["Zuiun",2]
      ],
      "I": [
        ["Skilled Crew Member",1]
      ]
    },
    "reward": [
      ["E","Type 2 Seaplane Fighter Kai (Skilled)",1]
    ]
  },
  "F52": {
    "Jp": "精鋭「水戦」隊の増勢",
    "En": "Expand the New Elite Seaplane Group",
    "content": "Prepare one Skilled Crew Member in your inventory, equip a Type 2 Seaplane Fighter Kai that is both rank 7 and ★max in the first slot of your Secretary Ship, then scrap 2 Type 0 Fighter Model 21 and 2 Zuiun.",
    "tips": "※Equipment must be unlocked.※One Skilled Crew Member is consumed in the process.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["F51","B94"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "E": [
        ["Type 2 Seaplane Fighter Kai",1],
        ["Type 0 Fighter Model 21",2],
        ["Zuiun",2]
      ],
      "I": [
        ["Skilled Crew Member",1]
      ]
    },
    "reward": [
      ["E","Type 2 Seaplane Fighter Kai (Skilled)",1]
    ]
  },
  "F53": {
    "Jp": "新型砲墳兵装、戦力化開始！",
    "En": "Reinforcement of New Model Cannon Improvement, Start!",
    "content": "Prepare 6000 Steel, scrap 10 secondary guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd3"],
    "unlocks": ["F54","F56"],
    "period": "once",
    "needs": {
      "R": [
        ["Steel",6000]
      ],
      "E": [
        ["Secondary gun",10]
      ]
    },
    "reward": [
      ["I","Furniture box medium",1],
      ["I","New Model Gun Mount Improvement Material",1]
    ]
  },
  "F54": {
    "Jp": "新型艤装の開発研究",
    "En": "Development of New Type Equipment Fitting Research",
    "content": "Prepare 12000 Steel, scrap 10 medium guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "400",
      "S": "0",
      "B": "0"
    },
    "requires": ["F53","A45","F17"],
    "unlocks": ["D23","Fq3"],
    "period": "once",
    "needs": {
      "R": [
        ["Steel",12000]
      ],
      "E": [
        ["Medium gun",10]
      ]
    },
    "reward": [
      ["C","Development Material",2],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
 "F56": {
    "Jp": "電探技術の射撃装置への活用",
    "En": "Utilizing radar technology for shooting equipment",
    "content": "Prepare 8000 Ammo and Steel, scrap 10 radars.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["F53"],
    "unlocks": ["F57"],
    "period": "once",
    "needs": {
      "R": [
        ["Ammo",8000]
      ],
      "E": [
        ["Radar",10]
      ]
    },
    "reward": [
      ["C","Development Material",2],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
  "F57": {
    "Jp": "民生産業への協力",
    "En": "CoopeRation with the consumer industry",
    "content": "Prepare 12000 fuel, scrap 16 small guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "600",
      "B": "0"
    },
    "requires": ["F56"],
    "unlocks": ["F59"],
    "period": "once",
    "needs": {
      "R": [
        ["Fuel",12000]
      ],
      "E": [
        ["Small gun",16]
      ]
    },
    "reward": [
      ["I","Furniture Fairy",1],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
  "F58": {
    "Jp": "精鋭「瑞雲」隊の編成",
    "En": "Organize the Elite Zuiun Group.",
    "content": "Prepare 2 Type 99 Dive Bomber, 2 Zuiun and a Skilled Crew Member in your inventory, have Hyuuga Kai equipped a ★max Zuiun (634 Air Group) in her 4th slot as secretary. Scrap 2 Drum Canister (Transport Use).",
    "tips": "※Equipment must be unlocked.※One Skilled Crew Member Icon is consumed in the process.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["B102","Fd3"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "S": ["Hyuuga Kai"],
      "I": [
        ["Skilled Crew Member",1]
      ],
      "E": [
        ["Type 99 Dive Bomber",2],
        ["Zuiun",2],
        ["Drum Canister",2]
      ]
    },
    "reward": [
      ["E","Zuiun (634 Air Group/Skilled)",1]
    ]
  },
  "F59": {
    "Jp": "民生産業への協力を継続せよ！",
    "En": "Continue your coopeRation with the Consumer Industry.",
    "content": "Prepare 15000 Steel and scrap 10 Anti-Air Guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "300"
    },
    "requires": ["F57"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "R": [
        ["Steel",15000]
      ],
      "E": [
        ["Anti-Air gun",10]
      ]
    },
    "reward": [
      ["I","Combat Ration",2],
      ["I","Medal",1,"Choose one: "],
      ["I","Furniture Fairy",1,"or "]
    ]
  },
  "F60": {
    "Jp": "新型戦闘糧食の試作",
    "En": "The Start of the Special Combat Rations",
    "content": "Prepare 2 Combat Rations, 800 Fuel and 150 Bauxite.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["F16"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "R": [
        ["Fuel",800],
        ["Bauxite",150]
      ],
      "I": [
        ["Combat Ration",2]
      ]
    },
    "reward": [
      ["I","Combat Ration (Special Onigiri)",1]
    ]
  },
  "F61": {
    "Jp": "夜戦型艦上戦闘機の開発",
    "En": "Nighttime Carrier-based Fighter Development",
    "content": "Prepare 30 Development Material, 6 Improvement Materials, 5000 bauxite and one New Model Aerial Armament Materials in your inventory. Have a ★max and Aircraft Proficiency Gold Chevron Fd2F-3 equipped in the first slot of the secretary ship, scrap two Type 13 Air Radar and two Type 22 Surface Radar",
    "tips": "※Equipment must be unlocked.※Consumes all the resources and equipment. ",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd4","A80"],
    "unlocks": ["F62","F63"],
    "period": "once",
    "needs": {
      "R": [
        ["Bauxite",5000]
      ],
      "I": [
        ["Development Material",30],
        ["Improvement Material",6],
        ["New Model Aerial Armament Materials",1]
      ],
      "E": [
        ["Fd2F-3",1],
        ["Type 13 Air Radar",2],
        ["Type 22 Surface Radar",2]
      ]
    },
    "reward": [
      ["E","Fd2F-3N",1]
    ]
  },
  "F62": {
    "Jp": "夜間作戦型艦上攻撃機の開発",
    "En": "Nighttime Carrier-based Torpedo Bomber Development",
    "content": "Prepare 40 Development material, 10 Improvement Materials, 5000 ammo, 8000 bauxite, one Skilled Crew Member and one New Model Aerial Armament Materials in your inventory. Have a TBF equipped in the first slot of the secretary ship, scrap two Type 13 Air Radar and two Type 22 Surface Radar.",
    "tips": "※Equipment must be unlocked.※Consumes all the resources and equipment. ",
    "resources": {
      "F": "100",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["F61"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "R": [
        ["Bauxite",8000],
        ["Ammo",5000]
      ],
      "I": [
        ["Development Material",40],
        ["Improvement Material",10],
        ["New Model Aerial Armament Materials",1],
        ["Skilled Crew Member",1]
      ],
      "E": [
        ["TBF",1],
        ["Type 13 Air Radar",2],
        ["Type 22 Surface Radar",2]
      ]
    },
    "reward": [
      ["E","TBM-3D",1]
    ]
  },
  "F63": {
    "Jp": "夜戦型艦上戦闘機の性能強化",
    "En": "Performance Improvement of the Carrier-based Night Fighter",
    "content": "Prepare 40 Development Material, 8 Improvement Materials, 6000 bauxite and one New Model Aerial Armament Materials in your inventory. Have a ★max and Aircraft Proficiency Gold Chevron Fd2F-5 equipped in the first slot of the secretary ship, scrap two Type 13 Air Radar and two Type 22 Surface Radar.",
    "tips": "※Equipment must be unlocked.※Consumes all the resources and equipment. ",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["F61"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "R": [
        ["Bauxite",6000]
      ],
      "I": [
        ["Development Material",40],
        ["Improvement Material",8],
        ["New Model Aerial Armament Materials",1]
      ],
      "E": [
        ["Fd2F-5",1],
        ["Type 13 Air Radar",2],
        ["Type 22 Surface Radar",2]
      ]
    },
    "reward": [
      ["E","Fd2F-5N",1]
    ]
  },
  "F64": {
    "Jp": "「遊撃部隊」艦隊司令部の創設",
    "En": "The Establishment of the Striking Force's Fleet Command Facility",
    "content": "Have your secretary equipped with a Fleet Command Facility in her first slot. Prepare 10 Development Materials, 2000 Steel and 2 Action Reports. Scrap 3 Radars.",
    "tips": "※Equipment must be unlocked.※Consumes all the resources and equipment. ",
    "resources": {
      "F": "0",
      "A": "300",
      "S": "0",
      "B": "0"
    },
    "requires": ["A14"],
    "unlocks": [],
    "period": "once",
    "needs": {
      "R": [
        ["Steel",2000]
      ],
      "I": [
        ["Development Material",10],
        ["Action Report",2]
      ],
      "E": [
        ["Fleet Command Facility",1],
        ["Radar",3]
      ]
    },
    "reward": [
      ["E","Striking Force Fleet Command Facility",1]
    ]
  },
  "Fd71": {
    "Jp": "対空兵装の拡充",
    "En": "Expansion of Anti-Air Equipment",
    "content": "Prepare 900 Bauxite, scrap 6 medium guns and 3 secondary guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd1"],
    "unlocks": ["Fq6"],
    "period": "once",
    "needs": {
      "E": [
        ["Medium gun",6],
        ["Secondary gun",3]
      ],
      "R": [
        ["Bauxite",900]
      ]
    },
    "reward": [
      ["E","25mm Triple Autocannon Mount",2,"Choose one: "],
      ["E","12cm 30-tube Rocket Launcher",2,"or "],
      ["I","Reinforcement Expansion",1,"or "]
    ]
  },
  "F73": {
    "Jp": "「海防艦」整備計画",
    "En": "Escort ship service plan",
    "content": "Prepare 500 fuel. Scrap 4 Medium-Caliber Main Guns and 4 Large-Caliber Main Guns.",
    "tips": "※Consumes all the resources.",
    "period": "once",
    "requires": ["B6","F4"],
    "unlocks": ["D28","F76","F84"],
    "resources": {
      "F": "200",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "R": [
        ["Fuel",500]
      ],
      "E": [
        ["Heavy gun",4],
        ["Medium gun",4]
      ]
    },
    "reward": [
      ["I","Furniture Fairy",1,"Choose one: "],
      ["C","Development Material",4,"or "],
      ["I","New Model Gun Mount Improvement Material",1,"or "],
      ["S","Matsuwa",1,"Choose one: "],
      ["S","Etorofu",1,"or "]
    ]
  },
  "F74": {
    "Jp": "航空戦艦用強化型新主砲の研究",
    "En": "Research of New and Improved Main Battery for Aviation Battleships",
    "content": "Prepare 40 Development material, 50 Instant construction, 4500 steel and 2 New Model Gun Mount Improvement Material in your inventory. Have Ise Kai Ni as secretary ship with a ★max Prototype 41cm Triple Gun Mount equipped in her first slot, scrap two Type 22 Surface Radar and three 41cm Twin Gun Mount",
    "tips": "※Equipment must be unlocked. ※Consumes all the resources and equipment.",
    "period": "once",
    "requires": ["C22"],
    "unlocks": [],
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "S": ["Ise Kai Ni"],
      "R": [
        ["Steel",4500]
      ],
      "I": [
        ["New Model Gun Mount Improvement Material",2]
      ],
      "E": [
        ["Type 22 Surface Radar",2],
        ["Prototype 41cm Triple Gun Mount",1],
        ["41cm Twin Gun Mount",3]
      ],
      "C": [
        ["Development Material",40],
        ["Instant Construction",50]
      ]
    },
    "reward": [
      ["E","41cm Triple Gun Mount Kai Ni",1]
    ]
  },
  "F75": {
    "Jp": "精鋭「航空戦艦」彗星隊の編成",
    "En": "Organize the Elite \"Battle Carrier\" Suisei Air Group",
    "content": "Prepare 30 Development material, 3000 bauxite, a New Model Aerial Armament Material and a Skilled Crew Member in your inventory. Have Ise Kai Ni as secretary ship with a Suisei Model 22 (634 Air Group) equipped in her third slot, scrap three Type 99 Dive Bomber and three Suisei",
    "tips": "※Equipment must be unlocked. ※Consumes all the resources and equipment.",
    "period": "once",
    "requires": ["B119"],
    "unlocks": [],
    "resources": {
      "F": "0",
      "A": "634",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "S": ["Ise Kai Ni"],
      "R": [
        ["Bauxite",3000]
      ],
      "I": [
        ["Skilled Crew Member",1],
        ["New Model Aerial Armament Materials",1]
      ],
      "E": [
        ["Suisei",3],
        ["Type 99 Dive Bomber",3],
        ["Suisei Model 22 (634 Air Group)",1]
      ],
      "C": [
        ["Development Material",30]
      ]
    },
    "reward": [
      ["E","Suisei Model 22 (634 Air Group/Skilled)",1]
    ]
  },
  "F76": {
    "Jp": "駆逐主砲兵装の戦時改修",
    "En": "Wartime Renovation of Destroyer Main Guns",
    "content": "Prepare 30 Development material, 900 steel, and a New Model Gun Mount Improvement Material in your inventory. Have a Fubuki-class secretary ship with a ★max 12.7cm Twin Gun Mount Model A Kai 2 equipped in her first slot. Scrap four 10cm Twin High-angle Gun Mount and one Type 94 Anti-Aircraft Fire Director.",
    "tips": "※Equipment must be unlocked. ※Consumes all the resources and equipment.",
    "period": "once",
    "requires": ["F73"],
    "unlocks": ["Fq7","F78"],
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "R": [
        ["Steel",900]
      ],
      "C": [
        ["Development Material",30]
      ],
      "I": [
        ["New Model Gun Mount Improvement Material",1]
      ],
      "E": [
        ["12.7cm Twin Gun Mount Model A Kai 2",1],
        ["10cm Twin High-angle Gun Mount",4],
        ["Type 94 Anti-Aircraft Fire Director",1]
      ]
    },
    "reward": [
      ["E","12.7cm Twin Gun Mount Model A Kai 3 (Wartime Modification) + Anti-Aircraft Fire Director",1]
    ]
  },  
  "F78": {
    "Jp": "駆逐艦主砲兵装の戦時改修【II】",
    "En": "Destroyer Main Battery Wartime Modification (II)",
    "content": "Have Shigure Kai Ni or Yuudachi Kai Ni as secretary ship with a ★max 12.7cm Twin Gun Mount Model B Kai 2 equipped in her first slot. Scrap five 10cm Twin High-angle Gun Mount and one Type 94 Anti-Aircraft Fire Director.",
    "tips": "",
    "period": "once",
    "requires": ["F76"],
    "unlocks": [],
    "resources": {
      "F": "0",
      "A": "220",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "S": ["Shigure Kai Ni","Yuudachi Kai Ni"],
      "E": [
        ["12.7cm Twin Gun Mount Model B Kai 2",1],
        ["10cm Twin High-angle Gun Mount",1],
        ["Type 94 Anti-Aircraft Fire Director",1]
      ]
    },
    "reward": [
      ["E","12.7cm Twin Gun Mount Model B Kai 4 (Wartime Modification) + Anti-Aircraft Fire Director",1]
    ]
  },  
   "F80": {
    "Jp": "戦闘機隊戦力の拡充",
    "En": "Reinforcement of the Fighter Squadron Strength",
    "content": "Prepare 3000 Bauxite, 1 Skilled Crew Member, and 1 New Model Aerial Armament Material in your inventory. Scrap 4 fighters, 4 reconnaissance planes, and 2 carrier-based reconnaissance aircraft.",
    "tips": "※ The prepared resources and items will be consumed upon quest completion.",
    "unlocks": ["F81"],
    "requires": ["B4","B15","Cd1","Fd6","Fd7","Gd1"],
    "period": "once",
    "needs": {
      "I": [
        ["Skilled Crew Member",1]
      ],
      "R": [
        ["Bauxite",3000]
      ],
      "E": [
        ["Fighter",4],
        ["Recon Seaplane",4],
        ["Reconnaissance plane",2]
      ]
    },
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","Spitfire Mk.1",2,"Choose one: "],
      ["E","Reppuu","1","or "],
      ["E","Type 3 Fighter Hien","2","or "]
    ]
  },
  "F81": {
    "Jp": "基地航空隊戦力の拡充",
    "En": "Reinforcement of the Land Base Aircraft Squadron",
    "content": "Prepare 4800 Bauxite, 1 Skilled Crew Member, and 2 New Model Aerial Armament Material in your inventory. Scrap 4 dive bombers, 4 torpedo bombers, and 4 fighters.",
    "tips": "※ The prepared resources and items will be consumed upon quest completion.",
    "unlocks": [],
    "requires": ["F80"],
    "period": "once",
    "needs": {
      "I": [
        ["Skilled Crew Member",1]
      ],
      "R": [
        ["Bauxite",4800]
      ],
      "E": [
        ["Dive bomber",4],
        ["Torpedo bomber",4],
        ["Fighter",4]
      ]
    },
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","Raiden","1","Choose one: "],
      ["E","Prototype Toukai","1","or "],
      ["E","Shiden Model 11","2","or "]
    ]
  },
  "F82": {
    "Jp": "提督室のリフォーム",
    "En": "Renovation of the Admiral's Room",
    "content": "Prepare 1600 Bauxite in your inventory. Scrap 4 medium guns, 4 secondary guns and 4 anti-air guns.",
    "tips": "※ The prepared resources will be consumed upon quest completion.",
    "unlocks": [],
    "requires": ["Cd1"],
    "period": "once",
    "needs": {
      "R": [
        ["Bauxite",1600]
      ],
      "E": [
        ["Medium gun",4],
        ["Secondary gun",4],
        ["Anti-Air gun",4]
      ]
    },
    "resources": {
      "F": "200",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["C","Development Material","5","Choose one: "],
      ["I","Furniture box medium","3","or "],
      ["I","Large furniture box",3,"Choose one: "],
      ["I","Furniture Fairy","1","or "]
    ]
  },
  "F83": {
    "Jp": "水上艦艇装備工廠の整備",
    "En": "Maintenance of the Surface Vessels' Equipment Arsenal",
    "content": "Prepare 3000 Steel in your inventory. Scrap 5 small guns, 5 large guns, and 5 reconnaissance seaplanes.",
    "tips": "※ The prepared resources will be consumed upon quest completion.",
    "unlocks": [],
    "requires": ["Bd5","B110"],
    "period": "once",
    "needs": {
      "R": [
        ["Steel",3000]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "reward": [
      ["I","Furniture Fairy","1","Choose one: "],
      ["C","Improvement Material","2","or "],
      ["C","Development Material","5","or "],
      ["E","Anti-torpedo Bulge (Medium)","2","Choose one: "],
      ["E","Anti-torpedo Bulge (Large)","1","or "]
    ]
  },
  "F84": {
    "Jp": "回転翼機の開発",
    "En": "Development of Rotorcraft",
    "content": "Prepare 3000 Bauxite and 20 Development material in your inventory. Scrap 4 seaplanes, 3 fighters, and 2 torpedo bombers.",
    "tips": "※ The prepared resources and items will be consumed upon quest completion.",
    "unlocks": ["B131","F85","F86"],
    "requires": ["Fd1","Fq6","F73"],
    "period": "once",
    "needs": {
      "R": [
        ["Bauxite",3000]
      ],
      "E": [
        ["Recon Seaplane",4],
        ["Fighter",3],
        ["Torpedo bomber",2]
      ],
      "C": [
        ["Development Material",20]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["I","New Model Aerial Armament Materials","2","Choose one: "],
      ["E","O Type Observation Autogyro Kai","1","or "]
    ]
  },
  "F85": {
    "Jp": "新型航空艤装の研究",
    "En": "Research of New Aircraft Rigging",
    "content": "Prepare 8500 Steel, 4000 Bauxite, and 60 Development material in your inventory. Scrap 4 Zuiun, 4 Suisei, and 2 Ryuusei.",
    "tips": "※ The prepared resources and items will be consumed upon quest completion.",
    "unlocks": ["B132"],
    "requires": ["F84"],
    "period": "once",
    "needs": {
      "E": [
        ["Zuiun",4],
        ["Suisei",4],
        ["Ryuusei",2]
      ],
      "R": [
        ["Steel",8500],
        ["Bauxite",4000]
      ],
      "C": [
        ["Development Material",60]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["I","Prototype Flight Deck Catapult","1","Choose one: "],
      ["I","New Model Aerial Armament Materials","3","or "]
    ]
  },
  "F86": {
    "Jp": "「彗星」艦爆の新運用研究",
    "En": "Research of New \"Suisei\" Dive Bomber Utility",
    "content": "Prepare 2500 Ammunition, 5000 Bauxite, and 1 New Model Aerial Armament Material in your inventory. Have Ise Kai Ni or Hyuuga Kai Ni as secretary equipped with a Suisei Model 12A in her first slot. Scrap 4 Suisei, 3 Type 99 Dive Bomber, and 2 Zuiun.",
    "tips": "※ Equipped equipment must be unlocked. ※ The equipped plane will be converted to the reward listed. ※ The prepared resources and items will be consumed upon quest completion.",
    "unlocks": ["F87"],
    "requires": ["F84","C31"],
    "period": "once",
    "needs": {
      "E": [
        ["Zuiun",2],
        ["Suisei",4],
        ["Type 99 Dive Bomber",3],
        ["Suisei Model 12A",1]
      ],
      "S": ["Hyuuga Kai Ni","Ise Kai Ni"],
      "R": [
        ["Bauxite",5000],
        ["Ammo",2500]
      ],
      "I": ["New Model Aerial Armament Materials"]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","Suisei Model 12 (634 Air Group w/ Type 3 Cluster Bombs)","1"]
    ]
  },
  "F87": {
    "Jp": "最精鋭「瑞雲」隊の編成",
    "En": "Formation of a Top-class \"Zuiun\" Squadron",
    "content": "Prepare 2000 Ammunition, 8000 Bauxite, 1 New Model Aerial Armament Material, and 2 Skilled Crew Member in your inventory. Have Ise Kai Ni or Hyuuga Kai Ni as secretary equipped with a ★max Zuiun Kai Ni (634 Air Group) on her first slot. Scrap 6 Zuiun, 3 Suisei, and 1 Prototype Reppuu Late Model .",
    "tips": "※ Equipped equipment must be unlocked. ※ The equipped plane will be converted to the reward listed. ※ The prepared resources and items will be consumed upon quest completion.",
    "unlocks": [],
    "requires": ["F86"],
    "period": "once",
    "needs": {
      "E": [
        ["Zuiun",6],
        ["Suisei",3],
        ["Reppuu",1],
        ["Zuiun Kai Ni (634 Air Group)",1],
        ["Prototype Reppuu Late Model",1]
      ],
      "S": ["Hyuuga Kai Ni","Ise Kai Ni"],
      "I": [
        ["Skilled Crew Member",2],
        ["New Model Aerial Armament Materials",1]
      ],
      "R": [
        ["Bauxite",8000],
        ["Ammo",2000]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","Zuiun Kai Ni (634 Air Group/Skilled)","1"]
    ]
  },
  "F88": {
    "Jp": "一航戦精鋭「流星改」隊の編成",
    "En": "Formation of the CarDiv 1's Peerless \"Ryuusei Kai\" Squadron",
    "content": "Prepare 2800 Ammunition, 9000 Bauxite, and 2 Skilled Crew Member in your inventory. Have Akagi Kai Ni or Akagi Kai Ni E as secretary equipped with a Aircraft Proficiency Gold Chevron Ryuusei Kai (CarDiv 1) in her first slot. Scrap 4 Ryuusei Kai, 1 Saiun, and 2 Type 97 Torpedo Bomber.",
    "tips": "",
    "unlocks": [],
    "requires": ["B137","F20"],
    "period": "once",
    "needs": {
      "E": [
        ["Type 97 Torpedo Bomber",2],
        ["Saiun",1],
        ["Ryuusei Kai (CarDiv 1)",1],
        ["Ryuusei Kai",4]
      ],
      "S": ["Akagi Kai Ni"],
      "I": [
        ["Skilled Crew Member",2]
      ],
      "R": [
        ["Bauxite",9000],
        ["Ammo",2800]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","Ryuusei Kai (CarDiv 1/Skilled)","1"]
    ]
  },
  "F89": {
    "Jp": "陸戦用装備の艦載運用研究",
    "En": "Research of Ship-borne Land Based Equipment",
    "content": "Prepare 1700 Ammunition, 30 Development material, and 10 Instant construction 2 in your inventory. Have a Light Cruiser as secretary equipped with a 7.7mm Machine Gun in her first slot. Scrap 2 25mm Single Autocannon Mount, 2 Drum Canister (Transport Use), and 1 12cm 30-tube Rocket Launcher.",
    "tips": "",
    "unlocks": ["B139"],
    "requires": ["Fd1"],
    "period": "once",
    "needs": {
      "E": [
        ["Drum Canister (Transport Use)",2],
        ["Drum Canister",2],
        ["7.7mm Machine Gun",1],
        ["25mm Single Autocannon Mount",2],
        ["12cm 30-tube Rocket Launcher",1]
      ],
      "R": [
        ["Ammo",1700]
      ],
      "C": [
        ["Development Material",30],
        ["Instant Construction",10]
      ]
    },
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "reward": [
      ["E","Type 2 12cm Mortar Kai","1"]
    ]
  },
 // Placeholder F91++
  
// DailY Factory Quest Fd00  
  "Fd1": {
    "Jp": "新装備「開発」指令",
    "En": "Instructions to Develop New Equipment",
    "content": "Craft a piece of equipment(Failures are OK)",
    "tips": "",
    "resources": {
      "F": "40",
      "A": "40",
      "S": "40",
      "B": "40"
    },
    "requires": ["F2"],
    "unlocks": ["Fd2","Fd71","Fq6","F84","F89"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1],
      ["C","Development Material",1]
    ]
  },
  "Fd2": {
    "Jp": "新造艦「建造」指令",
    "En": "Instructions to Construct New Ship",
    "content": "Craft a ship",
    "tips": "",
    "resources": {
      "F": "50",
      "A": "50",
      "S": "50",
      "B": "50"
    },
    "requires": ["Fd1"],
    "unlocks": ["Fd3"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1],
      ["C","Development Material",1]
    ]
  },
  "Fd3": {
    "Jp": "装備「開発」集中強化！",
    "En": "Intensify the ConcentRation in Developing Equipment",
    "content": "Craft 3 pieces of equipment(Failures are OK)",
    "tips": "",
    "resources": {
      "F": "100",
      "A": "100",
      "S": "100",
      "B": "100"
    },
    "requires": ["Fd2"],
    "unlocks": ["Fd4","F51","F53","F58","Fd7"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Development Material",2]
    ]
  },
  "Fd4": {
    "Jp": "艦娘「建造」艦隊強化！",
    "En": "Strengthen the Fleet by Constructing Shipgirls",
    "content": "Craft 3 ships",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "300",
      "B": "100"
    },
    "requires": ["Fd3"],
    "unlocks": ["Fd5","F16","Fd6","F61"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1],
      ["C","Development Material",2]
    ]
  },
  "Fd5": {
    "Jp": "軍縮条約対応！",
    "En": "Response to Disarmament Treaty",
    "content": "Scrap 2 ships",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["Fd4"],
    "unlocks": [],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1]
    ]
  },  
  "Fd6": {
    "Jp": "装備の改修強化",
    "En": "Reinforce Improvement for Equipment",
    "content": "Do equipment modernization 1 time",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "50",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd4","F17"],
    "unlocks": ["Fw2","F50","F80"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Improvement Material",1]
    ]
  },  
  "Fd7": {
    "Jp": "装備開発力の整備",
    "En": "Maintenance of Equipment Development Capabilities",
    "content": "Scrap 4 light main guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "100",
      "B": "0"
    },
    "requires": ["Fd3"],
    "unlocks": ["Fd8","A83","C14","B111","F80"],
    "period": "daily",
    "needs": {
      "E": [
        ["Small gun",4]
      ]
    },
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "Fd8": {
    "Jp": "工廠環境の整備",
    "En": "Maintenance of the Arsenal Environment",
    "content": "Prepare 300 steel, scrap 3 Anti-Air guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd7"],
    "unlocks": ["Fq4","Fw3","Fw4","B124","Fq8"],
    "period": "daily",
    "needs": {
      "E": [
        ["Anti-Air gun",3]
      ],
      "R": [
        ["Steel",300]
      ]
    },
    "reward": [
      ["C","Development Material",1],
      ["C","Instant Repair",1]
    ]
  },    

// Weekly Factory Quest Fw00
  "Fw1": {
    "Jp": "資源の再利用",
    "En": "Recycling Resources",
    "content": "Scrap equipment 24 times",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "100",
      "B": "0"
    },
    "requires": ["Bw5"],
    "unlocks": ["C9"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["E","Drum Canister (Transport Use)",1]
    ]
  },
  "Fw2": {
    "Jp": "対空機銃量産",
    "En": "Anti-Air Gun Mass Production",
    "content": "Scrap 6 pieces of Anti-Air Guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "200"
    },
    "requires": ["Fd6"],
    "unlocks": ["F36"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["C","Improvement Material",1],
      ["C","Development Material",2]
    ]
  },
  "Fw3": {
    "Jp": "装備開発力の整備",
    "En": "Focused Maintenance of Equipment Development Capabilities",
    "content": "Prepare 2400 steel, scrap 3 medium guns, 3 secondary guns, and 1 Drum Canister (Transport Use).",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd8"],
    "unlocks": ["Cm2","Fq5"],
    "period": "weekly",
    "needs": {
      "E": [
        ["Medium gun",3],
        ["Secondary gun",3],
        ["Drum Canister",1]
      ],
      "R": [
        ["Steel",2400]
      ]
    },
    "reward": [
      ["C","Development Material",7],
      ["C","Instant Repair",4]
    ]
  },
  "Fw4": {
    "Jp": "継戦支援能力の整備",
    "En": "The Maintenance of Warfare Support Ability",
    "content": "Prepare 3,600 Steel. Scrap 4 Large-Caliber Main Guns, 2 recon Seaplanes and 3 Torpedoes.",
    "tips": "※The prepared Resource will be consumed upon Quest completion.",
    "resources": {
      "F": "0",
      "A": "500",
      "S": "0",
      "B": "150"
    },
    "requires": ["Fd8"],
    "unlocks": [],
    "period": "weekly",
    "needs": {
      "E": [
        ["Heavy gun",4],
        ["Recon Seaplane",2],
        ["Torpedo",3]
      ],
      "R": [
        ["Steel",3600]
      ]
    },
    "reward": [
      ["C","Instant Repair",5]
    ]
  },

// Monthly Factory Quests Fm00
  "Fm1": {
    "Jp": "精鋭「艦戦」隊の新編成",
    "En": "Organize the New Elite Fighter Force",
    "content": "Prepare a Skilled Crew Member in your inventory, have Houshou equipped a rank 7 Type 0 Fighter Model 21 as secretary , then scrap 2 Type 0 Fighter Model 21 and a Type 96 Fighter.",
    "tips": "※Equipment must be unlocked.※One is consumed in the process.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["A19","Bm6"],
    "unlocks": ["F24","F28"],
    "period": "monthly",
    "needs": {
      "E": [
        ["Type 0 Fighter Model 21",3],
        ["Type 96 Fighter",1]
      ],
      "S": ["Houshou"],
      "I": [
        ["Skilled Crew Member",1]
      ]
    },
    "reward": [
      ["E","Type 0 Fighter Model 21 (Skilled)",1]
    ]
  },
  "Fm2": {
    "Jp": "機種転換",
    "En": "Model Conversion: Type 0 Fighter Model 21 (Skilled)",
    "content": "Equip a rank 7 Type 0 Fighter Model 21 (Skilled) on a Carrier secretary, then scrap 2 Type 0 Fighter Model 52.",
    "tips": "※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "50"
    },
    "requires": ["Bm5","F24"],
    "unlocks": [],
    "period": "monthly",
    "needs": {
      "E": [
        ["Type 0 Fighter Model 21 (Skilled)",1],
        ["Type 0 Fighter Model 52",2]
      ]
    },
    "reward": [
      ["E","Type 0 Fighter Model 52 (Skilled)",1]
    ]
  },
  "Fm3": {
    "Jp": "「洋上補給」物資の調達",
    "En": "Monthly Procurement of Maritime Supply Goods",
    "content": "Have 750 fuel, 750 ammo, two Drum Canisters, one Type 91 AP Shell in your inventory, and scrap one Type 3 Shell.",
    "tips": "※Equipment must be unlocked. ※Consumes all the resources and equipment. ※It doesn't matter whether you scrap the shell before or after procuring the other items.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["B54","Bw5"],
    "unlocks": [],
    "period": "monthly",
    "needs": {
      "E": [
        ["Type 91 AP Shell",1],
        ["Drum Canister",2],
        ["Type 3 Shell",1]
      ],
      "R": [
        ["Fuel",750],
        ["Ammo",750]
      ]
    },
    "reward": [
      ["I","Underway Replenishment",1]
    ]
  },  
  
  
// Quarter Factory Quests FQ00
  "Fq1": {
    "Jp": "「熟練搭乗員」養成",
    "En": "Skilled Crew Member Training",
    "content": "Have Houshou equipped with a Type 96 Fighter that is both rank 7 and ★max as secretary . 2 Medals are consumed in the process.",
    "tips": "※Consumes the equipment. ※Equipment must be unlocked.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "100"
    },
    "requires": ["B9"],
    "unlocks": [],
    "period": "quarterly",
    "needs": {
      "E": [
        ["Type 96 Fighter",1]
      ],
      "S": ["Houshou"],
      "I": [
        ["Medal",2]
      ]
    },
    "reward": [
      ["C","Improvement Material",4],
      ["I","Skilled Crew Member",1]
    ]
  },
  "Fq2": {
    "Jp": "主力「陸攻」の調達",
    "En": "Supply of the Land-based Main Bomber Force",
    "content": "Have a Type 96 Land-based Attack Aircraft & two Type 97 Torpedo Bombers in your inventory, and scrap two Type 0 Fighters Model 21.",
    "tips": "※Equipment must be unlocked. ※Consumes the equipment.※It doesn't matter whether you scrap the fighters before or after procuring the other items.",
    "resources": {
      "F": "250",
      "A": "250",
      "S": "0",
      "B": "0"
    },
    "requires": ["F38","Dw2"],
    "unlocks": ["F40"],
    "period": "quarterly",
    "needs": {
      "E": [
        ["Type 96 Land-based Attack Aircraft",1],
        ["Type 97 Torpedo Bomber",2],
        ["Type 0 Fighter Model 21",2]
      ]
    },
    "reward": [
      ["E","Type 1 Land-based Attack Aircraft",1]
    ]
  },
  "Fq3": {
    "Jp": "新型艤装の継続研究",
    "En": "Continuation of New Type Equipment Fitting Research",
    "content": "Prepare 18000 Steel, scrap 10 heavy guns.",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "600",
      "S": "0",
      "B": "0"
    },
    "requires": ["D23","F54"],
    "unlocks": [],
    "period": "quarterly",
    "needs": {
      "R": [
        ["Steel",18000]
      ],
      "E": [
        ["Heavy gun",10]
      ]
    },
    "reward": [
      ["C","Development Material",3],
      ["I","Medal",1,"Choose one: "],
      ["I","New Model Gun Mount Improvement Material",1,"or "]
    ]
  },
  "Fq4": {
    "Jp": "運用装備の統合整備",
    "En": "Integrated Maintenance of Operational Equipment",
    "content": "Prepare 800 bauxite, scrap 6 fighters and 4 Anti-Air guns.",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fd8"],
    "unlocks": [],
    "period": "quarterly",
    "needs": {
      "E": [
        ["Fighter",6],
        ["Anti-Air gun",4]
      ],
      "R": [
        ["Bauxite",800]
      ]
    },
    "reward": [
      ["C","Development Material",4],
      ["E","Type 1 Fighter Hayabusa Model II",1,"Choose one: "],
      ["E","Shiden Model 11",1,"or "],
      ["C","Improvement Material",4,"or "]
    ]
  },
  "Fq5": {
    "Jp": "主力艦上戦闘機の更新",
    "En": "Renewal of the Main Carrier-based Fighter",
    "content": "Prepare 4000 Bauxite, have a Carrier secretary equipped with 2 Type 0 Fighter Model 52 on her first and second slot, then scrap 5 Type 0 Fighter Model 21 and 3 Type 96 Fighter.",
    "tips": "※Equipment must be unlocked. ※Consumes the equipment.",
    "resources": {
      "F": "0",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "requires": ["Fw3","Gd1","Bd2"],
    "unlocks": [],
    "period": "quarterly",
    "needs": {
      "E": [
        ["Type 0 Fighter Model 52",2],
        ["Type 0 Fighter Model 52",5],
        ["Type 96 Fighter",5]
      ],
      "R": [
        ["Bauxite",4000]
      ]
    },
    "reward": [
      ["E","Shiden Kai 2",2],
      ["C","Development Material",8,"Choose one: "],
      ["I","New Model Aerial Armament Materials",1,"or "]
    ]
  },
  "Fq6": {
    "Jp": "対空兵装の整備拡充",
    "En": "Reinforcement of the Anti-Air Equipment",
    "content": "Prepare 1500 bauxite, scrap 4 machine guns and 4 Radars.",
    "tips": "",
    "period": "quarterly",
    "requires": ["Fd71","Fd1"],
    "unlocks": ["A86","B115","F84"],
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "R": [
        ["Bauxite",1500]
      ],
      "E": [
        ["Radar",4],
        ["Machine Gun",4]
      ]
    },
    "reward": [
      ["E","10cm Twin High-angle Gun Mount",1,"Choose one: "],
      ["E","12cm 30-tube Rocket Launcher",1],
      ["C","Development Material",1]
    ]
  },
  "Fq7": {
    "Jp": "戦時改修A型高角砲の量産",
    "En": "Mass Wartime Production of the Type A Dual-Purpose Gun",
    "content": "Prepare 30 Development material, 900 steel, and a New Model Gun Mount Improvement Material in your inventory. Have a Fubuki-class secretary ship with a ★max 12.7cm Twin Gun Mount Model A Kai 2 equipped in her first slot. Scrap four 10cm Twin High-angle Gun Mount and one Type 94 Anti-Aircraft Fire Director.",
    "tips": "※Equipment must be unlocked. ※Consumes all the resources and equipment.",
    "period": "quarterly",
    "requires": ["F76"],
    "unlocks": [],
    "resources": {
      "F": "0",
      "A": "200",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "R": [
        ["Steel",900]
      ],
      "C": [
        ["Development Material",30]
      ],
      "I": [
        ["New Model Gun Mount Improvement Material",1]
      ],
      "E": [
        ["10cm Twin High-angle Gun Mount",4],
        ["12.7cm Twin Gun Mount Model A Kai 2",1],
        ["Type 94 Anti-Aircraft Fire Director",1]
      ]
    },
    "reward": [
      ["E","12.7cm Twin Gun Mount Model A Kai 3 (Wartime Modification) + Anti-Aircraft Fire Director",1]
    ]
  },
  "Fq8": {
    "Jp": "航空戦力の強化",
    "En": "Reinforcement of the Aviation Strength",
    "content": "Prepare 1800 bauxite and a Skilled Crew Member CardSkilled Crew Member in your inventory. Scrap 3 fighters, 3 dive bombers, 3 torpedo bombers, and 3 reconaissance seaplanes.",
    "tips": "※ The prepared Resources will be consumed upon Quest completion.",
    "period": "quarterly",
    "requires": ["Fd8"],
    "unlocks": [],
    "resources": {
      "F": "100",
      "A": "100",
      "S": "0",
      "B": "0"
    },
    "needs": {
      "R": [
        ["Bauxite",1800]
      ],
      "I": [
        ["Skilled Crew Member",1]
      ],
      "E": [
        ["Fighter",3],
        ["Dive bomber",3],
        ["Recon Seaplane",3],
        ["Torpedo bomber",3]
      ]
    },
    "reward": [
      ["E","Type 0 Fighter Model 32 (Skilled)",1,"Choose one: "],
      ["E","Type 1 Fighter Hayabusa Model II",1,"or "],
      ["E","Zuiun (631 Air Group)",1,"or "]
    ]
  },
// Placeholder Fq9
// Yearly Factory Quest Fy00
// Placeholder Fy1-10
  
// Modernization Quests G00
  "G1": {
    "Jp": "はじめての「近代化改修」！",
    "En": "The First Modernization",
    "content": "Perform a successful modernization",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "50",
      "B": "30"
    },
    "requires": [],
    "unlocks": ["Gd1"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "G4": {
    "Jp": "「大型艦建造」の準備！(その壱)",
    "En": "PrepaRation for Large Ship Construction (Part I)",
    "content": "Perform 4 successful modernizations",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "400",
      "B": "400"
    },
    "requires": ["A14"],
    "unlocks": ["F10"],
    "period": "once",
    "needs": {},
    "reward": []
  },
  "G5": {
    "Jp": "航空艤装の近代化改修",
    "En": "Modernisation of Aircraft Carrier Rigging",
    "content": "Prepare 5500 steel & 2500 bauxite, then perform 2 successful modernizations on a CV(B) each with 5 carriers as material.",
    "tips": "※Modernisation target must be a CV(B). CVL and AV do not count.※Modernisation materials can be CV or CVL. AV does not count.※You don't have to modernise the same carrier twice.※You must use 5 CV(L) at once for each modernisation attempt.※The specified resources will be consumed upon clearing the quest.",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["Gw1","B87"],
    "unlocks": [],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","New Technology Aircraft Blueprint",1]
    ]
  },
// Placeholder G10 G11

// Daily Modernization Quests Gd00
  "Gd1": {
    "Jp": "艦の「近代化改修」を実施せよ！",
    "En": "Carry Out Ship Modernizations",
    "content": "Perform 2 successful modernizations within the same day",
    "tips": "",
    "resources": {
      "F": "20",
      "A": "20",
      "S": "50",
      "B": "0"
    },
    "requires": ["G1"],
    "unlocks": ["Gw1","Fq5","F80"],
    "period": "daily",
    "needs": {},
    "reward": [
      ["C","Instant Repair",1]
    ]
  },

// Weekly Modernization Quests Gw00
  "Gw1": {
    "Jp": "「近代化改修」を進め、戦備を整えよ！",
    "En": "Proceed with Modernization, and Prepare for War",
    "content": "Perform 15 successful modernizations within the same week",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "300",
      "B": "100"
    },
    "requires": ["Gd1"],
    "unlocks": ["G5"],
    "period": "weekly",
    "needs": {},
    "reward": [
      ["C","Instant Construction",1],
      ["C","Development Material",2]
    ]
  },

// Yearly Modernization Quests Gy00
// Placeholder Gy1-4

// Marriage Quest
  "WF01": {
    "Jp": "式の準備！(その壱)",
    "En": "PrepaRation for the Ceremony (Part I)",
    "content": "Scrap equipment twice",
    "tips": "",
    "resources": {
      "F": "88",
      "A": "88",
      "S": "0",
      "B": "0"
    },
    "requires": ["A16"],
    "unlocks": ["WC01"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "WC01": {
    "Jp": "式の準備！(その弐)",
    "En": "PrepaRation for the Ceremony (Part II)",
    "content": "Win two battles in Exercises",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "88",
      "B": "88"
    },
    "requires": ["WF01"],
    "unlocks": ["WA01"],
    "period": "once",
    "needs": {},
    "reward": [
      ["C","Development Material",1]
    ]
  },
  "WA01": {
    "Jp": "式の準備！(その参)",
    "En": "PrepaRation for the Ceremony (Part III)",
    "content": "Have a level 90 to 99 ship as your flagship",
    "tips": "",
    "resources": {
      "F": "88",
      "A": "88",
      "S": "88",
      "B": "88"
    },
    "requires": ["WC01"],
    "unlocks": ["WB01"],
    "period": "once",
    "needs": {},
    "reward": [
      ["I","Large furniture box",1]
    ]
  },
  "WB01": {
    "Jp": "式の準備！(最終)",
    "En": "PrepaRation for the Ceremony (Final)",
    "content": "Defeat the boss in 2-3 with a Level 90-99 flagship (with S rank)",
    "tips": "",
    "resources": {
      "F": "0",
      "A": "0",
      "S": "0",
      "B": "0"
    },
    "requires": ["WA01"],
    "unlocks": ["WA02"],
    "period": "once",
    "needs": {
      "M": ["2-3"]
    },
    "reward": [
      ["I","Marriage Ring and Documents",1]
    ]
  },
  "WA02": {
    "Jp": "新たなる旅立ち！",
    "En": "A New Voyage",
    "content": "Have a Level 100 ship as your flagship along with five others in your main fleet",
    "tips": "",
    "resources": {
      "F": "200",
      "A": "200",
      "S": "200",
      "B": "200"
    },
    "requires": ["WB01"],
    "unlocks": ["WB02"],
    "period": "once",
    "needs": {
      "I": [
        ["Marriage Ring and Documents",1]
      ]
    },
    "reward": [
      ["I","Repair Team",1]
    ]
  },
  "WB02": {
    "Jp": "二人でする初めての任務！",
    "En": "A Couple's First Quest",
    "content": "Defeat the boss in 4-3 with a level 100+ flagship (with S rank)",
    "tips": "",
    "resources": {
      "F": "300",
      "A": "300",
      "S": "300",
      "B": "300"
    },
    "requires": ["WA02"],
    "unlocks": ["A40"],
    "period": "once",
    "needs": {
      "M": ["4-3"]
    },
    "reward": [
      ["F","Thin Futon",1]
    ]
  }
};  
Object.keys(ALL_QUESTS_LIST).forEach(quest => {
ALL_QUESTS_LIST[quest].requires.forEach(req => {
  if (ALL_QUESTS_LIST[req].unlocks.indexOf(quest) === -1){
    console.log(`la quete ${quest} n'est pas dans la liste d'unlocks de la quete ${req}`);
  }
});
});

Object.keys(ALL_QUESTS_LIST).forEach(quest => {
ALL_QUESTS_LIST[quest].unlocks.forEach(unlk => {
  if (ALL_QUESTS_LIST[unlk].requires.indexOf(quest) === -1){
    console.log(`la quete ${quest} n'est pas dans la liste de requires de la quete ${unlk}`);
  }
});
});
