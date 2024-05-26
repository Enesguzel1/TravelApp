using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelAppAPI.Entities;
using TravelAppAPI.Models.TravelApp;
using TravelAppAPI.Repositories.UserRepository;

namespace TravelAppAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly IUserRepository _userRepository;

		public UserController(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}

	

		[HttpPost("CreateUser")]
		public async Task<IActionResult> CreateUser(string username,string password)
		{
            
			string result = await _userRepository.CreateUser(username,password);
            if (result == "success")
            {
                return Ok("success");
            }
            else if (result == "Username already exists")
            {
                return Conflict("Username already exists");
            }
            else
            {
                return StatusCode(500, "Error occurred while creating user");
            }
        }


        [HttpGet("Login")]
        public async Task<IActionResult> Login(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return BadRequest("Kullanıcı adı ve şifre gereklidir.");
            }
            var loginResult = await _userRepository.Login(username, password);

            if (loginResult == "success")
            {
                var userList = await _userRepository.Login(username,password);
                return Ok("success");
            }
            else
            {
                return Unauthorized("Geçersiz kullanıcı adı veya şifre.");
            }
        }



    }
}
