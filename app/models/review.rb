class Review < ApplicationRecord
  validates :body, :rating, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Business
end
