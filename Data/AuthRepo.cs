
// using System;
// using System.Collections.Generic;
// using System.IdentityModel.Tokens.Jwt;
// using System.Security.Claims;
// using System.Text;
// using System.Threading.Tasks;
// using Blog.Models;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.Extensions.Configuration;
// using Microsoft.IdentityModel.Tokens;
// using postAPI.Models;

// namespace Blog.Data
// {
//     public class AuthRepo : IAuthRepo
//     {
//         private readonly PostContext _context;
//         private readonly IConfiguration _configuration;

//         public AuthRepo(PostContext context, IConfiguration configuration)
//         {
//             _configuration = configuration;
//             _context = context;

//         }


//         public async Task<ServiceResponse<string>> Login(string firstName, string password)
//         {
//             ServiceResponse<string> response = new ServiceResponse<string>();
//             User user = await _context.Users.FirstOrDefaultAsync(x => x.firsName.ToLower().Equals(firstName.ToLower()));
//             if (user == null)
//             {
//                 response.Sucsses = false;
//                 response.Message = "User not found";
//             }
//             else if (!VarifyPasswordHash(password, user.passwordHash, user.passwordSalt))
//             {
//                 response.Sucsses = false;
//                 response.Message = "Wrong password!";
//             }
//             else
//             {
//                 response.Data = CreateToken(user);
//             }
//             return response;
//         }

//         public async Task<ServiceResponse<int>> Register(User user, string password)
//         {

//             ServiceResponse<int> response = new ServiceResponse<int>();
//             if (await UserExists(user.firsName))
//             {
//                 response.Sucsses = false;
//                 response.Message = "User already Exists";
//                 return response;
//             }
//             CreatePasswordHash(password, out byte[] passwordHash, out byte[] passwordSalt);

//             user.passwordHash = passwordHash;
//             user.passwordSalt = passwordSalt;

//             await _context.Users.AddAsync(user);
//             await _context.SaveChangesAsync();

//             response.Data = user.Id;

//             return response;
//         }

//         public async Task<bool> UserExists(string firsName)
//         {
//             if (await _context.Users.AnyAsync(x => x.firsName.ToLower() == firsName.ToLower()))
//             {
//                 return true;
//             }

//             return false;
//         }

//         private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
//         {
//             using (var hmac = new System.Security.Cryptography.HMACSHA512())
//             {
//                 passwordSalt = hmac.Key;
//                 passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
//             }
//         }

//         private bool VarifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
//         {
//             using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
//             {
//                 var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
//                 for (int i = 0; i < computedHash.Length; i++)
//                 {
//                     if (computedHash[i] != passwordHash[i])
//                     {
//                         return false;
//                     }
//                 }
//                 return true;
//             }
//         }

//         private string CreateToken(User user)
//         {
//             List<Claim> claims = new List<Claim>
//             {
//                 new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
//                 new Claim(ClaimTypes.Name , user.firsName)
//             };

//             SymmetricSecurityKey key = new SymmetricSecurityKey(
//                 Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value)
//             );

//             SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
//             SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
//             {
//                 Subject = new ClaimsIdentity(claims),
//                 Expires = DateTime.Now.AddDays(1),
//                 SigningCredentials = creds
//             };

//             JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
//             SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

//             return tokenHandler.WriteToken(token);
//         }
//     }
// }