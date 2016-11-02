class Note < ActiveRecord::Base
  # attr_accessible :id, :title, :description, :icon, :user

  belongs_to :user
  belongs_to :category
end
