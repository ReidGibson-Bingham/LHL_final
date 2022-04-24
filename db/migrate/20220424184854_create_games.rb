class CreateGames < ActiveRecord::Migration[5.2]
  def change
    drop_table :games

    create_table :games do |t|
      t.string :user_id
      t.string :error_count
      t.string :total_time
      t.string :text_id

      t.timestamps
    end
  end
end
