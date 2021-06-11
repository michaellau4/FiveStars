class BusinessTag < ApplicationRecord
  belongs_to :tag,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :Tag

  belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Business
end
