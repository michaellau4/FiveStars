class Business < ApplicationRecord
  validates :business_name, :address, :city, :state, :zip, presence: true
  validates :owner_id, presence: true

  has_many_attached :photos

  has_many :reviews,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Review

  has_many :business_tags,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :BusinessTag

  has_many :tags,
   through: :business_tags,
   source: :tag
end
