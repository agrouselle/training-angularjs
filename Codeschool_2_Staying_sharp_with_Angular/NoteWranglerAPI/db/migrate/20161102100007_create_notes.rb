class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string        :title
      t.string        :description
      t.string        :icon
      t.references    :user
      t.references    :category
      t.timestamps
    end
  end
end
