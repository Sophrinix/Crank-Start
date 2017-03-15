json.id project.id
json.title project.title
json.blurb project.blurb
json.about project.about
json.funding_goal project.funding_goal
json.funding project.funding
json.created_at project.created_at
json.complete project.complete
json.city project.city
json.state project.state
json.duration project.duration
if project.image.url != "http://www.duckstamp03.com/270.Pintail.Fed.Lg.jpg"
  json.img_url project.image.url
else
  json.img_url project.img_url
end
json.category do
  json.name project.category.name
end

json.user do
  json.id project.user.id
  json.email project.user.email
  json.username project.user.username
end

json.backers do
  json.array! project.backers do |backer|
    json.project project.title
    json.user backer.username
    json.email backer.email
  end
end

json.rewards do
  json.array! project.rewards do |reward|
    json.title reward.title
    json.user project.user.username
    json.project_id reward.project_id
    json.name reward.name
    json.reward_id reward.id
    json.body reward.body
    json.amount reward.amount
    json.backers reward.backers
  end
end
