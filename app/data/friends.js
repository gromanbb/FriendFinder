// ===============================================================================
// DATA
// Below data will hold all of the friends info.
// ===============================================================================
const friendsArray = [
  {
    "name": "Brie Larson",
    "photo": "https://media.gettyimages.com/photos/brie-larson-during-the-ace-comic-con-midwest-at-donald-e-stephens-picture-id1175534671?k=6&m=1175534671&s=612x612&w=0&h=tCcR2QKgRC_bfSTqR2Q4tJW4EmHwHLxzMfPHTr-fQK0=",
    "scores": [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    "name": "Chris Hemsworth",
    "photo": "https://media.gettyimages.com/photos/chris-hemsworth-during-the-ace-comic-con-midwest-at-donald-e-stephens-picture-id1175665255?k=6&m=1175665255&s=612x612&w=0&h=7PHewjJxLk4iHViLiYHZBYuU2G_iyVNs2jqoiR2Urh0=",
    "scores": [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    "name": "Jake Gyllenhaal",
    "photo": "https://media.gettyimages.com/photos/jake-gyllenhaal-during-the-ace-comic-con-midwest-at-donald-e-stephens-picture-id1175534707?k=6&m=1175534707&s=612x612&w=0&h=cPPbDQRLlc6eSjvuQXJoKWWpHm4SY1RbspqUoFX69ko=",
    "scores": [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    "name": "Tessa Thompson",
    "photo": "https://media.gettyimages.com/photos/tessa-thompson-attends-ace-comic-con-midwest-at-donald-e-stephens-picture-id1180707397?k=6&m=1180707397&s=612x612&w=0&h=uQYc_9kYLw0a_ufC99QUbSbNe0WDIZbw3pdx4iWIzj8=",
    "scores": [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    "name": "Kit Harington",
    "photo": "https://media.gettyimages.com/photos/kit-harington-speaks-on-stage-during-ace-comic-con-midwest-at-donald-picture-id1180897306?k=6&m=1180897306&s=612x612&w=0&h=51yTkTweppXx9VR0FUgRU2x_mvSuR8thwZ2driPqSXU=",
    "scores": [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    "name": "Gwendoline Christie",
    "photo": "https://media.gettyimages.com/photos/gwendoline-christie-attends-ace-comic-con-midwest-at-donald-e-on-picture-id1180659520?k=6&m=1180659520&s=612x612&w=0&h=U1T8rGVApN7s7XbViFwa9ZfTTrQha6CnydpmnNF7EAk=",
    "scores": [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  },
  {
    "name": "Paul Rudd",
    "photo": "https://media.gettyimages.com/photos/paul-rudd-speaks-onstage-during-a-talk-with-michael-specter-at-the-picture-id1180696980?k=6&m=1180696980&s=612x612&w=0&h=YmmhC5QWRScaNwDAU8O4QUlx5V8EvRvCWdpmfb2rSRs=",
    "scores": [
      "4",
      "5",
      "3",
      "2",
      "4",
      "2",
      "4",
      "4",
      "2",
      "3"
    ]
  },
  {
    "name": "Sophie Turner",
    "photo": "https://media.gettyimages.com/photos/sophie-turner-attending-the-game-of-thrones-premiere-held-at-hall-picture-id1136479737?k=6&m=1136479737&s=612x612&w=0&h=tECk-dy9OFT3ht-7mQmdJfFYlCTHARaEqmPs5OtYYoI=",
    "scores": [
      "3",
      "3",
      "3",
      "3",
      "3",
      "2",
      "2",
      "2",
      "4",
      "2"
    ]
  },
  {
    "name": "Scarlett Johansson",
    "photo": "https://media.gettyimages.com/photos/scarlett-johansson-attends-the-los-angeles-world-premiere-of-marvel-picture-id1138776166?k=6&m=1138776166&s=612x612&w=0&h=hluJP5oyuoVYUVzt47loiNA5lNT25s21TsV5ZFp_VtI=",
    "scores": [
      "4",
      "3",
      "3",
      "4",
      "2",
      "4",
      "2",
      "2",
      "4",
      "4"
    ]
  },
  {
    "name": "Nathalie Emmanuel",
    "photo": "https://media.gettyimages.com/photos/nathalie-emmanuel-attending-the-game-of-thrones-premiere-held-at-picture-id1136489305?k=6&m=1136489305&s=612x612&w=0&h=EykYIRB9OYqlY79Q1-0tBmIzVOQYda2Q4mrDMOkKMo8=",
    "scores": [
      "1",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    "name": "Zoe Saldana",
    "photo": "https://media.gettyimages.com/photos/zoe-saldana-attends-the-los-angeles-world-premiere-of-marvel-studios-picture-id1138776381?k=6&m=1138776381&s=612x612&w=0&h=tP1fRVfnroeWlKLQFgSJygSMfyRCvV6t0y0IUlLJmWo=",
    "scores": [
      "1",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    "name": "Jeremy Renner",
    "photo": "https://media.gettyimages.com/photos/jeremy-renner-of-marvel-studios-hawkeye-at-the-san-diego-comiccon-picture-id1163287239?k=6&m=1163287239&s=612x612&w=0&h=BSn9atAHHkfkMUlnajhxyRJmJILVXC2FNhi1Beq-hOg=",
    "scores": [
      "1",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    "name": "White Walker",
    "photo": "https://media.gettyimages.com/photos/white-walker-on-display-at-the-game-of-thrones-the-touring-exhibition-picture-id1136110627?k=6&m=1136110627&s=612x612&w=0&h=nqSFHFFdMeYvzllOE_uIwMSsco4FDo8SgOs-pH-Hunc=",
    "scores": [
      "1",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    "name": "Jacob Anderson",
    "photo": "https://media.gettyimages.com/photos/jacob-anderson-attending-the-game-of-thrones-premiere-held-at-hall-picture-id1136469287?k=6&m=1136469287&s=612x612&w=0&h=MHKcKd-HWvSS7O9uhgLRnyjDRdc-xM76PuKjJEWwCBQ=",
    "scores": [
      "1",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    "name": "Benedict Cumberbatch",
    "photo": "https://media.gettyimages.com/photos/benedict-cumberbatch-of-marvel-studios-doctor-strange-in-the-of-at-picture-id1163285699?k=6&m=1163285699&s=612x612&w=0&h=Libm3nngDqQHnMjT7H0HFmK0Ug-KXH2vE4-xPQLzG_g=",
    "scores": [
      "1",
      "3",
      "2",
      "4",
      "3",
      "2",
      "3",
      "3",
      "3",
      "2"
    ]
  },
  {
    "name": "Issac Hempstead",
    "photo": "https://media.gettyimages.com/photos/issac-hempstead-wright-attending-the-game-of-thrones-premiere-held-at-picture-id1136479515?k=6&m=1136479515&s=612x612&w=0&h=8yqPoLc2-sG3KrokOiN7x95qSt2RjTpjkXBNvW7CPEI=",
    "scores": [
      "1",
      "3",
      "1",
      "1",
      "3",
      "2",
      "2",
      "3",
      "3",
      "1"
    ]
  },
  {
    "name": "Tom Hiddleston",
    "photo": "https://media.gettyimages.com/photos/tom-hiddleston-of-marvel-studios-loki-at-the-san-diego-comiccon-2019-picture-id1163286987?k=6&m=1163286987&s=612x612&w=0&h=4-cnu8ZhIWK1cHGhpYUYXNpAzj678vk9gwrndjDcoC4=",
    "scores": [
      "1",
      "3",
      "1",
      "1",
      "3",
      "2",
      "2",
      "3",
      "3",
      "1"
    ]
  },
  {
    "name": "Samuel L. Jackson",
    "photo": "https://media.gettyimages.com/photos/samuel-l-jackson-attends-the-press-conference-for-captain-marvel-at-picture-id1124819870?k=6&m=1124819870&s=612x612&w=0&h=XMD0qXyg7lFl5t_rXeyy-SOiMY-MsQfgRLI_bBNxSww=",
    "scores": [
      "1",
      "3",
      "1",
      "1",
      "3",
      "2",
      "2",
      "3",
      "3",
      "1"
    ]
  },
  {
    "name": "Maisie Williams",
    "photo": "https://media.gettyimages.com/photos/maisie-williams-attending-the-game-of-thrones-premiere-held-at-hall-picture-id1136490197?k=6&m=1136490197&s=612x612&w=0&h=lO72Gf7rbXSiNnNKvhw3rwEJj3K7qlKMM0dsMJsOEmU=",
    "scores": [
      "1",
      "3",
      "1",
      "1",
      "3",
      "2",
      "2",
      "3",
      "3",
      "1"
    ]
  },
  {
    "name": "Don Cheadle",
    "photo": "https://media.gettyimages.com/photos/don-cheadle-speaks-onstage-during-marvel-studios-avengers-endgame-picture-id1135641586?k=6&m=1135641586&s=612x612&w=0&h=Vf5hP30Gs4e4tMgu_eXHKahUeHZ3PUwgSTspYnFZhWU=",
    "scores": [
      "1",
      "3",
      "1",
      "1",
      "3",
      "2",
      "2",
      "3",
      "3",
      "1"
    ],
  },
  {
    "name": "Robert Downey Jr.",
    "photo": "https://media.gettyimages.com/photos/robert-downey-jr-and-don-cheadle-speak-onstage-during-marvel-studios-picture-id1135641591?k=6&m=1135641591&s=612x612&w=0&h=ELQ3lyXr5H-6een3UxlFama9LpMsmkDyuQ2Ng_3374w=",
    "scores": [
      "2",
      "3",
      "3",
      "4",
      "1",
      "3",
      "3",
      "2",
      "2",
      "2"
    ]
  },
  {
    "name": "Jude Law",
    "photo": "https://media.gettyimages.com/photos/jude-law-attends-the-captain-marvel-european-gala-held-at-the-curzon-picture-id1132584005?k=6&m=1132584005&s=612x612&w=0&h=PcQndF1QdfUyRHvHZ7NXutvORNrCOE8DhXNlVAKZ7Qs=",
    "scores": [
      "2",
      "2",
      "2",
      "3",
      "3",
      "2",
      "2",
      "2",
      "2",
      "2"
    ]
  },
  {
    "name": "Gwyneth Paltrow",
    "photo": "https://media.gettyimages.com/photos/actress-gwyneth-paltrow-arrives-for-the-world-premiere-of-marvel-picture-id1138768992?k=6&m=1138768992&s=612x612&w=0&h=QwvdMNYCD6E4wbxOXf_R4xu0-Pa8s9dk_qzNAohMxQY=",
    "scores": [
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  },
  {
    "name": "Chris Evans",
    "photo": "https://media.gettyimages.com/photos/chris-evans-attends-the-world-premiere-of-walt-disney-studios-motion-picture-id1138768603?k=6&m=1138768603&s=612x612&w=0&h=0xYagYHwUpEM-s7Zh3lGVryq-qZZo4lXi8a8bqCJXeM=",
    "scores": [
      "1",
      "2",
      "1",
      "1",
      "3",
      "2",
      "2",
      "2",
      "2",
      "2"
    ]
  }
];

// Export array to make it accessible to other files using require.
module.exports = friendsArray;
