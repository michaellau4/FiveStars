class Tag < ApplicationRecord
  validates :tag, presence: true
  has_many :business_tags,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :BusinessTag
    
  has_many :businesses,
    through: :business_tags,
    source: :business
end
