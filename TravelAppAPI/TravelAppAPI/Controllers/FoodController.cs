using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelAppAPI.Entities;
using TravelAppAPI.Repositories.CityRepository;
using TravelAppAPI.Repositories.FoodRepository;

namespace TravelAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly IFoodRepository _foodRepository;

        public FoodController(IFoodRepository foodRepository)
        {
            _foodRepository = foodRepository;
        }

        [HttpGet("GetFoodByCity")]
        public async Task<List<Food>> GetFood(int id)
        {
            var list = await _foodRepository.GetFoodByCity(id);
            return list.ToList();
        }
    }
}
