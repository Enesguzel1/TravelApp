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

	

		[HttpPost]
		public async Task<IActionResult> CreateUser(User user)
		{
			_userRepository.CreateUser(user);
			return Ok("Eklendi");
		}


		[HttpGet]
		public async Task<IActionResult> GetUserList()
		{
			var values = await _userRepository.GetUsers();
			return Ok(values);
		}

	}	
}
