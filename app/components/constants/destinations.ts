import { DestinationType } from "@/app/components/types/destinations-type";

export const DESTINATIONS = [
  {
    id: "destination-1",
    name: "The Grotto of Our Lady of Lourdes at Pait Spring",
    about:
      "The Grotto of Our Lady of Lourdes at Pait Spring, located in Brgy. Magsaysay, Maasin, is an important Marian pilgrimage site known for its peaceful and natural surroundings. Nestled in a rocky area near the natural spring called Pait, the grotto provides a quiet and spiritual place where devotees can pray, reflect, and seek healing. The calm atmosphere and natural beauty of the site make it a meaningful destination for both pilgrims and visitors.\n Historically, the town of Maasin got its name from the salt springs found in the area, including Pait Spring, which served as an important source of livelihood for early settlers. The grotto itself was built using stacked rocks and was developed under the leadership of Hernicus de Wit, a Mill Hill missionary who served as the parish priest and played a key role in strengthening the faith of the local community. \n Today, the grotto continues to be a place of devotion and pilgrimage. Every year on Feast of Our Lady of Lourdes, the Archdiocese of Jaro through the Saint James the Greater Parish Church organizes a special dawn procession from the town church to the grotto. Many devotees join the procession as a way of expressing their faith, offering prayers of thanksgiving, and asking for healing and blessings. \n Because of its deep religious meaning and tranquil environment, the Grotto of Our Lady of Lourdes at Pait Spring remains a cherished place of prayer and devotion for the people of Maasin and visiting pilgrims. It stands as a reminder of the town’s rich history, strong faith, and enduring spiritual traditions.",
    type: DestinationType.nature,
    images: [
      "/destinations/paet-1.jpeg",
      "/destinations/paet-2.jpeg",
      "/destinations/paet-3.jpeg",
    ],
    town: "Maasin",
    mapLocation: {
      lat: 10.949046402622345,
      lng: 122.50236868771027,
    },
    emergencyHotlines: [
      {
        entity: "Maasin Police Station",
        hotline: "9999-99999",
      },
      {
        entity: "Bureau of Fire Protection",
        hotline: "7777-77777",
      },
    ],
  },
  {
    id: "destination-2",
    name: "Villa Teresita Resthauz Bamboo Resort",
    about:
      "Villa Teresita Resthauz Bamboo Resort is one of the most inviting destinations in Maasin, offering a perfect mix of relaxation, recreation, and family-friendly fun. Nestled in a beautifully landscaped area, the resort provides visitors with a serene environment surrounded by greenery, making it an ideal escape from the hustle and bustle of daily life. Its combination of natural charm and modern amenities makes it suitable for both leisure and special occasions. \n For those who enjoy outdoor activities, Villa Teresita features a playground where children can play safely and a swimming area perfect for summer adventures. Families and friends can spend hours enjoying the water, whether it’s for swimming, relaxation, or just splashing around in the cool, refreshing pool. The well-maintained surroundings also make it a great spot for taking photos and creating lasting memories with loved ones. \n The resort also caters to more formal gatherings. It has an air-conditioned family room where small groups can enjoy comfort and privacy. For larger events, there is a pavilion that can accommodate up to 300 people, making it an excellent venue for important family occasions, office meetings, seminars, trainings, and even weddings or birthday celebrations. The space is designed to handle various types of gatherings, ensuring that every event held at the resort can be organized smoothly and comfortably. \n Additionally, cottages are available for groups who want to enjoy a more private and relaxing stay, perfect for team-building activities, family outings, or overnight stays. These cottages allow guests to fully experience the resort’s peaceful environment while staying close to all the main facilities. \n Villa Teresita Resthauz Bamboo Resort is open daily from 8 a.m. to 10 p.m., making it accessible for morning swims, afternoon picnics, or evening events. The entrance fee is very affordable at ₱50 per person, providing great value for a full day of fun, relaxation, and entertainment. \n Whether you’re planning a fun-filled day with family and friends, a corporate activity, or a special celebration, Villa Teresita offers a well-rounded experience. With its combination of recreational facilities, comfortable accommodations, and beautifully landscaped surroundings, it remains one of the top destinations in Maasin for relaxation, social gatherings, and memorable adventures.",
    type: DestinationType.recreational,
    images: [
      "/destinations/terisita-1.jpeg",
      "/destinations/terisita-2.jpeg",
      "/destinations/terisita-3.jpeg",
    ],
    town: "Maasin",
    mapLocation: {
      lat: 10.879732926155558,
      lng: 122.48089313528908,
    },
    emergencyHotlines: [
      {
        entity: "Cabatuan Police Station",
        hotline: "9999-99999",
      },
    ],
  },
  {
    id: "destination-3",
    name: "Destination #3",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: DestinationType.recreational,
    images: ["/placeholder_image.jpg"],
    town: "Janiuay",
    mapLocation: {
      lat: 10.89129595131261,
      lng: 122.43320703506471,
    },
    emergencyHotlines: [
      {
        entity: "Cabatuan Police Station",
        hotline: "9999-99999",
      },
    ],
  },
  {
    id: "destination-4",
    name: "Destination #4",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: DestinationType.nature,
    images: ["/placeholder_image.jpg"],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.949046402622345,
      lng: 122.50236868771027,
    },
    emergencyHotlines: [
      {
        entity: "Cabatuan Police Station",
        hotline: "9999-99999",
      },
    ],
  },
  {
    id: "destination-5",
    name: "Destination #5",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: DestinationType.recreational,
    images: ["/placeholder_image.jpg"],
    town: "Maasin",
    mapLocation: {
      lat: 10.879732926155558,
      lng: 122.48089313528908,
    },
    emergencyHotlines: [
      {
        entity: "Cabatuan Police Station",
        hotline: "9999-99999",
      },
    ],
  },
  {
    id: "destination-6",
    name: "Destination #6",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: DestinationType.nature,
    images: ["/placeholder_image.jpg"],
    town: "Janiuay",
    mapLocation: {
      lat: 10.89129595131261,
      lng: 122.43320703506471,
    },
    emergencyHotlines: [
      {
        entity: "Cabatuan Police Station",
        hotline: "9999-99999",
      },
    ],
  },
];
