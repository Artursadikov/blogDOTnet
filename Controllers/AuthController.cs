using System;
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


        // get single user by Email (email is unic per user)
        [AllowAnonymous]
        [HttpGet("{email}")]
        public async Task<IActionResult> Get(string email)
        {
            List<User> dbUser = await _context.Users.Where(u => u.email == email).ToListAsync();
            return Ok(dbUser);
        }


        // Delete user by id 
        [HttpDelete("{id}")]
        public async Task<ServiceResponse<List<User>>> Delete(int id)
        {
            ServiceResponse<List<User>> serviceResponse = new ServiceResponse<List<User>>();
            try
            {
                User user = await _context.Users.Include(u => u.UserPosts).Include(u => u.UserComments).FirstOrDefaultAsync(u => u.Id == id);

                if (user != null)
                {
                    _context.Users.Remove(user);
                    await _context.SaveChangesAsync();
                    List<User> dbuser = await _context.Users.ToListAsync();
                    serviceResponse.Data = dbuser;
                }
                else
                {
                    serviceResponse.Sucsses = false;
                    serviceResponse.Message = "User not found!";
                }

            }

            catch (Exception ex)
            {
                serviceResponse.Sucsses = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }


  
        [HttpPut("update/{id}")]
        public async Task<ServiceResponse<User>> UpdateUser(User UpdatedUser, int id)
        {
            ServiceResponse<User> serviceResponse = new ServiceResponse<User>();
            try
            {
                User user = await _context.Users.FirstOrDefaultAsync(u => u.Id == UpdatedUser.Id);

                user.nickName = UpdatedUser.nickName;


                _context.Users.Update(user);
                await _context.SaveChangesAsync();

                serviceResponse.Data = user;


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