# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Project.delete_all
Reward.delete_all
Category.delete_all
Backing.delete_all

users = []

100.times do
  user = {
    username: Faker::Internet.user_name,
    password: 'football',
    email: Faker::Internet.email

  }
  users << user
end


User.create!(
username: "Thanks for stopping by!",
password: "super_groovy"
)

rewards = []

100.times do
  reward = {
      title: Faker::Book.title,
      amount: rand(1..100),
      body: Faker::Food.ingredient,
      project_id: rand(1..6)
  }
  rewards << reward
end

backings = []

100.times do
  backing = {
    reward_id: rand(1..100),
    backer_id: rand(1..100)
  }

  backings << backing
end



User.create(users)
Reward.create(rewards)
Backing.create(backings)

images = [
  'http://il3.picdn.net/shutterstock/videos/12459260/thumb/1.jpg',
  'http://2.bp.blogspot.com/-5asfWHfozyw/VL2PlL-37II/AAAAAAAAA0Q/bi_cSaRjQtQ/s1600/598455.jpg',
  'http://3.bp.blogspot.com/-yuWfMLvMN7Q/VS41c4RkcaI/AAAAAAAAAHQ/I2PcxV7RjkM/s1600/canard-mandarin-620x295.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/f6/91/31/f691311f9fbe76afafad2c67abccc0fe.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/4c/b1/ea/4cb1ead770e88fed3e1324f06b64b8e4.jpg',
  'https://www.livingwithbirds.com/images/web/tweetapedia/21-facts-on-mandarin-duck/21-facts-on-mandarin-duck-i1.jpg',
  'https://3.bp.blogspot.com/-vxg0Avqgh6Y/Vlnxu8883SI/AAAAAAAAlxs/3Qfikj2Ipos/s640/amazing-duck-water-hd-images-desktop-cool-hd-wallpapers-fullscreen.jpg',
  'https://www.mypetchicken.com/images/product_images/large/Studio_WSilkie_649_bc.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/3c/9d/f1/3c9df195fde5921afd475a0b476bed6d.jpg',
  'https://www.cacklehatchery.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/h/whitesil2_1_.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/07/35/c1/0735c1ec285d5e512fa1c110b9fcfb1a.jpg'
  ]


category1 = Category.create(name: 'Mallards')
category2 = Category.create(name: 'Pond Ducks')
category3 = Category.create(name: 'Duck Wellness')
category4 = Category.create(name: 'Senior Ducks')
category5 = Category.create(name: "Community Ducks")
category6 = Category.create(name: "Private Ducks")
category7 = Category.create(name: "'Other' Ducks")


Project.create!(
  title: 'Ducks are generally monogamous',
  blurb: "10 things about ducks -- at number 7, my jaw dropped",
  img_url: images[rand(11)],
  about: "The overall body plan of ducks is elongated and broad, and the ducks are also relatively long-necked, albeit not as long-necked as the geese and swans. The body shape of diving ducks varies somewhat from this in being more rounded. The bill is usually broad and contains serrated lamellae, which are particularly well defined in the filter-feeding species. In the case of some fishing species the bill is long and strongly serrated. The scaled legs are strong and well developed, and generally set far back on the body, more so in the highly aquatic species. The wings are very strong and are generally short and pointed, and the flight of ducks requires fast continuous strokes, requiring in turn strong wing muscles. Three species of steamer duck are almost flightless, however. Many species of duck are temporarily flightless while moulting; they seek out protected habitat with good food supplies during this period. This moult typically precedes migration.
The drakes of northern species often have extravagant plumage, but that is moulted in summer to give a more female-like appearance, the eclipse plumage. Southern resident species typically show less sexual dimorphism, although there are exceptions like the paradise shelduck of New Zealand which is both strikingly sexually dimorphic and where the female's plumage is brighter than that of the male. The plumage of juvenile birds generally resembles that of the female. Over the course of evolution, female ducks have evolved to have a corkscrew shaped vagina to prevent rape.",
  funding_goal: "10000",
  complete: false,
  funding: 5000,
  duration: "30",
  created_at: DateTime.strptime("02/05/2017 17:00", "%m/%d/%Y %H:%M"),
  author_id: rand(1..100),
  category_id: rand(1..6),
  city: Faker::Address.city,
  state: Faker::Address.state,
)

