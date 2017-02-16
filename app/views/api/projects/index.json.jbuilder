json.array! @projects do |project|
  json.id project.id
  json.title project.title
  json.img_url project.img_url
  json.description project.description
  json.funding_goal project.funding_goal
  json.duration project.duration
end
