using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelAppAPI.Entities;
using TravelAppAPI.Repositories.FoodRepository;
using TravelAppAPI.Repositories.WordRepository;

namespace TravelAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordController : ControllerBase
    {
        private readonly IWordRepository _wordRepository;

        public WordController(IWordRepository wordRepository)
        {
            _wordRepository = wordRepository;
        }
        [HttpGet("GetWordsByCity")]
        public async Task<List<Word>> GetWords(int id)
        {
            var list = await _wordRepository.GetWords(id);
            return list.ToList();
        }
    }
}