Project.create!(
  title: 'Ducks Foraging along the Lake Okanagan Shoreline',
  blurb: "Goodness what is up with this duck",
  img_url: images[rand(11)],
  about: 'Ducks exploit a variety of food sources such as grasses, aquatic plants, fish, insects, small amphibians, worms, and small molluscs. Dabbling ducks feed on the surface of water or on land, or as deep as they can reach by up-ending without completely submerging.[3] Along the edge of the beak there is a comb-like structure called a pecten. This strains the water squirting from the side of the beak and traps any food. The pecten is also used to preen feathers and to hold slippery food items. Diving ducks and sea ducks forage deep underwater. To be able to submerge more easily, the diving ducks are heavier than dabbling ducks, and therefore have more difficulty taking off to fly. A few specialized species such as the mergansers are adapted to catch and swallow large fish. The others have the characteristic wide flat beak adapted to dredging-type jobs such as pulling up waterweed, pulling worms and small molluscs out of mud, searching for insect larvae, and bulk jobs such as dredging out, holding, turning head first, and swallowing a squirming frog. To avoid injury when digging into sediment it has no cere, but the nostrils come out through hard horn.The Guardian (British newspaper) published an article on Monday 16 March 2015 advising that ducks should not be fed with bread because it damages the health of the ducks and pollutes waterways.[4]',
  funding_goal: '10000',
  funding: 11000,
  complete: true,
  duration: "30",
  created_at: DateTime.strptime("02/01/2017 15:00", "%m/%d/%Y %H:%M"),
  author_id: rand(1..100),
  category_id: rand(1..6),
  city: Faker::Address.city,
  state: Faker::Address.state,
)

Project.create!(
  title: 'Worldwide, ducks have many predators',
  blurb: "The ducks have a cosmopolitan distribution.",
  img_url: images[rand(11)],
  about: 'Females of most dabbling ducks[citation needed] make the classic "quack" sound, but despite widespread misconceptions, most species of duck do not "quack". In general, ducks make a wide range of calls, ranging from whistles, cooing, yodels and grunts. For example, the scaup – which are diving ducks – make a noise like "scaup" (hence their name). Calls may be loud displaying calls or quieter contact calls. A common urban legend claims that duck quacks do not echo; however, this has been proven to be false. This myth was first debunked by the Acoustics Research Centre at the University of Salford in 2003 as part of the British Associations Festival of Science.[7] It was also debunked in one of the earlier episodes of the popular Discovery Channel television show MythBusters',
  complete: false,
  funding_goal: '10000',
  funding: rand(10..10000),
  duration: "30",
  created_at: DateTime.strptime("01/25/2017 10:00", "%m/%d/%Y %H:%M"),
  author_id: rand(1..100),
  category_id: rand(1..6),
  city: Faker::Address.city,
  state: Faker::Address.state,
)


Project.create!(
  title: 'a tale of two cities by charles duckins',
  blurb: "The Call duck is the world's smallest domestic duck ",
  img_url: images[rand(11)],
  about: 'Ducks have many economic uses, being farmed for their meat, eggs, and feathers (particularly their down). They are also kept and bred by aviculturists and often displayed in zoos. Almost all the varieties of domestic ducks are descended from the mallard (Anas platyrhynchos), apart from the Muscovy duck (Cairina moschata).[9][10] The Call duck is another example of a domestic duck breed. Its name comes from its original use established by hunters. This was to attract wild mallards from the sky, into traps set for them on the ground. The Call duck has also received a place as the worlds smallest domestic duck breed, as it weighs less than 1kg. [11]',
  complete: false,
  funding_goal: '10000',
  funding: rand(10..10000),
  duration: "30",
  created_at: DateTime.strptime("01/25/2017 10:00", "%m/%d/%Y %H:%M"),
  author_id: rand(1..100),
  category_id: rand(1..6),
  city: Faker::Address.city,
  state: Faker::Address.state,
)

