class ClickdatasController < ApplicationController
	def index
		@clickdatas = ClickData.all
	end

	def new
	end

	def create
		@clickdata = ClickData.new(clickdata_params)
		@clickdata.save
		render :json => @clickdata 
	end

	private
		def clickdata_params
			params.require(:clickdata).permit(:user_token, :x, :y, :scroll_position, :url)
		end
end
