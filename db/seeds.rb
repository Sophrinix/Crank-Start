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

User.create!(
  username: 'jamebonnet',
  email: 'hioho@gmail.com',
  password: 'boogeyboard'
)


User.create!(
username: "Thanks for stopping by!",
password: "super_groovy"
)


category1 = Category.create(name: 'Special Needs')
category2 = Category.create(name: 'Career Preparation')
category3 = Category.create(name: 'Health and Wellness')
category4 = Category.create(name: 'Seniors')
category5 = Category.create(name: "Community Centers")
category6 = Category.create(name: "Housing Advocacy")


Project.create!(
  title: 'Computer Literacy Class',
  blurb: "Computer literacy for all!",
  img_url: 'https://s-media-cache-ak0.pinimg.com/736x/4e/2a/80/4e2a8026a74a2616358faf46bfd1272b.jpg',
  about: "For many of us, working on a computer comes as second nature. But that’s not the case for everyone in New York. Below, one of our volunteers shares her experience on our Computer Basics project, and why it’s so important to increase computer literacy in the city.",
  funding_goal: "10000",
  complete: false,
  funding: 5000,
  duration: "30",
  created_at: DateTime.strptime("02/05/2017 17:00", "%m/%d/%Y %H:%M"),
  author_id: User.first.id,
  category_id: Category.first.id,
  city: "Brooklyn",
  state: "NY"
)

Project.create!(
  title: 'Income Tax Assistance Class',
  blurb: "Tax assistance for all!",
  img_url: 'https://www.newyorkcares.org/sites/default/files/images/u414831/New_York_Cares_Tax_Prep_Financial_Literacy_Adult_Education_IRS_section.jpg',
  about: 'Imagine the difference an extra $1,800 can make for a struggling family. That was the amount of the average return from our Tax Preparation program in 2016, and it added up to a staggering $20 million in refunds and credits for low-income New Yorkers.',
  funding_goal: '10000',
  funding: 11000,
  complete: true,
  duration: "30",
  created_at: DateTime.strptime("02/01/2017 15:00", "%m/%d/%Y %H:%M"),
  author_id: User.last.id,
  category_id: Category.last.id,
  city: "Bronx",
  state: "NY"
)

Project.create!(
  title: 'Queens Cares Day 2016',
  blurb: "Cares for all!",
  img_url: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13240690_10154237791687236_3588886632590956037_n.jpg?oh=1f8c941560df4136356534929712808e&oe=59382641',
  about: 'Thank you to everyone who joined us on Queens Cares Day. Volunteers painted murals, created arts and crafts, played sports, took students all around NYC, and even showed the students of PS 330 Q how to create robots and program them with Lego robotics software. How cool! We also had volunteers planting flowers in the school garden, revitalizing the grounds at McIntosh Gardens, and doing arts and crafts with seniors at Elmcor Senior Center. A special thanks to Delta for making this day possible and for the volunteer support. Another terrific day in Queens! (Delta photos by Chasi Annexy)',
  complete: false,
  funding_goal: '10000',
  funding: 7000,
  duration: "30",
  created_at: DateTime.strptime("01/25/2017 10:00", "%m/%d/%Y %H:%M"),
  author_id: User.first.id,
  category_id: Category.last.id,
  city: "Queens",
  state: "NY"
)

Reward.create!(
  name: "A hat",
  amount: 10,
  description: "A free hat if you contribute",
  project_id: Project.last.id
)

Reward.create!(
  name: "A bean",
  amount: 30,
  description: "A free bean if you contribute",
  project_id: Project.last.id
)

Reward.create!(
  name: "A cup!",
  amount: 50,
  description: "A free cup if you contribute",
  project_id: Project.last.id
)

Reward.create!(
  name: "A hat",
  amount: 10,
  description: "A free hat if you contribute",
  project_id: Project.last.id
)

Reward.create!(
  name: "A bean",
  amount: 30,
  description: "A free bean if you contribute",
  project_id: Project.last.id
)

Reward.create!(
  name: "A cup!",
  amount: 50,
  description: "A free cup if you contribute",
  project_id: Project.last.id
)
