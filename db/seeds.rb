# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Project.delete_all

User.create!(
  username: 'jamebonnet',
  email: 'hioho@gmail.com',
  password: 'boogeyboard'
)


User.create!(
username: "Thanks for stopping by!",
password: "super_groovy"
)


Project.create!(
  title: 'Computer Literacy Class',
  img_url: 'https://s-media-cache-ak0.pinimg.com/736x/4e/2a/80/4e2a8026a74a2616358faf46bfd1272b.jpg',
  description: "For many of us, working on a computer comes as second nature. But that’s not the case for everyone in New York. Below, one of our volunteers shares her experience on our Computer Basics project, and why it’s so important to increase computer literacy in the city.",
  funding_goal: "10000",
  duration: "30",
  creator_id: 1
)

Project.create!(
  title: 'Income Tax Assistance Class',
  img_url: 'https://www.newyorkcares.org/sites/default/files/images/u414831/New_York_Cares_Tax_Prep_Financial_Literacy_Adult_Education_IRS_section.jpg',
  description: 'Imagine the difference an extra $1,800 can make for a struggling family. That was the amount of the average return from our Tax Preparation program in 2016, and it added up to a staggering $20 million in refunds and credits for low-income New Yorkers.',
  funding_goal: '10000',
  duration: "30",
  creator_id: 3
)
