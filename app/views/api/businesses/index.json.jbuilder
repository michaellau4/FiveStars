@businesses.each do |business|
  json.set! business.id do 
    json.partial! '/api/businesses/business', business: business
    json.reviews do 
      json.array! business.reviews do |review|
        json.extract! review, :id, :body, :rating
      end
    end
    json.photoUrls business.photos.map {|file| url_for(file)}
  end
end
