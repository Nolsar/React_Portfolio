let resumeData = {
    // "imagebaseurl":"https://github.com/Nolsar/nolsar.github.io",
    "name": "Sara A. Nolan",
    "role": "Full-stack Developer",
    "linkedinId":"https://www.linkedin.com/in/sara-n-940845161/",
    // "skypeid": "Your skypeid",
    "roleDescription": "I am a future full-stack web developer, with a bachelor's degree from Rutger's University in Business Administration and a concentration in Data Analytics. I enjoy working with various parts of frontend development, problem solving, and learning about new technologies. In my free time I enjoy the outdoors, reading, traveling and art.",
    "socialLinks":[
        {
          id: 1,
          "name":"linkedin",
          "url":"www.linkedin.com/in/sanolan",
          "className":"fa fa-linkedin"
        },
        {
          id: 2,
          "name":"github",
          "url":"https://github.com/Nolsar",
          "className":"fa fa-github"
        },
        // {
        //   "name":"skype",
        //   "url":"http://twitter.com/rbhatia46",
        //   "className":"fa fa-twitter"
        // }
      ],
    "aboutme":"A future full-stack web developer, with a bachelor's degree from Rutgers University in Business Administration and a concentration in Data Analytics. Workign towards a career in front-end development. I believe that to be successful in life, one needs to go after their dreams and passions, and never stop pursuing them.",
    "address":"New Jersey",
    "website":"https://github.com/Nolsar",
    "education":[
      {
        id: 1,
        "UniversityName":"Rutgers University Business School",
        "specialization":"Data Analytics",
        "MonthOfPassing":"January",
        "YearOfPassing":"2022",
        "Achievements":"Dean's List"
      },
      {
        id: 2,
        "UniversityName":"Brookdale Community College",
        "specialization":"Business Adminstration",
        "MonthOfPassing":"May",
        "YearOfPassing":"2018",
        // "Achievements":"Some Achievements"
      }
    ],
    "work":[
      {
        id: 1,
        "CompanyName":"Banfield Pet Hospital",
        "specialization":"Practice Manager, Shift Lead",
        "MonthOfLeaving":"Current",
        // "YearOfLeaving":"Current",
        // "Achievements":"Some Achievements"
      },
      // {
      //   "CompanyName":"Some Company",
      //   "specialization":"Some specialization",
      //   "MonthOfLeaving":"Jan",
      //   "YearOfLeaving":"2018",
      //   "Achievements":"Some Achievements"
      // }
    ],
    // "skillsDescription":"Your skills here",
    "skills":[
      {
        "skillname":"HTML5"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname":"NodeJS"
      },
      {
        "skillname":"MySQL & R"
      },
      {
        "skillname":"Reactjs"
      }
    ],
    "portfolio":[
      {
        id: 1,
        "name":"Extended Play",
        "description":"Extended Play is a web application which utilizes several API's to call information regarding bands and concerts within a specified radius. Results populate bio, discography, image, and closest event or events. Once events are listed, another listing will show nearest bars to venue, effectively 'extending play' for your evening.",
        "imgurl":"images/extended_play.jpg",
        // "imgurl":"images/extended_play.jpg",
        "deployedapp": "https://nolsar.github.io/extendedplay/",
        "githuburl": "https://github.com/Nolsar/extendedplay"
      },
      {
        id: 2,
        "name":"Pet Speak Health",
        "description":"Pet Speak Health (PSH) enables the storage of medical notes, history, and other relevant medical records specific to a pet and their owner. Pet Speak Health uses STT (Speech to Text) notation for when your hands are occupied caring for a per. Medical record transcription takes the pen out of your hands so you can focus on what is really important... caring for the animals! When activated, PSH records audio and will transcribe your notes and store them to a pet's unique file the server. The pet's records are unique to each client ie: owner. Medical records are accessible to the staff, as well as the owner.",
        "imgurl":"images/pet_speak_health.jpg",
        "deployedapp": "https://pet-speak-health.herokuapp.com/",
        "githuburl": "https://github.com/Nolsar/Pet_Speak_Health"
      },
      {
        id: 3,
        "name":"Budget Tracker",
        "description":"A PWA (progressive web application) that allows user to be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",  
        "imgurl":"images/budget_tracker.jpg",
        "deployedapp": "https://shielded-wildwood-66211.herokuapp.com/",
        "githuburl": "https://github.com/Nolsar/Online-Offline_Budget_Trackers"
      },
      {
        id: 4,
        "name":"Note Taker",
        "description":"This is a simple Note Taker application that allows users to add, view saved notes and also delete the notes if the user don't need that note anymore. This application uses an express backend and save and retrieve note data from a JSON file.",
        "imgurl":"images/note_taker.jpg",
        "deployedapp": "https://nolsar-note-taker.herokuapp.com/",
        "githuburl": "https://github.com/Nolsar/Note_Taker"
      }
    ],
  }
  
  export default resumeData;