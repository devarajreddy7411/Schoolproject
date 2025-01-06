const teachersData = [
    {
        id: 1,
        name: "Liam Johnson",
        subject: "Biology",
        phone: "555-123-4567",
        email: "liam.johnson@mail.com",
        location: "City C, Country Z",
        about: "Passionate about wildlife conservation and biology education.",
        education: [
            {
                degree: "Biology Major",
                university: "University A",
                years: "2010-2014"
            }
        ],
        expertise: [
            "Genetics",
            "Ecology",
            "Microbiology"
        ],
        schedule: [
            {
                subject: "Genetics",
                class: "VII-A",
                date: "February 12, 2022",
                time: "09:00 - 10:00 AM",
                borderColor: 'rgba(77, 68, 181, 1)' // Blue
            }
        ]
    },
    {
        id: 2,
        name: "Emma Williams",
        subject: "Chemistry",
        phone: "555-234-5678",
        email: "emma.williams@mail.com",
        location: "City D, Country W",
        about: "Dedicated to fostering a love for chemistry in students.",
        education: [
            {
                degree: "Chemistry Major",
                university: "University B",
                years: "2011-2015"
            }
        ],
        expertise: [
            "Organic Chemistry",
            "Inorganic Chemistry",
            "Analytical Chemistry"
        ],
        schedule: [
            {
                subject: "Organic Chemistry",
                class: "VII-B",
                date: "March 15, 2022",
                time: "10:00 - 11:00 AM",
                borderColor: 'rgba(251, 125, 91, 1)' // Orange
            }
        ]
    },
    {
        id: 3,
        name: "Noah Brown",
        subject: "History",
        phone: "555-345-6789",
        email: "noah.brown@mail.com",
        location: "City E, Country V",
        about: "A history enthusiast with a focus on modern history.",
        education: [
            {
                degree: "History Major",
                university: "University C",
                years: "2012-2016"
            }
        ],
        expertise: [
            "World History",
            "Ancient Civilizations",
            "Modern History"
        ],
        schedule: [
            {
                subject: "World History",
                class: "VII-C",
                date: "April 20, 2022",
                time: "11:00 - 12:00 PM",
                borderColor: 'rgba(252, 196, 62, 1)' // Yellow
            }
        ]
    },
    {
        id: 4,
        name: "Olivia Jones",
        subject: "English Literature",
        phone: "555-456-7890",
        email: "olivia.jones@mail.com",
        location: "City F, Country U",
        about: "Lover of literature and poetry, inspiring students through classic texts.",
        education: [
            {
                degree: "Literature Major",
                university: "University D",
                years: "2013-2017"
            }
        ],
        expertise: [
            "Poetry",
            "Shakespeare",
            "Contemporary Literature"
        ],
        schedule: [
            {
                subject: "Poetry",
                class: "VII-A",
                date: "May 15, 2022",
                time: "12:00 - 01:00 PM",
                borderColor: 'rgba(48, 57, 114, 1)' // Dark Blue
            }
        ]
    },
    {
        id: 5,
        name: "Isabella Garcia",
        subject: "Computer Science",
        phone: "555-567-8901",
        email: "isabella.garcia@mail.com",
        location: "City G, Country T",
        about: "Tech-savvy teacher passionate about programming and robotics.",
        education: [
            {
                degree: "Computer Science Major",
                university: "University E",
                years: "2014-2018"
            }
        ],
        expertise: [
            "Programming",
            "Web Development",
            "Artificial Intelligence"
        ],
        schedule: [
            {
                subject: "Web Development",
                class: "VII-B",
                date: "June 10, 2022",
                time: "01:00 - 02:00 PM",
                borderColor: 'rgba(77, 68, 181, 1)' // Blue
            }
        ]
    },
    {
        id: 6,
        name: "Mason Rodriguez",
        subject: "Art",
        phone: "555-678-9012",
        email: "mason.rodriguez@mail.com",
        location: "City H, Country S",
        about: "Creative spirit dedicated to nurturing young artists.",
        education: [
            {
                degree: "Fine Arts Major",
                university: "University F",
                years: "2015-2019"
            }
        ],
        expertise: [
            "Painting",
            "Sculpture",
            "Digital Art"
        ],
        schedule: [
            {
                subject: "Painting",
                class: "VII-C",
                date: "July 20, 2022",
                time: "02:00 - 03:00 PM",
                borderColor: 'rgba(251, 125, 91, 1)' // Orange
            }
        ]
    },
    {
        id: 7,
        name: "Sophia Martinez",
        subject: "Physics",
        phone: "555-789-0123",
        email: "sophia.martinez@mail.com",
        location: "City I, Country R",
        about: "Physics enthusiast with a passion for quantum mechanics and astrophysics.",
        education: [
            {
                degree: "Physics Major",
                university: "University G",
                years: "2016-2020"
            }
        ],
        expertise: [
            "Quantum Mechanics",
            "Astrophysics",
            "Thermodynamics"
        ],
        schedule: [
            {
                subject: "Quantum Mechanics",
                class: "VII-A",
                date: "August 10, 2022",
                time: "09:00 - 10:00 AM",
                borderColor: 'rgba(252, 196, 62, 1)' // Yellow
            }
        ]
    },
    {
        id: 8,
        name: "James Lee",
        subject: "Mathematics",
        phone: "555-890-1234",
        email: "james.lee@mail.com",
        location: "City J, Country Q",
        about: "Mathematics teacher who enjoys making complex equations easy to understand.",
        education: [
            {
                degree: "Mathematics Major",
                university: "University H",
                years: "2010-2014"
            }
        ],
        expertise: [
            "Calculus",
            "Algebra",
            "Geometry"
        ],
        schedule: [
            {
                subject: "Calculus",
                class: "VII-B",
                date: "September 20, 2022",
                time: "10:00 - 11:00 AM",
                borderColor: 'rgba(48, 57, 114, 1)' // Dark Blue
            }
        ]
    },
    {
        id: 9,
        name: "Lucas Davis",
        subject: "Geography",
        phone: "555-901-2345",
        email: "lucas.davis@mail.com",
        location: "City K, Country P",
        about: "Geography enthusiast focusing on physical and human geography.",
        education: [
            {
                degree: "Geography Major",
                university: "University I",
                years: "2015-2019"
            }
        ],
        expertise: [
            "Physical Geography",
            "Human Geography",
            "Cartography"
        ],
        schedule: [
            {
                subject: "Physical Geography",
                class: "VII-C",
                date: "October 15, 2022",
                time: "11:00 - 12:00 PM",
                borderColor: 'rgba(251, 125, 91, 1)' // Orange
            }
        ]
    },
    {
        id: 10,
        name: "Charlotte Wilson",
        subject: "Music",
        phone: "555-012-3456",
        email: "charlotte.wilson@mail.com",
        location: "City L, Country O",
        about: "A talented musician dedicated to teaching students how to play various instruments.",
        education: [
            {
                degree: "Music Major",
                university: "University J",
                years: "2016-2020"
            }
        ],
        expertise: [
            "Piano",
            "Violin",
            "Music Theory"
        ],
        schedule: [
            {
                subject: "Piano Lessons",
                class: "VII-A",
                date: "November 5, 2022",
                time: "01:00 - 02:00 PM",
                borderColor: 'rgba(77, 68, 181, 1)' // Blue
            }
        ]
    },
    {
        id: 11,
        name: "Alexander Moore",
        subject: "Physical Education",
        phone: "555-123-6789",
        email: "alexander.moore@mail.com",
        location: "City M, Country N",
        about: "Fitness and sports enthusiast dedicated to promoting physical health.",
        education: [
            {
                degree: "Sports Science Major",
                university: "University K",
                years: "2012-2016"
            }
        ],
        expertise: [
            "Sports Science",
            "Athletics",
            "Fitness Training"
        ],
        schedule: [
            {
                subject: "Athletics",
                class: "VII-B",
                date: "December 10, 2022",
                time: "02:00 - 03:00 PM",
                borderColor: 'rgba(252, 196, 62, 1)' // Yellow
            }
        ]
    },
    {
        id: 12,
        name: "Amelia Harris",
        subject: "French",
        phone: "555-234-7890",
        email: "amelia.harris@mail.com",
        location: "City N, Country M",
        about: "Linguistics expert who loves teaching the French language and culture.",
        education: [
            {
                degree: "Linguistics Major",
                university: "University L",
                years: "2010-2014"
            }
        ],
        expertise: [
            "French Language",
            "Translation",
            "French Literature"
        ],
        schedule: [
            {
                subject: "French Basics",
                class: "VII-C",
                date: "January 15, 2023",
                time: "09:00 - 10:00 AM",
                borderColor: 'rgba(48, 57, 114, 1)' // Dark Blue
            }
        ]
    },
    {
        id: 13,
        name: "Henry Clark",
        subject: "Philosophy",
        phone: "555-345-8901",
        email: "henry.clark@mail.com",
        location: "City O, Country L",
        about: "Philosopher who enjoys discussing ethical dilemmas and ancient philosophers.",
        education: [
            {
                degree: "Philosophy Major",
                university: "University M",
                years: "2008-2012"
            }
        ],
        expertise: [
            "Ethics",
            "Logic",
            "Ancient Philosophy"
        ],
        schedule: [
            {
                subject: "Ethics",
                class: "VII-A",
                date: "February 5, 2023",
                time: "10:00 - 11:00 AM",
                borderColor: 'rgba(251, 125, 91, 1)' // Orange
            }
        ]
    },
    {
        id: 14,
        name: "Evelyn Scott",
        subject: "Economics",
        phone: "555-456-9012",
        email: "evelyn.scott@mail.com",
        location: "City P, Country K",
        about: "Economics teacher with a focus on micro and macroeconomic principles.",
        education: [
            {
                degree: "Economics Major",
                university: "University N",
                years: "2010-2014"
            }
        ],
        expertise: [
            "Microeconomics",
            "Macroeconomics",
            "Market Theory"
        ],
        schedule: [
            {
                subject: "Macroeconomics",
                class: "VII-B",
                date: "March 10, 2023",
                time: "11:00 - 12:00 PM",
                borderColor: 'rgba(77, 68, 181, 1)' // Blue
            }
        ]
    },
    {
        id: 15,
        name: "Aiden Carter",
        subject: "Political Science",
        phone: "555-567-0123",
        email: "aiden.carter@mail.com",
        location: "City Q, Country J",
        about: "Political Science teacher who enjoys discussing global politics and policy-making.",
        education: [
            {
                degree: "Political Science Major",
                university: "University O",
                years: "2011-2015"
            }
        ],
        expertise: [
            "International Relations",
            "Political Theory",
            "Public Policy"
        ],
        schedule: [
            {
                subject: "Political Theory",
                class: "VII-C",
                date: "April 20, 2023",
                time: "12:00 - 01:00 PM",
                borderColor: 'rgba(252, 196, 62, 1)' // Yellow
            }
        ]
    },
    {
        id: 16,
        name: "Mia Parker",
        subject: "Psychology",
        phone: "555-678-1234",
        email: "mia.parker@mail.com",
        location: "City R, Country I",
        about: "Psychology teacher passionate about mental health and behavioral studies.",
        education: [
            {
                degree: "Psychology Major",
                university: "University P",
                years: "2012-2016"
            }
        ],
        expertise: [
            "Behavioral Psychology",
            "Cognitive Science",
            "Mental Health"
        ],
        schedule: [
            {
                subject: "Cognitive Science",
                class: "VII-A",
                date: "May 5, 2023",
                time: "09:00 - 10:00 AM",
                borderColor: 'rgba(48, 57, 114, 1)' // Dark Blue
            }
        ]
    }
];

export default teachersData;