Project.create!(
  title: 'Make mine a duck',
  blurb: "LONG-TERM PAIR BONDS IN HARLEQUIN DUCKS",
  img_url: images[rand(11)],
  about: 'In 2002, psychologist Richard Wiseman and colleagues at the University of Hertfordshire, UK, finished a year-long LaughLab experiment, concluding that of all animals, ducks attract the most humor and silliness; he said, "If youre going to tell a joke involving an animal, make it a duck."[12] The word "duck" may have become an inherently funny word in many languages, possibly because ducks are seen as silly in their looks or behavior. Of the many ducks in fiction, many are cartoon characters, such as Walt Disneys Donald Duck, and Warner Bros. Daffy Duck. Howard the Duck started as a comic book character in 1973, made in 1986 into a movie.[13] The 1992 Disney film The Mighty Ducks, starring Emilio Estevez chose the duck as the mascot for the fictional youth hockey team who are protagonists of the movie, based on the duck being described as a fierce fighter. This led to the duck becoming the nickname and mascot for the eventual National Hockey League professional team Anaheim Ducks. The duck is also the nickname of the University of Oregon sports teams as well as the Long Island Ducks minor league baseball team.',
  complete: false,
  funding_goal: '10000',
  funding: rand(10..10000),
  duration: "30",
  created_at: DateTime.strptime("01/25/2017 10:00", "%m/%d/%Y %H:%M"),
  author_id: rand(1..100),
  category_id: rand(1..6),
  city: Faker::Address.city,
  state: Faker::Address.state,
)


Project.create!(
  title: 'Worldwide, ducks have many predators',
  blurb: "The ducks have a cosmopolitan distribution.",
  img_url: images[rand(11)],
  about: 'Females of most dabbling ducks[citation needed] make the classic "quack" sound, but despite widespread misconceptions, most species of duck do not "quack". In general, ducks make a wide range of calls, ranging from whistles, cooing, yodels and grunts. For example, the scaup – which are diving ducks – make a noise like "scaup" (hence their name). Calls may be loud displaying calls or quieter contact calls. A common urban legend claims that duck quacks do not echo; however, this has been proven to be false. This myth was first debunked by the Acoustics Research Centre at the University of Salford in 2003 as part of the British Associations Festival of Science.[7] It was also debunked in one of the earlier episodes of the popular Discovery Channel television show MythBusters',
  complete: false,
  funding_goal: '10000',
  funding: rand(10..10000),
  duration: "30",
  created_at: DateTime.strptime("01/25/2017 10:00", "%m/%d/%Y %H:%M"),
  author_id: rand(1..100),
  category_id: rand(1..6),
  city: Faker::Address.city,
  state: Faker::Address.state,
)

Project.create!(
  title: 'Make way for ducklings now',
  blurb: "TWhile ducks are generally aware of their surroundings and possible dangers, they are not immune to accidents. ",
  img_url: images[rand(11)],
  about: 'A duck crossing is either a designated place designed to allow ducks to cross a road or a marked-off route through which ducks are commonly expected to travel. While ducks are generally aware of their surroundings and possible dangers, they are not immune to accidents. The increasing number of fatalities on roads led to concern within many local towns and communities. Aside from specific man made crossings, a duck crossing may also refer to a wider area used as a route ducks often take to cross roads. These are marked off by "duck crossing signs" similarly to other caution oriented road markings (school zones, blind corners, etc.',
  complete: false,
  funding_goal: '10000',
  funding: rand(10..10000),
  duration: "30",
  created_at: DateTime.strptime("01/25/2017 10:00", "%m/%d/%Y %H:%M"),
  author_id: rand(1..100),
  category_id: rand(1..6),
  city: Faker::Address.city,
  state: Faker::Address.state,
)
