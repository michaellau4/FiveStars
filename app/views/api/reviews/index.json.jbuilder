@reviews.each do |review|
  json.set! review.id do
    json.extract! review,
      :id, :body, :rating, :business_id, :author_id, :created_at
    json.author do 
      json.first_name review.author.first_name
      json.last_name review.author.last_name
    end
  end
end