class CreateSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
      t.string "user_id"
      t.string "game_id"
      t.integer "error_count"
      t.integer "timer"

      t.timestamps
    end
  end
end
