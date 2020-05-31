using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Blog.Models;
using Microsoft.EntityFrameworkCore;
using postAPI.Models;

namespace Blog.Services.PostService
{
    public class CommentService : ICommentService
    {
        private readonly PostContext _context;

        public CommentService(PostContext context)
        {
            _context = context;

        }

        public async Task<ServiceResponse<List<Comment>>> AddNewComment(Comment newComment, int id)
        {
            ServiceResponse<List<Comment>> Response = new ServiceResponse<List<Comment>>();
            List<Comment> dbComment = await _context.Comments.ToListAsync();
           // newComment.Post = await _context.Posts.FirstOrDefaultAsync(p => p.Id == id);
            await _context.Comments.AddAsync(newComment);
            await _context.SaveChangesAsync();

            Response.Data = dbComment;
            return Response;
        }

        public async Task<ServiceResponse<List<Comment>>> DeleteComment(int id)
        {
            ServiceResponse<List<Comment>> Response = new ServiceResponse<List<Comment>>();
            try
            {
                Comment comment = await _context.Comments.FirstOrDefaultAsync(c => c.id == id);
                if (comment != null)
                {
                    _context.Comments.Remove(comment);
                    await _context.SaveChangesAsync();
                    List<Comment> dbComment = await _context.Comments.ToListAsync();
                    Response.Data = dbComment;
                }
                else
                {
                    Response.Sucsses = false;
                    Response.Message = "Comment not found!";
                }
            }

            catch (Exception ex)
            {
                Response.Sucsses = false;
                Response.Message = ex.Message;
            }

            return Response;
        }

        public async Task<ServiceResponse<List<Comment>>> GetAllCommentes()
        {
            ServiceResponse<List<Comment>> Response = new ServiceResponse<List<Comment>>();
            List<Comment> dbComments = await _context.Comments.ToListAsync();
            //  List<Comment> dbComment = await _context.Comment.Where(c => c.User.Id == userId).ToListAsync();
            Response.Data = dbComments;
            return Response;
        }

        public async Task<ServiceResponse<Comment>> GetCommentById(int id)
        {
            ServiceResponse<Comment> serviceResponse = new ServiceResponse<Comment>();
            Comment dbComment = await _context.Comments.FirstOrDefaultAsync(c => c.id == id);
            serviceResponse.Data = dbComment;
            return serviceResponse;
        }

        public async Task<ServiceResponse<Comment>> UpdateComment(Comment UpdatedComment, int id)
        {
            ServiceResponse<Comment> serviceResponse = new ServiceResponse<Comment>();
            try
            {
                Comment comment = await _context.Comments.FirstOrDefaultAsync(c => c.id == UpdatedComment.id);

                comment.content = UpdatedComment.content;

                _context.Comments.Update(comment);
                await _context.SaveChangesAsync();

                serviceResponse.Data = comment;


            }

            catch (Exception ex)
            {
                serviceResponse.Sucsses = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }
    }
}