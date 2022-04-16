class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.boolean :is_single_player
      t.string :player1_id
      t.string :player2_id
      t.string :game_datetime
      t.string :text_id

      t.timestamps
    end
  end
end
