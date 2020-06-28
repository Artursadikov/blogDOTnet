using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data;
using Blog.Dtos;
using Blog.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using postAPI.Models;

namespace Blog.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepo _authRepo;
        private readonly PostContext _context;
        public AuthController(IAuthRepo authRepo, PostContext Context)
        {
            _authRepo = authRepo;
            _context = Context;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserDto userDto)
        {
            ServiceResponse<int> response = await _authRepo.Register(
                new User { nickName = userDto.nickName, email = userDto.email }, userDto.password
            );

            if (!response.Sucsses)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }



        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto userLoginDto)
        {
            ServiceResponse<string> response = await _authRepo.Login(
                userLoginDto.password, userLoginDto.email
            );

            if (!response.Sucsses)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }

        [AllowAnonymous]
        [HttpGet("{email}")]
        public async Task<IActionResult> Get(string email)
        {
            List<User> dbUser = await _context.Users.Where( u => u.email == email).ToListAsync();
            return Ok(dbUser);
        }

    }
}