
import React from 'react';
const jsonData = [
    {
      "id": 1,
      "title": "NUBES- 193803",
      "price": 7499,
      "description": "L 600 W 340 H 125 MM",
      "category": "Washbasins",
      "image": "./assets/Washbasins/WB1.png",
      "rating": { "rate": 3.9, "count": 120 }
    },
    {
        "id": 1,
        "title": "EURO- 193811",
        "price": 3899,
        "description": "L 410 W 340 H 170 MM",
        "category": "Washbasins",
        "image": "./assets/Washbasins/WB3.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 1,
        "title": "RIPON- 193830",
        "price": 2899,
        "description": "L 375 W 375 H 120 MM",
        "category": "Washbasins",
        "image": "./assets/Washbasins/WB4.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 1,
        "title": "PETRA",
        "price": 2600,
        "description": "L 550 W 425 H 825 MM",
        "category": "Washbasins",
        "image": "./assets/Washbasins/WB2.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 1,
        "title": "TERONI",
        "price": 2199,
        "description": "L 560 W 430 H 845 MM",
        "category": "Washbasins",
        "image": "./assets/Washbasins/WB5.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 1,
        "title": "LAMBA",
        "price": 2299,
        "description": "L 550 W 425 H 840 MM",
        "category": "Washbasins",
        "image": "./assets/Washbasins/WB6.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
    
    {
      "id": 2,
      "title": "OVERHEAD SHOWER - 347931",
      "price": 1699,
      "description": "Overhead Shower ⌀200 MM Along With Rubit Cleaning System",
      "category": "Showers",
      "image": "./assets/Showering/S1.jpg",
      "rating": { "rate": 3.9, "count": 120 }
    },
    {
        "id": 2,
        "title": "OVERHEAD SHOWER - 347901",
        "price": 2199,
        "description": "Rain Shower 6' Ultra Thin (Ss-304) Square 150X150 MM",
        "category": "Showers",
        "image": "./assets/Showering/S2.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 2,
        "title": "OVERHEAD SHOWER - 347911",
        "price": 1699,
        "description": "Maze - S Overhead Shower 112X112 MM Along With Rubit Cleaning System",
        "category": "Showers",
        "image": "./assets/Showering/S3.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 2,
        "title": "OVERHEAD SHOWER - 347904",
        "price": 2099,
        "description": "Rain Shower 6' Ultra Thin (Ss-304) Round ⌀150 MM",
        "category": "Showers",
        "image": "./assets/Showering/S4.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 2,
        "title": "TELEPHONIC SHOWER - 348911",
        "price": 1299,
        "description": "120 MM With SS Tube 1.5 Mtr & Hook Along With Rubit Cleaning System",
        "category": "Showers",
        "image": "./assets/Showering/S5.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 2,
        "title": "TELEPHONIC SHOWER - 348912",
        "price": 1399,
        "description": "100x100 MM With SS Tube 1.5 Mtr & Hook Along With Rubit Cleaning System",
        "category": "Showers",
        "image": "./assets/Showering/S6.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
    {
      "id": 3,
      "title": "NEVASSA - 912921",
      "price": 5099,
      "description": "Single Lever Basin Mixer Long Body without Pop-Up Waste With Braided Hoses and Neoperl Aerator",
      "category": "Faucets",
      "image": "./assets/faucets/F1.jpg",
      "rating": { "rate": 3.9, "count": 120 }
    },
    {
        "id": 3,
        "title": "NEVASSA - 912924",
        "price": 1599,
        "description": "Exposed Part Kit for Hi-Flow Divertor",
        "category": "Faucets",
        "image": "./assets/faucets/F2.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 3,
        "title": "NEVASSA - 912919",
        "price": 3499,
        "description": "Center Hole Basin Mixer without Pop-Up Waste With Braided Hoses and Neoperl Aerator",
        "category": "Faucets",
        "image": "./assets/faucets/F3.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 3,
        "title": "DEQUE - 911920",
        "price": 5499,
        "description": "Single Lever Basin Mixer without Pop-Up Waste with Braided Hoses and Neoperl Aerator",
        "category": "Faucets",
        "image": "./assets/faucets/F4.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 3,
        "title": "DEQUE - 911922",
        "price": 2799,
        "description": "Exposed Part Kit of Single Lever Basin Mixer Wall Mounted with Neoperl Aerator",
        "category": "Faucets",
        "image": "./assets/faucets/F5.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 3,
        "title": "KEFI - 915934",
        "price": 3499,
        "description": "Single Lever Sink Mixer Table Mounted with Neoperl Aerator",
        "category": "Faucets",
        "image": "./assets/faucets/F6.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 4,
        "title": "KUBE- 193603",
        "price": 11499,
        "description": "L 510 W 355 H 360 MM - With Soft Close Seat Cover",
        "category": "Toilet Seats",
        "image": "./assets/Toilet_Seats/TS1.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 4,
        "title": "SPECTO",
        "price": 14499,
        "description": "L 520 W 360 H 340 MM With Duroplast Soft Close Seat Cover And Concealed Fixation (With Smart Installation Kit)",
        "category": "Toilet Seats",
        "image": "./assets/Toilet_Seats/TS2.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 4,
        "title": "BRIO",
        "price": 9499,
        "description": "L 495 W 360 H 365 MM - With Soft Close Seat Cover",
        "category": "Toilet Seats",
        "image": "./assets/Toilet_Seats/TS3.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 4,
        "title": "ETHAN",
        "price": 13299,
        "description": "L 690 W 370 H 760 MM - With Soft Close Seat Cover",
        "category": "Toilet Seats",
        "image": "./assets/Toilet_Seats/TS4.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 4,
        "title": "ICONA",
        "price": 12499,
        "description": "L 680 W 355 H 715 MM - With Soft Close Seat Cover",
        "category": "Toilet Seats",
        "image": "./assets/Toilet_Seats/TS5.png",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 4,
        "title": "MESSY",
        "price": 11499,
        "description": "L 650 W 345 H 745 MM - With Soft Close Seat Cover",
        "category": "Toilet Seats",
        "image": "./assets/Toilet_Seats/TS6.png",
        "rating": { "rate": 3.9, "count": 120 }
      }

  ];
  
  export default jsonData;
  