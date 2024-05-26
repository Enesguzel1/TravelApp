using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;
using TravelAppAPI.Entities;
using TravelAppAPI.Repositories.CityRepository;

namespace TravelAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityRepository cityRepository;

        public CityController(ICityRepository cityRepository)
        {
            this.cityRepository = cityRepository;
        }

        [HttpGet]
        public async Task<List<City>> GetCities()
        {
            var list = await cityRepository.GetAllCity();
            return list.ToList();
        }
    }
}
