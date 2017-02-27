json.array! @projects do |project|
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
  json.img_url project.img_url
  json.user do
    json.id project.user.id
    json.email project.user.email
    json.username project.user.username
  end
  json.category do
    json.id project.category.id
    json.name project.category.name
  end
  json.rewards do
    json.array! project.rewards do |reward|
      json.project project.title
      json.user project.user.username
      json.project_id reward.project_id
      json.title reward.title
      json.reward_id reward.id
      json.body reward.body
      json.amount reward.amount
    end
  end
end
