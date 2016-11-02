module Api
  class NotesController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def index
      @notes = Note.all

      render json: @notes, include:[:category, :user]
    end

    def show
      @note = Note.find(params[:id])

      render json: @note, include:[:category, :user]
    end

    def create
      @note = Note.create(note_params)

      render json: @note
    end

    def update
      @note = Note.find(params[:note][:id])
      @note.update(note_params)

      render json: @note
    end

    def destroy
      @note = Note.find(params[:id]).destroy

      render json: @note
    end

    private

    def note_params
      params.require(:note).permit(:id, :title, :description, :icon, :user_id, :created_at, :updated_at)
    end
  end
end