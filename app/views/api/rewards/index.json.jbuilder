json.array! @rewards do |reward|
  json.id reward.id
  json.project_id reward.project_id
  json.name reward.name
  json.amount reward.amount
  json.description reward.description
end
