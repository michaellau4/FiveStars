class Business < ApplicationRecord
  validates :business_name, :address, :city, :state, :zip, presence: true
  validates :owner_id, presence: true

  has_many_attached :photos
end
