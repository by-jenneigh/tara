import { DestinationType } from "@/app/components/types/destinations-type";

export const DESTINATIONS = [
  // MAASIN
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
      lat: 10.8804126,
      lng: 122.4270634,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Maasin Poblacion",
            to: "The Grotto of Our Lady of Lourdes at Pait Spring",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "The Grotto of Our Lady of Lourdes at Pait Spring",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "The Grotto of Our Lady of Lourdes at Pait Spring",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
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
      lat: 10.8994836,
      lng: 122.4346714,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Maasin Poblacion",
            to: "Villa Teresita Resthauz Bamboo Resort",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "Villa Teresita Resthauz Bamboo Resort",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "Villa Teresita Resthauz Bamboo Resort",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
    ],
  },
  {
    id: "destination-3",
    name: "Dam site and Mahogany Park",
    about:
      "The Maasin Dam is located in Brgy. Daja and the nearby Mahogany Park are well-known eco-tourism destinations in Maasin. Built in the late 1930s, the dam was originally constructed to supply water to Iloilo City and nearby towns such as Cabatuan, Pavia, and Sta. Barbara. Over time, the surrounding area developed into Mahogany Park, which is now famous for its tall mahogany trees, cool climate, and peaceful atmosphere. Today, the site serves not only as an important water source but also as a relaxing destination where visitors can enjoy nature and escape the busy environment of the city. \n The area is known for its scenic views, combining the large body of water from the dam with the lush green forest and surrounding hills. Because of its calm and refreshing environment, it is a great place for nature lovers, photographers, and visitors who simply want to walk around and enjoy the beauty of nature. The best time to visit is during the dry season from November to May, when the weather is sunny and ideal for outdoor activities. Early mornings are perfect for enjoying the quiet surroundings and fresh air, while late afternoons are also pleasant as the temperature becomes cooler. \n Visitors planning to go to the site should note that it is located in Brgy. Daja, Maasin, Iloilo. It is recommended to visit during the dry season because the trails can become muddy and slippery during rainy days. Wearing comfortable shoes and taking time to appreciate the peaceful environment will make the experience more enjoyable. Overall, the Maasin Dam and Mahogany Park offer a beautiful and refreshing nature escape for anyone looking to relax and experience the natural beauty of the area.",
    type: DestinationType.nature,
    images: [
      "/destinations/daja-1.jpeg",
      "/destinations/daja-2.jpeg",
      "/destinations/daja-3.jpeg",
    ],
    town: "Maasin",
    mapLocation: {
      lat: 10.8955633,
      lng: 122.3928772,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Maasin Poblacion",
            to: "Dam site and Mahogany Park",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "Dam site and Mahogany Park",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "Dam site and Mahogany Park",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
    ],
  },
  {
    id: "destination-4",
    name: "Bamview Bistro",
    about:
      "One of the most popular tourist destinations in Maasin is Bamview Bistro, located in Barangay Naslo. This cozy restaurant has become a favorite spot for both locals and visitors who want to enjoy good food while surrounded by beautiful natural scenery. Known for its relaxing atmosphere, Bamview Bistro is a perfect place to unwind, dine, and appreciate the countryside's peaceful environment. \n Bamview Bistro is well-loved for its variety of delicious meals and quality coffee, which guests can enjoy while spending time with friends, family, or loved ones. The menu features a range of food choices that cater to different tastes, making it a great place for casual dining, small gatherings, or even a quiet coffee break. Many visitors come not only for the food but also for the comfortable and welcoming ambiance that the restaurant provides. \n What makes Bamview Bistro truly special is its stunning location. The restaurant overlooks a scenic river and is surrounded by lush green mountains, creating a breathtaking view that visitors can enjoy while dining. The cool breeze and natural surroundings make the experience even more relaxing, especially for people who want to escape the busy environment of the city. Because of its elevated location, guests are able to see a wide view of the landscape, which makes the place very popular for photography and sightseeing. \n One of the best times to visit Bamview Bistro is during the late afternoon or early evening. Many guests come at this time to witness the beautiful sunset as the sky slowly changes colors and the warm golden light reflects over the river and mountains. This peaceful and picturesque view makes the dining experience even more memorable. Whether someone wants to relax with a cup of coffee, enjoy a satisfying meal, or simply admire the natural beauty of Maasin, Bamview Bistro offers a wonderful place to experience it all.",
    type: DestinationType.nature,
    images: [
      "/destinations/bamview-1.jpeg",
      "/destinations/bamview-2.jpeg",
      "/destinations/bamview-3.jpeg",
    ],
    town: "Maasin",
    mapLocation: {
      lat: 10.8962419,
      lng: 122.4449508,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Maasin Poblacion",
            to: "Bamview Bistro",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "Bamview Bistro",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "Bamview Bistro",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
    ],
  },
  {
    id: "destination-5",
    name: "St. James the Greater Church in Maasin",
    about:
      "Augustinian missionaries arrived in Maasin in 1615. The church they erected was a visita of Jaro Parish and then of Cabatuan Parish Church beginning in 1732. Finally, it became a parish in 1755. Fr. Francisco Jimenez was the parish priest beginning in 1759. \n During the Philippine Revolution, the Augustinians left in 1898 and Mill Hill Fathers took over in 1906, with Fr. Walter Cain becoming the first parish priest belonging to the said religious order. They handed the parish over to the diocesan in 1963. \n Fluted pilasters frame the central panel of the church’s front wall, containing the portico, the statue of the patron by the red wall with the inscription “St. James the Greater, pray for us”, twin arch windows, a cartouche containing the Roman numeral MCMXXXV (1935), and dentil. The walls flanking it contain blind rose windows. The bell tower is in the gospel side.",
    type: DestinationType.religious,
    images: [
      "/destinations/james-1.jpg",
      "/destinations/james-2.jpg",
      "/destinations/james-3.jpg",
    ],
    town: "Maasin",
    mapLocation: {
      lat: 10.8904827,
      lng: 122.4308806,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
        ],
      },
    ],
  },
  {
    id: "destination-6",
    name: "Francisco's Farm Resto and Grill",
    about:
      "Francisco's Farm Resto and Grill - is one of the charming dining destinations in Maasin, located in Barangay Sinubsuban. This restaurant is known for its relaxing farm-style atmosphere, making it an ideal place for people who want to enjoy delicious food while surrounded by a calm and refreshing environment. With its open space, greenery, and peaceful surroundings, Francisco's Farm Resto and Grill provides guests with a comfortable place to unwind and spend quality time with family and friends. \n The restaurant offers a wide variety of dishes that can satisfy different tastes, making it the perfect place to dine for any occasion. Whether visitors are looking for a hearty meal, a casual lunch, or a special dinner, the restaurant’s menu provides many flavorful options prepared with care. The combination of good food and a pleasant ambiance makes the dining experience more enjoyable and memorable for guests. \n Aside from being a restaurant, Francisco's Farm Resto and Grill is also a great venue for celebrations and special gatherings. The place features a spacious pavilion that can accommodate different types of events such as birthdays, weddings, reunions, and other important occasions. Because of its beautiful surroundings and relaxing atmosphere, many people choose this location to celebrate memorable moments with their loved ones. \n Visitors who come to Francisco's Farm Resto and Grill can experience not only great food but also the warm and welcoming atmosphere that the place offers. Its peaceful farm-like setting allows guests to relax, enjoy nature, and take a break from the busy pace of everyday life. For anyone visiting Maasin, Iloilo, stopping by this restaurant is a wonderful opportunity to enjoy delicious meals, celebrate special events, and experience the charm of a countryside dining destination.",
    type: DestinationType.nature,
    images: [
      "/destinations/francisco-1.jpg",
      "/destinations/francisco-2.jpg",
      "/destinations/francisco-3.jpg",
    ],
    town: "Maasin",
    mapLocation: {
      lat: 10.8973322,
      lng: 122.4114726,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Maasin Poblacion",
            to: "Francisco's Farm Resto and Grill",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "Francisco's Farm Resto and Grill",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
          {
            from: "Maasin Poblacion",
            to: "Francisco's Farm Resto and Grill",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
        ],
      },
    ],
  },
  {
    id: "destination-7",
    name: "Maasin Town Plaza",
    about:
      "MAASIN - is a scenic 3rd-class municipality in the province of Iloilo, proudly known as the “Bamboo Capital of Panay.” The town is famous for its rich bamboo resources, peaceful natural surroundings, and vibrant cultural traditions. Visitors often come to experience its relaxing atmosphere, explore its eco-tourism spots, and learn about its deep historical roots that date back to the Spanish colonial period. \n At the center of the town is the Maasin Town Plaza, which serves as the heart of community life. It is a gathering place where locals hold celebrations, cultural programs, and displays of bamboo crafts. One of the most anticipated events in the town is the Tultugan Festival, celebrated every December. During this festival, bamboo—locally called tultugan—is highlighted as a musical instrument, tool, and symbol of the town’s identity. The celebration features lively street dancing, music made from bamboo instruments, and colorful cultural performances that showcase the creativity of the community. \n Maasin is also well known for its extensive bamboo plantations, which have become part of its eco-tourism attractions. Visitors can enjoy scenic river views, peaceful countryside landscapes, and natural sites such as the Maasin Dam, a historic watershed dam that supplies water to nearby areas. These natural attractions make the town a great place for travelers who enjoy quiet nature trips and scenic outdoor experiences. \n Historically, Maasin officially became a town in 1775, with Don Agustin Garcia serving as its first Capitan. The name “Maasin” comes from the phrase ma-asin, which refers to the salt spring found in Barangay Magsaysay, a natural resource that early settlers used for their livelihood. \n The best time to visit Maasin is during December, when the Tultugan Festival brings the town to life with music, dances, and cultural activities. Visitors can also enjoy the area during the dry season from November to May, when the weather is generally sunny and ideal for exploring outdoor attractions. \n Maasin is highly recommended for travelers who appreciate culture, history, and nature. From its unique bamboo traditions and lively festivals to its relaxing natural scenery and historical heritage, the town offers a memorable experience for nature lovers, bamboo enthusiasts, and cultural explorers alike.",
    type: DestinationType.recreational,
    images: [
      "/destinations/maasin-plaza-1.jpeg",
      "/destinations/maasin-plaza-2.jpeg",
      "/destinations/maasin-plaza-3.jpeg",
    ],
    town: "Maasin",
    mapLocation: {
      lat: 10.8926883,
      lng: 122.4154453,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Maasin Poblacion",
            vehicle: "Jeepney",
            minFare: 40,
            maxFare: 50,
          },
        ],
      },
    ],
  },

  // JANIUAY
  {
    id: "destination-8",
    name: "Igbiating Falls",
    about:
      "Igbiating Falls is a beautiful hidden waterfall located in Barangay Barasalon, Janiuay, Iloilo, Philippines. Surrounded by thick forest and natural rock formations, the waterfall is fed by the Igbiating River and flows into a clear and refreshing pool. \n It is considered a hidden gem because it is not yet crowded with tourists, making it a peaceful place where visitors can enjoy nature, swim in the cool water, take photos, or simply relax. Reaching the falls usually requires a short trek through the forest, but the beautiful scenery and calm atmosphere make the journey worth it.",
    type: DestinationType.nature,
    images: [
      "/destinations/igbiating-1.jpeg",
      "/destinations/igbiating-2.jpeg",
      "/destinations/igbiating-3.jpeg",
    ],
    town: "Janiuay",
    mapLocation: {
      lat: 11.0138111,
      lng: 122.3402111,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Janiuay Public Market",
            to: "Igbiating Falls",
            vehicle: "Motorcycle",
            minFare: 200,
            maxFare: 250,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Public Market",
            to: "Igbiating Falls",
            vehicle: "Motorcycle",
            minFare: 200,
            maxFare: 250,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Public Market",
            to: "Igbiating Falls",
            vehicle: "Motorcycle",
            minFare: 200,
            maxFare: 250,
          },
        ],
      },
    ],
  },
  {
    id: "destination-9",
    name: "Damires Hills Farm and Spa",
    about:
      "Damires Hills Farm and Spa Resort is situated in a sprawling land of endless foliage awash with tropical beauty. Damires Hills Farm and Spa Resort is situated in an exclusive 16-hectare compound that offers a serene paradise experience like no other. Head over to this gem with just a 45-minute ride away from Iloilo International Airport. \n Rekindle your love for nature as you are surrounded by lush greenery and stunning landscapes that are exquisitely complemented by the vibrant culture of Iloilo. Feel the warm welcome as you set foot in Damires Hills and be greeted with genuine smiles from our friendly staff who are dedicated to providing you with an excellent experience in which the resort is known. Indulge yourself in a tranquil getaway when you stay in one of the cozy rooms and villas equipped with all your needs for a relaxing vacation. Here in Damires Hills Farm and Spa Resort, our guests can indulge in bespoke services and amenities while they delight in the stunning sights and sounds of Mother Nature. A Sanctuary with Comforts – Heliconia Rooms and Family Villa. A home to 28 well-appointed and nature-inspired abodes – our rooms offer serenity and comfort with everything you could possibly need and interiors that emulate the rich culture of the City of Love — Iloilo. Damires Hills Farm and Spa Resort is a perfect hideaway to revitalize your soul, reconnect with your loved ones or to spend some quality time for yourself as each room is designed to create a feeling of home with refined and relaxing ambience. Rise early and greet the day while you experience the early-morning sunshine and nature’s beauty in their perfect stillness.",
    type: DestinationType.recreational,
    images: [
      "/destinations/damires-1.jpeg",
      "/destinations/damires-2.jpeg",
      "/destinations/damires-3.jpeg",
    ],
    town: "Janiuay",
    mapLocation: {
      lat: 10.961054,
      lng: 122.514366,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Janiuay Public Market",
            to: "Bangga Damires Hills Farm and Spa",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Janiuay Public Market",
            to: "Bangga Damires Hills Farm and Spa",
            vehicle: "Tricycle",
            minFare: 50,
            maxFare: 70,
          },
          {
            from: "Bangga Damires Hills Farm and Spa",
            to: "Damires Hills Farm and Spa",
            vehicle: "Motorcycle",
            minFare: 50,
            maxFare: 70,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Public Market",
            to: "Bangga Damires Hills Farm and Spa",
            vehicle: "Tricycle",
            minFare: 50,
            maxFare: 70,
          },
          {
            from: "Bangga Damires Hills Farm and Spa",
            to: "Damires Hills Farm and Spa",
            vehicle: "Motorcycle",
            minFare: 50,
            maxFare: 70,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Public Market",
            to: "Bangga Damires Hills Farm and Spa",
            vehicle: "Tricycle",
            minFare: 50,
            maxFare: 70,
          },
          {
            from: "Bangga Damires Hills Farm and Spa",
            to: "Damires Hills Farm and Spa",
            vehicle: "Motorcycle",
            minFare: 50,
            maxFare: 70,
          },
        ],
      },
    ],
  },
  {
    id: "destination-10",
    name: "Mt. IDAY",
    about:
      "Mt. IDAY, located in Janiuay, Iloilo, is a captivating destination that beckons nature lovers and adventure seekers alike. Known for its stunning panoramic views and lush surroundings, this mountain offers an escape from bustling city life. The trails winding through the mountainous terrain are suitable for both seasoned hikers and casual walkers, making it an ideal spot for family outings or solo adventures. Along the way, visitors can marvel at the diverse flora and fauna that thrive in this pristine environment, creating a perfect backdrop for photography enthusiasts and nature lovers. \n As you ascend, the cool mountain breeze and the chirping of native birds will accompany you, enhancing the serene experience. At the summit, the breathtaking vistas of the surrounding valleys and hills are nothing short of spectacular, providing a rewarding sense of accomplishment for those who reach the top. It's a place where one can reflect and rejuvenate, surrounded by the beauty of nature. Moreover, the local community is warm and welcoming, often sharing their insights and stories about the mountain's significance and the rich cultural heritage of the area. \n Visiting Mt. IDAY is not just about the hike; it's about immersing yourself in the natural beauty and cultural fabric of Iloilo. The mountain is accessible year-round, making it a perfect destination regardless of the season. Whether you're looking to embark on a challenging trek or simply wish to enjoy a picnic amidst nature, Mt. IDAY promises an unforgettable experience.",
    type: DestinationType.nature,
    images: [
      "/destinations/iday-1.jpeg",
      "/destinations/iday-2.jpeg",
      "/destinations/iday-3.jpeg",
    ],
    town: "Janiuay",
    mapLocation: {
      lat: 11.0319254,
      lng: 122.4240269,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Janiuay Public Market",
            to: "Mt. IDAY",
            vehicle: "Motorcycle",
            minFare: 100,
            maxFare: 120,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Public Market",
            to: "Mt. IDAY",
            vehicle: "Motorcycle",
            minFare: 100,
            maxFare: 120,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Public Market",
            to: "Mt. IDAY",
            vehicle: "Motorcycle",
            minFare: 100,
            maxFare: 120,
          },
        ],
      },
    ],
  },
  {
    id: "destination-11",
    name: "Janiuay Cemetery",
    about:
      "Janiuay Cemetery is a one-hectare tract located east of the poblacion bordering between Barangays Aquino-Nobleza and Damu-ong dates back to 1875. Built on top of a hill, it is one of the most beautiful of its kind in the country. This massive, elevated cemetery is one of the links of the Janiuaynons to the past. \n It is made up of three grand arched entrance gates with individual staircases of 21 steps leading to its rightmost entrance, 23 steps going to the main entrance, and 22 steps to its leftmost entrance. It was said that the slabs of stone and limestone blocks used in building the entire cemetery were quarried and hauled by 52 carabaos as far as the town of Dingle a town 27 kilometers away from Janiuay. The area is fenced by steel supported by columns made of stone. \n Common to most Spanish-built structures in Iloilo, egg whites were important ingredients in building this cemetery. When combined with lime and water, the mixture becomes a natural adhesive linking other construction materials together like rocks and bricks. It is also often used as a varnish to cover and protect the surfaces of columns, walls, and facades of man-made structures. \n The octagonal-shaped capilla, partially overgrown with plants and shrubs, is the centerpiece of the cemetery. Artisans from Manila were commissioned to work on its interior. It has lancet-shaped doors and windows. This would have been a place of final vigils and services for the dead. \n The building of the cemetery was under the watchful supervision of an Agustinian friar, Fr. Fernando Llorente, with actual construction being undertaken by Don Placido Marin through forced labor wherein the town folks had to transport heavy materials, such as the stones used in the construction, from its boundaries. In November 20, 1885, the cemetery was finished and inaugurated by Archbishop Payo. \n Over the past 126 years, the Janiuay Catholic Cemetery, like many other historic cemeteries in Iloilo, has suffered from neglect and natural aging. The present administration, under the leadership of Hon. Franklin H. Locsin, recognizes the historical and architectural importance of the site and is lobbying for a major restoration project at the cemetery. The project is dedicated to the preservation of not only the town, but also Iloilo’s irreplaceable historic and cultural treasure for future generations. \n From Iloilo City, to reach the start of the trail in Janiuay, one may take jeepneys that are readily available in Centraline Terminal fronting Christ the King Memorial Park in Jaro, Iloilo City. Air-conditioned vans are also available at the terminal.",
    type: DestinationType.religious,
    images: [
      "/destinations/janiuay-cemetery-1.jpeg",
      "/destinations/janiuay-cemetery-2.jpeg",
      "/destinations/janiuay-cemetery-3.jpeg",
    ],
    town: "Janiuay",
    mapLocation: {
      lat: 10.89129595131261,
      lng: 122.43320703506471,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Janiuay Public Market",
            to: "Janiuay Cemetery",
            vehicle: "Motorcycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Public Market",
            to: "Janiuay Cemetery",
            vehicle: "Motorcycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Public Market",
            to: "Janiuay Cemetery",
            vehicle: "Motorcycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
    ],
  },
  {
    id: "destination-12",
    name: "Janiuay Church",
    about:
      "Janiuay Church The St. Julian of Cuenca Parish Church, commonly called Janiuay Church, is a historic Roman Catholic church located in Janiuay, Iloilo, Philippines. It is dedicated to St. Julian of Cuenca, the patron saint of the town, and is part of the Archdiocese of Jaro. The parish itself was established in 1738, making it one of the older Catholic parishes in the province. \n The original church structure was built using sandstone, limestone, and layered bricks, and was completed around 1770 during the Spanish colonial period. It once had three large bells in its belfry, with the biggest weighing almost a ton. These bells were famous because their sound could be heard from far away. However, the church and its belfry were damaged during World War II, and the original structure was eventually left in ruins. \n Today, a new church building stands beside the ruins of the old Spanish-era church. The old ruins remain an important historical landmark, reminding visitors of the town’s rich religious and cultural history. The church is also situated on a slightly elevated area overlooking the town, giving it a scenic and peaceful atmosphere for worshippers and visitors. \n Aside from being a place of worship, the Janiuay Church is also considered one of the town’s most important heritage sites. It reflects the strong Catholic faith and Spanish colonial influence in the region. Every year, the parish celebrates the feast of St. Julian of Cuenca on January 28, which is an important religious event for the people of Janiuay.",
    type: DestinationType.religious,
    images: [
      "/destinations/janiuay-church-1.jpeg",
      "/destinations/janiuay-church-2.jpeg",
    ],
    town: "Janiuay",
    mapLocation: {
      lat: 11.032088,
      lng: 122.3441984,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
        ],
      },
    ],
  },
  {
    id: "destination-13",
    name: "Suarez Siomai Food Hub",
    about:
      "Suarez Siomai Food Hub is a popular dining destination in Abordo St, Janiuay, Philippines, 5034. It has garnered a 4.2 Google rating and is recognized as the 6th best restaurant in the area, with 36 reviews and 18 detailed photos. The restaurant offers a variety of food options and is known for its quality service. To contact Suarez Siomai Food Hub, you can reach them at 0928 363 4514. The restaurant is categorized under Restaurants and mobile food service activities, and it has a 4.1 Cybo Score.",
    type: DestinationType.food,
    images: [
      "/destinations/suarez-2.jpg",
      "/destinations/suarez-3.jpg",
      "/destinations/suarez-4.jpg",
      "/destinations/suarez-1.webp",
    ],
    town: "Janiuay",
    mapLocation: {
      lat: 10.950208,
      lng: 122.4881084,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Janiuay Poblacion",
            to: "Suarez Siomai Food Hub",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Poblacion",
            to: "Suarez Siomai Food Hub",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Poblacion",
            to: "Suarez Siomai Food Hub",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
    ],
  },
  {
    id: "destination-23",
    name: "Raac's Grill",
    about:
      "RAAC's Janiuay is a popular Filipino grill located in Brgy. Jibolo, Janiuay, Iloilo City. Known for its affordable meals and generous servings, it offers a variety of dishes including Chicken Inasal, grilled pork liempo, and sizzling sisig. The restaurant is praised for its warm atmosphere and good service, making it a favorite among locals and visitors alike. Customers appreciate the unlimited rice option, which adds to the value of the meals.",
    type: DestinationType.food,
    images: [
      "/destinations/raacs-1.png",
      "/destinations/raacs-2.png",
      "/destinations/raacs-3.png",
    ],
    town: "Janiuay",
    mapLocation: {
      lat: 10.9614084,
      lng: 122.5009241,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Janiuay Poblacion",
            to: "Raac's Grill",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
          {
            from: "Janiuay Poblacion",
            to: "Raac's Grill",
            vehicle: "Jeep",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Poblacion",
            to: "Raac's Grill",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
          {
            from: "Janiuay Poblacion",
            to: "Raac's Grill",
            vehicle: "Jeep",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Poblacion",
            to: "Raac's Grill",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
          {
            from: "Janiuay Poblacion",
            to: "Raac's Grill",
            vehicle: "Jeep",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
    ],
  },
  {
    id: "destination-24",
    name: "Keloy's Grill and Restaurant",
    about:
      "Keloy’s Grill and Restaurant is a popular local dining destination located in the municipality of Janiuay, about 30 kilometers from Iloilo City. The restaurant is specifically located along Capt. A. Tirador Street, Janiuay, 5034 Iloilo, Philippines, in the town proper. Situated along the main road, the restaurant is easy to find and accessible to both locals and visitors traveling around the area. Keloy’s Restaurant is known for serving delicious and affordable Filipino dishes that reflect the rich culinary traditions of the Ilonggo people. The restaurant offers a variety of meals such as grilled meats, fried chicken, seafood, pancit, and rice meals that are perfect for families, tourists, and groups of friends. With its simple yet welcoming atmosphere, it provides a comfortable place where visitors can relax and enjoy satisfying food after exploring nearby attractions in Janiuay. Over the years, Keloy’s Restaurant has become a familiar gathering place where people share meals and experience the warm hospitality that Iloilo is known for.",
    type: DestinationType.food,
    images: ["/destinations/keloys-1.jpg", "/destinations/keloys-2.jpg"],
    town: "Janiuay",
    mapLocation: {
      lat: 10.9496928,
      lng: 122.5041126,
    },
    contact: [
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 30,
            maxFare: 35,
          },
          {
            from: "Janiuay Poblacion",
            to: "Keloy's Grill and Restaurant",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Poblacion",
            to: "Keloy's Grill and Restaurant",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Janiuay Poblacion",
            vehicle: "Jeepney",
            minFare: 45,
            maxFare: 50,
          },
          {
            from: "Janiuay Poblacion",
            to: "Keloy's Grill and Restaurant",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
    ],
  },

  // CABATUAN
  {
    id: "destination-14",
    name: "Balic Hill",
    about:
      "Balic Hill is located about 1.5 kilometers northeast of the town poblacion of Cabatuan, in Barangay Balic. Balic Hill is considered the “Mt. Calvary” of Cabatuan because it is the site where the Way of the Cross (Via Crucis) is held every Good Friday during Holy Week. During this religious event, thousands of Roman Catholic devotees from Cabatuan and nearby towns gather and participate in the prayerful reenactment of the Stations of the Cross as they climb the hill. \n The hill serves not only as a religious pilgrimage site but also as a place of reflection and devotion for the community. Its elevated location provides a peaceful environment where visitors can pray while overlooking parts of the surrounding countryside of Cabatuan.",
    type: DestinationType.religious,
    images: ["/destinations/balic-2.jpg", "/destinations/balic-1.webp"],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.8819947,
      lng: 122.4820691,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Plaza",
            to: "Balic Hill",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
          {
            from: "Cabatuan Plaza",
            to: "Balic Hill",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Plaza",
            to: "Balic Hill",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
    ],
  },
  {
    id: "destination-15",
    name: "Paklang",
    about:
      "Paklang, the Banana Leaf Arch, is associated with Tinuom, the famous delicacy in town, the Municipality Festival, and the symbol of industry, which is the way of life of the natives of Cabatuan. \n The decorative arch often marks the entrance to special events or festivals, adding a festive touch to the surroundings. Its vibrant green color and unique design make it a popular spot for photographs and a charming representation of Cabtuan’s connection to its agricultural roots. The Banana Leaf Arch reflects the town’s cultural identity and community spirit, welcoming both locals and visitors alike.",
    type: DestinationType.historical,
    images: ["/destinations/paklang-2.jpg", "/destinations/paklang-1.jpg"],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.8819947,
      lng: 122.4820691,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
        ],
      },
    ],
  },
  {
    id: "destination-16",
    name: "San Nicolas de Tolentino Parish",
    about:
      "San Nicolas de Tolentino Parish Church is one of the most historically significant and architecturally impressive churches in the province of Iloilo. Built in the Neo-Classical architectural style, the church is known for its grand structure, balanced proportions, and elegant design that reflects the influence of Spanish colonial architecture in the Philippines. Its massive brick construction, detailed façade, and imposing presence make it one of the most remarkable religious landmarks in Western Visayas. \n The first parochial church of Cabatuan was completed in 1732, the same year the town became an independent parish under the patronage of Nicholas of Tolentino, the beloved patron saint of the community. From its early years, the church served not only as a place of worship but also as the spiritual and social center of the town. Through the efforts of missionaries and the devotion of the local people, the parish church gradually developed into an important religious institution that guided the faith and traditions of the residents of Cabatuan. \n During its time, the church was widely admired for its beauty and grandeur. In fact, the local publication El Eco de Panay once described it as the “Model of Temples,” highlighting its impressive architectural design and religious importance. The church was also recognized as the largest brick structure in Western Visayas, a testament to the remarkable craftsmanship and engineering of the period. Its thick brick walls, large columns, and spacious interior demonstrated the dedication and skill of the builders who worked to create a structure that would stand for generations. \n Beyond its architectural beauty, the church continues to hold deep cultural and spiritual significance for the people of Cabatuan. It remains the center of religious celebrations, particularly the annual feast of St. Nicholas of Tolentino, where devotees gather to honor their patron saint through prayers, processions, and community festivities. Today, the San Nicolas de Tolentino Parish Church stands not only as a symbol of faith but also as a living historical monument that reflects the rich heritage, devotion, and identity of the people of Cabatuan.",
    type: DestinationType.religious,
    images: ["/destinations/nicolas-1.jpg", "/destinations/nicolas-2.jpg"],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.8793733,
      lng: 122.4787191,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
        ],
      },
    ],
  },
  {
    id: "destination-17",
    name: "Pamul-ogan Hill Shrine",
    about:
      "Pamul-ogan Hill Shrine located in Barangay Pamul-ogan in Cabatuan, is one of the most important religious and historical sites in the town. The shrine has long been a place of devotion and reflection, especially during Holy Week, when many Roman Catholic devotees visit the hill to pray, meditate, and take part in religious activities. Because of its spiritual significance and peaceful atmosphere, the site attracts not only local residents but also pilgrims and visitors from nearby towns. \n Pamul-ogan Hill Shrine located in Barangay Pamul-ogan in Cabatuan, is one of the most important religious and historical sites in the town. The shrine has long been a place of devotion and reflection, especially during Holy Week, when many Roman Catholic devotees visit the hill to pray, meditate, and take part in religious activities. Because of its spiritual significance and peaceful atmosphere, the site attracts not only local residents but also pilgrims and visitors from nearby towns. \n Aside from its historical importance, Pamul-ogan Hill is also known for its beautiful view. From the top of the hill, visitors can clearly see the poblacion or town center of Cabatuan, as well as the nearby Iloilo International Airport. The scenic landscape, combined with its historical and religious value, makes the Pamul-ogan Hill Shrine a meaningful landmark that reflects the deep faith, history, and culture of the people of Cabatuan.",
    type: DestinationType.religious,
    images: ["/destinations/pamulogan-1.jpg", "/destinations/pamulogan-2.jpg"],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.8819947,
      lng: 122.4820691,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Bangga Tabucan",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Bangga Tabucan",
            to: "Pamul-ogan Hill Shrine",
            vehicle: "Tricycle",
            minFare: 30,
            maxFare: 40,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Bangga Tabucan",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Bangga Tabucan",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
          {
            from: "Bangga Tabucan",
            to: "Pamul-ogan Hill Shrine",
            vehicle: "Tricycle",
            minFare: 30,
            maxFare: 40,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Bangga Tabucan",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Bangga Tabucan",
            to: "Pamul-ogan Hill Shrine",
            vehicle: "Tricycle",
            minFare: 30,
            maxFare: 40,
          },
        ],
      },
    ],
  },
  {
    id: "destination-18",
    name: "Great Valley Resort",
    about:
      "Great Valley Resort is a relaxing resort located in Barangay Anuang, Cabatuan. The resort is known as a quiet and refreshing destination where visitors can enjoy nature, swimming, and bonding with family and friends. Because it is surrounded by greenery and open spaces, the place offers a peaceful atmosphere that is perfect for people who want to take a break from busy city life. \n Great Valley Resort has become a popular place for family outings, small celebrations, team-building activities, and weekend relaxation. The resort offers facilities such as swimming pools, cottages, open garden areas, and spaces for gatherings or events. Many visitors appreciate the calm environment where they can relax, swim, and spend quality time with loved ones. \n The resort is also conveniently located within the municipality of Cabatuan, which is about 24 kilometers from Iloilo City, making it accessible for travelers and local tourists. Because of its peaceful location and natural surroundings, Great Valley Resort continues to attract guests looking for a simple yet enjoyable getaway in Iloilo.",
    type: DestinationType.recreational,
    images: [
      "/destinations/gvalley-3.jpg",
      "/destinations/gvalley-1.webp",
      "/destinations/gvalley-2.webp",
    ],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.8957273,
      lng: 122.5011089,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Plaza",
            to: "Great Valley Resort",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
          {
            from: "Cabatuan Plaza",
            to: "Great Valley Resort",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Plaza",
            to: "Great Valley Resort",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
    ],
  },
  {
    id: "destination-19",
    name: "David Inland Resort",
    about:
      "David Inland Resort is a leisure resort located in Banga Cloma, Barangay Tabucan in the municipality of Cabatuan. It is known as a relaxing destination where families, friends, and visitors can enjoy swimming, outdoor recreation, and bonding activities in a peaceful environment. \n The resort offers facilities such as swimming pools, cottages, open spaces, and areas for gatherings, making it a popular venue for family outings, birthdays, reunions, and small celebrations. Because it is located away from the busy urban areas, guests can experience a quiet atmosphere surrounded by nature and fresh air. \n Many visitors choose David Inland Resort as a place to unwind and spend quality time with loved ones. Its location in the countryside of Cabatuan highlights the natural beauty and calm lifestyle of the area while still being accessible from nearby towns and Iloilo City. \n ",
    type: DestinationType.recreational,
    images: ["/destinations/david-1.webp", "/destinations/david-2.webp"],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.7014653,
      lng: 122.5382434,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Bangga Tabucan",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Bangga Tabucan",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Bangga Tabucan",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Bangga Tabucan",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
        ],
      },
    ],
  },
  {
    id: "destination-20",
    name: "Leah’s Tinuom",
    about:
      "Leah’s Tinuom is a famous local restaurant and culinary landmark in the municipality of Cabatuan, located in Zone 10 Poblacion, near the Cabatuan Public Market, E&Y Bldg, Bermejo Ext Street, Cabatuan, Philippines, 5031, known especially for serving authentic tinu om nga manok — a traditional Ilonggo dish that is a cultural specialty of the town. The name tinu om refers to chicken and spices wrapped in banana leaves and steamed, a cooking method that produces a flavorful broth and tender meat deeply rooted in Cabatuan’s heritage. \n This restaurant has a long history dating back to the 1950s, when it started as a simple carinderia near the town market. It became popular for its tinu om, a recipe passed down from one generation to the next, and has played a key role in preserving the town’s culinary tradition. Over the decades, Leah’s Tinuom has attracted visitors from across Iloilo and beyond — including features on Philippine travel shows — making it one of the must try local food destinations in Cabatuan. \n The restaurant offers this dish alongside other local Filipino favorites in a casual, welcoming setting. Customers often enjoy their meal while experiencing Cabatuan’s laid back small town atmosphere, reflecting the community pride in its signature food.",
    type: DestinationType.food,
    images: ["/destinations/leah-1.jpg"],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.8783193,
      lng: 122.4815642,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Leah's Tinuom",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Leah's Tinuom",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Leah's Tinuom",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
    ],
  },
  {
    id: "destination-21",
    name: "Darapugan Restaurant",
    about:
      "Darapugan is a local restaurant located in Barangay Ayaman, Cabatuan, Iloilo. The place is known for offering a relaxing dining experience where visitors can enjoy Filipino dishes, grilled foods, and local specialties. Many people visit Darapugan because of its peaceful environment, making it a good place for family gatherings, casual dining, and small celebrations. \n  The restaurant is designed with a simple and comfortable setting that reflects the laid-back lifestyle of the province. Customers can enjoy freshly cooked meals while experiencing the quiet atmosphere of the countryside. It is popular among locals and travelers who want to taste authentic Ilonggo flavors while visiting Cabatuan. \n Because Cabatuan is mainly an agricultural town with rice fields, farms, and rural landscapes, restaurants like Darapugan give visitors a chance to relax and enjoy food in a calm provincial environment.",
    type: DestinationType.food,
    images: [
      "/destinations/darapugan-3.jpg",
      "/destinations/darapugan-1.jpg",
      "/destinations/darapugan-2.jpg",
      "/destinations/darapugan-4.jpg",
      "/destinations/darapugan-5.jpg",
      "/destinations/darapugan-6.jpg",
    ],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.8859267,
      lng: 122.4849869,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Jeep",
            minFare: 10,
            maxFare: 15,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Jeep",
            minFare: 10,
            maxFare: 15,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Jeep",
            minFare: 10,
            maxFare: 15,
          },
        ],
      },
    ],
  },
  {
    id: "destination-22",
    name: "Anyang’s Food and Beverage",
    about:
      "Anyang’s Food and Beverage is a popular local dining spot and café in the municipality of Cabatuan, located at Tigbauan Road, Cabatuan, Iloilo, Philippines. The restaurant is known for its affordable comfort food, casual atmosphere, and friendly service, making it a favorite among locals and visitors alike. Many come for quick meals, snacks, drinks, lunch, or casual hangouts. Reviewers especially praise its chicken dishes and varied lunchtime options, perfect for everyday dining. \n Guests also enjoy the relaxed vibe and coffee/tea offerings, making it an ideal place to stop by for a simple meal, a drink with friends, or a quick bite during a food trip around Cabatuan. Its accessible location in the town proper ensures that both residents and travelers can easily find and enjoy the restaurant.",
    type: DestinationType.food,
    images: [
      "/destinations/anyang-3.jpg",
      "/destinations/anyang-1.jpg",
      "/destinations/anyang-2.jpg",
      "/destinations/anyang-4.jpg",
      "/destinations/anyang-5.jpg",
      "/destinations/anyang-6.jpg",
    ],
    town: "Cabatuan",
    mapLocation: {
      lat: 10.9207486,
      lng: 122.4856027,
    },
    contact: [
      {
        entity: "Mobile",
        hotline: "09653413256",
      },
      {
        entity: "Facebook",
        hotline: "Test Facebook Account",
      },
    ],
    fares: [
      {
        origin: "airport",
        steps: [
          {
            from: "Iloilo International Airport",
            to: "Sta. Barbara",
            vehicle: "Tricyle",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Sta. Barbara",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Tricycle",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Jeep",
            minFare: 15,
            maxFare: 20,
          },
        ],
      },
      {
        origin: "terminal-1",
        steps: [
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 20,
            maxFare: 25,
          },
          {
            from: "Robinson's Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "E-bus",
            minFare: 37,
            maxFare: 41,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Jeep",
            minFare: 10,
            maxFare: 15,
          },
        ],
      },
      {
        origin: "terminal-2",
        steps: [
          {
            from: "Christ The King Pavia Terminal",
            to: "Cabatuan Plaza",
            vehicle: "Jeepney",
            minFare: 25,
            maxFare: 30,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Tricycle",
            minFare: 15,
            maxFare: 20,
          },
          {
            from: "Cabatuan Poblacion",
            to: "Darapugan",
            vehicle: "Jeep",
            minFare: 10,
            maxFare: 15,
          },
        ],
      },
    ],
  },
];
