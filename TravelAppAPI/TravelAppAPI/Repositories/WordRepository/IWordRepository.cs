using TravelAppAPI.Entities;

namespace TravelAppAPI.Repositories.WordRepository
{
    public interface IWordRepository
    {
        Task<List<Word>> GetWords(int id);
    }
}
