using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<ServiceResponse<List<Comment>>> AddNewComment(Comment newComment)
        {
            ServiceResponse<List<Comment>> Response = new ServiceResponse<List<Comment>>();
            List<Comment> dbComment = await _context.Comments.ToListAsync();
            newComment.Post = await _context.Posts.FindAsync(newComment.Post.Id);

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

        public async Task<ServiceResponse<List<Comment>>> GetAllCommentes(int postId)
        {
            ServiceResponse<List<Comment>> Response = new ServiceResponse<List<Comment>>();

            List<Comment> comments = await _context.Comments.Where(c => c.Post.Id == postId).ToListAsync();
            
            Response.Data = comments;
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
                // Post relatedpost =  _context.Posts.Find(UpdatedComment.Post.Id);
                
                comment.content = UpdatedComment.content;
                // comment.Post = relatedpost;

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