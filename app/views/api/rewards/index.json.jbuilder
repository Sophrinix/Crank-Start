json.array! @rewards do |reward|
  json.id reward.id
  json.project_id reward.project_id
  json.name reward.title
  json.amount reward.amount
  json.description reward.body

  json.backers do
    json.array! reward.backers do |backer|
      json.user backer.username
      json.email backer.email
      json.city backer.city
      json.state backer.state
    end
  end
end
