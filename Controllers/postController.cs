using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

using postAPI.Models;
using Blog.Services;
using Blog.Models;

namespace postAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostController : ControllerBase
    {



        public IPostService _PostService { get; set; }

        public PostController(IPostService postService)
        {
            _PostService = postService;

        }




        [HttpGet("getall")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _PostService.GetAllPosts());
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingel(int id)
        {
            return Ok(await _PostService.GetPostById(id));
        }


        [HttpPost]
        public async Task<IActionResult> AddPost(Post newPost)
        {
            return Ok(await _PostService.AddNewPost(newPost));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(Post UpdatePost, int id)
        {

            ServiceResponse<Post> responce = await _PostService.UpdatePost(UpdatePost, id);

            if (responce.Data == null)
            {
                return NotFound(responce);
            }

            return Ok(responce);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ServiceResponse<List<Post>> responce = await _PostService.DeletePost(id);

            if (responce.Data == null)
            {
                return NotFound(responce);
            }

            return Ok(responce);
        }


    }
}





// private readonly PostContext _context;


//         public postController(PostContext context)
//         {
//             _context = context;
//         }





//         //GET:  api/Post
//         [HttpGet]
//         public ActionResult<IEnumerable<Post>> GetPosts()
//         {
//             return _context.PostItems;
//         }




//         //GET:  api/Post/n
//         [HttpGet("{id}")]

//         public ActionResult<Post> GetPostId(int id)
//         {
//             var PostId = _context.PostItems.Find(id);

//             if (PostId == null)
//             {
//                 return NotFound();
//             }

//             return PostId;
//         }




//         //POST:   api/Post

//         [HttpPost]
//         public ActionResult<Post> PostNewPost(Post post)
//         {
//             _context.PostItems.Add(post);
//             _context.SaveChanges();

//             return CreatedAtAction("GetPostId", new Post { Id = post.Id }, post);
//         }





//         //PUT: api/Post

//         [HttpPut("{id}")]
//         public ActionResult PutPostItem(int id, Post post)
//         {
//             if (id != post.Id)
//             {
//                 return BadRequest();
//             }

//             _context.Entry(post).State = EntityState.Modified;
//             _context.SaveChanges();

//             return NoContent();
//         }




//         //DELETE:   api/Post/n

//         [HttpDelete("{id}")]

//         public ActionResult<Post> DeletePost(int id)
//         {
//             var PostId = _context.PostItems.Find(id);

//             if (PostId == null)
//             {
//                 return NotFound();
//             }

//             _context.PostItems.Remove(PostId);
//             _context.SaveChanges();

//             return PostId;


//         }


