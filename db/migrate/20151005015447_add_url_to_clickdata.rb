class AddUrlToClickdata < ActiveRecord::Migration
  def change
  	add_column :click_data, :url, :string
  end
end
