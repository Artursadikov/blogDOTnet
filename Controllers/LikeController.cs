using System.Threading.Tasks;
using Blog.Services.PostService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class LikeController : ControllerBase
    {

        private readonly ILikesService _likeService;

        public LikeController(ILikesService likeService)
        {
            _likeService = likeService;

        }

        [AllowAnonymous]
        [HttpGet("likes/{postId}")]
        public async Task<IActionResult> Get(int postId)
        {
            return Ok(await _likeService.GetAllLikes(postId));
        }

    }
}