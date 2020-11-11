class PostsController < ApplicationController

  def index 
    @posts = Post.all.order(id: "DESC")
  end
  
  def create
    Post.create(content: params[:content])
    redirect_ro action: :index
  end
end
