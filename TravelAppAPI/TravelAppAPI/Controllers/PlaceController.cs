using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelAppAPI.Entities;
using TravelAppAPI.Repositories.PlacesRepository;

namespace TravelAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaceController : ControllerBase
    {
        private readonly IPlaceRepository _placesRepository;

        public PlaceController(IPlaceRepository placesRepository)
        {
            _placesRepository = placesRepository;
        }

        [HttpGet]
        public Task<List<PlaceToVisit>> GetAllPlaces(int id)
        {
            var list = _placesRepository.GetPlaceToVisitByID(id);
            return list;
        }
    }
}
