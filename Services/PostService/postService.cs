using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Blog.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using postAPI.Models;

namespace Blog.Services.PostService
{
    public class PostService : IPostService
    {


        private readonly PostContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public PostService(PostContext context, IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _context = context;

        }

        public async Task<ServiceResponse<List<Post>>> AddNewPost(Post newPost)
        {

            //   TODO: ADD USER ID

            ServiceResponse<List<Post>> serviceResponse = new ServiceResponse<List<Post>>();
            List<Post> dbPost = await _context.Posts.ToListAsync();
            newPost.User = await _context.Users.FindAsync(newPost.User.Id);
            await _context.Posts.AddAsync(newPost);
            await _context.SaveChangesAsync();
            serviceResponse.Data = dbPost;
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<Post>>> DeletePost(int id)
        {
            ServiceResponse<List<Post>> serviceResponse = new ServiceResponse<List<Post>>();
            try
            {
                Post post = await _context.Posts.Include(c => c.comments).FirstOrDefaultAsync(c => c.Id == id);

                if (post != null)
                {
                    _context.Posts.Remove(post);
                    await _context.SaveChangesAsync();
                    List<Post> dbPost = await _context.Posts.ToListAsync();
                    serviceResponse.Data = dbPost;
                }
                else
                {
                    serviceResponse.Sucsses = false;
                    serviceResponse.Message = "Post not found!";
                }
            }

            catch (Exception ex)
            {
                serviceResponse.Sucsses = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }


        public async Task<ServiceResponse<List<Post>>> GetAllPosts()
        {
            ServiceResponse<List<Post>> serviceResponse = new ServiceResponse<List<Post>>();
            List<Post> dbPost = await _context.Posts.ToListAsync();

            serviceResponse.Data = dbPost;
            return serviceResponse;
        }

        public async Task<ServiceResponse<Post>> GetPostById(int id)
        {
            ServiceResponse<Post> serviceResponse = new ServiceResponse<Post>();
            Post dbPost = await _context.Posts.FirstOrDefaultAsync(c => c.Id == id);
            serviceResponse.Data = dbPost;
            return serviceResponse;
        }

        public async Task<ServiceResponse<Post>> UpdatePost(Post UpdatedPost, int id)
        {
            ServiceResponse<Post> serviceResponse = new ServiceResponse<Post>();
            try
            {
                Post post = await _context.Posts.FirstOrDefaultAsync(c => c.Id == UpdatedPost.Id);

                post.PostContent = UpdatedPost.PostContent;
                post.userNickname = UpdatedPost.userNickname;
                post.theme = UpdatedPost.theme;
                post.like = UpdatedPost.like;
                post.liked = UpdatedPost.liked;
                post.love = UpdatedPost.love;
                post.loved = UpdatedPost.loved;


                _context.Posts.Update(post);
                await _context.SaveChangesAsync();

                serviceResponse.Data = post;


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